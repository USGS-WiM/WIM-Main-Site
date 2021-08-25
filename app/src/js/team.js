////////////////////////////////////
// Team member display & router
// Team member display & router
// Team member display & router
////////////////////////////////////
var router = new VueRouter({
	routes: [
	  	{ path: '/:member', component: teamMembers }
	]
})
var teamMembers = new Vue({
	el: '#team',
	router,
    delimiters: ["${", "}"],

	data: {
	  	members: [],
		alumni: [],
		showAlumni: false,
	  	selected: {},
		showMemberPopup: false
	},
	methods: {
		updateURL(slug) {
			router.replace(slug)
		},
		closeMemberPopup(empty){
			this.showMemberPopup = false;
			document.getElementsByTagName("body")[0].style.overflow = "auto"; 
			router.push({ name: 'team', params: { memberSlug: '' } })
		},
		openMemberPopup(slug){
			this.selected = this.members[slug.toLowerCase()]; 
			this.showMemberPopup = true; 
			this.updateURL(slug.toLowerCase())
			document.getElementsByTagName("body")[0].style.overflow = "hidden"; 
		},
		openAlumniPopup(slug){
			this.selected = this.alumni[slug.toLowerCase()]; 
			this.showMemberPopup = true; 
			this.updateURL(slug.toLowerCase())
			document.getElementsByTagName("body")[0].style.overflow = "hidden"; 
		}
	}
})

// Watch for slug, load project if found
// Watch for slug, load project if found
// Watch for slug, load project if found
window.addEventListener("load", function(event) {
	var slug = teamMembers.$route.params.member;

	if(slug){
		slug = slug.toLowerCase();
	}
	if(slug){			
		if(teamMembers.members[slug]){
			teamMembers.openMemberPopup(slug);
		}else{
			teamMembers.openAlumniPopup(slug);
		}
	}
});

teamMembers.selected = {
	first_name: "Gary",
	last_name: "Latzke",
	title: "Program Coordinator",
	phone: "(608)821-3805",
	email: "gdlatzke@usgs.gov",
	bio: "Gary has his degree in Cartography from Northern Illinois University and 27 years of cartographic experience in the USGS. His specialties include cartographic design and communication, digital application design, and implementation of cloud infrastructures for geospatial applications. In addition WIM, Gary serves on the staff of the Information and Technology Management Director for the Department of the Interior, leading and assisting in special projects for the Department. Outside of work Gary enjoys golfing, writing music and making unique cocktails with his wife in their home lounge.", 
	coordinates: "-89.4012302, 43.0730517"
}

teamMembers.members = {
	gary: {
		first_name: "Gary",
		last_name: "Latzke",
		title: "Program Coordinator",
		phone: "(608)821-3805",
		email: "gdlatzke@usgs.gov",
		bio: "Gary has his degree in Cartography from Northern Illinois University and 27 years of cartographic experience in the USGS. His specialties include cartographic design and communication, digital application design, and implementation of cloud infrastructures for geospatial applications. In addition WIM, Gary serves on the staff of the Information and Technology Management Director for the Department of the Interior, leading and assisting in special projects for the Department. Outside of work Gary enjoys golfing, writing music and making unique cocktails with his wife in their home lounge.", 
		coordinates: "-89.4012302, 43.0730517"
	},
	hans: {
		first_name: "Hans",
		last_name: "Vraga",
		title: "Project Manager",
		phone: "(703)648-5670",
		email: "hvraga@usgs.gov",
		bio: "Hans got his start as a CH-53 Super Stallion Helicopter Crew Chief from the USMC, callsign: 'Wedgie.' He turned ITIL disciple at the UW-Madison Division of Information Technology (DoIT) while earning a BS in Computer Engineering and Computer Science. After a 8 years at DoIT wearing Configuration, Incident, and Change Management hats, Hans moved to USGS-WIM to head up Project Management duties and earned a PMP certification. Hans currently spends most of his day coordinating a highly skilled and motivated team of developers, doing his best not to slow them down too much. Outside of work, Hans enjoys a good game of ultimate, hiking, camping and the occasional novel.",
		coordinates: "-93.265011, 44.977753"
	},
	nick: {
		first_name: "Nick",
		last_name: "Estes",
		title: "Software Developer",
		email: "njestes@usgs.gov",
		bio: "Nick is a senior developer with WIM. He received his B.S. in mechanical engineering from Purdue University in 2001. His work with the USGS was initially focused on publishing, but has since developed an interest in and a knack for developing mapping applications and optimizing GIS services used by those applications. While most of his free time is spent with his family, he finds time here and there to write and record music.",
		coordinates: "-121.740517, 38.544907"
	},
	blake: {
		first_name: "Blake",
		last_name: "Draper",
		title: "Software Developer",
		email: "bdraper@usgs.gov",
		bio: "Blake is a software developer for WIM. He has a B.A. and M.A. from Florida State University and a GIS/Cartography certificate from the University of Wisconsin-Madison. Blake works primarily client-side, developing web apps in JavaScript, but also enjoys working with Python whenever the need arises. He also spends a lot of time configuring server environments and preparing GIS data for use in web services. His main professional goal is to create useful, intuitive, geographically focused data products that advance USGS science. Outside of work, Blake enjoys cooking good food, woodworking, and spending time in the woods hiking and canoe camping.",
		coordinates: "-92.723246, 41.743409"
	},
	aaron: {
		first_name: "Aaron",
		last_name: "Stephenson",
		title: "Solutions Architect",
		email: "astephenson@usgs.gov",
		bio: "Aaron Stephenson is a full stack developer and solutions architect at WIM, but essentially he is their jack-of-all-trades. He has a decade of experience in system administration, database administration, information management, systems analysis, as well as back end and front end development, almost all of which have been in support of GIS data, services, and applications. Currently, most of his time is engaged in supporting WIM's migration to a service-oriented architecture and cloud computing. In his free time, Aaron loves reading, getting outdoors to hike and canoe, and attempting to become a decent cook.",
		coordinates: "-89.4012302, 43.0730517"
	},
	erik: {
		first_name: "Erik",
		last_name: "Myers",
		title: "Software Developer",
		email: "emyers@usgs.gov",
		bio: "Erik is a software developer for WIM. He earned bachelor's degrees in geography and Asian studies from Augustana College in Illinois, and a master's degree in geography from Ohio University. He also holds a GIS Certificate from the University of Wisconsin-Madison. In addition to Erik's work developing web applications for WIM, his major areas of interest are cartographic and user experience design. Erik enjoys travel, photography, and outdoor sports. In his free time, he can usually be found rock climbing, skiing, cycling, canoeing, or kayak touring.",
		coordinates: "-89.4012302, 43.0730517"
	},
	lauren: {
		first_name: "Lauren",
		last_name: "Privette",
		title: "Software Developer",
		email: "lprivette@usgs.gov",
		bio: "Lauren is a software developer with WIM. She received her B.S in Geographic Science from James Madison University. While she enjoys work centered around GIS and cartography, her interests have expanded into the world of open source internet mapping. She currently resides in Northern Virginia and is working out of USGS HQ in Reston. Outside of work, Lauren enjoys snowboarding and ultimate frisbee.",
		coordinates: "-77.036871, 38.907192"
	},
	martyn: {
		first_name: "Martyn",
		last_name: "Smith",
		title: "Software Developer",
		email: "marsmith@usgs.gov",
		bio: "Marty is a software developer with WIM. He received his M.A. in geography from the University of Connecticut. While his work with the USGS initially centered around GIS and Cartography, his main focus now is internet mapping, and he is committed to improving the mapping presence of the USGS. Within the internet mapping application realm, he is primarily focused on open-source solutions. Most of his free time is spent with his family and german shorthair, or with a chainsaw.",
		coordinates: "-73.691785, 42.728412"
	},
	mitch: {
		first_name: "Mitch",
		last_name: "Samuels",
		title: "Frontend Developer",
		email: "msamuels@contractor.usgs.gov",
		bio: "Mitch is a frontend and UI/UX developer with WIM. He has 8 years of experience creating websites and other software, having started as a freelancer before coming to WIM. Outside of work and school, he enjoys traveling, snowboarding, and hiking.",
		coordinates: "-93.265011, 44.977753"
	},
	daniel: {
		first_name: "Daniel",
		last_name: "Beckman",
		title: "Software Developer",
		email: "dbeckman@usgs.gov",
		bio: "Daniel Beckman is a career intern at the USGS. He holds a bachelors degree from the University of Colorado in Ecology and Evolutionary Biology and minors in Chemistry and Computer Science. He currently attends Graduate school at the University of Colorado School of Engineering and Applied Science where he studies Machine Learning and Artificial Intelligence. Daniel is a combat Veteran and former paratrooper with Special Forces. He has worked in data for almost two decades in a variety of fields including, counterintelligence, research & development, forensic chemistry, and genomics. Daniel joined the USGS in 2017 and WIM in 2018. Currently, he works in cloud integration. He and his wife Sarah live in Colorado with their two dogs and cat. They enjoy climbing, hiking 14ers, craft IPAs, snowshoeing, cross country skiing, and paddle boarding.",
		coordinates: "-104.990251, 39.739236"
	},
	lorraine: {
		first_name: "Lorraine",
		last_name: "Metz",
		title: "Developer & Operations Coordinator",
		email: "lmetz@usgs.gov",
		bio: "Lorraine has a B.S. from Northland College in Geoscicence and Water Science and a graduate certificate in GIS from the University of Denver. She is currently working on her master's degree in GISc at the University of Denver. Lorraine joined the USGS in 2018 and then joined the WIM team in 2020. Outside of work, she enjoys spending time in the outdoors, listening to podcasts, reading, and hanging out with family and friends.",
		coordinates: "-87.88739, 41.83789"
	},
	mackenzie: {
		first_name: "Mackenzie",
		last_name: "Meni",
		title: "Software Developer",
		email: "mmeni@contractor.usgs.gov",
		bio: "Mackenzie is a junior developer for WIM. She is currently working towards a B.S in Mathematics with a Minor in Engineering Physics at McKendree University. Mackenzie loves everything math and has recently entered the world of coding. Although she spends the majority of her time working or at school, she enjoys playing coed soccer, volunteering, and spending time with her family.",
		coordinates: "-89.808691, 38.6035269"
	}, 
	kathy: {
		first_name: "Kathy",
		last_name: "Dooley",
		title: "Software Developer",
		email: "kdooley@contractor.usgs.gov",
		bio: "Kathy's interests in GIS and computer science led her to join WIM in 2019. She has a B.A. from Carleton College and a Master of GIS from the University of Minnesota. Outside of work, Kathy enjoys cooking, walking, canoeing, and solving puzzles.",
		coordinates: "-93.265011, 44.977753"
	},
	anders: {
		first_name: "Anders",
		last_name: "Hopkins",
		title: "Software Developer",
		email: "ahopkins@contractor.usgs.gov",
		bio: "Anders is a developer for WIM. He has a BA from Luther College and a Masters of GIS from the University of Minnesota. Anders' interests include designing maps, drawing conclusions from raw datasets and solving spatial problems. When not working, he can be found riding one of his many bikes, rock climbing or reading.",
		coordinates: "-93.265011, 44.977753"
	},
	milan: {
		first_name: "Milan",
		last_name: "Liu",
		title: "GIS Specialist",
		email: "msliu@contractor.usgs.gov",
		bio: "Milan has degrees in International Politics and Geography from Penn State University. Her interest in GIS and cartography brought her to WIM, where she works on projects involving data visualization and geonarrative design. Outside of work, Milan enjoys traveling and spending time outside. In her free time, you can usually find her on a run, reading a novel, or cooking a new recipe.",
		coordinates: "-77.8731374, 40.8080916"
	},
	kip: {
		first_name: "Kip",
		last_name: "Sullivan",
		title: "Software Developer",
		email: "cdsullivan@contractor.usgs.gov",
		bio: "Kip is currently a student at the University of Wisconsin-Madison pursuing a bachelor's degree in Computer Engineering and Computer Science with a certificate in Criminal Justice. Kip has been programming since middle school and has developed many individual programming projects before joining WIM, including applications for both desktop and mobile devices. His other interests include golfing, learning guitar, and working on cars.",
		coordinates: "-89.4012302, 43.0730517"
	},
	danny: {
		first_name: "Danny",
		last_name: "Rubin",
		title: "Software Developer",
		email: "drubin@contractor.usgs.gov",
		bio: "Daniel has a B.S. in Public Affairs from Indiana University and is currently pursuing a Masters in Public Affairs from Indiana University. Prior to joining USGS Danny worked as a software designer and business analyst helping state and federal agencies solve challenges involving training, compliance, personnel management, organizational management, and more. Danny loves the outdoors and has a lifelong goal of visiting all the national parks.",
		coordinates: "-86.512627,39.1754487"
	},
	lily: {
		first_name: "Lily",
		last_name: "Houtman",
		title: "Software Developer",
		email: "lhoutman@contractor.usgs.gov",
		bio: "Lily is currently pursuing degrees in Cartography/GIS and Biological Anthropology at the University of Wisconsin-Madison. She is particularly interested in data journalism, science communication, and pedagogical teaching. She loves designing both static and web maps, and is always excited to explore the intersection of science and art that is inherent to cartography. In her free time, she enjoys running in the forest, reading fantasy novels, tending to her houseplants, and cooking vegetarian food.",
		coordinates: "-89.4012302, 43.0730517"
	}
	// patrick: {
	// 	first_name: "Patrick",
	// 	last_name: "Moore",
	// 	title: "Sysops Specialist",
	// 	email: "pmoore@usgs.gov",
	// 	bio: "After becoming his Unit's \"fat kid in dodgeball\" for being wounded in Iraq, Patrick returned home and became a professional student. Dabbling within Game Design, Electronics, and Metal Fabrication, until finally discovering IT Systems Administration. Patrick has been working as an IT Support Staffer and self-described \"Donut King\" for Middleton's Water Science Center for over a year now. Recently being able to split his time to assist with WIM's IT Cloud needs. When Patrick isn't working, he prefers to spend his free time playing board games, video games, attempting to create art, perfecting cheesecake recipes, and learning new costume designer skills.",
	// 	coordinates: "-89.4012302, 43.0730517"
	// }
}


teamMembers.alumni = {
	katrin: {
		first_name: "Katrin",
		last_name: "Jacobsen",
		title: "Software Developer",
		email: "",
		bio: "Katrin has a BA in Anthropology from the University of Minnesota - Twin Cities. While going to school there, she began an internship with the USGS in Mounds View, MN performing GIS and database work, which eventually led her to WIM. She's always had a passion for maps - they're all over her home. Outside of work, she enjoys volunteering, playing with her puppy, reading, and hosting small get-togethers at her home.",
		alumni: true,
		years: "2018-2021",
		alumniLink: ""
	},
	bruce: {
		first_name: "Bruce",
		last_name: "Droster",
		title: "Operations Coordinator",
		email: "",
		bio: "A foundational member of WIM, Bruce Droster coordinated operations from inception through 2020 before retiring from Federal Service. His reliability, no-nonsense approach, and experience operating in the Federal sector helped WIM set itself apart from other groups. Bruce enjoys many outside activities including being a volunteer firefighter, volunteer ski patroller, SCUBA diver, wilderness camper, cyclist, hot tubbing, and others; there is no concern that Bruce will lack for things to do during his retirement.",
		// bio: "Bruce began as a traditional cartographer working on the USGS Ground Water Atlas of the United States. He considers himself fortunate that he was able to experience both the traditional methods of map making (scribing and darkrooms) and modern GIS and digital mapping. He is currently the administrative and operations coordinator for WIM. Bruce enjoys many outside activities including being a volunteer firefighter, volunteer ski patroller, SCUBA diver, wilderness camper, cyclist, and many other outdoor activities.",
		coordinates: "",
		alumni: true,
		years: "2009-2020",
		alumniLink: ""
	},
	jeremy: {
		first_name: "Jeremy",
		last_name: "Newson",
		title: "Software Developer",
		email: "",
		bio: "Jeremy was an integral part of WIM for 9 years, making his way here by way of the Kentucky Water Science Center, where he worked as a Hydrologist. As a member of the team, Jeremy served as a full stack developer, spurring growth in WIM’s capabilities by creating and implementing new technologies and architectures, while also pushing for adaptation of best practices in every facet of our work. Jeremy’s witty sense of humor and positive attitude made him a wonderful mentor for new and experienced developers.",
		coordinates: "",
		alumni: true,
		years: "2010-2019",
		alumniLink: "https://www.usgs.gov/staff-profiles/jeremy-k-newson?qt-staff_profile_science_products=1#qt-staff_profile_science_products"
	},
	veni: {
		first_name: "Veni",
		last_name: "Kunche",
		title: "Software Developer",
		email: "",
		bio: "Veni filled the role of Senior Developer during her tenure on the team. Her ability to take on (often the most) complex problems the team faced at any given time made her an inspiration to others on the team and our cooperators. Perhaps even more impactful was how she was able to use her knowledge, experiences, and intuition to help us build a healthy and fun team environment, you can see her influence on many of the work conventions WIM follows. Veni is the founder at DiversifyTech.co. Where she connects underrepresented folks in tech to opportunities. Shes also won many awards in the DC area, including Trending 40 - The New Power Women of DC Tech.",
		coordinates: "",
		alumni: true,
		years: "2014-2019",
		alumniLink: "https://www.linkedin.com/in/venikunche"
	},
	tonia: {
		first_name: "Tonia",
		last_name: "Roddick",
		title: "Software Developer",
		email: "",
		bio: "Tonia was a senior software developer with WIM for 6 years. She was a full-stack developer leading some of the teams largest and most ambitious projects; and her infectious no-nonsense attitude and adventurous spirit, was a benefit to everyone’s productivity. Tonia filled the role of  developer during her tenure with WIM. Tonia has gone on to have a very successful career in the private sector.",
		coordinates: "",
		alumni: true,
		years: "2012-2018",
		alumniLink: "https://www.linkedin.com/in/tonia-roddick-76960531/"
	},
	marie: {
		first_name: "Marie",
		last_name: "Peppler",
		title: "Software Developer",
		email: "",
		bio: "Marie was with WIM for 4 years doing Project Coordinator and Program Development.  With her tireless work-ethic and skills in customer relations and problem solving, combined with an understanding of the technical skills of the WIM team, she lead projects that built several applications critical to the USGS, our cooperators and the general public. The connections Marie has established between WIM and many of our key cooperators continues to this day and have led to many interesting and exciting collaborations for the team. Marie is now the Hazards Coordinator for the USGS.",
		coordinates: "",
		alumni: true,
		years: "2009-2014",
		alumniLink: "https://www.usgs.gov/staff-profiles/marie-c-peppler?qt-staff_profile_science_products=0#qt-staff_profile_science_products"
	},
	jonathan: {
		first_name: "Jonathan",
		last_name: "Baier",
		title: "Software Developer",
		email: "",
		bio: "Jon was one of three co-founders of WIM, where he was a Senior Technology Leader and Systems Architect, setting the technical direction for WIM.  He has shown remarkable foresight building  technologies and architectures that remain the gold standard for WIM web development. Jon filled the roles of Cloud Solution Architect and GIS Platform Technical Director during his tenure with WIM. Jon has published three books, produced webinars and articles on the subject of containerization. He has gone on to have a very successful career in the private sector delivering emerging technology strategies to companies and partners.",
		coordinates: "",
		alumni: true,
		years: "2009-2014",
		alumniLink: "https://www.linkedin.com/in/jonathanbaier/"
	},
	// nathan: {
	// 	first_name: "Nathan",
	// 	last_name: "Krawza",
	// 	title: "Student Developer",
	// 	email: "",
	// 	bio: "Nathan was a student developer for WIM. He is studying Management Information Systems at the Carlson School of Management,  University of Minnesota. He built his first computer in the 7th grade and has had a passion for computers and technology ever since.  Nathan's previous experiences include being a computer sales associate at Best Buy, a camp counselor, and a grocery bagger.  He enjoys going for runs, playing multiple rhythm instruments, traveling,  and driving his stick-shift 2001 Honda Accord.",
	// 	coordinates: "-93.265011, 44.977753",
	// alumni: true,
	// years: "2018-2020",
	// alumniLink: "https://www.linkedin.com/in/nathan-krawza-1a86a5140"
	// },
}




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
		"properties": {"popupContent": "<div onclick='mapPopupClick(event)' class='map-popup'><b>Madison, WI</b><span id='Gary'>Gary Latzke</span><span id='Blake'>Blake Draper</span><span id='Erik'>Erik Myers</span><span id='Aaron'>Aaron Stephenson</span><span id='Kip'>Kip Sullivan</span></div><span id='Lily'>Lily Houtman</span></div>" },
		"geometry": {"type": "Point", "coordinates": [-89.4012302, 43.0730517]},
	},
	{
		"type": "Feature",
		"properties": {"popupContent": "<div onclick='mapPopupClick(event)' class='map-popup'><b>Twin Cities, MN</b><span id='Hans'>Hans Vraga</span><span id='Mitch'>Mitch Samuels</span><span id='Kathy'>Kathy Dooley</span><span id='Anders'>Anders Hopkins</span></div>" },
		"geometry": {"type": "Point", "coordinates": [-93.265011, 44.977753]},
	},
	{
		"type": "Feature",
		"properties": {"popupContent": "<div onclick='mapPopupClick(event)' class='map-popup'><b>Washington, DC</b><span id='Lauren'>Lauren Privette</span>" },
		"geometry": {"type": "Point", "coordinates": [-77.036871, 38.907192]},
	},
	{
		"type": "Feature",
		"properties": {"popupContent": "<div onclick='mapPopupClick(event)' class='map-popup'><b>Davis, CA</b><span id='Nick'>Nick Estes</span>" },
		"geometry": {"type": "Point", "coordinates": [-121.740517, 38.544907]},
	},
	{
		"type": "Feature",
		"properties": {"popupContent": "<div onclick='mapPopupClick(event)' class='map-popup'><b>Denver, CO</b><span id='Dan'>Daniel Beckman</span>" },
		"geometry": {"type": "Point", "coordinates": [-104.990251, 39.739236]},
	},
	{
		"type": "Feature",
		"properties": {"popupContent": "<div onclick='mapPopupClick(event)' class='map-popup'><b>Albany, NY</b><span id='Martyn'>Martyn Smith</span>" },
		"geometry": {"type": "Point", "coordinates": [-73.691785, 42.728412]},
	},
	{
		"type": "Feature",
		"properties": {"popupContent": "<div onclick='mapPopupClick(event)' class='map-popup'><b>Elgin, IL</b><span id='Lorraine'>Lorraine Metz</span>" },
		"geometry": {"type": "Point", "coordinates": [-87.88739, 41.83789]},
	},
	{
		"type": "Feature",
		"properties": {"popupContent": "<div onclick='mapPopupClick(event)' class='map-popup'><b>Lebanon, IL</b><span id='Mackenzie'>Mackenzie Meni</span>" },
		"geometry": {"type": "Point", "coordinates": [-89.808691, 38.6035269]},
	},
	{
		"type": "Feature",
		"properties": {"popupContent": "<div onclick='mapPopupClick(event)' class='map-popup'><b>University Park, PA</b><span id='Milan'>Milan Liu</span>" },
		"geometry": {"type": "Point", "coordinates": [-77.8731374, 40.8080916]},
	},
	{
		"type": "Feature",
		"properties": {"popupContent": "<div onclick='mapPopupClick(event)' class='map-popup'><b>Bloomington, IN</b><span id='Danny'>Danny Rubin</span>" },
		"geometry": {"type": "Point", "coordinates": [-86.512627, 39.1754487]},
	}
];

var mapPopupClick = function(){
	if(event.target.id){
		teamMembers.openMemberPopup(event.target.id.toLowerCase());
	}
}

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

var markers = L.markerClusterGroup({maxClusterRadius: 1 });
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