//task 1
let myWindow;
myWindow = window.open(
  "_blank",
  "NewWindow",
  "width=300, height=300, left=100, top=100"
);

setTimeout(function () {
  myWindow.resizeTo(500, 500);
}, 2000);

setTimeout(function () {
  myWindow.moveTo(200, 200);
}, 4000);

setTimeout(function () {
  myWindow.close();
}, 6000);

//task 2

function changeCSS() {
  let text = document.querySelector("#text");
  text.style.color = "orange";
  text.style.fontSize = "20px";
  text.style.fontType = "Comic Sans MS";
}
let button = document.querySelector("button");
button.addEventListener("click", changeCSS);

//task 3

function changeColorBlue(params) {
  let background = document.querySelector("body");
  background.style.backgroundColor = "blue";
}
function changeColorPink(params) {
  let background = document.querySelector("body");
  background.style.backgroundColor = "pink";
}
function changeColorBrown(params) {
  let background = document.querySelector("body");
  background.style.backgroundColor = "brown";
}
function changeColorWhite() {
  let background = document.querySelector("body");
  background.style.backgroundColor = "white";
}
function changeColorLink() {
  let text = document.querySelector("a");
  text.style.backgroundColor = "yellow";
}
function backColorLink() {
  let text = document.querySelector("a");
  text.style.backgroundColor = "white";
}
function changeColorLink() {
  let link = document.querySelector("a");
  link.style.backgroundColor = "yellow";
}
function backColorLink() {
  let link = document.querySelector("a");
  link.style.backgroundColor = "white";
}
let button1 = document.querySelector("#myButton1");
button1.addEventListener("click", changeColorBlue);
let button2 = document.querySelector("#myButton2");
button2.addEventListener("dblclick", changeColorPink);
let button3 = document.querySelector("#myButton3");
button3.addEventListener("mousedown", changeColorBrown);
button3.addEventListener("mouseup", changeColorWhite);
let text = document.querySelector("a");
text.addEventListener("mouseover", changeColorLink);
text.addEventListener("mouseout", backColorLink);

//task 4
function deleteNames() {
  let names = document.querySelector("#person");
  names.remove(names.selectedIndex);
}
let buttonDelete = document.querySelector("#myButton4");
buttonDelete.addEventListener("click", deleteNames);

//task 5
function messagePress() {
  let parent = document.querySelector("#textMessage");
  let p1 = document.createElement("p");
  p1.innerText = "I was pressed";
  parent.append(p1);
}
function messageMouseover() {
  let parent = document.querySelector("#textMessage");
  let p2 = document.createElement("p");
  p2.innerText = "Mouse on me!";
  parent.append(p2);
}
function messageMouseout() {
  let parent = document.querySelector("#textMessage");
  let p3 = document.createElement("p");
  p3.innerText = "Mouse is not on me!";
  parent.append(p3);
}
let button5 = document.querySelector("#myButton5");
button5.addEventListener("click", messagePress);
button5.addEventListener("mouseover", messageMouseover);
button5.addEventListener("mouseout", messageMouseout);

//task 6

function changeWindow() {
  let height = window.innerHeight;
  let width = window.innerWidth;

  let p4 = document.querySelector("#textMessage > p");
  if (p4 == null) {
    let parent = document.querySelector("#textMessage");

    p4 = document.createElement("p");
    parent.append(p4);
  }

  p4.innerText = `Width: ${width}, height: ${height}`;
}

window.addEventListener("resize", changeWindow);

//task 7

const mapCounrty = new Map();

mapCounrty.set("Ukraine", ["Lviv", "Kyiv", "Odessa"]);
mapCounrty.set("USA", ["Los-Angeles", "New York", "Chicago"]);
mapCounrty.set("Germany", ["Berlin", "Hamburg", "Cologne"]);

let body = document.querySelector("body");

let select = document.createElement("select");
select.setAttribute("name", "contries");
body.appendChild(select);
let select2 = document.createElement("select");
select2.setAttribute("name", "cities");
select2.setAttribute("id", "cities");
body.appendChild(select2);
let countryText = document.createElement("p");
let cityText = document.createElement("p");
body.appendChild(cityText);
body.appendChild(countryText);

mapCounrty.forEach(function (cities, country) {
  let optionCountry = document.createElement("option");
  optionCountry.setAttribute("value", country);
  optionCountry.innerText = country;

  select.appendChild(optionCountry);
});
select.addEventListener("change", function () {
  let cities = mapCounrty.get(this.value);
  countryText.innerHTML = this.value;
  select2.innerHTML = "";
  for (let i = 0; i < cities.length; i += 1) {
    const city = cities[i];
    let optionCity = document.createElement("option");
    optionCity.setAttribute("value", city);
    optionCity.innerText = city;
    select2.appendChild(optionCity);
  }
});

select2.addEventListener("change", function () {
  cityText.innerHTML = this.value;
});
