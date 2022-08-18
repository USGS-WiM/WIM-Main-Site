// Define WIM Team
var members = {
	gary: {
		name: "Gary Latzke",
		title: "Program Coordinator",
		phone: "(608)821-3805",
		email: "gdlatzke@usgs.gov",
		bio: "Gary has his degree in Cartography from Northern Illinois University and 27 years of cartographic experience in the USGS. His specialties include cartographic design and communication, digital application design, and implementation of cloud infrastructures for geospatial applications. In addition WIM, Gary serves on the staff of the Information and Technology Management Director for the Department of the Interior, leading and assisting in special projects for the Department. Outside of work Gary enjoys golfing, writing music and making unique cocktails with his wife in their home lounge.", 
		coordinates: "-89.4012302, 43.0730517"
	},
	hans: {
		name: "Hans Vraga",
		title: "Project Manager",
		phone: "(703)648-5670",
		email: "hvraga@usgs.gov",
		bio: "Hans got his start as a CH-53 Super Stallion Helicopter Crew Chief from the USMC, callsign: 'Wedgie.' He turned ITIL disciple at the UW-Madison Division of Information Technology (DoIT) while earning a BS in Computer Engineering and Computer Science. After a 8 years at DoIT wearing Configuration, Incident, and Change Management hats, Hans moved to USGS-WIM to head up Project Management duties and earned a PMP certification. Hans currently spends most of his day coordinating a highly skilled and motivated team of developers, doing his best not to slow them down too much. Outside of work, Hans enjoys a good game of ultimate, hiking, camping and the occasional novel.",
		coordinates: "-93.265011, 44.977753"
	},
};


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
