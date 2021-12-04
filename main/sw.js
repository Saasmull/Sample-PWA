self.addEventListener("install", function (e){
    e.waitUntil(
        //Add here all the files which are needed that your PWA can run offline:
        caches.open("static-test").then(cache => {
            return cache.addAll([
                "/index.html",
                "/index.html?src=hw",
                "/icons/app_16x16.png",
                "/icons/app_256x256.png"
            ]);
        })
    );
})
self.addEventListener("fetch", function (e){
    e.respondWith(
        caches.match(e.request).then(response => {
            return response || fetch(e.request);
        })
    );
})