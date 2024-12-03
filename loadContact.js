export default function loadContact(){
    const content = document.querySelector("#content");
    content.textContent = "";

    const header = document.createElement("h1");
    header.textContent = "Reach out to US!";


    const info = document.createElement("div");
    info.textContent = "Call: 999-999-9999 | Email: kkpatties@gmail.com"
    info.classList.add("contact_Info");

    content.append(header);
    content.append(info);

}
