const CACHE_NAME = 'ninja-control-v1';
const urlsToCache = [
  '/ifl/Ninja/index.html',
  '/ifl/Ninja/style.css',
  '/ifl/Ninja/script.js',
  '/ifl/Ninja/service-worker.js',
  '/ifl/Ninja/Tone.min.js',
  '/ifl/Ninja/bars.svg',
  '/ifl/Ninja/bluetooth.svg',
  '/ifl/Ninja/favicon.png',
  '/ifl/Ninja/globe.svg',
  '/ifl/Ninja/moon.svg',
  '/ifl/Ninja/sun.svg',
  '/ifl/Ninja/usb.svg',
  '/ifl/Ninja/wifi.svg',
  // Add paths to your icons here if you create them
  '/ifl/Ninja/icons/icon-192x192.png',
  '/ifl/Ninja/icons/icon-512x512.png',
  '/ifl/Ninja/icons/icon-maskable-192x192.png',
  '/ifl/Ninja/icons/icon-maskable-512x512.png'
];

self.addEventListener('install', (event) => {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Cache hit - return response
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});

self.addEventListener('activate', (event) => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
