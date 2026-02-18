import { defineConfig, build as viteBuild } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import type { Plugin } from "vite";

/**
 * Custom SSG plugin that pre-renders all routes to static HTML during build.
 * After the client build completes, it:
 * 1. Builds an SSR bundle of entry-server.tsx
 * 2. Renders each route to an HTML string
 * 3. Injects the HTML into the built index.html template
 * 4. Writes route-specific HTML files (e.g., /integritetspolicy/index.html)
 */
function ssgPlugin(): Plugin {
  return {
    name: "ssg-prerender",
    apply: "build",
    async closeBundle() {
      // Skip if this is the SSR sub-build to avoid recursion
      if (process.env.__SSG_SKIP__) return;

      const fs = await import("fs");
      const { pathToFileURL } = await import("url");

      const rootDir = process.cwd();
      const distDir = path.resolve(rootDir, "dist");
      const serverDir = path.resolve(rootDir, "dist-server");

      console.log("\n🔄 Pre-rendering static pages...");

      // Build SSR bundle without this plugin (configFile: false prevents recursion)
      process.env.__SSG_SKIP__ = "1";
      await viteBuild({
        configFile: false,
        root: rootDir,
        resolve: {
          alias: {
            "@": path.resolve(rootDir, "src"),
          },
        },
        plugins: [react()],
        build: {
          ssr: path.resolve(rootDir, "src/entry-server.tsx"),
          outDir: serverDir,
          emptyOutDir: true,
        },
      });
      delete process.env.__SSG_SKIP__;

      // Import the SSR render function
      const serverEntryPath = path.resolve(serverDir, "entry-server.js");
      const { render } = await import(pathToFileURL(serverEntryPath).href);

      // Read the client-built HTML template
      const templatePath = path.resolve(distDir, "index.html");
      const template = fs.readFileSync(templatePath, "utf-8");

      // Routes to pre-render
      const routes = ["/", "/integritetspolicy"];

      for (const route of routes) {
        const appHtml = render(route);
        const html = template.replace(
          '<div id="root"></div>',
          `<div id="root">${appHtml}</div>`
        );

        if (route === "/") {
          fs.writeFileSync(path.resolve(distDir, "index.html"), html);
        } else {
          const routeDir = path.resolve(distDir, route.slice(1));
          fs.mkdirSync(routeDir, { recursive: true });
          fs.writeFileSync(path.resolve(routeDir, "index.html"), html);
        }
        console.log(`  ✅ ${route}`);
      }

      // Generate 404.html
      const notFoundHtml = render("/this-page-does-not-exist");
      const notFoundPage = template.replace(
        '<div id="root"></div>',
        `<div id="root">${notFoundHtml}</div>`
      );
      fs.writeFileSync(path.resolve(distDir, "404.html"), notFoundPage);
      console.log("  ✅ /404.html");

      // Clean up server build artifacts
      fs.rmSync(serverDir, { recursive: true, force: true });
      console.log("✅ Static site generation complete!\n");
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    mode === "production" && ssgPlugin(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
