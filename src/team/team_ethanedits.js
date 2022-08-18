
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

// GeoJSON Array of each location
// And popup content for map marker popups
// with each member at each location
var geojsonFeature = [ 
	{
		"type": "Feature",
		"properties": {"popupContent": "<div onclick='mapPopupClick(event)' class='map-popup'><b>Madison, WI</b><span id='Gary'>Gary Latzke</span><span id='Blake'>Blake Draper</span><span id='Erik'>Erik Myers</span><span id='Aaron'>Aaron Stephenson</span><span id='Kip'>Kip Sullivan</span></div><span id='Lily'>Lily Houtman</span></div>" },
		"geometry": {"type": "Point", "coordinates": [-89.4012302, 43.0730517]},
	},
	{
		"type": "Feature",
		"properties": {"popupContent": "<div onclick='mapPopupClick(event)' class='map-popup'><b>Twin Cities, MN</b><span id='Hans'>Hans Vraga</span><span id='Mitch'>Mitch Samuels</span><span id='Kathy'>Kathy Dooley</span><span id='Anders'>Anders Hopkins</span><span id='Julia'>Julia Prokopec</span><span id='Andrew'>Andrew Laws</span><span id='Ethan'>Ethan Bott</span><span id='Gene'>Gene Trantham</span></div>" },
		"geometry": {"type": "Point", "coordinates": [-93.265011, 44.977753]},
	},
	{
		"type": "Feature",
		"properties": {"popupContent": "<div onclick='mapPopupClick(event)' class='map-popup'><b>Denver, CO</b><span id='Milan'>Milan Liu</span></div>" },
		"geometry": {"type": "Point", "coordinates": [-104.9903, 39.7392]},
	},
	{
		"type": "Feature",
		"properties": {"popupContent": "<div onclick='mapPopupClick(event)' class='map-popup'><b>Washington, DC</b><span id='Lauren'>Lauren Privette</span></div>" },
		"geometry": {"type": "Point", "coordinates": [-77.036871, 38.907192]},
	},
	{
		"type": "Feature",
		"properties": {"popupContent": "<div onclick='mapPopupClick(event)' class='map-popup'><b>Davis, CA</b><span id='Nick'>Nick Estes</span>" },
		"geometry": {"type": "Point", "coordinates": [-121.740517, 38.544907]},
	},
	{
		"type": "Feature",
		"properties": {"popupContent": "<div onclick='mapPopupClick(event)' class='map-popup'><b>Elgin, IL</b><span id='Lorraine'>Lorraine Metz</span>" },
		"geometry": {"type": "Point", "coordinates": [-87.88739, 41.83789]},
	},
	{
		"type": "Feature",
		"properties": {"popupContent": "<div onclick='mapPopupClick(event)' class='map-popup'><b>Bloomington, IN</b><span id='Danny'>Danny Rubin</span>" },
		"geometry": {"type": "Point", "coordinates": [-86.512627, 39.1754487]},
	},
	{
		"type": "Feature",
		"properties": {"popupContent": "<div onclick='mapPopupClick(event)' class='map-popup'><b>Raleigh, NC</b><span id='Andrea'>Andrea Medenblik</span></div>" },
		"geometry": {"type": "Point", "coordinates": [-78.785484, 35.843964]},
	},
	{
		"type": "Feature",
		"properties": {"popupContent": "<div onclick='mapPopupClick(event)' class='map-popup'><b>Bismarck, ND</b><span id='Harper'>Harper Wavra</span></div>" },
		"geometry": {"type": "Point", "coordinates": [-100.810489, 46.8115136]},
	},
	{
		"type": "Feature",
		"properties": {"popupContent": "<div onclick='mapPopupClick(event)' class='map-popup'><b>Orlando, FL</b><span id='Chad'>Chad Fanguy</span></div>" },
		"geometry": {"type": "Point", "coordinates": [-81.379234, 28.538336]},
	},
];

var mapPopupClick = function(){
	if(Event.target.id){
		teamMembers.openMemberPopup(Event.target.id.toLowerCase());
	}
}

// WimIcon & popup
var myIcon = L.Icon.extend({});
var wimIcon = new myIcon({
	iconUrl: '../src/assets/images/map_pin.png',
	iconSize: [24.9, 28.95],
	iconAnchor: [12.45,28.95],
	popupAnchor: [0,-28.95],
});

// Add points to map
var geoJsonLayer = L.geoJSON(geojsonFeature, {
	pointToLayer: function (feature, latlng) {
		return L.marker(latlng, {icon: wimIcon})
		.addTo(map).bindPopup(feature.properties.popupContent);

	}
}).addTo(map);

var markers = L.markerClusterGroup({maxClusterRadius: 1 });
markers.addLayer(geoJsonLayer);