var CACHE_NAME = 'wim-cache';
var urlsToCache = [
	'/',
	'index.html',
	'src/main.css',
	'styleguide.css',

	'/team/',
	'/team',
	'/team/index.html',
	'/src/js/projects.js',
	'/src/js/team.js',
	'/src/js/vendor/jquery-3.3.1.min.js',
	// Images
	'/src/images/hero.jpg',
	'/src/images/map_pin.png',
	'/src/images/trees.png',
	'/src/images/us_flag_small.png',
	'/src/images/usgs.png',
	// // Team
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
	'/src/images/team/group_cropped.png',
	// // Cooperators
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
	// // Branding
	'/src/images/branding/logo_hor_fullres.png',
	'/src/images/branding/logo_only_fullres.png',
	'/src/images/branding/logo_pin.png',
	'/src/images/branding/logo.png',
	'/src/images/branding/meta/favicon.png',
	// FONTS
	'/src/publicsans/PublicSans-Bold.woff',
	'/src/publicsans/PublicSans-Bold.woff2',
	'/src/publicsans/PublicSans-Regular.woff',
	'/src/publicsans/PublicSans-Regular.woff2',
	'/src/publicsans/stylesheet.css'
];

self.addEventListener('install', function(event) {
	event.waitUntil(
		caches.open(CACHE_NAME)
		.then(function(cache) {
			return cache.addAll(urlsToCache);
		})
	);
});

self.addEventListener('fetch', (event) => {
	const { request } = event;

	// Always bypass for range requests, due to browser bugs
	if (request.headers.has('range')) return;
		event.respondWith(async function() {
		// Try to get from the cache:
		const cachedResponse = await caches.match(request);
		if (cachedResponse) return cachedResponse;

		try {
			// See https://developers.google.com/web/updates/2017/02/navigation-preload#using_the_preloaded_response
			const response = await event.preloadResponse;
			if (response) return response;

			// Otherwise, get from the network
			return await fetch(request);
		} catch (err) {
			// If this was a navigation, show the offline page:
			if (request.mode === 'navigate') {
				return caches.match('offline.html');
			}
			// Otherwise throw
			throw err;
		}
	}());
});



// OFFLINE FIRST
// self.addEventListener('fetch', function(event) {
// 	event.respondWith(
// 		caches.match(event.request)
// 		.then(function(response) {
// 			return response;
// 			// return response || fetchAndCache(event.request);
// 		})
// 	);
// });













// function fetchAndCache(url) {
// 	return fetch(url)
// 	.then(function(response) {
// 		// Check if we received a valid response
// 		if (!response.ok) {
// 			throw Error(response.statusText);
// 		}
// 		return caches.open(CACHE_NAME)
// 		.then(function(cache) {
// 			cache.put(url, response.clone());
// 			return response;
// 		});
// 	})
// 	.catch(function(error) {
// 		console.log('Request failed:', error);
// 		// You could return a custom offline 404 page here
// 	});
// }

// const CACHE = "wim-offline";

// const offlineFallbackPage = "index.html";

// // Install stage sets up the index page (home page) in the cache and opens a new cache
// self.addEventListener("install", function (event) {
//   console.log("WIM Install Event processing");

//   event.waitUntil(
//     caches.open(CACHE).then(function (cache) {
//       console.log("WIMI Cached offline page during install");

//       if (offlineFallbackPage === "index.html") {
//         return cache.add(new Response("Update the value of the offlineFallbackPage constant in the serviceworker."));
//       }
      
//       return cache.add(offlineFallbackPage);
//     })
//   );
// });

// // If any fetch fails, it will look for the request in the cache and serve it from there first
// self.addEventListener("fetch", function (event) {
//   if (event.request.method !== "GET") return;

//   event.respondWith(
//     fetch(event.request)
//       .then(function (response) {
//         console.log("WIM SW: add page to offline cache: " + response.url);

//         // If request was success, add or update it in the cache
//         event.waitUntil(updateCache(event.request, response.clone()));

//         return response;
//       })
//       .catch(function (error) {        
//         console.log("WIM SW: Network request Failed. Serving content from cache: " + error);
//         return fromCache(event.request);
//       })
//   );
// });

// function fromCache(request) {
//   // Check to see if you have it in the cache
//   // Return response
//   // If not in the cache, then return error page
//   return caches.open(CACHE).then(function (cache) {
//     return cache.match(request).then(function (matching) {
//       if (!matching || matching.status === 404) {
//         return Promise.reject("no-match");
//       }

//       return matching;
//     });
//   });
// }

// function updateCache(request, response) {
//   return caches.open(CACHE).then(function (cache) {
//     return cache.put(request, response);
//   });
// }