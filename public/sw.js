const cacheName = "Music-pwa";
const filesToCache = [
    '/',
    './index.html',
    './css/style.css',
    './css/simplelightbox.min.css',
    './img/g1.jpg',
    './img/g2.jpg',
    './img/g3.jpg',
    './img/g4.jpg',
    './img/g5.jpeg',
    './img/g6.jpeg',
    './img/music.webp',
    './img/LoveMusic.jpeg',
    './img/lisn-final.png',
    './js/index.js',
    './js/simple-lightbox.min.js'
];

/*Start the service worker and cache all the content of the site */

self.addEventListener('install', function(e) {
    e.waitUntil(
        caches.open(cacheName).then(function(cache) {
            return cache.addAll(filesToCache);
        })
    );
});

/* Serve cached content when offline */
self.addEventListener('fetch', function(e) {
    e.respondWith(
      caches.match(e.request).then(function(response) {
        return response || fetch(e.request);
      })
    );
  });