import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const server = "http://127.0.0.1:3000";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: server,
        changeOrigin: true,
      },
    },
  },
});
