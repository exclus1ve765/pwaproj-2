self.addEventListener('install', (e) => {
    e.waitUntil(
        caches.open('store').then((cache) => cache.addAll([
            '/pwaproj-2/index.html',
            '/pwaproj-2/img1.png',
            '/pwaproj-2/img2.png',
            '/pwaproj-2/redirect.html',
            // '/OpenSans-SemiBold.ttf',
            // '/OpenSans-Light.ttf',
            // '/sw.js',
            //'/index.html',
            // '/pwa-examples/a2hs/index.html',
            // '/pwa-examples/a2hs/index.js',
            // '/pwa-examples/a2hs/style.css',
            // '/pwa-examples/a2hs/images/fox1.jpg',
            // '/pwa-examples/a2hs/images/fox2.jpg',
            // '/pwa-examples/a2hs/images/fox3.jpg',
            // '/pwa-examples/a2hs/images/fox4.jpg',
        ])),
    );
});

self.addEventListener('fetch', (e) => {
    console.log(e.request.url);
    e.respondWith(
        caches.match(e.request).then((response) => response || fetch(e.request)),
    );
});
