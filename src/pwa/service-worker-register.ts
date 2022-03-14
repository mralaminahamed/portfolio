// Let's start the registration process of service worker
// Added workflow for service worker management
// https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorker
// https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers/sw-lifecycle.png
if ("serviceWorker" in navigator) {
    // Register service worker
    window.addEventListener("load", function () {

        // Check registration for current service worker
        navigator.serviceWorker.getRegistration().then(registration => {
            if (registration) {
                // https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerRegistration/unregister
                registration.unregister();
            }

            // Register service worker fist time
            navigator.serviceWorker.register(`${import.meta.env.BASE_URL}service-worker.js`, {
                scope: "/",
                type: import.meta.env.MODE === 'production' ? 'classic' : 'module'
            });
        });
    });
}

console.log(import.meta.env)