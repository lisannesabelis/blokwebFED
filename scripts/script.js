/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

var navmenu = document.querySelector(".menucontent");
var hamburger = document.querySelector(".hamburger");

function toggleHamburgermenu() {
    navmenu.classList.toggle("showMenu");
    hamburger.classList.toggle("closeMenu");
}

hamburger.addEventListener("click", toggleHamburgermenu);
