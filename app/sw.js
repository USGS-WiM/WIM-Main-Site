var CACHE_NAME = 'wim-cache';
var urlsToCache = [
	// '/',
	// 'index.html',
	// 'src/main.css',
	// 'styleguide.css',

	// '/team/',
	// '/team',
	// '/team/index.html',
	// '/src/js/projects.js',
	// '/src/js/team.js',
	'/src/js/vendor/jquery.js',
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


