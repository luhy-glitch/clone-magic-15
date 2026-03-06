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
          external: [
            "@supabase/supabase-js",
            "sonner",
          ],
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

        const { render } = await import(pathToFileURL(serverOutFile).href);

        const templatePath = path.resolve(distDir, "index.html");
        let template = fs.readFileSync(templatePath, "utf-8");


        const routes = ["/", "/webbutveckling", "/seo-optimering", "/om-mig", "/blogg", "/blogg/oka-hemsidans-hastighet", "/blogg/lokal-seo-smaforetag", "/blogg/react-vs-wordpress", "/kontakt", "/integritetspolicy"];

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

        const notFoundHtml = render("/this-page-does-not-exist");
        const notFoundPage = template.replace(
          '<div id="root"></div>',
          `<div id="root">${notFoundHtml}</div>`
        );
        fs.writeFileSync(path.resolve(distDir, "404.html"), notFoundPage);
        console.log("  ✅ /404.html");

        fs.rmSync(path.resolve(rootDir, "dist-server"), { recursive: true, force: true });
        console.log("✅ Static site generation complete!\n");
      } catch (err) {
        console.error("⚠️ SSG pre-rendering failed, falling back to SPA mode:", err);
      }
    },
  };
}

/**
 * Plugin that makes CSS non-render-blocking during build.
 * Uses media="print" onload trick so critical CSS (inlined in index.html <head>)
 * handles initial paint, while full CSS loads asynchronously.
 */
function deferCssPlugin(): Plugin {
  return {
    name: "defer-css",
    apply: "build",
    enforce: "post",
    transformIndexHtml: {
      order: "post",
      handler(html: string) {
        // Convert render-blocking CSS links to non-blocking
        // The <noscript> fallback ensures CSS still loads without JS
        return html.replace(
          /<link\b([^>]*?)rel=["']stylesheet["']([^>]*?)>/gi,
          (match, before, after) => {
            // Don't double-process if already deferred
            if (match.includes('media="print"')) return match;
            return `<link${before}rel="stylesheet"${after} media="print" onload="this.media='all'"><noscript>${match}</noscript>`;
          }
        );
      },
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
  build: {
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'ui-vendor': ['@radix-ui/react-tooltip', '@radix-ui/react-accordion', '@radix-ui/react-toast', '@radix-ui/react-dialog'],
          'query': ['@tanstack/react-query'],
        },
      },
    },
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    deferCssPlugin(),
    mode === "production" && ssgPlugin(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
