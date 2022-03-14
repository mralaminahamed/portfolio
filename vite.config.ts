// External dependencies
import { defineConfig } from "vite";
import { VitePWA as pwa } from "vite-plugin-pwa";
import react from "@vitejs/plugin-react";

// Internal dependencies
import manifest from "./src/PWA/manifest";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    pwa({
      strategies: "injectManifest",
      srcDir: "./src/PWA/",
      filename: "service-worker.js",
      manifest,
    }),
  ],
});
