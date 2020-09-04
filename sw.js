self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('edu-PTN').then(function(cache) {
     return cache.addAll([
       '{{"/"|absolute_url}}',
       '{{"/notes"|absolute_url}}'
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