$(document).ready(function () {

	// Active nav link
	$("#teamLink").addClass("active");

	// JS works, remove warning
	$(".team-no-js").remove();

	// Team Member layout setup
	$.each(team, function( index, member ) {
		var name = member.first_name + " " + member.last_name;
		var title = member.title;
		var email = member.email;
		var bio = member.bio;

		var memberHTML = 	"<div class=\"member\" id=\"" + member.first_name + "\" tabindex=\"0\">" +
					"<div class=\"member-image\" style=\"background-image: url(\'/src/images/team/" + member.first_name + ".jpg\');\">" + 
					"<img src=\"/src/images/team/" + member.first_name + ".jpg\" class=\"member-image-element\" alt=\"" + name + "\'s Photo\" title=\"" + name + "\"/></div>" + 
					"<div class=\"member-meta\"><b class=\"text-sm\">" + name + "</b><span class=\"text-body\">" + title + "</span>";

		// If Years exists, add that below title
		if(member.years){
			memberHTML = memberHTML + "<span class=\"caption block\">" + member.years + "</span></div></div>";
		}else{
			memberHTML = memberHTML + "</div></div>";
		}

		memberHTML = memberHTML +
					"<div class=\"member-about\" id=\"" + member.first_name + "Bio\" style=\"z-index : 9999\">" + 
					"<div class=\"member-about-content\"><div class=\"close-bio-icon\"><i class=\"far fa-times\"></i></div>" + 
					"<div class=\"member-about-scroll xs-p-25 lg-p-30\"><div class=\"xs-f-btw xs-mb-15\">" +
					"<div class=\"member-about-image\" style=\"background-image: url(\'/src/images/team/" + member.first_name + ".jpg\');\"></div>" +
					"<div class=\"member-about-header xs-f-center xs-f-col\"><h3>" + name + "</h3><h4>" + title + "</h4><div class=\"xs-f-start xs-f-wrap\">";

		if(member.phone){
			memberHTML = memberHTML + "<div class=\"text-body xs-mr-10\">" + member.phone + "</div>";
		}

		// Fill popup content
		// Alumni don't have Email, phone, etc
		if(!member.alumni){
			// Current Team 
			memberHTML = memberHTML + 	"<a href=\"mailto:" + email + "\" class=\"xs-mb-10 text-body\">" + email + "</a>" + 
			"</div></div></div><p>" + bio + "</p></div></div></div>"

			$(".team-display").append(memberHTML)
		}else{
			// Alumni
			memberHTML = memberHTML + 	"<div class=\"text-body xs-mr-10\">" + member.years + "</div><a href=\"" + member.alumniLink + "\" target=\"_blank\" class=\"xs-mb-10 text-body\">View Profile</a>" + 
			"</div></div></div><p>" + bio + "</p></div></div></div>"

			$(".alumni-display").append(memberHTML)
		}
		
	}); // End Team Loop

	// Clicking each member scrolls up to and zooms to their location on the map
	var openMemberPopup = function(name){
		console.log("Clicked " + name);
		$("#" + name + "Bio, .member-about-lightbox").addClass("show");
		$("#" + name + "Bio").addClass("show");
	}
	// Click photo tile opens modal
	$('.team-display, .alumni-display').on('click', '.member', function() {
		openMemberPopup($(this).attr('id'));
	});
	// Click map popup link opens modal also
	$('#mapid').on('click', '.map-popup span', function() {
		openMemberPopup($(this).attr('id'));
	});

	// Close member modal with X
	$('.team-display, .alumni-display').on('click', '.close-bio-icon', function() {
		$(this).closest(".member-about").removeClass("show");
		$(".member-about-lightbox").removeClass("show");
	});

	// Hide member on click outside
	$('.team-display, .alumni-display').on('click', '.member-about', function(e) {
		if (e.target !== this){
			return;
		}
		$(this).removeClass("show");
		$(".member-about-lightbox").removeClass("show");
	});
	
	
});



// ========================= //
// ========================= //
//         MAP STUFF         //
//         MAP STUFF         //
// ========================= //
// ========================= //

var zoomlvl = 4
var mapCenter = [29.76, -95.38]
// Leaflet map & disabling all map funtionality
var map = L.map('mapid', { 
	zoomControl:false,
	defaultExtentControl: true,
	center: mapCenter,
})

// Set Map Options
// Set Map Options
// Set Map Options
// var layer = L.esri.basemapLayer("USATopo").addTo(map);
var layerLabels;
map.dragging.disable();
map.touchZoom.disable();
map.doubleClickZoom.disable();
map.scrollWheelZoom.disable();
map.boxZoom.disable();
map.keyboard.disable();
if (map.tap) map.tap.disable();

// Load alt basemaps
// Load alt basemaps
var CartoDB_PositronNoLabels = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png', {
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
	subdomains: 'abcd',
	maxZoom: 19
});
var NASAGIBS_ViirsEarthAtNight2012 = L.tileLayer('https://map1.vis.earthdata.nasa.gov/wmts-webmerc/VIIRS_CityLights_2012/default/{time}/{tilematrixset}{maxZoom}/{z}/{y}/{x}.{format}', {
	attribution: 'Imagery provided by services from the Global Imagery Browse Services (GIBS), operated by the NASA/GSFC/Earth Science Data and Information System (<a href="https://earthdata.nasa.gov">ESDIS</a>) with funding provided by NASA/HQ.',
	bounds: [[-85.0511287776, -179.999999975], [85.0511287776, 179.999999975]],
	minZoom: 1,
	maxZoom: 8,
	format: 'jpg',
	time: '',
	tilematrixset: 'GoogleMapsCompatible_Level'
});
var CartoDB_DarkMatterNoLabels = L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}{r}.png', {
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
	subdomains: 'abcd',
	maxZoom: 19
});


// Fun maps
var Stamen_Watercolor = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.{ext}', {
	attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	subdomains: 'abcd',
	minZoom: 1,
	maxZoom: 16,
	ext: 'jpg'
});
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


	// CartoDB_DarkMatterNoLabels.addTo(map); USE THIS ONE (DARK)
	// NO ->
	// CartoDB_PositronNoLabels.addTo(map);
} else if (curHr < 20) {
	// NASAGIBS_ViirsEarthAtNight2012.addTo(map);
	CartoDB_PositronNoLabels.addTo(map);
	// CartoDB_DarkMatterNoLabels.addTo(map);
} else {
	NASAGIBS_ViirsEarthAtNight2012.addTo(map);


	// CartoDB_DarkMatterNoLabels.addTo(map); USE THIS ONE (DARK)
	// NO ->
	// CartoDB_PositronNoLabels.addTo(map);
}

// Center Map
// Center Map
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
		"properties": {"popupContent": "<div class='map-popup'><b>Madison, WI</b><span id='Gary'>Gary Latzke</span><span id='Bruce'>Bruce Droster</span><span id='Blake'>Blake Draper</span><span id='Erik'>Erik Myers</span><span id='Aaron'>Aaron Stephenson</span></div>" },
		"geometry": {"type": "Point", "coordinates": [-89.4012302, 43.0730517]},
	},
	{
		"type": "Feature",
		"properties": {"popupContent": "<div class='map-popup'><b>Minneapolis, MN</b><span id='Hans'>Hans Vraga</span><span id='Mitch'>Mitch Samuels</span><span id='Katrin'>Katrin Jacobson</span><span id='Nathan'>Nathan Krawza</span><span id='Kathy'>Kathy Dooley</span></div>" },
		"geometry": {"type": "Point", "coordinates": [-93.265011, 44.977753]},
	},
	{
		"type": "Feature",
		"properties": {"popupContent": "<div class='map-popup'><b>Washington, DC</b><span id='Lauren'>Lauren Privette</span><span id='Veni'>Veni Kunche</span>" },
		"geometry": {"type": "Point", "coordinates": [-77.036871, 38.907192]},
	},
	{
		"type": "Feature",
		"properties": {"popupContent": "<div class='map-popup'><b>Davis, CA</b><span id='Nick'>Nick Estes</span>" },
		"geometry": {"type": "Point", "coordinates": [-121.740517, 38.544907]},
	},
	{
		"type": "Feature",
		"properties": {"popupContent": "<div class='map-popup'><b>Denver, CO</b><span id='Daniel'>Daniel Beckman</span>" },
		"geometry": {"type": "Point", "coordinates": [-104.990251, 39.739236]},
	},
	// {
	// 	"type": "Feature",
	// 	"properties": {"popupContent": "<div class='map-popup'><b>Boise, ID</b><span id='Jeremy'>Jeremy Newson</span>" },
	// 	"geometry": {"type": "Point", "coordinates": [-116.202314, 43.615019]},
	// },
	{
		"type": "Feature",
		"properties": {"popupContent": "<div class='map-popup'><b>Albany, NY</b><span id='Martyn'>Martyn Smith</span>" },
		"geometry": {"type": "Point", "coordinates": [-73.691785, 42.728412]},
	},
	{
		"type": "Feature",
		"properties": {"popupContent": "<div class='map-popup'><b>Lebanon, IL</b><span id='Mackenzie'>Mackenzie Meni</span>" },
		"geometry": {"type": "Point", "coordinates": [-89.808691, 38.6035269]},
	}
];

// WimIcon & popup
var myIcon = L.Icon.extend({});
var wimIcon = new myIcon({
	iconUrl: '/src/images/map_pin.png',
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

var markers = L.markerClusterGroup({maxClusterRadius: 1, spiderfyDistanceMultiplier: 0.75 });
markers.addLayer(geoJsonLayer);

// On popup close, center map
markers.on('popupclose', function(e) {
	centerMap();
});

// Add markers to map and set bounds, zoom
map.addLayer(markers);
map.fitBounds(markers.getBounds());
map.setZoom(zoomlvl);
map.setView([43,-97]);


// ======================== //
// ======================== //
//          TEAM            //
//          TEAM            //
//          TEAM            //
// ======================== //
// ======================== //
var team = [
	{
		first_name: "Gary",
		last_name: "Latzke",
		title: "Program Coordinator",
		phone: "(608)821-3805",
		email: "gdlatzke@usgs.gov",
		bio: "Gary has his degree in Cartography from Northern Illinois University and 27 years of cartographic experience in the USGS. His specialties include cartographic design and communication, digital application design, and implementation of cloud infrastructures for geospatial applications. In addition WIM, Gary serves on the staff of the Information and Technology Management Director for the Department of the Interior, leading and assisting in special projects for the Department. Outside of work Gary enjoys golfing, writing music and making unique cocktails with his wife in their home lounge.", 
		coordinates: "-89.4012302, 43.0730517"
	},{
		first_name: "Bruce",
		last_name: "Droster",
		title: "Operations Coordinator",
		phone: "(703)648-5760",
		email: "bdroster@usgs.gov",
		bio: "Bruce began as a traditional cartographer working on the USGS Ground Water Atlas of the United States. He considers himself fortunate that he was able to experience both the traditional methods of map making (scribing and darkrooms) and modern GIS and digital mapping. He is currently the administrative and operations coordinator for WIM. Bruce enjoys many outside activities including being a volunteer firefighter, volunteer ski patroller, SCUBA diver, wilderness camper, cyclist, and many other outdoor activities.",
		coordinates: "-89.4012302, 43.0730517"
	},{
		first_name: "Hans",
		last_name: "Vraga",
		title: "Project Manager",
		phone: "(703)648-5670",
		email: "hvraga@usgs.gov",
		bio: "Hans got his start as a CH-53 Super Stallion Helicopter Crew Chief from the USMC, callsign: 'Wedgie.' He turned ITIL disciple at the UW-Madison Division of Information Technology (DoIT) while earning a BS in Computer Engineering and Computer Science. After a 8 years at DoIT wearing Configuration, Incident, and Change Management hats, Hans moved to USGS-WIM to head up Project Management duties and earned a PMP certification. Hans currently spends most of his day coordinating a highly skilled and motivated team of developers, doing his best not to slow them down too much. Outside of work, Hans enjoys a good game of ultimate, hiking, camping and the occasional novel.",
		coordinates: "-93.265011, 44.977753"
	},{
		first_name: "Blake",
		last_name: "Draper",
		title: "Software Developer",
		email: "bdraper@usgs.gov",
		bio: "Blake is a software developer for WIM. He has a B.A. and M.A. from Florida State University and a GIS/Cartography certificate from the University of Wisconsin-Madison. Blake works primarily client-side, developing web apps in JavaScript, but also enjoys working with Python whenever the need arises. He also spends a lot of time configuring server environments and preparing GIS data for use in web services. His main professional goal is to create useful, intuitive, geographically focused data products that advance USGS science. Outside of work, Blake enjoys cooking good food, woodworking, and spending time in the woods hiking and canoe camping.",
		coordinates: "-92.723246, 41.743409"
	},{
		first_name: "Nick",
		last_name: "Estes",
		title: "Software Developer",
		email: "njestes@usgs.gov",
		bio: "Nick is a senior developer with WIM. He received his B.S. in mechanical engineering from Purdue University in 2001. His work with the USGS was initially focused on publishing, but has since developed an interest in and a knack for developing mapping applications and optimizing GIS services used by those applications. While most of his free time is spent with his family, he finds time here and there to write and record music.",
		coordinates: "-121.740517, 38.544907"
	},{
		first_name: "Katrin",
		last_name: "Jacobsen",
		title: "Software Developer",
		email: "kjacobsen@usgs.gov",
		bio: "Katrin has a BA in Anthropology from the University of Minnesota - Twin Cities. While going to school there, she began an internship with the USGS in Mounds View, MN performing GIS and database work, which eventually led her to WIM. She's always had a passion for maps - they're all over her home. Outside of work, she enjoys volunteering, playing with her puppy, reading, and hosting small get-togethers at her home.",
		coordinates: "-93.265011, 44.977753"
	},{
		first_name: "Daniel",
		last_name: "Beckman",
		title: "Software Developer",
		email: "dbeckman@usgs.gov",
		bio: "Daniel Beckman is a career intern at the USGS. He holds a bachelors degree from the University of Colorado in Ecology and Evolutionary Biology and minors in Chemistry and Computer Science. He currently attends Graduate school at the University of Colorado School of Engineering and Applied Science where he studies Machine Learning and Artificial Intelligence. Daniel is a combat Veteran and former paratrooper with Special Forces. He has worked in data for almost two decades in a variety of fields including, counterintelligence, research & development, forensic chemistry, and genomics. Daniel joined the USGS in 2017 and WIM in 2018. Currently, he works in cloud integration. He and his wife Sarah live in Colorado with their two dogs and cat. They enjoy climbing, hiking 14ers, craft IPAs, snowshoeing, cross country skiing, and paddle boarding.",
		coordinates: "-104.990251, 39.739236"
	},{
		first_name: "Veni",
		last_name: "Kunche",
		title: "Software Developer",
		email: "kkunche@contractor.usgs.gov",
		bio: "Veni Kunche is a senior software developer residing in Northern Virginia. She has over 10 years of experience in software and web development, and has worked in several industries such as financial, governmental, and bio-medical. She loves to travel with friends and explore new cuisines.",
		coordinates: "-77.036871, 38.907192"
	},{
		first_name: "Erik",
		last_name: "Myers",
		title: "Software Developer",
		email: "emyers@usgs.gov",
		bio: "Erik is a software developer for WIM. He earned bachelor's degrees in geography and Asian studies from Augustana College in Illinois, and a master's degree in geography from Ohio University. He also holds a GIS Certificate from the University of Wisconsin-Madison. In addition to Erik's work developing web applications for WIM, his major areas of interest are cartographic and user experience design. Erik enjoys travel, photography, and outdoor sports. In his free time, he can usually be found rock climbing, skiing, cycling, canoeing, or kayak touring.",
		coordinates: "-89.4012302, 43.0730517"
	},{
		first_name: "Lauren",
		last_name: "Privette",
		title: "Software Developer",
		email: "lprivette@usgs.gov",
		bio: "Lauren is a software developer with WIM. She received her B.S in Geographic Science from James Madison University. While she enjoys work centered around GIS and cartography, her interests have expanded into the world of open source internet mapping. She currently resides in Northern Virginia and is working out of USGS HQ in Reston. Outside of work, Lauren enjoys snowboarding and ultimate frisbee.",
		coordinates: "-77.036871, 38.907192"
	},{
		first_name: "Mitch",
		last_name: "Samuels",
		title: "Frontend Developer",
		email: "msamuels@contractor.usgs.gov",
		bio: "Mitch is a frontend and UI/UX developer with WIM. He has 8 years of experience creating websites and other software, having started as a freelancer before coming to WIM. Outside of work and school, he enjoys traveling, snowboarding, and hiking.",
		coordinates: "-93.265011, 44.977753"
	},{
		first_name: "Martyn",
		last_name: "Smith",
		title: "Software Developer",
		email: "marsmith@usgs.gov",
		bio: "Marty is a software developer with WIM. He received his M.A. in geography from the University of Connecticut. While his work with the USGS initially centered around GIS and Cartography, his main focus now is internet mapping, and he is committed to improving the mapping presence of the USGS. Within the internet mapping application realm, he is primarily focused on open-source solutions. Most of his free time is spent with his family and german shorthair, or with a chainsaw.",
		coordinates: "-73.691785, 42.728412"
	},{
		first_name: "Aaron",
		last_name: "Stephenson",
		title: "Solutions Architect",
		email: "astephenson@usgs.gov",
		bio: "Aaron Stephenson is a full stack developer and solutions architect at WIM, but essentially he is their jack-of-all-trades. He has a decade of experience in system administration, database administration, information management, systems analysis, as well as back end and front end development, almost all of which have been in support of GIS data, services, and applications. Currently, most of his time is engaged in supporting WIM's migration to a service-oriented architecture and cloud computing. In his free time, Aaron loves reading, getting outdoors to hike and canoe, and attempting to become a decent cook.",
		coordinates: "-89.4012302, 43.0730517"
	},
	{
		first_name: "Nathan",
		last_name: "Krawza",
		title: "Student Developer",
		email: "nkrawza@contractor.usgs.gov",
		bio: "Nathan is a student developer for WIM. He is studying Management Information Systems at the Carlson School of Management,  University of Minnesota. He built his first computer in the 7th grade and has had a passion for computers and technology ever since.  Nathan's previous experiences include being a computer sales associate at Best Buy, a camp counselor, and a grocery bagger.  He enjoys going for runs, playing multiple rhythm instruments, traveling,  and driving his stick-shift 2001 Honda Accord.",
		coordinates: "-93.265011, 44.977753"
	},
	{
		first_name: "Mackenzie",
		last_name: "Meni",
		title: "Student Developer",
		email: "mmeni@contractor.usgs.gov",
		bio: "Mackenzie is a junior developer for WIM. She is currently working towards a B.S in Mathematics with a Minor in Engineering Physics at McKendree University. Mackenzie loves everything math and has recently entered the world of coding. Although she spends the majority of her time working or at school, she enjoys playing coed soccer, volunteering, and spending time with her family.",
		coordinates: "-89.808691, 38.6035269"
	},{
		first_name: "Kathy",
		last_name: "Dooley",
		title: "Student Developer",
		email: "kdooley@contractor.usgs.gov",
		bio: "Kathy's interests in GIS and computer science led her to join WIM in 2019. She has a B.A. from Carleton College and a Master of GIS from the University of Minnesota. Outside of work, Kathy enjoys cooking, walking, canoeing, and solving puzzles.",
		coordinates: "-93.265011, 44.977753"
	},
	// Alumni
	// Alumni
	// Alumni
	{
		first_name: "Jeremy",
		last_name: "Newson",
		title: "Software Developer",
		email: "jknewson@usgs.gov",
		bio: "Jeremy Newson has been working as a hydrologic engineer for the United States Geological Survey for the past 8 years. He is currently a lead developer for WIM, developing hydrologic mapping applications. His programming skills include Javascript, HTML5, Typescript, C#, VB.net, Python, Action script, Flash/Flex and Fortran. He earned his master's degree in biological and agricultural engineering, emphasizing in sediment fluxes in fluvial systems, and a bachelor's degree in biological systems engineering from the University of Idaho. When he is not staring aimlessly at his computer monitors, he enjoys spending time with his family, fly-fishing, and camping.",
		coordinates: "-116.202314, 43.615019",
		alumni: true,
		years: "2010-2019",
		alumniLink: "https://www.usgs.gov/staff-profiles/jeremy-k-newson?qt-staff_profile_science_products=1#qt-staff_profile_science_products"
	},{
		first_name: "Jonathan",
		last_name: "Baier",
		title: "Software Developer",
		email: "",
		bio: "Jonathan Baier's alumni bio coming soon.",
		coordinates: "",
		alumni: true,
		years: "2009-2014",
		alumniLink: "https://www.linkedin.com/in/jonathanbaier/"
	},{
		first_name: "Marie",
		last_name: "Peppler",
		title: "Software Developer",
		email: "",
		bio: "Marie Peppler's alumni bio coming soon.",
		coordinates: "",
		alumni: true,
		years: "2009-2014",
		alumniLink: "https://www.usgs.gov/staff-profiles/marie-c-peppler?qt-staff_profile_science_products=0#qt-staff_profile_science_products"
	},{
		first_name: "Tonia",
		last_name: "Roddick",
		title: "Software Developer",
		email: "",
		bio: "Tonia Roddick's alumni bio coming soon.",
		coordinates: "",
		alumni: true,
		years: "2012-2018",
		alumniLink: "https://www.linkedin.com/in/tonia-roddick-76960531/"
	}
]