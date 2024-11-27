import loadHome from './loadHome.js';
import loadContact from './loadContact.js';

function navigation () {
    const contactBtn = document.querySelector("#contactPage");

    contactBtn.addEventListener("click", () => {
    loadContact();
});

}

loadHome();
navigation();