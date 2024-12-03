import loadHome from './loadHome.js';
import loadContact from './loadContact.js';
import loadMenu from './loadMenu.js';
import loadAboutUs from './loadAboutUs.js';

document.addEventListener("DOMContentLoaded", () => {
    loadHome();
});

function navigation () {
    const contactBtn = document.querySelector("#contactPage");
    const homeBtn = document.querySelector("#homePage");
    const menuBtn = document.querySelector("#menuPage");
    const aboutBtn = document.querySelector("#aboutPage");

    contactBtn.addEventListener("click", () => {
    loadContact();
    });

    homeBtn.addEventListener("click", () => {
        loadHome();
    });

    menuBtn.addEventListener("click", () => {
        loadMenu();
    });

    aboutBtn.addEventListener("click", () => {
        loadAboutUs();
    });
}

navigation();