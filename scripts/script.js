// JavaScript Document
var navbar = document.querySelector(".navbar");
var ham = document.querySelector(".ham");

function toggleHamburger() {
    navbar.classList.toggle("showNav");
    ham.classList.toggle("closeHam");
}

ham.addEventListener("click", toggleHamburger);