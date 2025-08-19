const CACHE_NAME = 'bangla-type-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/quick.jquery.bangla.js',
  'https://www.w3schools.com/w3css/4/w3.css',
  'https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
