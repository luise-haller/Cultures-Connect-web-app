//Installs the cache
//under "Application" then "Cache" and then "Cache Storage". It should have the "static" cache under that.
self.addEventListener("install", e => {
    e.waitUntil(
        caches.open("static").then(cache => {
            return cache.addAll(["./", "./src/styleNav.css", "./src/styleQuotes.css", "./images/logo192.png"]);
        })
    );
});

//Allows for the pwa to be installed
self.addEventListener("fetch", e => {
    e.respondWith(
        caches.match(e.request).then(response => {
            //if it was already caches above, then it just returns the responds
            //otherwise, it will fetch the cache request
            return response || fetch(e.request);
        })

    );
});

