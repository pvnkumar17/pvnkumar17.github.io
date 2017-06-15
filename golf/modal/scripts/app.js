// Globle Variables for DOM elements

var title= document.getElementById("page-title");
var elem = document.getElementById("modal-wrap");
var close = document.getElementById("close");

//On click title show modal

title.onclick = function(){
	elem.style.cssText = "opacity: 1; visibility: visible;";
}

// on click check mouse event if it's target is modal-wrap or close then hide the modal

window.onclick = function(e){
    if(e.target.id === "modal-wrap" || e.target.id === "close"){
       elem.style.cssText = "opacity: 0; visibility: hidden;";
    }
};

//on ESC key press hide the MOdal 

window.onkeydown = function(e){
    if(e.keyCode === 27){
       elem.style.cssText = "opacity: 0; visibility: hidden;";
    }
};