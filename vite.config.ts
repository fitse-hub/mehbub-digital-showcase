import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import netlify from "@netlify/vite-plugin-tanstack-start";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import tsConfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [tanstackStart(), netlify(), tailwindcss(), react(), tsConfigPaths()],
  server: {
    port: 5173,
    strictPort: false,
  },
  preview: {
    port: 5173,
    strictPort: false,
  },
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});
