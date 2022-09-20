window.onload=function(){

	console.log("Team Page Loaded 👍")


	// // Highlight member with class
	// document.getElementById("testButton").onclick = function() {
	// 	// Add class to highlight
	// 	document.getElementById("hans").classList.add("highlight");

	// 	// Remove highlight after 2 seconds
	// 	setTimeout(function(){
	// 		document.getElementById("hans").classList.remove("highlight");
	// 	}, 2000); //wait 2 seconds - 2000 milliseconds
	// };




	// 
	// Team Page Map
	// Team Page Map
	// Team Page Map
	// 
	var mapZoomLevel = 4;
	var mapCenter = [37.0, -95.38];
	// var mapCenter = [37.76, -95.38];

	// Create Map
	var map = L.map('teamMap', {
		zoomControl: false, 
		defaultExtentControl: false,
		minZoom: 4,
	}).setView(mapCenter, mapZoomLevel);

	// // Set Map Options
	var layerLabels;
	// map.dragging.disable();
	map.touchZoom.disable();
	map.doubleClickZoom.disable();
	// map.scrollWheelZoom.disable();
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
	// var today = new Date()
	// var curHr = today.getHours()
	// if (curHr < 8) {
	// 	NASAGIBS_ViirsEarthAtNight2012.addTo(map);
	// } else if (curHr < 20) {
	// 	CartoDB_PositronNoLabels.addTo(map);
	// } else {
	// 	NASAGIBS_ViirsEarthAtNight2012.addTo(map);
	// }
	
	CartoDB_PositronNoLabels.addTo(map);

	// // Center Map
	var centerMap = function(){
		map.flyTo(mapCenter, mapZoomLevel, {
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
			"properties": {"popupContent": "<div class='map-popup'><b>Madison, WI</b><button id='Gary'>Gary Latzke</button><button id='Blake'>Blake Draper</button><button id='Erik'>Erik Myers</button><button id='Aaron'>Aaron Stephenson</button><button id='Kip'>Kip Sullivan</button><button id='Lily'>Lily Houtman</button></div>" },
			"geometry": {"type": "Point", "coordinates": [-89.4012302, 43.0730517]},
		},
		{
			"type": "Feature",
			"properties": {"popupContent": "<div class='map-popup'><b>Twin Cities, MN</b><button id='Hans'>Hans Vraga</button><button id='Mitch'>Mitch Samuels</button><button id='Kathy'>Kathy Dooley</button><button id='Anders'>Anders Hopkins</button><button id='Julia'>Julia Prokopec</button><button id='Andrew'>Andrew Laws</button><button id='Gene'>Gene Trantham</button><button id='Ethan'>Ethan Bott</button><button id='Will'>Will Bazell</button></div>" },
			"geometry": {"type": "Point", "coordinates": [-93.265011, 44.977753]},
		},
		{
			"type": "Feature",
			"properties": {"popupContent": "<div class='map-popup'><b>Boulder, CO</b><button id='Milan'>Milan Liu </button></div>"},
			"geometry": {"type": "Point", "coordinates": [-105.2705, 40.0150]},
		},
		{
			"type": "Feature",
			"properties": {"popupContent": "<div class='map-popup'><b>Washington, DC</b><button id='Lauren'>Lauren Privette</button><button id='Hannah'>Hannah Ridgon</button>"},
			"geometry": {"type": "Point", "coordinates": [-77.036871, 38.907192]},
		},
		{
			"type": "Feature",
			"properties": {"popupContent": "<div class='map-popup'><b>Davis, CA</b><button id='Nick'>Nick Estes</button>" },
			"geometry": {"type": "Point", "coordinates": [-121.740517, 38.544907]},
		},
		{
			"type": "Feature",
			"properties": {"popupContent": "<div class='map-popup'><b>Elgin, IL</b><button id='Lorraine'>Lorraine Metz</button>" },
			"geometry": {"type": "Point", "coordinates": [-87.88739, 41.83789]},
		},
		{
			"type": "Feature",
			"properties": {"popupContent": "<div class='map-popup'><b>Bloomington, IN</b><button id='Danny'>Danny Rubin</button>" },
			"geometry": {"type": "Point", "coordinates": [-86.512627, 39.1754487]},
		},
		{
			"type": "Feature",
			"properties": {"popupContent": "<div class='map-popup'><b>Raleigh, NC</b><button id='Andrea'>Andrea Medenblik</button></div>" },
			"geometry": {"type": "Point", "coordinates": [-78.785484, 35.843964]},
		},
		{
			"type": "Feature",
			"properties": {"popupContent": "<div class='map-popup'><b>Bismarck, ND</b><button id='Harper'>Harper Wavra</button></div>" },
			"geometry": {"type": "Point", "coordinates": [-100.810489, 46.8115136]},
		},
		{
			"type": "Feature",
			"properties": {"popupContent": "<div class='map-popup'><b>Orlando, FL</b><button id='Chad'>Chad Fanguy</button></div>" },
			"geometry": {"type": "Point", "coordinates": [-81.379234, 28.538336]},
		},
	];


	// WimIcon & popup
	var myIcon = L.Icon.extend({});
	var wimIcon = new myIcon({
		iconUrl: "/img/icons/map_pin.png",
		iconSize: [24.9, 28.95],
		iconAnchor: [12.45,28.95],
		popupAnchor: [0,-28.95],
	});

	// Add points to map
	var geoJsonLayer = L.geoJSON(geojsonFeature, {
		pointToLayer: function (feature, latlng) {
			return L.marker(latlng, {icon: wimIcon}).on('click', function(a) {
				map.flyTo(latlng, 8, {
					animate: true,
					duration: 0.7
				});
			}).addTo(map).bindPopup(feature.properties.popupContent);
		}
	}).addTo(map);

	// Markers
	var markers = L.markerClusterGroup({maxClusterRadius: 1 });
	markers.addLayer(geoJsonLayer);

	// On popup close, center map
	map.on('popupclose', function(e) {
		console.log('popup CLOSED');
		centerMap();
	});

	// On popup open, listen for clicks
	map.on('popupopen', function(e) {
		document.getElementsByClassName("map-popup")[0].addEventListener('click', highlightMember, false);
		console.log('popupopen');
	});

	// Highlight member when name is clicked
	var highlightMember = function(memberID) {
		console.log("Clicked Popup")
		// If clicked element has an ID, it's a member name
		if(event.target.id){
			var memberID = event.target.id.toLowerCase();
			console.log("Clicked Member")
			// Scroll to member
			document.getElementById(memberID).scrollIntoView({behavior: 'smooth'}, true);


			// Highlight member photo
			// Add class to highlight
			document.getElementById(memberID + "Wrapper").classList.add("highlight");
			// Remove highlight after 2 seconds
			setTimeout(function(){
				document.getElementById(memberID + "Wrapper").classList.remove("highlight");
			}, 2000); //wait 2 seconds - 2000 milliseconds

		};
	}

	// Add markers to map and set bounds, zoom
	map.addLayer(markers);
	map.fitBounds(markers.getBounds());
	map.setZoom(mapZoomLevel);
	map.setView([mapCenter]);


}

// End Window Onload

