var wimProjects = new Vue({
    el: '#wimProjects',
    delimiters: ["${", "}"],
    data: {
        message: 'Vue.js Binding!',
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
            return this.newestRepos.filter(repo => {
                // Combine all GitHub fields to search into one string
                var repoSearchString = repo.name + " " + repo.description + " " + repo.language;
                return repoSearchString.toLowerCase().includes(this.projectSearch.toLowerCase())
            })
        }
    }
})


var apiPage = 1;

var goodRepos = [];

var scanRepos = function(){
    for (var i = 0; i < wimProjects.allRepos.length; i++) {

        $.ajax({
            url: "https://raw.githubusercontent.com/USGS-WIM/" + wimProjects.allRepos[i].name + "/staging/code.json",
            method: "GET",
            dataType: "json",
            success: function (res) {


                if (res[0].status.toLowerCase() == 'production' || res[0].status.toLowerCase() == 'beta'){
                    goodRepos.push(res);
                }
            }
        });


    }

    console.log(goodRepos)
}

var getRepos = function(page){

    $.ajax({
        url: "https://api.github.com/orgs/usgs-wim/repos?per_page=100&page="+page,
        jsonp: true,
        method: "GET",
        dataType: "json",
        success: function (res) {

            // Concat page of results to the wimProjects.allRepos array
            wimProjects.allRepos = wimProjects.allRepos.concat(res);

            // If there are more repos, run the call again
            if(res.length > 99){
                apiPage++;
                getRepos(apiPage);
            }else{ 
                // Otherwise 
                wimProjects.repoCount = wimProjects.allRepos.length;
                scanRepos();
            }
        }
    });
}

getRepos(apiPage);

