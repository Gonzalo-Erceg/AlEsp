import { defineConfig } from "vite";
import { resolve } from "path";
import react from "@vitejs/plugin-react";
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        auth: resolve(__dirname, "auth.html"),
        apoyo: resolve(__dirname, "apoyo.html"),
        news: resolve(__dirname, "news.html"),
        nosotros: resolve(__dirname, "nosotros.html"),
        comedores: resolve(__dirname, "comedores.html"),
        articulo: resolve(__dirname, "articulo.html"),
      },
    },
  },
});
