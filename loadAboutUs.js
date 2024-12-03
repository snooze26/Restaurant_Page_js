export default function loadAboutUs(){
    const content = document.querySelector("#content");
    content.textContent = "";

    const header = document.createElement("h1");
    header.textContent = "Can't tell your our secret but I'll take yur money!!";


    const info = document.createElement("div");
    info.textContent = "The first love of my life is the coin. The second love is my daughter Pearl."
    info.classList.add("contact_Info");

    content.append(header);
    content.append(info);

}