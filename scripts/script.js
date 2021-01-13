/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

/*Hamburger menu*/
var navmenu = document.querySelector(".menucontent");
var hamburger = document.querySelector(".hamburger");

function toggleHamburgermenu() {
    navmenu.classList.toggle("showMenu");
    hamburger.classList.toggle("closeMenu");
}

hamburger.addEventListener("click", toggleHamburgermenu);

/*Back to Top*/
var knop = document.querySelector(".top");
var rootElement = document.documentElement;

function scrollToTop() {
    rootElement.scrollTo({top: 0, behavior: "smooth"});
}

knop.addEventListener("click", scrollToTop);