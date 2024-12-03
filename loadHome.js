export default function loadHome(){
    const content = document.querySelector("#content");
    content.textContent = "";

    
    const header = document.createElement("h1");
    header.textContent = "Come eat at the Krusty Krab!";


    const pizza = document.createElement("div");
    pizza.textContent = "Now serving KK pizza!!!";
    pizza.classList.add("pizza_announcement")

    content.append(header);
    content.append(pizza);
}