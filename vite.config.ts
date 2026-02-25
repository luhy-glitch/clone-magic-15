import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import type { Plugin } from "vite";

/**
 * Custom SSG plugin that pre-renders all routes to static HTML during build.
 * Uses esbuild directly (bundled with Vite) to build the SSR entry,
 * avoiding a recursive secondary Vite build.
 */
function ssgPlugin(): Plugin {
  return {
    name: "ssg-prerender",
    apply: "build",
    enforce: "post",
    async closeBundle() {
      try {
        const fs = await import("fs");
        const { pathToFileURL } = await import("url");
        const esbuild = await import("esbuild");

        const rootDir = process.cwd();
        const distDir = path.resolve(rootDir, "dist");
        const serverOutFile = path.resolve(rootDir, "dist-server", "entry-server.mjs");

        console.log("\n🔄 Pre-rendering static pages...");

        // Build SSR bundle using esbuild directly (no secondary Vite build)
        await esbuild.build({
          entryPoints: [path.resolve(rootDir, "src/entry-server.tsx")],
          bundle: true,
          format: "esm",
          platform: "node",
          outfile: serverOutFile,
          jsx: "automatic",
          jsxImportSource: "react",
          alias: {
            "@": path.resolve(rootDir, "src"),
          },
          // Externalize node_modules that aren't needed for rendering
          external: [
            "@supabase/supabase-js",
            "sonner",
          ],
          // Define browser globals for SSR compatibility
          define: {
            "window": "globalThis",
            "document": "globalThis.__document__",
            "localStorage": "globalThis.__localStorage__",
          },
          logLevel: "warning",
        });

        // Set up minimal DOM stubs for SSR
        const g = globalThis as any;
        g.__document__ = {
          getElementById: () => null,
          querySelector: () => null,
          querySelectorAll: () => [],
          createElement: () => ({ setAttribute: () => {}, style: {} }),
          cookie: "",
          addEventListener: () => {},
          removeEventListener: () => {},
        };
        g.__localStorage__ = {
          getItem: () => null,
          setItem: () => {},
          removeItem: () => {},
        };
        if (!g.navigator) g.navigator = { userAgent: "" };
        if (!g.matchMedia) g.matchMedia = () => ({ matches: false, addEventListener: () => {}, removeEventListener: () => {} });
        if (!g.addEventListener) g.addEventListener = () => {};
        if (!g.removeEventListener) g.removeEventListener = () => {};
        if (!g.innerWidth) g.innerWidth = 1024;

        // Import the SSR render function
        const { render } = await import(pathToFileURL(serverOutFile).href);

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
        fs.rmSync(path.resolve(rootDir, "dist-server"), { recursive: true, force: true });
        console.log("✅ Static site generation complete!\n");
      } catch (err) {
        console.error("⚠️ SSG pre-rendering failed, falling back to SPA mode:", err);
        // Don't throw - let the build succeed as a normal SPA
      }
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
