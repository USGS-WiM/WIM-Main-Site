var cacheName = 'myCacheVersion';
var filesToCache = [
	'',
	'/',
	'/team',
	'/team/index.html',
	'/index.html',
	'/src/main.css',
	'/styleguide.css',
	'/js/projects.js',
	'/js/team.js',
	'/js/vendor/jquery-3.3.1.min.js',
	'/team/index.html',
	// Images
	'/src/images/hero.jpg',
	'/src/images/map_pin.png',
	'/src/images/trees.png',
	'/src/images/us_flag_small.png',
	'/src/images/usgs.png',
	// Team
	'/src/images/team/Aaron.jpg',
	'/src/images/team/Blake.jpg',
	'/src/images/team/Bruce.jpg',
	'/src/images/team/Daniel.jpg',
	'/src/images/team/Erik.jpg',
	'/src/images/team/Gary.jpg',
	'/src/images/team/Hans.jpg',
	'/src/images/team/Jeremy.jpg',
	'/src/images/team/Katrin.jpg',
	'/src/images/team/Lauren.jpg',
	'/src/images/team/Martyn.jpg',
	'/src/images/team/Mitch.jpg',
	'/src/images/team/Nathan.jpg',
	'/src/images/team/Nick.jpg',
	'/src/images/team/Veni.jpg',
	'/src/images/team/Mackenzie.jpg',
	'/src/images/team/grop_cropped.png',
	// Cooperators
	'/src/images/cooperators/ars.png',
	'/src/images/cooperators/badriver.png',
	'/src/images/cooperators/dhs.png',
	'/src/images/cooperators/fws.png',
	'/src/images/cooperators/glri.png',
	'/src/images/cooperators/ijc.png',
	'/src/images/cooperators/USDA_logo.png',
	'/src/images/cooperators/noaa.png',
	'/src/images/cooperators/doi.png',
	'/src/images/cooperators/lcc.png',
	'/src/images/cooperators/epa.png',
	'/src/images/cooperators/nawqa.png',
	// Branding
	'/src/images/branding/logo_hor_fullres.png',
	'/src/images/branding/logo_only_fullres.png',
	'/src/images/branding/logo_pin.png',
	'/src/images/branding/logo.png'
];


self.addEventListener('install', function(e) {
  console.log('[ServiceWorker] Install');
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      console.log('[ServiceWorker] Caching app shell');
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener('activate', function(e) {
  console.log('[ServiceWorker] Activate');
  e.waitUntil(
    caches.keys().then(function(keyList) {
      return Promise.all(keyList.map(function(key) {
        if (key !== cacheName) {
          console.log('[ServiceWorker] Removing old cache', key);
          return caches.delete(key);
        }
      }));
    })
  );
  return self.clients.claim();
});

self.addEventListener('fetch', function(e) {
  console.log('[ServiceWorker] Fetch', e.request.url);
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});