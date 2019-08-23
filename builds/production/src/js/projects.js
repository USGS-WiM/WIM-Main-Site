var wimProjects = new Vue({
    el: '#wimProjects',
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
                        if(parsed[0].status.toString().toLowerCase() == 'production' || parsed[0].status.toString().toLowerCase() == 'beta'){
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



// Active Link
$("#homeLink").addClass("active");



// ===================================================== //
// ===================================================== //
//            Progressive Webapp Stuff                   //
//            Progressive Webapp Stuff                   //
// ===================================================== //
// ===================================================== //

// Register Service worker on home page for PWA
// Register Service worker on home page for PWA
if ("serviceWorker" in navigator) {
	if (navigator.serviceWorker.controller) {
		console.log("Active service worker found, no need to register");
	} else {
		// Register the service worker
		navigator.serviceWorker
		.register("sw.js", {
			scope: "./"
		})
		.then(function (reg) {
			console.log("Service worker has been registered for scope: " + reg.scope);
		});
	}
}

// Defer prompt for webapp install until called
let deferredPrompt = null;

window.addEventListener('beforeinstallprompt', (e) => {
	// Prevent Chrome 67 and earlier from automatically showing the prompt
	e.preventDefault();
	// Stash the event so it can be triggered later.
	deferredPrompt = e;
});

async function install() {
	if (deferredPrompt) {
		deferredPrompt.prompt();
		console.log(deferredPrompt)
		deferredPrompt.userChoice.then(function(choiceResult){

		if (choiceResult.outcome === 'accepted') {
			console.log('WIM PWA has been installed');
		} else {
			console.log('User chose to not install WIM PWA');
		}

		deferredPrompt = null;

	});


	}
}
