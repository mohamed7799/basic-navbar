"use strict"
//variables
let toggle = document.getElementById("toggle");

let mLinks = document.getElementById("mobile-links");


//event listneres
toggle.addEventListener("click", (e) => {
    mLinks.classList.toggle("hide");
    e.stopPropagation();
})

mLinks.addEventListener('click', (e) => {
    mLinks.classList.remove('hide');
})

document.addEventListener("click", (e) => {
    if (e.target.parentElement.id !== "mobile-links" && e.target.id !== "mobile-links") {
        mLinks.classList.add("hide")
    }
})