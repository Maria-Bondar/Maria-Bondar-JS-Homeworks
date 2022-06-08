let body = document.createElement("body");

let main = document.createElement("main");
main.setAttribute("class", "mainClass check item");

let div = document.createElement("div");
div.setAttribute("id", "myDiv");

let firstParagraph = document.createElement("p");
firstParagraph.innerText = "First paragraph";

div.appendChild(firstParagraph);
main.appendChild(div);
body.appendChild(main);
document.documentElement.appendChild(body);
