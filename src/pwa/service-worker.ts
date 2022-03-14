import { precacheAndRoute, cleanupOutdatedCaches } from 'workbox-precaching'

// declare self
declare let self: ServiceWorkerGlobalScope

// Clean old caches
cleanupOutdatedCaches()

// enable precache and route
precacheAndRoute(self.__WB_MANIFEST)


// add event listener
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING')
    self.skipWaiting()
})