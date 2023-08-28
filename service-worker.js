self.addEventListener("install", (event) => {
    event.waitUntil(
      caches.open("cubanica-cache").then((cache) => {
        return cache.addAll(["/", "/index.html", "/manifest.json", /* ...agrega aquí tus recursos estáticos ... */]);
      })
    );
  });
  
  self.addEventListener("fetch", (event) => {
    event.respondWith(
      caches.match(event.request).then((response) => {
        return response || fetch(event.request);
      })
    );
  });
  