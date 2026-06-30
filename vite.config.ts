import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "node:path";

export default defineConfig(({ command }) => ({
  plugins: [react(), tailwindcss()],
  base: command === "serve" ? "/" : "/golestan-react/",

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@css": path.resolve(__dirname, "src/css"),
    },
  },
}));
