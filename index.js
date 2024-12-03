import loadHome from './loadHome.js';
import loadContact from './loadContact.js';

document.addEventListener("DOMContentLoaded", () => {
    loadHome();
});

function navigation () {
    const contactBtn = document.querySelector("#contactPage");
    const homeBtn = document.querySelector("#homePage");

    contactBtn.addEventListener("click", () => {
    loadContact();
    });

    homeBtn.addEventListener("click", () => {
        loadHome();
        });
}

navigation();