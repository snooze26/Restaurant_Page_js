export default function loadMenu(){
    const content = document.querySelector("#content");
    content.textContent = "";

    const header = document.createElement("h1");
    header.textContent = "Leave full and satisfied with our delicous choice:";


    const info = document.createElement("div");
    info.textContent = "Krabby Patty"
    info.classList.add("contact_Info");

    content.append(header);
    content.append(info);

}