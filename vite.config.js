import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
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
