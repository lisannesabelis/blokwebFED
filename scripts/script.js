/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

var navmenu = document.querySelector("nav");
var ham = document.querySelector("nav button");

function toggleHamburgermenu() {
    navmenu.classList.toggle("showNavigation");
    ham.classList.toggle("closeNavigation");
}

ham.addEventListener("click", toggleHamburgermenu);