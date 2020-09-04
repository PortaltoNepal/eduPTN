self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('edu-PTN').then(function(cache) {
     return cache.addAll([
       '/',
       '/notes'
     ]);
   })
 );
});

self.addEventListener('fetch', function(e) {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});