
// Team Page Map
var mapZoomLevel = 4;
var mapCenter = [37.76, -95.38];

// Create Map
var map = L.map('teamMap', {zoomControl: false, defaultExtentControl: false}).setView(mapCenter, mapZoomLevel);

// // Set Map Options
var layerLabels;
map.dragging.disable();
map.touchZoom.disable();
map.doubleClickZoom.disable();
map.scrollWheelZoom.disable();
map.boxZoom.disable();
map.keyboard.disable();
if (map.tap) map.tap.disable();

// Day Theme
var CartoDB_PositronNoLabels = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png', {
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
	subdomains: 'abcd',
	maxZoom: 19
});
// Night Theme
var NASAGIBS_ViirsEarthAtNight2012 = L.tileLayer('https://map1.vis.earthdata.nasa.gov/wmts-webmerc/VIIRS_CityLights_2012/default/{time}/{tilematrixset}{maxZoom}/{z}/{y}/{x}.{format}', {
	attribution: 'Imagery provided by services from the Global Imagery Browse Services (GIBS), operated by the NASA/GSFC/Earth Science Data and Information System (<a href="https://earthdata.nasa.gov">ESDIS</a>) with funding provided by NASA/HQ.',
	bounds: [[-85.0511287776, -179.999999975], [85.0511287776, 179.999999975]],
	minZoom: 1,
	maxZoom: 8,
	format: 'jpg',
	time: '',
	tilematrixset: 'GoogleMapsCompatible_Level'
});

// Set basemap based on time
// 7am-8pm, light theme
// 8pm-7am, Night theme
var today = new Date()
var curHr = today.getHours()
if (curHr < 8) {
	NASAGIBS_ViirsEarthAtNight2012.addTo(map);
} else if (curHr < 20) {
	CartoDB_PositronNoLabels.addTo(map);
} else {
	NASAGIBS_ViirsEarthAtNight2012.addTo(map);
}

// // Center Map
var centerMap = function(){
	map.flyTo([43, -97], zoomlvl, {
		animate: true,
		duration: 0.7
	});
}
