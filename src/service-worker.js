import { precacheAndRoute } from "workbox-precaching";

// The self.__WB_MANIFEST will be injected by Workbox
/* eslint-disable-next-line no-restricted-globals */
precacheAndRoute(window.self.__WB_MANIFEST || []);

/* eslint-disable-next-line no-restricted-globals */
window.self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "SKIP_WAITING") {
    window.self.skipWaiting();
  }
});

/* eslint-disable-next-line no-restricted-globals */
window.self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open("my-cache").then((cache) => {
      cache.addAll("/", "/index.html", "/manifest.json", "icon.png");
    })
  );
});

/* eslint-disable-next-line no-restricted-globals */
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
