var wimApp = angular.module('wimApp', ['ngRoute']);

wimApp.config(function($routeProvider, $locationProvider) {
    $routeProvider

    .when('/', {
        templateUrl : 'pages/home.html'
    })
    .when('/projects', {
        templateUrl : 'pages/projects.html',
        controller  : 'projectsController'
    })
    .when('/team', {
        templateUrl : 'pages/team.html',
        controller  : 'teamController'
    })
    .when('/:category/:number/:name', {
        templateUrl : 'pages/team_individual.html',
        controller  : 'teamIndividualController'
    })
    .when('/:slug/:number/', {
        templateUrl : 'pages/project_individual.html',
        controller  : 'projectIndividualController'
    })
    .when('/geonarratives/', {
        templateUrl : 'pages/geonarratives.html',
        controller  : 'geonarrativesController'
    })
    .otherwise({
        redirectTo: "/"
    });

});

// create the controller and inject Angular's $scope
wimApp.controller('homeController', function($scope, $location) {


    $(".mobile-menu-btn").click(function(){
        $(".nav-links").slideToggle(350);
        $(".mobile-menu-btn").toggleClass("ion-navicon");
        $(".mobile-menu-btn").toggleClass("ion-chevron-up");
    })
    $(".nav-links").click(function(){
        if($(".mobile-menu-btn").is(":visible")){
            $(".nav-links").slideUp(350);
        }
    })
    function resizedw(){
        if(!$(".mobile-menu-btn").is(":visible")){
            $(".nav-links").slideDown(350);
        }
    }

    $scope.doit;
    window.onresize = function(){
        clearTimeout($scope.doit);
        $scope.doit = setTimeout(resizedw, 400);
    };
    $scope.go = function ( path ) {
        $location.path( path );
    };


    $scope.teamAdmin = [
        {
            'firstname' : 'Gary',
            'lastname' : 'Latzke',
            'title' : 'Program Manager',
            'email' : 'gdlatzke@usgs.gov',
            'phone' : '6088213805',
            'bio' : 'Gary has his degree in Cartography from Northern Illinois University and 27 years of cartographic experience in the USGS. His specialties include cartographic design and communication, digital application design, and implementation of cloud infrastructures for geospatial applications. In addition WiM, Gary serves on the staff of the Information and Technology Management Director for the Department of the Interior, leading and assisting in special projects for the Department. Outside of work Gary enjoys golfing, writing music and making unique cocktails with his wife in their home lounge.'
        },{
            'firstname' : 'Bruce',
            'lastname' : 'Droster',
            'title' : 'Operations Coordinator',
            'email' : 'bdroster@usgs.gov',
            'phone' : '7036485760',
            'bio' : 'Bruce began as a traditional cartographer working on the USGS Ground Water Atlas of the United States. He considers himself fortunate that he was able to experience both the traditional methods of map making (scribing and darkrooms) and modern GIS and digital mapping. He is currently the administrative and operations coordinator for WiM. Bruce enjoys many outside activities including being a volunteer firefighter, volunteer ski patroller, SCUBA diver, wilderness camper, cyclist, and many other outdoor activities.'
        },{
            'firstname' : 'Hans',
            'lastname' :  'Vraga',
            'title' : 'Project Manager',
            'email' : 'hvraga@usgs.gov',
            'phone' : '6088213907',
            'bio' : 'Hans got his start as a fearless Super Stallion Helicopter Crew Chief from the USMC \'772 Hustlers, callsign: "Wedgie." He turned ITIL disciple at the UW-Madison Division of Information Technology by way of a student position held while earning a BS in Computer Engineering and Computer Science at the university. After a few years full time working with the System\'s Engineering and Operations group at DoIT wearing Configuration, Incident, and Change Management hats, Hans moved to WiM to head up Project Management duties. Hans is currently living near our Nation\'s Capital, representing WiM at USGS HQ as well as attempting to keep up with Marie\'s enthusiasm. Outside of work, Hans enjoys a good game of ultimate, hiking, camping and the occasional novel.'
        }
    ];

    $scope.teamDevelopers = [
        {
            'firstname' : 'Blake',
            'lastname' : 'Draper',
            'title' : 'Software Developer',
            'email' : 'bdraper@usgs.gov',
            'bio' : 'Blake is a software developer for WiM. He has a B.A. and M.A. from Florida State University and a GIS/Cartography certificate from the University of Wisconsin-Madison. Blake works primarily client-side, developing web apps in JavaScript, but also enjoys working with Python whenever the need arises. He also spends a lot of time configuring server environments and preparing GIS data for use in web services. His main professional goal is to create useful, intuitive, geographically focused data products that advance USGS science. Outside of work, Blake enjoys cooking good food, woodworking, and spending time in the woods hiking and canoe camping.'
        },{
            'firstname' : 'Nick',
            'lastname' : 'Estes',
            'title' : 'Software Developer',
            'email' : 'njestes@usgs.gov',
            'bio' : 'Nick is a senior developer with WiM. He received his B.S. in mechanical engineering from Purdue University in 2001. His work with the USGS was initially focused on publishing, but has since developed an interest in and a knack for developing mapping applications and optimizing GIS services used by those applications. While most of his free time is spent with his family, he finds time here and there to write and record music.'
        },{
            'firstname' : 'Veni',
            'lastname' :  'Kunche',
            'title' : 'Software Developer',
            'email' : 'kkunche@usgs.gov',
            'bio' : 'Veni Kunche is a senior software developer residing in Northern Virginia. She has over 10 years of experience in software and web development, and has worked in several industries such as financial, governmental, and bio-medical. She loves to travel with friends and explore new cuisines.'
        },{
            'firstname' : 'Erik',
            'lastname' :  'Myers',
            'title' : 'Software Developer',
            'email' : 'emyers@usgs.gov',
            'bio' : 'Erik is a software developer for WiM. He earned bachelor\'s degrees in geography and Asian studies from Augustana College in Illinois, and a master\'s degree in geography from Ohio University. He also holds a GIS Certificate from the University of Wisconsin-Madison. In addition to Erik\'s work developing web applications for WiM, his major areas of interest are cartographic and user experience design. Erik enjoys travel, photography, and outdoor sports. In his free time, he can usually be found rock climbing, skiing, cycling, canoeing, or kayak touring.'
        },{
            'firstname' : 'Jeremy',
            'lastname' :  'Newson',
            'title' : 'Software Developer',
            'email' : 'jknewson@usgs.gov',
            'bio' : 'Jeremy Newson has been working as a hydrologic engineer for the United States Geological Survey for the past 8 years. He is currently a lead developer for WiM, developing hydrologic mapping applications. His programming skills include Javascript, HTML5, Typescript, C#, VB.net, Python, Action script, Flash/Flex and Fortran. He earned his master\'s degree in biological and agricultural engineering, emphasizing in sediment fluxes in fluvial systems, and a bachelor\'s degree in biological systems engineering from the University of Idaho. When he is not staring aimlessly at his computer monitors, he enjoys spending time with his family, fly-fishing, and camping.'
        },{
            'firstname' : 'Lauren',
            'lastname' :  'Privette',
            'title' : 'Software Developer',
            'email' : 'lprivette@usgs.gov',
            'bio' : 'Lauren is a software developer with WiM. She received her B.S in Geographic Science from James Madison University. While she enjoys work centered around GIS and cartography, her interests have expanded into the world of open source internet mapping. She currently resides in Northern Virginia and is working out of USGS HQ in Reston. Outside of work, Lauren enjoys snowboarding and ultimate frisbee.'
        },{
            'firstname' : 'Tonia',
            'lastname' :  'Roddick',
            'title' : 'Software Developer',
            'email' : 'troddick@usgs.gov',
            'bio' : 'Tonia earned a bachelor\'s degree in Geography at the University of Wisconsin - Parkside and a GIS Certificate at the University of Wisconsin - Madison. She worked as a GIS Analyst in the private sector for several years before returning to school to earn another 2-year degree in programming from Madison Area Technical College. Tonia works on back-end and front-end development: Oracle and PostgreSQL databases, REST services, and client-side web applications that allow the user to communicate with their data. Her languages of choice are C#, JavaScript, AngularJS, and HTML5, but she\'s also familiar with VB.net, SQL, JQuery, and Ajax. In her free time, she enjoys spending time with her family, mountain biking, cross country skiing, or reading a good novel.'
        },{
            'firstname' : 'Mitch',
            'lastname' :  'Samuels',
            'title' : 'Frontend Developer',
            'email' : 'msamuels@usgs.gov',
            'bio' : 'Mitch is currently enrolled at the University of Wisconsin - Madison where he will earn his bachelor\'s degree in computer science with certificates in entrepreneurship and German. He is a front end developer desigining WiM and other websites. Outside of work and school, he enjoys traveling, snowboarding, and hiking.'
        },{
            'firstname' : 'Martyn',
            'lastname' :  'Smith',
            'title' : 'Software Developer',
            'email' : 'marsmith@usgs.gov',
            'bio' : 'Marty is a software developer with WiM. He received his M.A. in geography from the University of Connecticut. While his work with the USGS initially centered around GIS and Cartography, his main focus now is internet mapping, and he is committed to improving the mapping presence of the USGS. Within the internet mapping application realm, he is primarily focused on open-source solutions. Most of his free time is spent with his family and german shorthair, or with a chainsaw.'
        },{
            'firstname' : 'Aaron',
            'lastname' :  'Stephenson',
            'title' : 'Solutions Architect',
            'email' : 'astephenson@usgs.gov',
            'bio' : 'Aaron Stephenson is a full stack developer and solutions architect at WiM, but essentially he is their jack-of-all-trades. He has a decade of experience in system administration, database administration, information management, systems analysis, as well as back end and front end development, almost all of which have been in support of GIS data, services, and applications. Currently, most of his time is engaged in supporting WIM\'s migration to a service-oriented architecture and cloud computing. In his free time, Aaron loves reading, getting outdoors to hike and canoe, and attempting to become a decent cook.'
        },{
            'firstname' : 'Jamie',
            'lastname' :  'Velkoverh',
            'title' : 'GIS Specialist',
            'email' : 'jvelkoverh@usgs.gov',
            'bio' : 'Jamie is a GIS specialist with WiM. She has a bachelor\'s degree in Chemistry from St. Norbert College, a master\'s degree in Environmental Engineering from the University of Minnesota, and a master\'s degree in Geographic Information Systems Technology from the University of Arizona. Jamie has worked in academia, government, and the private sector on projects ranging from studying the chemical fate and transport of glyphosate in agricultural soils, to installing solar powered groundwater wells in communities in Africa and Central America, to environmental consulting. She is now working for WiM transforming USGS science into dynamic and interactive Storymaps. She also specializes in ArcGIS Online products, portal, web applications, and design. Jamie has traveled to seven continents, loves hiking, camping, cycling, farmer\'s markets, volunteering, and spending time with family and friends.'
        }
    ];

    $scope.gisAnalysts = [
        {
            'firstname' : 'Jeff',
            'lastname' : 'Ingebritsen',
            'title' : 'Software Developer',
            'email' : 'jingebritsen@usgs.gov',
            'bio' : 'Jeff Ingebritsen is a 2007 graduate of the University of Wisconsin\u2013Madison with a degree in anthropology and a GIS certificate. His professional interests include GIS modeling, cartographic design, and Python. In his free time, Jeff is a pianist, cook, avid board game player, and loves to read.'
        },{
            'firstname' : 'Moon',
            'lastname' : 'Kim',
            'title' : 'FIM Library Manager',
            'email' : 'mkim@usgs.gov',
            'bio' : 'Moon is currently the lead hydrologist for the Flood Inundation Mapping Program. Located at the Indiana Water Science Center, his current technical interests include 1D/2D hydraulic modeling, dynamic flood inundation mapping, and utilization of GIS applications. His hobbies include tennis, soccer, bicycling, and binge-viewing classic samurai, sci-fi, and martial arts flicks movies online.'
        },{
            'firstname' : 'Luke',
            'lastname' :  'Worsham',
            'title' : 'GIS Specialist',
            'email' : 'lworsham@usgs.gov',
            'bio' : 'Luke works on a cooperative project with the USGS Wisconsin Water Science Center and the US Fish and Wildlife Service National Standards and Support Team. He contributes to the National Wetlands Inventory and assists in maintaining the wetlands master geodatabase. He holds an MS in forestry and natural resources from the University of Georgia, and previously worked as an air quality specialist at the WI Department of Natural Resources, and as a researcher at UGA. Luke is otherwise a cyclist, trombonist, plant guy, and movie fan.'
        }
    ];

    $scope.advisors = [
        {
            'firstname' : 'Marie',
            'lastname' : 'Peppler',
            'title' : 'FIM Coordinator',
            'email' : 'mpeppler@usgs.gov',
            'bio' : 'Marie C. Peppler works in the Office of Surface Water as the Federal Agency Liaison and the National USGS Flood Inundation Mapping Coordinator. Marie guides the development, publication and communication of USGS Flood Inundation Mapping projects. As the Federal Agency Liaison, Marie coordinates the activities of the USGS Streamgage Network and other programs with our federal partners, such as the National Weather Service and the US Army Corps of Engineers. She also works on geospatial data coordination and communication for other programs, including the USGS flooding and hurricane responses. Marie started her career with the USGS Wisconsin Water Science Center in 2002 as a geomorphologist and graduated with a Master\'s Degree in Geography in 2006 from the University of Wisconsin – Madison. In her spare time, Marie likes to travel, sew, quilt, knit, make furniture, volunteer, and take long walks to the neighborhood bar with her dogs, Indy and Zoe.'
        // },{
        //     'firstname' : 'Scott',
        //     'lastname' : 'Morlock',
        //     'title' : 'Science Coordinator',
        //     'email' : 'smorlock@usgs.gov',
        //     'bio' : 'Scott Morlock is the USGS Midwest Region Science Coordinator for the Midwest Region. He has been with the USGS for 23 years and has held positions including hydrologist, supervisory hydrologist, center deputy director, and acting center director. He drives his wife crazy, because (among other things) no matter where they go on vacation, he manages to find a streamgage!'
        }
    ];


    //
    // PROJECTS
    //
    $scope.projects = [
        {
            'title' : 'Bad River Groundwater Model',
            'body' : 'The Bad River Groundwater Model Mapper is a companion product to the USGS report “Groundwater-Surface Water Interactions in the Bad River Watershed, Wisconsin" (in review). This project consists of three map applications that display information from a regional groundwater-flow model developed for this study. The "Inputs Mapper" displays inputs to the model such as estimates of recharge and hydraulic conductivity. The "Results Mapper" displays model outputs including simulated water-table elevations, groundwater-flow directions, baseflows in streams, and comparisons of model outputs to field measurements. The third map, the "New Data Worth Mapper" displays the results of an analysis of potential monitoring well locations, which were evaluated for their ability to increase confidence in model predictions, under the condition of simulated dewatering from a proposed open-pit iron mine.',
            'view' : '',
            'learn' : 'http://wim.usgs.gov/badriver/',
            'image' : 'badriver.png',
            'slug' : 'badriver'
        },{
            'title' : 'Coastal Barrier Resources Act - CBRA',
            'body' : 'The Coastal Barrier Resources Act (CBRA) of 1982 designated areas of relatively undeveloped coastal barriers along the Atlantic and Gulf coasts as part of the John H. Chafee Coastal Barrier Resources System (CBRS), and made these areas ineligible for most new federal expenditures and financial assistance.The CBRA mapper assists property owners, local, state, and federal stakeholders to identify those areas included in the Coastal Barrier Resources Act.',
            'learn' : 'http://www.fws.gov/cbra/',
            'image' : 'cbra.png',
            'slug' : 'cbra'
        },{
            'title' : 'Flood Inundation Mapper - FIM',
            'body' : 'The USGS Flood Inundation Mapper combines flood inundation map libraries with real-time USGS river-level data and National Weather Service flood forecasts into a powerful tool that helps communicate when and where flooding may occur and bettter inform local responses that can protect lives and property.',
            'view' : 'http://wimcloud.usgs.gov/apps/FIM/FloodInundationMapper.html',
            'learn' : 'http://water.usgs.gov/osw/flood_inundation/',
            'image' : 'fim.png',
            'slug' : 'fim'
        },{
            'title' : 'Fish & Wildlife Service Wetlands',
            'body' : 'The U.S. Fish and Wildlife Service is the principal federal agency that provides information to the public on the extent and status of the Nation\'s wetlands. The agency has developed a series of topical maps to show wetlands and deepwater habitats which can be viewed and downloaded through the wetlands mapper. This geospatial information is used by federal, state, and local agencies, academic institutions, and private industry for management, research, policy development, education and planning activities.',
            'view' : 'http://www.fws.gov/wetlands/Data/Mapper.html',
            'learn' : 'http://www.fws.gov/wetlands/',
            'image' : 'wetlands.png',
            'slug' : 'wetlands'
        },{
            'title' : 'FishVis',
            'body' : 'Fish Vis Mapper presents possible changes in fish species occurrence in response to global climate change. Global climate change effects on fish species occurrence in streams were evaluated by means of a number of linked general circulation, groundwater recharge, stream temperature, and streamflow exceedance models. General circulation models (GCMs):  Fish Vis Mapper results are based on a emissions scenario known as “A1B”, developed by the Intergovernmental Panel on Climate Change. The A1B emissions scenario assumes a balanced approach to energy production is followed (fossil versus non-fossil) for the remainder of this century. The A1B emissions scenario was used as input to 13 general circulation models that provide potential air temperature and precipitation patterns to the remaining models.',
            'view' : 'https://ccviewer.wim.usgs.gov/FishVis/',
            'learn' : 'https://greatlakesinform.org/dynamic-maps/661',
            'image' : 'fishvis.png',
            'slug' : 'fishvis'
        },{
            'title' : 'National Water Quality Assessment - NAWQA Trends',
            'body' : 'About 140 million people—almost one-half of the Nation\'s population—rely on groundwater for drinking water, and the demand for groundwater for irrigation and agriculture continues to increase. This mapper shows how concentrations of pesticides, nutrients, metals, and organic contaminants in groundwater are changing during decadal periods across the Nation. Tracking changes in groundwater quality and investigating the reasons for these changes is crucial for informing management decisions to protect and sustain our valuable groundwater resources.',
            'view' : 'http://nawqatrends.wim.usgs.gov/Decadal/',
            'learn' : '',
            'image' : 'nawqa.png',
            'slug' : 'nawqa'
        },{
            'title' : 'New Jersey Reservoir',
            'body' : 'The New Jersey Reservoir Mapper provides a snapshot of most recent available water-level data for 25 gaged reservoirs in New Jersey. Streamflow information is displayed for gages immediately downstream from the reservoirs.',
            'view' : 'http://wim.usgs.gov/NJReservoirMapper/NJReservoirMapper.html#',
            'learn' : 'http://nj.usgs.gov/',
            'image' : 'njres.png',
            'slug' : 'njres'
        },{
            'title' : 'Northeast Stream Temperature - NorEaST',
            'body' : 'The NorEaST mapper is the cartographic portal to the NorEaST Stream Temperature Database. The NorEaST map displays a filterable map of stream-temperature data-collection points, and then passes users onto a companion application (built by USGS Center for Integrated Data Analytics) where they can access data summaries and visualization tools for a particular site.',
            'view' : 'https://ccviewer.wim.usgs.gov/noreast/',
            'learn' : 'http://northatlanticlcc.org/projects/stream-temperature-inventory-and-mapper',
            'image' : 'noreast.png',
            'slug' : 'noreast'
        },{
            'title' : 'Science in the Great Lakes - SiGL',
            'body' : 'The Science in the Great Lakes (SiGL) Mapper is a map-based discovery tool that spatially displays basin-wide multi-disciplinary monitoring and research activities conducted by both USGS and partners from all five Great Lakes. It was designed to help Great Lakes researchers and managers strategically plan, implement, and analyze monitoring and restoration activities by providing easy access to historical and on-going project metadata while allowing them to identifying gaps (spatially and topically) that have been underrepresented in previous efforts or need further study. SiGL provides a user-friendly and efficient way to explore Great Lakes projects and data through robust search options while also providing a critical spatial perspective through its interactive mapping interface.',
            'view' : 'http://sigl.wim.usgs.gov/sigl/',
            'learn' : '',
            'image' : 'sigl.png',
            'slug' : 'sigl'
        },{
            'title' : 'Spatially Referenced Regressions on Watershed Attributes - SPARROW',
            'body' : 'SPARROW (SPAtially Referenced Regressions on Watershed attributes) is a collection of tools for relating water-quality monitoring data and watershed attributes. Sparrow models are designed to describe the spatial patterns of water quality and the factors that affect it. WiM has partnered with SPARROW scientists to provide several map applications depicting SPARROW models for different regions of the U.S. These interactive applications provide flexible and customizable visualizations of SPARROW model results. There are several SPARROW Mappers available at the link above.',
            'view' : '',
            'learn' : 'http://wi.water.usgs.gov/nutrients/sparrow/',
            'image' : 'sparrow.png',
            'slug' : 'sparrow'
        },{
            'title' : 'U.S. EPA Bulletins Live Two - BLT',
            'body' : 'U.S. EPA\'s Endangered Species Protection Program (ESPP) helps promote the recovery of listed species by determining whether pesticide use in a certain geographic area may affect any listed species. The BLT application relys on the current EPA limitations on pesticide use that are necessary to protect the endangered species in that area.',
            'view' : 'https://www.epa.gov/endangered-species/bulletins-live-two-view-bulletins/',
            'learn' : 'https://www.epa.gov/endangered-species/endangered-species-protection-bulletins',
            'image' : 'blt.png',
            'slug' : 'bulletinslive'
        },{
            'title' : 'U.S. EPA San Francisco Bay',
            'body' : 'In 2007, the Center for Biological Diversity filed a lawsuit in the U.S. District Court alleging that U.S. EPA had failed to comply with section 7(a)(2) of the Endangered Species Act (ESA) in regard to 47 pesticides and 11 species that are listed as endangered or threatened. 75 pesticides came to be at issue in this case. This mapping application shows the court ordered restrictions put in place for these 75 pesticides protecting the 11 species listed under the lawsuit.',
            'view' : 'http://sfbmap.epa.gov/sfbMap/',
            'learn' : '',
            'image' : 'sfbay.png',
            'slug' : 'sfbay'
        },{
            'title' : 'USGS Flood Event Viewer',
            'body' : 'The USGS Flood Event Viewer is a map-based data discovery tool for public access to the USGS Short-Term Network database. Users view a map of the sensors and high-water marks deployed and collected during large-scale flood events. Users can also access detailed information about each sensor and high-water marks, including site photos and data files.',
            'view' : 'http://stn.wim.usgs.gov/fev',
            'learn' : '',
            'image' : 'fev.png',
            'slug' : 'fev'
        }
    ];
    // ,{
    //     'title' : 'Western Lake Erie Restoration Assessment - WLERA',
    //     'body' : 'The Western Lake Erie Restoration Assessment (WLERA) model was co-developed by investigators in the Environmental Studies Program at the New College of Florida in Sarasota, Florida and the USGS - Great Lakes Science Center in Ann Arbor, Michigan. The WLERA is a geodesign framework for measuring the potential to restore coastal wetlands in the Great Lakes basin. This framework is based on the expert coupling of multiple criteria decision analysis and geographic information systems. Experts included regional wetland ecologists, biologists, planners and geographers from federal, state, academic and non- governmental organizations. Criteria include historical water levels, topography, soils, mapped wetlands, managed lands, and impervious and non-impervious development on the landscape. The WLERA data and kernel analysis are organized in ArcGIS 10.3 geodatabases and python applications.',
    //     'view' : 'http://wlera.wim.usgs.gov/WLERA/',
    //     'learn' : '',
    //     'image' : 'wlera.png',
    //     'slug' : 'wlera'
    // }

// Mercury
//http://wim.usgs.gov/MercuryMapper/MercuryMapper.html#app=66e3&5600-selectedIndex=1
});



wimApp.controller('projectsController', function($scope) {

});



wimApp.controller('teamController', function($scope) {



});


wimApp.controller('teamIndividualController', ['$scope', '$location', '$route', '$routeParams',
    function($scope, $location, $route, $routeParams) {

        $scope.memberNumber = $routeParams.number;
        $scope.category = $routeParams.category;


}]);

wimApp.controller('projectIndividualController', ['$scope', '$location', '$route', '$routeParams',
    function($scope, $location, $route, $routeParams) {

        $scope.projectNumber = $routeParams.number;


}]);
wimApp.controller('geonarrativesController', ['$scope', '$location', '$route', '$routeParams',
    function($scope, $location, $route, $routeParams) {


}]);
