"use strict"
//variables
let toggle = document.getElementById("toggle");

let mLinks = document.getElementById("mobile-links");


//event listneres
toggle.addEventListener("click", (e) => {

    if (mLinks.style.maxHeight) {
        mLinks.style.maxHeight = null;
    } else {
        mLinks.style.maxHeight = mLinks.scrollHeight + "px";
    }
    e.stopPropagation();
})

mLinks.addEventListener('click', (e) => {
    mLinks.style.maxHeight = mLinks.scrollHeight + "px";
})

document.addEventListener("click", (e) => {
    if (e.target.parentElement.id !== "mobile-links" && e.target.id !== "mobile-links") {
        mLinks.style.maxHeight = null;
    }
})