// External dependencies
import {offlineFallback}                         from "workbox-recipes";
import {setDefaultHandler}                       from "workbox-routing";
import {NetworkOnly}                             from "workbox-strategies";
import {precacheAndRoute, cleanupOutdatedCaches} from "workbox-precaching"

// declare self
declare let self: ServiceWorkerGlobalScope

// Clean old caches
// cleanupOutdatedCaches()

// enable precache and route
// precacheAndRoute(self.__WB_MANIFEST)


// Asset hashes to see if content has changed.
const assetHashes = self.__WB_MANIFEST;
console.log(assetHashes);

// Sets a default Network Only handler, but consider writing your own handlers, too!
setDefaultHandler(new NetworkOnly());

// HTML to serve when the site is offline
offlineFallback(
    {
        pageFallback: "/offline.html",
    }
);


// add event listener
self.addEventListener("message", (event) => {
    if (event.data && event.data.type === "SKIP_WAITING")
        self.skipWaiting()
})