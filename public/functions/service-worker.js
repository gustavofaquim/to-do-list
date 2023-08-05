const CACHE_NAME = 'my-cache-v1';

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll([
          '/',
          '/index.html',
          '/styles.css',
          '/script.js',
          '/icons/icon-192x192.png',
          '/icons/icon-512x512.png'
        ]);
      })
  );
});


self.addEventListener('appinstalled', event => {
  console.log('PWA instalado.');
});


/*self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});*/