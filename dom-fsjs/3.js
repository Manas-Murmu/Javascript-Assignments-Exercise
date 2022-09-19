//### Fetch all the product name and store in an array

let value = document.querySelector(".accordion-homepage");

let section = document.createElement("section");
section.setAttribute("class", "parent");
section.appendChild(document.createElement("h3"));
section.querySelector("h3").innerText = "My New FAQ";

value.appendChild(section);
