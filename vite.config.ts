import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import type { Plugin } from "vite";

function deferCssPlugin(): Plugin {
  return {
    name: "defer-css",
    apply: "build",
    enforce: "post",
    transformIndexHtml: {
      order: "post",
      handler(html: string) {
        return html.replace(
          /<link\b([^>]*?)rel=["']stylesheet["']([^>]*?)>/gi,
          (match, before, after) => {
            if (match.includes('media="print"')) return match;
            return `<link${before}rel="stylesheet"${after} media="print" onload="this.media='all'"><noscript>${match}</noscript>`;
          }
        );
      },
    },
  };
}

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
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
