////////////////////////////////////
// Featured apps display & router
// Featured apps display & router
// Featured apps display & router
////////////////////////////////////
var router = new VueRouter({
	routes: [
	  	{ path: '/:projectSlug', component: featuredProjects }
	]
})
var featuredProjects = new Vue({
	el: '#featuredProjects',
	router,
    delimiters: ["${", "}"],

	data: {
	  	apps: [],
	  	selectedProject: {},
		showFeaturedPopup: false,
		thumbnailZoom: false,
		fullImage: []
	},
	methods: {
		updateURL(slug) {
			router.replace(slug)
		},
		closeFeaturedWindow(empty){
			this.showFeaturedPopup = false;
			document.getElementsByTagName("body")[0].style.overflow = "auto"; 
			router.push({ name: 'projects', params: { projectSlug: '' } })
		},
		openFeaturedWindow(slug){
			this.selectedProject = this.apps[slug]; 
			this.showFeaturedPopup = true; 
			this.updateURL(slug)
			document.getElementsByTagName("body")[0].style.overflow = "hidden"; 
		},
		zoomImage(file, description){
			console.log(file);
			console.log(description)
			this.thumbnailZoom = true;
			this.fullImage = {
				file: file,
				description: description
			}
		}
	}
})

// Watch for slug, load project if found
// Watch for slug, load project if found
// Watch for slug, load project if found
window.addEventListener("load", function(event) {
	var slug = featuredProjects.$route.params.projectSlug;
	if(slug){
		slug = slug.toLowerCase();
	}
	if(slug){			
		featuredProjects.showFeaturedPopup = true;
		featuredProjects.selectedProject = featuredProjects.apps[slug]
		document.getElementsByTagName("body")[0].style.overflow = "hidden"; 
	}
});


featuredProjects.apps = {
	// StreamStats
	// StreamStats
	// StreamStats
	// StreamStats
	streamstats: {
		slug: "streamstats",
		name: "StreamStats",
		short_desc: "StreamStats provides access to spatial analytical tools providing USGS water science-backed information that are useful for water-resources planning and management, and for engineering and design purposes.",
		image_1: "streamstats_1.png",
		long_description: [
			"StreamStats is a Web-based Geographic Information Systems (GIS) application that provides users with access to an assortment of analytical tools that are useful for a variety of water-resources planning and management purposes, and for engineering and design purposes. StreamStats users can select USGS data-collection station locations shown on a map and obtain previously published information for the stations. Users also can select any location along a stream and obtain the drainage-basin boundary, basin characteristics, and estimates of streamflow statistics for the location. The streamflow statistics that StreamStats can provide for data-collection stations and for user-selected ungaged sites vary among the implemented states and among data-collection stations within states.",
			"WIM began collaborating with the USGS Water Mission Area StreamStats development team in 2014, and has since taken the technical and architecture lead in web development. To keep StreamStats on the forefront of web technology, WIM has moved StreamStats away from a proprietary monolithic application to an ecosystem of web applications and services allowing for more flexibility and extensibility. Adapting an industry-standard database, web service, and client architecture model has allowed development of numerous APIs and clients to allow for external development on this key system as well better integration possibilities within the USGS. WIM looks forward to continued involvement in the project, adding additional features and functionality to StreamStats as well as integrating with other Water Mission Area systems and services."
		],
		screenshots: [
			{
				file: "streamstats_1.png",
				description: "Primary StreamStats Client Interface showing large basin in IA"
			},{
				file: "streamstats_2.png",
				description: "API documentation for National Streamflow Statistics"
			},{
				file: "streamstats_3.png",
				description: "Upstream flow trace from pourpoint in an OH basin"
			},{
				file: "streamstats_4.png",
				description: "Flow Statistics available in Streamstats report"
			}
		],
		cooperator_logo: "wma",
		cooperator: "USGS Water Mission Area",
		name_full: "",
		related_repos: [
			{
				name: "StreamStats",
				description: "USGS Streamstats Web Application",
				homepageURL: "https://streamstats.usgs.gov/ss/"
			},{
				name: "StreamStatsWebserviceDocumentation",
				description: "Light weight angular app that documents ss REST services",
				homepageURL: "https://streamstats.usgs.gov/streamstatsservices"
			},{
				name: "StreamStatsServices",
				description: "StreamStats REST Services",
				homepageURL: "https://streamstats.usgs.gov/streamstatsservices"
			},{
				name: "StreamStats-Setup",
				description: "Setup scripts and information for StreamStats",
				homepageURL: ""
			},{
				name: "StreamStatsNationalServices",
				description: "National Implementation of Streamstats Services",
				homepageURL: ""
			},{
				name: "NSS",
				description: "NSS Client Application",
				homepageURL: ""
			},{
				name: "NSSServices",
				description: "Services to calculate National Streamflow statistics",
				homepageURL: "https://streamstats.usgs.gov/nssservices"
			},{
				name: "wateruse",
				description: "Client application for data management of wateruse data",
				homepageURL: "https://test.streamstats.usgs.gov/wu"
			},{
				name: "WaterUseServices",
				description: "Services for wateruse data",
				homepageURL: ""
			},{
				name: "NavigationServices",
				description: "Network navigation REST web services used for NHDplus V2 network navigation",
				homepageURL: "https://streamstats.usgs.gov/navigationservices"
			},{
				name: "StreamStats-Tools",
				description: "A collection of tools for StreamStats data preparation and upload to AWS",
				homepageURL: ""
			},{
				name: "FlowDirectionTraceServices",
				description: "StreamStats custom Flow Direction Trace to be served as a arcgeo-processing service",
				homepageURL: "https://streamstats.usgs.gov/navigationservices"
			},{
				name: "TravelTime",
				description: "Time of travel client application",
				homepageURL: ""
			},{
				name: "TravelTimeService",
				description: "StreamStats Time of travel",
				homepageURL: ""
			}
		],
		repo_links: [
			{
				link: "https://streamstats.usgs.gov/ss/",
				text: "Open StreamStats",
				link_icon: "far fa-external-link-square-alt"
			},{
				link: "https://www.usgs.gov/mission-areas/water-resources/science/streamstats-streamflow-statistics-and-spatial-analysis-tools",
				text: "View Project Page",
				link_icon: "far fa-info-square"
			}
		]
	},
	// FIM
	// FIM
	// FIM
	// FIM
	fim: {
		slug: "fim",
		name: "Flood Inundation Mapper",
		short_desc: "The USGS Flood Inundation Mapper combines flood inundation map libraries with real-time USGS river-level data and National Weather Service flood forecasts into a powerful tool that helps communicate when and where flooding may occur and better inform local responses that can protect lives and property.",
		image_1: "fim_1.png",
		long_description: [
			"The USGS Flood Inundation Mapping Program has two main functions:",
			"1) Partner with local communities to assist with the development and validation of flood inundation map libraries. A flood inundation map library is a set of maps that shows where flooding may occur over a range of water levels in the community's local stream or river. The USGS works with communities to identify an appropriate stream section, gather the necessary data to model where flooding will likely occur, and verify that the maps produced are scientifically sound.",
			"2) Provide online access to flood inundation maps along with real-time streamflow data, flood forecasts, and potential loss estimates. Once a community's map library is complete, it is uploaded to the FIM Web application, an online public mapping application. This web application allows users to explore the full set of inundation maps that shows where flooding would occur given a selected stream condition. Users can also access historical flood information and potential loss estimates based on the severity of the flood. The FIM Web Application helps communities visualize potential flooding scenarios, identify areas and resources that may be at risk, and enhance their local response effort during a flooding event.",
			"WIM has lead development and technical operations of the USGS FIM program since inception. In collaboration with the Water Mission Area and other Water Science Center personnel, WIM has provided FIM map services, supported the development and deployment of new FIM sites, and maintained an interactive web application to serve the public."
		],
		screenshots: [
			{
				file: "fim_1.png",
				description: "FIM Flood Tools"
			},{
				file: "fim_2.png",
				description: "Site Hydrograph"
			},{
				file: "fim_3.png",
				description: "AHPS Forecast Sites & Explanation"
			},{
				file: "fim_4.png",
				description: "Minimized Flood Tools"
			}
		],
		cooperator_logo: "cooperator_logo",
		cooperator: "USGS Water Mission Area",
		name_full: "Flood Inundation Mapper",
		repo_links: [
			{
				link: "https://github.com/usgs-wim/fim-js",
				text: "View on GitHub",
				link_icon: "fab fa-github"
			},{
				link: "https://www.usgs.gov/mission-areas/water-resources/science/flood-inundation-mapping-fim-program?qt-science_center_objects=0#qt-science_center_objects",
				text: "View Project Page",
				link_icon: "fas fa-external-link-square"
			}
		]
	},
	// SPARROW
	// SPARROW
	// SPARROW
	// SPARROW
	sparrow: {
		slug: "sparrow",
		name: "SPARROW",
		short_desc: "SPARROW is a collection of tools for relating water-quality monitoring data and watershed attributes. Sparrow models are designed to describe the spatial patterns of water quality and the factors that affect it. WIM has partnered with SPARROW scientists to provide a suite of map applications depicting SPARROW models for different regions of the U.S. and parts of Canada.",
		image_1: "sparrow_1.png",
		long_description: [
			"SPARROW (SPAtially Referenced Regressions On Watershed attributes) models estimate the amount of a contaminant transported from inland watersheds to larger water bodies by linking monitoring data with information on watershed characteristics and contaminant sources. SPARROW models are used to estimate long-term average values of water characteristics, such as the amount of a contaminant that is delivered downstream, on the basis of existing monitoring data, location and strength of contaminant sources, and characteristics of the landscape.",
			"These interactive map applications are designed around comprehensive user-defined map selections with dynamic graphs and tables to visualize underlying data.  The flexible, map-based approach to viewing SPARROW models helps managers visualize thousands to millions of data points to determine how to reduce loads of contaminants and design protection strategies; design strategies to meet regulatory requirements; predict changes in water quality that might result from management actions; and identify gaps and priorities in monitoring.",
			"In collaboration with local and national SPARROW modelers, WIM has produced several generations of SPARROW online interactive map viewers to highlight the amount of data produced by this powerful model."
		],
		screenshots: [
			{
				file: "sparrow_1.png",
				description: "The main interface of a SPARROW application allows flexible map selections and customizable data views"
			},{
				file: "sparrow_2.png",
				description: "An example of a SPARROW national model"
			},{
				file: "sparrow_3.png",
				description: "Interactive chart depicting nutrient sources and quantities within a specified region"
			},{
				file: "sparrow_4.png",
				description: "Downloadable table view for all nutrient source values in a user-selected region"
			}
		],
		cooperator_logo: "nwqa",
		cooperator: "National Water-Quality Assessment",
		name_full: "SPAtially Referenced Regressions On Watershed attributes",
		related_repos: [
			{
				name: "sparrow-national-dissolved-solids-js",
				description: "Sparrow National Dissolved Solids"
			},{
				name: "sparrow-midwest-js",
				description: "ESRI javascript API map app for SPARROW Midwest data"
			},{
				name: "sparrow-northwest-js",
				description: "Pacific Northwest."
			},{
				name: "sparrow-midcontinental-js",
				description: "Sparrow Midcontinental"
			},{
				name: "sparrow-california-js",
				description: "Javascript SPARROW map interface for California"
			},{
				name: "sparrow-marb-js",
				description: "Javascript version of SPARROW MARB (mississippi) models"
			},{
				name: "sparrowTennessee",
				description: "JS version of SPARROW"
			},{
				name: "sparrow-greatlakes-js",
				description: "JS Version of Sparrow Great Lakes (based on MRB3 model)"
			},{
				name: "sparrow-eastern-us-js",
				description: "Eastern United States NHD model"
			}
		],
		repo_links: [
			{
				link: "https://github.com/USGS-WiM?utf8=✓&q=sparrow",
				text: "View All on GitHub",
				link_icon: "fab fa-github"
			},{
				link: "https://www.usgs.gov/mission-areas/water-resources/science/sparrow-modeling-estimating-nutrient-sediment-and-dissolved?qt-science_center_objects=4#qt-science_center_objects",
				text: "View Project Page",
				link_icon: "fas fa-external-link-square"
			}
		]
	},
	// WHISPERS
	// WHISPERS
	// WHISPERS
	// WHISPERS
	whispers: {
		slug: "whispers",
		name: "WHISPers",
		short_desc: "WHISPers is the Wildlife Health Information Sharing Partnership event reporting system. It web application exposing wildlife mortality data submitted by partners across North America and verified by trained biologists.",
		image_1: "whispers_1.png",
		long_description: [
			"WHISPers (Wildlife Health Information Sharing Partnership event reporting system)  is a partner-driven, web-based repository for sharing current and historic data on wildlife morbidity or mortality events in North America and beyond. The data, including event locations, onset and ending dates, species affected, and diagnosis has generously been shared with the USGS National Wildlife Health Center over time by hundreds of natural resource managers and stakeholders across the U.S. and beyond to enhance collective understanding of disease in wildlife populations.",
			"In collaboration with the National Wildlife Health Center and with a grant from the National Biosurveillance Integration Center, WIM developed WHISPers version 2 to modernize the application architecture, user interface, and increase the data management and data sharing capabilities of the system; with the ultimate goal of making wildlife mortality and morbidity data more accessible to all interested parties."
		],
		screenshots: [
			{
				file: "whispers_1.png",
				description: "WHISPers maps search results as well as providing tabular results for easy review."
			},{
				file: "whispers_2.png",
				description: "Users can search the WHISPers with a number of parameters relating to location and nature of the infection."
			},{
				file: "whispers_3.png",
				description: "A dedicated event details page for each event provides all event details available. Availability is based on permissions required for more sensitive data."
			},{
				file: "whispers_4.png",
				description: "A user dashboard allows for special  actions for data and contact management that allow the user to personalize their experience."
			}
		],
		cooperator_logo: "nwhc",
		cooperator: "USGS National Wildlife Health Center",
		name_full: "Wildlife Health Information Sharing Partnership event reporting system",
		related_repos: [
			{
				name: "WHISPers",
				description: "Wildlife Health Information Sharing Partnership event reporting system(WHISPers) v2"
			},{
				name: "whispersservices_django",
				description: "Django services for WHISPers"
			}
		],
	},
	// WETLANDS
	// WETLANDS
	// WETLANDS
	// WETLANDS
	wetlands: {
		slug: "wetlands",
		name: "Wetlands Inventory",
		short_desc: "The U.S. Fish and Wildlife Service is the principal federal agency that provides information to the public on the extent and status of the Nation's wetlands. The agency has developed a series of topical maps to show wetlands and deepwater habitats which can be viewed and downloaded through the wetlands mapper.",
		image_1: "wetlands_1.png",
		long_description: [
			"The Wetlands mapper is designed to deliver easy-to-use, map like views of America's Wetland resources. It integrates digital map data along with other resource information to produce current information on the status, extent, characteristics and functions of wetlands, riparian, and deepwater habitats. The Wetlands Mapper fulfills the U.S. Fish and Wildlife Service's strategic plan for the development, revision and dissemination of wetlands data and information to resource managers and the public. This information is intended to promote the understanding and conservation of wetland resources through discovery and education as well as to aid in resource management, research and decision making.",
			"WIM personnel and the FWS wetlands group made use of an inter-agency agreement in 2000s to co-develop this key resource. This Federal partnership has yielded tremendous benefits in ongoing efforts to configure, improve and distribute the wetlands map information using newer technologies in digital mapping and web-serving capabilities."
		],
		screenshots: [
			{
				file: "wetlands_1.png",
				description: "Wetlands Screenshot 1 Caption"
			},{
				file: "wetlands_2.png",
				description: "Wetlands Screenshot 2 Caption"
			},{
				file: "wetlands_3.png",
				description: "Wetlands Screenshot 3 Caption"
			},{
				file: "wetlands_4.png",
				description: "Wetlands Screenshot 4 Caption"
			}
		],
		cooperator_logo: "fws",
		cooperator: "US Fish and Wildlife Service",
		name_full: "",
		repo_links: [
			{
				link: "https://github.com/usgs-wim/swi",
				text: "View on GitHub",
				link_icon: "fab fa-github"
			}
		]
	},
	// NAWQA
	// NAWQA
	// NAWQA
	// NAWQA
	nawqa: {
		slug: "nawqa",
		name: "NAWQA Surface Water Quality Trends",
		short_desc: "This USGS Water-Quality Changes in the Nation’s Streams and Rivers mapper provides results from the largest-ever assessment of water-quality changes in the Nation's streams and rivers. More than 185 million water-quality records from over 600 Federal, State, Tribal, and local organizations were screened as part of this assessment.",
		image_1: "nawqa_1.png",
		long_description: [
			"One of the major goals of the U.S. Geological Survey's (USGS) National Water-Quality Assessment project is to answer the question “Has water quality been changing over time?”. To support that goal, they have conducted long-term consistent and comparable monitoring on streams and rivers throughout the Nation since 1992. Other USGS programs, as well as many other Federal, State, regional, and local monitoring organizations, also have collected long-term water-quality data to support their own assessments of changing water- quality conditions. Data from these organizations have been aggregated, screened, standardized, and used to support the most comprehensive assessment of stream-quality trends conducted to date in the United States. Collectively, these trend results will be used to provide insight into how natural features and human activities have contributed to water-quality changes over time in the Nation's streams and rivers.",
			"WIM worked closely with USGS scientists to develop and release this interactive map interface with the release of their trends report."
		],
		screenshots: [
			{
				file: "nawqa_1.png",
				description: "Map icons indicating trend results"
			},{
				file: "nawqa_2.png",
				description: "Highlighted HUC and site information"
			},{
				file: "nawqa_3.png",
				description: "Trend results table for a site"
			},{
				file: "nawqa_4.png",
				description: "Constituent Select Menu"
			}
		],
		cooperator_logo: "nwqa",
		cooperator: "National Water-Quality Assessment",
		name_full: "National Water-Quality Assessment",
		repo_links: [
			{
				link: "https://github.com/USGS-WiM/nawqa-sw-trends",
				text: "View on GitHub",
				link_icon: "fab fa-github"
			}
		]
	}
}


///////////////////////////////////
// All Project display and search
// All Project display and search
// All Project display and search
///////////////////////////////////

var wimProjects = new Vue({
    el: '#allProjects',
    delimiters: ["${", "}"],
    data: {
		message: '',
		showAllProjects: false,
        featured: [],
        allRepos: [],
        repoCount: 0,
        projectSearch: ''
    },
    computed: {
        newestRepos: function () {
            this.allRepos.sort((a, b) => {
                return new Date(b.updated_at) - new Date(a.updated_at);
            });
            return this.allRepos;
        },
        filteredList() {
            return this.allRepos.filter(repo => {
                // Combine all GitHub fields to search into one string
                var repoSearchString = repo.name + " " + repo.description + " " + repo.languages + " " + repo.tags;
                return repoSearchString.toLowerCase().includes(this.projectSearch.toLowerCase())
            })
        }
    }
})



var allRepos = [];



var getRepos = function(jsonFile){

    $.ajax({
        url: "/src/"+jsonFile,
        jsonp: true,
        method: "GET",
        dataType: "json",
        success: function (res) {

            var loadRepos = res.data.organization.repositories.nodes;


            // Parse JSON and remove empty code.json repos
            for (var i = 0; i < loadRepos.length; i++) {

                // If code.json exists
                if(loadRepos[i].object !== null){

                    // Parse JSON
                    var parsed = JSON.parse(loadRepos[i].object.text);
                 
                    // Remove undefined
                    if(parsed[0]){
                      
						// Only save if beta or Production
						if(parsed[0].name.toString().toLowerCase() === 'wimpo'){
							// Ignore wimpo
						}else if(parsed[0].status.toString().toLowerCase() === 'production' || parsed[0].status.toString().toLowerCase() === 'beta'){
                            allRepos.push(parsed[0])
                        }
                    }
                }


            }


            // Do it all again with 2nd 100 repos
            if(jsonFile == 'repos1.json'){
                getRepos('repos2.json')
            }else{
                // wimProjects.allRepos = allRepos;
                wimProjects.repoCount = allRepos.length;

                var repoNames = [];
                allRepos.forEach(function (repo) {

                    if (repoNames.includes(repo.name)){
                        // Duplicate
                    }else{
                        repoNames.push(repo.name);
                        wimProjects.allRepos.push(repo);
                    }
                });
            }
        }
    });
}

getRepos("repos1.json");




