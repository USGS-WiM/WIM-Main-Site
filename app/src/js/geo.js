var geonarratives = new Vue({
    el: '#geonarrativeList',
    delimiters: ["${", "}"],
    data: {
		message: '',
        featured: [],
        geoList: {},
        repoCount: 0,
        projectSearch: ''
    },
	computed: {
        filteredList() {
            return this.geoList.filter(repo => {
                // Combine all GitHub fields to search into one string
                var repoSearchString = repo.name + " " + repo.description  + " " + repo.tag;
                return repoSearchString.toLowerCase().includes(this.projectSearch.toLowerCase())
            })
        }
    }
})


geonarratives.geoList = [
	{
		"url": "2017cooperativefishwildliferesearchunits/",
		"name": "USGS Cooperative Fish and Wildlife Research Units: 2017 Year In Review",
		"description": "Coop Unit scientists lead research to provide science solutions for the management needs of our partners and inform decision making. This geo-narrative features examples of the diversity of mangement-oriented research conducted with State and Federal cooperators in 2017.",
		"background_url": "https://services.arcgis.com/v01gqwM5QqNysAAi/arcgis/rest/services/2017_YIR_Images/FeatureServer/0/2/attachments/4"
	},
	{
		"url": "2018CooperativeResearchUnits/",
		"name": "USGS Cooperative Fish and Wildlife Research Units: 2018 Year In Review",
		"description": "Coop Unit scientists lead research to provide science solutions for the management needs of our partners and inform decision making. This geo-narrative features examples of the diversity of mangement-oriented research conducted with State and Federal cooperators in 2018.",
		"background_url": "www.arcgis.com/sharing/rest/content/items/e42de68431c549eaaf429ed83580ad42/resources/NE_Hunter__1481902186198__w1500.jpg"
	},
	{
		"url": "2019cruyearinreview/",
		"name": "USGS Cooperative Fish and Wildlife Research Units: 2019 Year In Review",
		"description": "Coop Unit scientists lead research to provide science solutions for the management needs of our partners and inform decision making. This geo-narrative features examples of the diversity of mangement-oriented research conducted with State and Federal cooperators in 2019.",
		"background_url": "https://www.arcgis.com/sharing/rest/content/items/e42de68431c549eaaf429ed83580ad42/resources/ID%20Kokanee__1506087221746__w1058.bmp"
	},
	{
		"url": "2020annualcascsummary/",
		"name": "2020 Annual CASC Summary",
		"description": "National Climate Adaptation Science Center 2020 annual summary. Learn more about the CASC's great science, partnerships, capacity building, and more from Fiscal Year 2020.",
		"background_url": "https://www.arcgis.com/sharing/rest/content/items/e42de68431c549eaaf429ed83580ad42/resources/FL%20Air%20Boat__1506100935064__w1106.jpg"
	},
	{
		"url": "2020cruyearinreview/",
		"name": "USGS Cooperative Fish and Wildlife Research Units: 2020 Year In Review",
		"description": "Coop Unit scientists lead research to provide science solutions for the management needs of our partners and inform decision making. This geo-narrative features examples of the diversity of mangement-oriented research conducted with State and Federal cooperators in 2020.",
		"background_url": "www.arcgis.com/sharing/rest/content/items/e42de68431c549eaaf429ed83580ad42/resources/Wild%20Trout__1492869141781__w1500.jpg"
	},
	{
		"url": "3depforhazards/",
		"name": "The 3D Elevation Program",
		"description": "The 3D Elevation Program: Understandating natural aazards in three dimensions.",
		"background_url": "https://prd-wret.s3-us-west-2.amazonaws.com/assets/palladium/production/s3fs-public/thumbnails/image/zion_DEM2.jpg"
	},
	{
		"tag": "UMid",
		"url": "badriver2016flood/",
		"name": "Bad River 2016 Flood",
		"description": "Measuring the July 2016 flood in northern Wisconsin and the Bad River Reservation.",
		"background_url": "www.arcgis.com/sharing/rest/content/items/c6edd61441344a8f95f3dd647f9b6fe0/resources/USGS_BadRiver_sedimentplume__1497025567554__w1500.jpg"
	},
	{
		"url": "calvo_exposure/",
		"name": "California's Exposure to Volcanic Hazards",
		"description": "The report \"California's Exposure to Volcanic Hazards\" provides a broad perspective on the State’s exposure to volcanic hazards by integrating volcanic hazard information with geospatial data on at-risk populations, infrastructure, and resources. ",
		"background_url": "https://www.arcgis.com/sharing/rest/content/items/0127b52f6e7c4b4c96362f716da0c81e/resources/img6873__1574109551784__w1228.jpg"
	},
	{
		"url": "cch-alaska/",
		"name": "Coastal Change in Alaska",
		"description": "USGS research on coastal change on Alaska's Arctic coast.",
		"background_url": "https://www.arcgis.com/sharing/rest/content/items/231fe6e671e5425fbffd2980d24c6fe8/resources/IMGP0963__1575676766291.JPG"
	},
	{
		"url": "cch-bi/",
		"name": "Barrier Islands",
		"description": "USGS researchers monitor barrier islands.",
		"background_url": "https://www.arcgis.com/sharing/rest/content/items/c33ecf46cf1d4ad0aec6d95a7a87589f/resources/2014_0906_180219d__1573857876030.jpeg"
	},
	{
		"url": "cch-floodfut/",
		"name": "Coastal Storms",
		"description": "Prediction of flooding now and into the future.",
		"background_url": "https://www.arcgis.com/sharing/rest/content/items/4ce74734f4d2470299e831c11bfbd1d6/resources/Capitola2__1573258178159.jpg"
	},
	{
		"url": "cch-ourcoasts/",
		"name": "Our Coasts",
		"description": "USGS Coastal Change Hazards Research Provides Scientific Tools to Protect Lives, Property, and the Economic Well-Being of the Nation",
		"background_url": "//prd-wret.s3-us-west-2.amazonaws.com/assets/palladium/production/s3fs-public/cover_MakapuuPt_IMG_5259.JPG"
	},
	{
		"url": "cch-reefprot/",
		"name": "Coastal Protection of U.S. Coral Reefs",
		"description": "USGS research on flood protection provided by coral reefs.",
		"background_url": "https://www.arcgis.com/sharing/rest/content/items/e6d00dcfb0794292844d348a39f13096/resources/coral_wave_break_1_sm__1583773698562.jpg"
	},
	{
		"url": "cch-rtstorms/",
		"name": "Real-Time Forecasts of Coastal Change",
		"description": "USGS researchers develop tools to forecast coastal change hazards.",
		"background_url": "https://www.arcgis.com/sharing/rest/content/items/e1dd6abdd79d4887a4b7e4bf422db43c/resources/2008_0915_145333d-Ike__1571339499165.jpg"
	},
	{
		"url": "cch-shline/",
		"name": "National Shoreline Change",
		"description": "Exploring shoreline positions of the United States from the 1800s to the present.",
		"background_url": "https://www.arcgis.com/sharing/rest/content/items/301969676f9945a1873dfddcffe1c890/resources/HOG_Baseline-Transects-Box-01__1575907144733.jpg"
	},
	{
		"url": "chesapeakefishmercury/",
		"name": "Mercury in Freshwater Fish of the Chesapeake Bay Watershed",
		"description": "Mercury in freshwater fish of the Chesapeake Bay Watershed, and a framework for a mercury monitoring program.",
		"background_url": "www.arcgis.com/sharing/rest/content/items/e42de68431c549eaaf429ed83580ad42/resources/Bull trout Glacier National Park-1(1) MT FISH__1492777239010__w1500.jpg"
	},
	{
		"url": "chronicwastingdisease/",
		"name": "Chronic Wasting Disease",
		"description": "Chronic wasting disease is a fatal illness with no vaccine. The disease affects white-tailed deer, mule deer, elk, and moose. Chronic wasting disease is contagious and has been detected in 26 states. USGS Response to Chronic Wasting Disease Fact Sheet 2019-3034.",
		"background_url": "www.arcgis.com/sharing/rest/content/items/e42de68431c549eaaf429ed83580ad42/resources/elk__1492865610195__w1500.jpg"
	},
	{
		"url": "cmhrp/",
		"name": "Coastal and Marine Hazards and Resources Program Decadal Strategic Plan",
		"description": "Welcome to the Decadal Strategic Plan of the Coastal and Marine Hazards and Resources Program (CMHRP) of the USGS for 2020 to 2030. This plan describes the CMHRP's vision and mission and the strategic framework needed to support key program goals: Conduct research and develop science-based tools that lead to safer, more productive coastal communities and improved stewardship of natural resources. ",
		"background_url": "https://www.arcgis.com/sharing/rest/content/items/f3e3ea8e0926486696af969203f05757/resources/Wilderness-Breach-Owen-GPS-Hapke-USGS%20-%20Copy__1534977097380__w1500.jpg"
	},
	{
		"url": "cwdresearch/",
		"name": "Chronic Wasting Disease Research by the USGS and Partners",
		"description": "The USGS, the science bureau of the Department of the Interior, conducts wildlife disease surveillance and research to support management of affected species and their habitats. ",
		"background_url": "https://www.arcgis.com/sharing/rest/content/items/a8a1a7a97aaa4aa7b50499a755eb854d/resources/collage__1588209290608__w1658.png"
	},
	{
		"url": "dmp/",
		"name": "The Dragonfly Mercury Project",
		"description": "A citizen science framework for monitoring mercury pollution in U.S. national parks using dragonfly larvae as biosentinels.",
		"background_url": "https://prd-wret.s3.us-west-2.amazonaws.com/assets/palladium/production/s3fs-public/thumbnails/image/HM2_Dragonfly%20On%20Tagline.jpg"
	},
	{
		"url": "ecologicaldrought/",
		"name": "Ecological Drought Across the Country",
		"description": "Droughts of the future will be hotter, drier, and longer-lasting than droughts of the past",
		"background_url": "https://services.arcgis.com/v01gqwM5QqNysAAi/arcgis/rest/services/2017_YIR_Images/FeatureServer/0/25/attachments/86"
	},
	{
		"url": "ecosystemsmissionarea/",
		"name": "Ecosystems Mission Area",
		"description": "The quality of life and economic strength in America hinges on healthy ecosystems that support living things and natural processes. ",
		"background_url": "https://www.arcgis.com/sharing/rest/content/items/f025d06be5eb4c1d8b099d0940579615/resources/Python1_IMG_1398__1526385356754.JPG"
	},
	{
		"url": "express/",
		"name": "Expanding Pacific Exploration and Research",
		"description": "A multi-agency team is mapping uncharted waters and exploring deep-sea ecosystems off the west coast of the United States.",
		"background_url": "https://prd-wret.s3.us-west-2.amazonaws.com/assets/palladium/production/s3fs-public/thumbnails/image/Pacific%20Coast%20%28Malibu%20Beach%29.jpg"
	},
	{
		"url": "FEHprimer/",
		"name": "Fluvial Erosion Hazards (FEH) Primer",
		"description": "This primer highlights methods used in regional and reach-scale assessments of fluvial erosion hazards (FEH). Fluvial erosion includes bed erosion, meaning lowering of the bed of a stream, as well as bank erosion, which refers to the retreat of stream banks that occurs as a stream widens or migrates laterally. The purpose of this primer is to serve as a starting point for planning an assessment of risks related to fluvial erosion, specifically risks to infrastructure in and near streams.",
		"background_url": "https://www.arcgis.com/sharing/rest/content/items/965cafe962604f7b9a06e1484a8e214d/resources/WhiteLickCreekBrownsburgIN__1565384640836__w896.png"
	},
	{
		"url": "ficc/",
		"name": "Coastal Change at Fire Island, New York",
		"description": "For more than two decades the USGS has been researching Fire Island's offshore, nearshore, and barrier island systems to better understand drivers of coastal change and evolution.",
		"background_url": "https://www.arcgis.com/sharing/rest/content/items/583c81be71964e5a81560665b7a9a5d3/resources/longTerm__1519850498208__w1421.jpg"
	},
	{
		"url": "ficli/",
		"name": "Exploring the Fish and Climate Change Database (FiCli)",
		"description": "FiCli is a comprehensive, publicly-available database of peer-reviewed literature on climate change impacts to inland fish.",
		"background_url": "https://services.arcgis.com/v01gqwM5QqNysAAi/arcgis/rest/services/2017_YIR_Images/FeatureServer/0/11/attachments/42"
	},
	{
		"url": "firescience/",
		"name": "USGS Wildland Fire Science",
		"description": "Supporting the nation's wildland fire management challenges.",
		"background_url": "//prd-wret.s3-us-west-2.amazonaws.com/assets/palladium/production/s3fs-public/thumbnails/image/Fire_SierraNationalForest_CA_USFS_0.jpg"
	},
	{
		"url": "florence_response/",
		"name": "USGS Response to Hurricane Florence",
		"description": "The USGS studies the effects of hurricanes and tropical storms to better understand potential impacts on coastal and inland areas. The knowledge gained by studying real-world storms can also contribute to safer, more cost-effective designs for buildings, bridges, roads and other structures, and inform public safety measures.",
		"background_url": "https://www.arcgis.com/sharing/rest/content/items/3b88cde48cef4905ae808fa181fd6faa/resources/stormtidesensor%20-%20Jessica%20Cain__1553127243521__w1140.jpg"
	},
	{
		"url": "freeportmcmorangwmonitor/",
		"name": "Freeport McMoRan-Safford Mine Groundwater Monitoring",
		"description": "In December of 2007, Freeport-McMoRan Safford Inc. began production at the Safford Mine in southeastern Arizona, about 8 miles north of the town of Safford in Graham County. This was the first major copper mine opened in Arizona since 1973. The long-term role of the USGS at the Safford Mine is to help ensure that the effects of mine-related pumpage on the regional aquifer are known and quantified. ",
		"background_url": "https://az.water.usgs.gov/projects/DosPobres/StoryMap/_CFJ2628.jpg"
	},
	{
		"url": "GLRI_urban_stormwater/",
		"tag": "UMid",
		"name": "Great Lakes Restoration Initiative: Urban Stormwater Monitoring",
		"description": "Assessing stormwater reduction using green infrastructure.",
		"background_url": "www.arcgis.com/sharing/rest/content/items/749f4940744345be8d88b23fcc9b4a13/resources/100_0228__1502729537366__w1500.jpg"
	},
	{
		"url": "glri-eof-commercial/",
		"tag": "UMid",
		"name": "The USGS Upper Midwest WSC and Great Lakes Restoration Initiative: Edge-of-Field Monitoring",
		"description": "Role of the USGS Upper Midwest Water Science Center to support the efforts of the Great Lakes Restoration Initiative by utilizing edge-of-field monitoring to assess the quantity and quality of agricultural runoff and evaluate the effectiveness of conservation practices that aim to reduce sediment and nutrient loss.",
		"background_url": "//s3.amazonaws.com/storymaps.wim.usgs.gov/images/GLRI+EOF/EOFSM_USGS_P2m_EOFharvest2.jpg"
	},
	{
		"url": "glri-eof/",
		"tag": "UMid",
		"name": "Great Lakes Restoration Initiative: Edge-of-field Monitoring",
		"description": "The GLRI Edge-of-Field Monitoring project focuses on identifying and reducing agricultural sources of excess nutrients which can threaten the health of the Great Lakes. The USGS supports these efforts by utilizing edge-of-field (EOF) monitoring to assess the quantity and quality of agricultural runoff and evaluate the effectiveness of conservation practices that aim to reduce sediment and nutrient loss.",
		"background_url": "https://s3.amazonaws.com/storymaps.wim.usgs.gov/images/GLRI+EOF/EOFSM_USGS_W2m_sitedemo.jpg"
	},
	{
		"url": "glri-habs/",
		"tag": "UMid",
		"name": "Harmful Algal Blooms in the Great Lakes",
		"description": "The USGS studies Harmful Algal Blooms (HABs) in the Great Lakes as part of the Great Lakes Restoration Initiative.",
		"background_url": "https://prd-wret.s3.us-west-2.amazonaws.com/assets/palladium/production/s3fs-public/thumbnails/image/L8_9-26-2017_432.jpg"
	},
	{
		"url": "greatlakesmercuryfingerprint/",
		"tag": "UMid",
		"name": "Great Lakes Mercury Sources Revealed",
		"description": "USGS uses innovative \"fingerprinting\" tool to identify sources of mercury pollution in the Great Lakes,",
		"background_url": "https://s3.amazonaws.com/storymaps.wim.usgs.gov/images/Mercury/Images/Mercury_USGS_I1m.jpg"
	},
	{
		"url": "haywardfaultfieldguide/",
		"name": "Hayward Fault Field Guide",
		"description": "The Hayward Fault (HF) is a major fault in the San Francisco Bay, California region. This guide is intended to be a non-technical guide that focuses on a 44-mile (70 km) long section of the fault between San Pablo Bay to the north and the Warm Springs neighborhood of Fremont to the south, of the East San Francisco Bay region.",
		"background_url": "https://escweb.wr.usgs.gov/lidartiles/HaywardFault_StoryMap/Pinole_04_Beach_View.jpg"
	},
	{
		"url": "haywardfaultfieldguidemap/",
		"name": "Hayward Fault Field Guide - Map",
		"description": "A field guide for viewing evidence of the Hayward Fault Zone (HFZ) in the San Francisco Bay region, California.",
		"background_url": "https://escweb.wr.usgs.gov/lidartiles/HaywardFault_StoryMap/Montclair_04_Park_Wall.jpg"
	},
	{
		"url": "indianawetlands/",
		"name": "Indiana Wetlands",
		"description": "Potential wetland extent along selected river reaches in Indiana.",
		"background_url": "https://www.arcgis.com/sharing/rest/content/items/1348326b2d7847d0884fcecb0a0054da/resources/wetland%20farm__1554045271633__w1920.jpg"
	},
	{
		"url": "invasivemussels/",
		"name": "Invasive Mussels in the American West",
		"description": "Invasive zebra and quagga mussels in the American West.",
		"background_url": "https://www.arcgis.com/sharing/rest/content/items/819e221ffb92482d9b804a83394b4165/resources/WhatAreInvasiveSpecies__1549461737317.JPG"
	},
	{
		"url": "kilauea2018/",
		"name": "Kīlauea 2018 lower East Rift Zone eruption and summit-collapse events",
		"description": "In 2018, Kīlauea’s activity drastically changed: the decades-long Puʻu ʻŌʻō eruption on the middle East Rift Zone ceased, the 10-year-old summit lava lake within Halemaʻumaʻu crater drained, fissures opened along Kīlauea’s lower East Rift Zone (LERZ), and Kīlauea’s summit experienced its largest collapse in at least 200 years.",
		"background_url": "https://www.arcgis.com/sharing/rest/content/items/a9f7b32e5a784b0b94ff66f2ffce0977/resources/Kamoamoa__1562031514060.jpg"
	},
	{
		"url": "landsat9roadtolaunch/",
		"name": "Landsat 9 Road to Launch",
		"description": "Launching in September 2021, Landsat 9 is a partnership between NASA and the U.S. Geological Survey. Learn about the process of building Landsat 9 and how it will extend Landsat's unbroken record of our planet to over half a century.",
		"background_url": "https://prd-wret.s3.us-west-2.amazonaws.com/assets/palladium/production/s3fs-public/thumbnails/image/578319main_20110809-ldcm-lrg.jpeg"
	},
	{
		"url": "lcmap-assessments-florida/",
		"name": "LCMAP Assessment of Florida Phosphate Mining",
		"description": "A Land Change Monitoring, Assessment, and Projection (LCMAP) initiative assessment of phosphate mining in Bone Valley, Florida.",
		"background_url": "https://prd-wret.s3.us-west-2.amazonaws.com/assets/palladium/production/s3fs-public/75_08_0019.jpg"
	},
	{
		"url": "mcweo/",
		"name": "Missouri Coteau Wetland Ecosystem Observatory",
		"description": "The USGS's Missouri Coteau Wetland Ecosystem Observatory is dedicated to increasing knowledge of prairie wetland ecosystems and how they function in the face of climate and land-use change. Research at the Observatory currently includes studies of surface-water and groundwater hydrology, geochemistry, biological communities, pesticide transformations, greenhouse-gas fluxes, and climate-change effects, all within the context of a fully functioning, prairie-pothole wetland complex.",
		"background_url": "www.arcgis.com/sharing/rest/content/items/eba6fba0f5a942409151a597f5bda66b/resources/IMG_0245__1489772065419__w1500.jpg"
	},
	{
		"url": "mississippiriver/",
		"tag": "UMid",
		"name": "Nutrient Pollution in the Mississippi River Watershed",
		"description": "The USDA Natural Resource Conservation Service (NRCS) identified the Mississippi River basin as a top priority for nutrient reduction due to water quality concerns, primarily related to the effects of nutrient loading such as hypoxia and harmful algal blooms, on the health of the entire river, local water bodies and the Gulf of Mexico.",
		"background_url": "https://www.arcgis.com/sharing/rest/content/items/3b88aa4466dc4cb5844ba9ffd394e709/resources/Outfall_2__1511894545695.jpg"
	},
	{
		"url": "MRS_mineral_deposits/",
		"tag": "UMid",
		"name": "Midcontinent Rift Sysem (MRS) Mineral Deposits",
		"description": "USGS MRS research includes compilation and interpretation of known geologic, geophysical, and mineral resource data, acquisition of new geophysical data, and the development of a three-dimensional conceptual model of MRS evolution through time.",
		"background_url": "www.arcgis.com/sharing/rest/content/items/dc2e783552b84ed8957cb8d2dfac235e/resources/palisadehead__1497296312690__w1200.jpg"
	},
	{
		"url": "NGGDPPFundedProjects2016/",
		"name": "NGGDP Funded Projects 2016",
		"description": "National Geological and Geophysical Data Preservation Program - 2016 State Geological Survey Projects.",
		"background_url": "https://usgs.maps.arcgis.com/apps/Shortlist/index.html?appid=2308df3b33124bd282f3d0cbc9a03fb9"
	},
	{
		"url": "potomactrib/",
		"name": "Potomac Tributary Report",
		"description": "A summary of trends in tidal water quality and associated factors, 1985-2018.",
		"background_url": "https://www.arcgis.com/sharing/rest/content/items/f49e7cb7d09e4ba3a571a27c39b44c76/resources/background2__1596122428176__w1920.jpg"
	},
	{
		"url": "safrr/WTE_earthquake/",
		"name": "What to Expect in a Big Urban Earthquake",
		"description": "Big urban earthquakes are often regional disasters that affect millions of people and livelihoods. The more we know what to expect, the better we can prepare to reduce the impacts of the next one.",
		"background_url": "https://www.arcgis.com/sharing/rest/content/items/455dc0cfb04b4bbea11b459e92a708e4/resources/FaultSlip_FaultRuptureuseC_jb2__1522188829554.jpg"
	},
	{
		"url": "safrr/haywired_vol1/",
		"name": "The HayWired Scenario: An Urban Earthquake in a Connected World",
		"description": "What might it be like the next time the Hayward fault has a large earthquake? To answer that question, scientists examined a hypothetical earthquake, the magnitude 7.0 HayWired earthquake scenario.",
		"background_url": "https://www.arcgis.com/sharing/rest/content/items/455dc0cfb04b4bbea11b459e92a708e4/resources/NR_Pacific%20Palisades%20Landslide_jb__1511305684710.jpg"
	},
	{
		"url": "santarosaearthquaketour/",
		"name": "Earthquake Tour of Santa Rosa, California",
		"description": "Santa Rosa, California has a long history of earthquakes. This virtual tour of 1906 and 1969 earthquake damage in Santa Rosa shows examples of buildings that have been retrofitted to protect against future earthquake shaking, and highlights locations where faulting from large earthquakes and slow fault slip (creep) is expressed at the ground surface. ",
		"background_url": "https://escweb.wr.usgs.gov/lidartiles/SR_StoryMap/FlourMill.jpg"
	},
	{
		"url": "sciencesnapshots/",
		"name": "Climate Adaptation Science Center Snapshots",
		"description": "The Climate Adaptation Science Centers (CASCs) partner with natural and cultural resource managers to provide the scientific information needed to help fish, wildlife, ecosystems, and the communities they support adapt to the impacts of a changing climate. The network is comprised of nine regional CASCs, managed by the National CASC located at USGS headquarters in Reston, VA. This geonarrative features a snapshot of the projects that CASCs have funded, since the network was initiated in 2008.",
		"background_url": "https://www.arcgis.com/sharing/rest/content/items/4e552491a6a8440fa9a18bd212ce1d30/resources/HorseshoeFalls_RockyMtnNP_CO_AlanCressler_crp__1510944400686__w683.jpg"
	},
	{
		"url": "tucsongravity/",
		"name": "Groundwater-Storage Change in the Tucson Active Management Area",
		"description": "Changes in gravity used to quantify groundwater-storage change in the Tucson, Arizona Active Management Area.",
		"background_url": "https://prd-wret.s3.us-west-2.amazonaws.com/assets/palladium/production/s3fs-public/styles/side_image/public/thumbnails/image/TucsonAMA_stationASDM2-1.jpg"
	},
	{
		"url": "uraniumgw/",
		"name": "Uranium in Groundwater in Northeastern Washington State",
		"description": "Naturally occurring uranium in groundwater in northeastern Washington State.",
		"background_url": "https://www.arcgis.com/sharing/rest/content/items/6ccd8670fb6246c3a5a7a1573e7bffd5/resources/Front%20cover%20well__1572389185734__w1920.jpg"
	},
	{
		"url": "uscoastalwetlandsynthesis/",
		"name": "U.S. Coastal Wetlands Synthesis",
		"description": "The USGS is assessing the physical condition of coastal wetlands and how they may change in response to storms, sea-level rise, and human activity.",
		"background_url": "https://www.arcgis.com/sharing/rest/content/items/96e77787097742abba5f2e732f07bb5d/resources/Biomes_WaterWetlands_Wetlands_00027__1566252527451.jpg"
	},
	{
		"url": "warc_overview/",
		"name": "The USGS Wetland and Aquatic Research Center",
		"description": "The USGS Wetland and Aquatic Research Center (WARC) conducts relevant and objective research, develops new approaches and technologies, and disseminates scientific information needed to understand, manage, conserve, and restore wetlands and other aquatic and coastal ecosystems and their associated plant and animal communities throughout the Southeast and the Nation. ",
		"background_url": "https://www.arcgis.com/sharing/rest/content/items/7f215e9811f543b995ea3d96eaedd734/resources/Cressler_PondStMarks__1528400385651.jpg"
	},
	{
		"url": "waterfowl/",
		"name": "Waterfowl Ecology in Suisun Marsh and the Pacific Flyway",
		"description": "Suisun Marsh and the Central Valley of California contain some of the world’s most important wetlands, providing critical breeding and wintering habitat for many waterfowl species in the Pacific Flyway. Wetlands in the Suisun Marsh and wetland and agricultural habitats in the Central Valley support 10–12 million waterfowl wintering in or migrating through these two regions annually.",
		"background_url": "https://prd-wret.s3.us-west-2.amazonaws.com/assets/palladium/production/s3fs-public/thumbnails/image/Hen%20SPeterson.JPG"
	}
]


