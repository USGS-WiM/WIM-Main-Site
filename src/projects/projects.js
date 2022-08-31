
window.onload = () =>{
    console.log("Projects Page Loaded 👍")

//STREAMSTATS POP UP---------------------------------------
//toggle pop-up open
document.getElementById("streamstats").onclick = function() {
        document.getElementById("streamstats-pop").classList.add("active");
    };
// toggle pop-up closed
document.getElementById("close_streamstats").onclick = function() {
    document.getElementById("streamstats-pop").classList.toggle("active");
};

//FIM POP UP---------------------------------------
//toggle pop-up open
document.getElementById("fim").onclick = function() {
    document.getElementById("fim-pop").classList.add("active");
};
// toggle pop-up closed
document.getElementById("close_fim").onclick = function() {
    document.getElementById("fim-pop").classList.toggle("active");
};

//SPARROW POP UP---------------------------------------
//toggle pop-up open
document.getElementById("sparrow").onclick = function() {
    document.getElementById("sparrow-pop").classList.add("active");
};
// toggle pop-up closed
document.getElementById("close_sparrow").onclick = function() {
    document.getElementById("sparrow-pop").classList.toggle("active");
};

//WHISPERS POP UP---------------------------------------
//toggle pop-up open
document.getElementById("whispers").onclick = function() {
    document.getElementById("whispers-pop").classList.add("active");
};
// toggle pop-up closed 
document.getElementById("close_whispers").onclick = function() {
    document.getElementById("whispers-pop").classList.toggle("active");
};

//WETLANDS POP UP---------------------------------------
//toggle pop-up open
document.getElementById("wetlands").onclick = function() {
    document.getElementById("wetlands-pop").classList.add("active");
};
// toggle pop-up closed 
document.getElementById("close_wetlands").onclick = function() {
    document.getElementById("wetlands-pop").classList.toggle("active");
};

//NAWQA POP UP---------------------------------------
//toggle pop-up open
document.getElementById("nawqa").onclick = function() {
    document.getElementById("nawqa-pop").classList.add("active");
};
// toggle pop-up closed 
document.getElementById("close_nawqa").onclick = function() {
    document.getElementById("nawqa-pop").classList.toggle("active");
};
}


