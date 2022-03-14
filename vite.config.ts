// External dependencies
import {fileURLToPath}  from "node:url";
import {defineConfig}   from "vite";
import {VitePWA as pwa} from "vite-plugin-pwa";
import react            from "@vitejs/plugin-react";

// Internal dependencies
import manifest from "./src/pwa/manifest";

// https://vitejs.dev/config/
export default defineConfig(
    {
        plugins: [
            react(),
            pwa(
                {

                    /* enable service worker on development */
                    devOptions: {
                        enabled: true,
                        // navigateFallback: "offline.html"
                    },
                    // registerType: 'autoUpdate',
                    strategies: "injectManifest",
                    srcDir: "./src/pwa/",
                    filename: "service-worker.ts",
                    manifest,
                }
            ),
        ],
        resolve: {
            alias: {
                "@": fileURLToPath(new URL("./src", import.meta.url)),
            },
        },
    }
);
