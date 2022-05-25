//task №1
let x = 1;
let y = 2;

let res1 = String(x) + String(y);
console.log(res1);
console.log(typeof res1);

let res2 = Boolean(x) + String(y);
console.log(res2);
console.log(typeof res2);

let res3 = Boolean(x + y);
console.log(res3);
console.log(typeof res3);

let res4 = NaN + x + y;
console.log(res4);
console.log(typeof res4);

//task №2
let userNum = prompt("Enter your number", "");
if (userNum % 2 == 0) {
  console.log(`${userNum} є парним числом`);
} else if (userNum % 7 == 0) {
  console.log(`${userNum} кратне 7`);
} else {
  console.log("Ваше число є непарним та не кратне 7");
}

//task № 3
const myArray = [];
myArray.push(22);
myArray.push("education");
myArray.push(true);
myArray.push(null);
console.log(myArray);
myArray[5] = prompt("Enter your value", "");
console.log(myArray[5]);
myArray.shift();
console.log(myArray);

//task №4
let cities = ["Rome", "Lviv", "Warsaw"];
let add = cities.join("*");
console.log(add);

//task №5
let isAdult = prompt("How olg are you?", "");
if (isAdult > 18) {
  console.log("Ви досягли повнолітнього віку.");
} else {
  console.log("Ви ще надто молоді.");
}

//task №6

let oneSideTriangle = parseInt(
  prompt("Введіть довжину першої сторони трикутника", "")
);
let secondSideTriangle = prompt(
  "Введіть довжину другої сторони трикутника",
  ""
);
let thirdSideTriangle = prompt(
  "Введіть довжину третьої сторони трикутника",
  ""
);

if (
  isNaN(oneSideTriangle) ||
  isNaN(secondSideTriangle) ||
  isNaN(thirdSideTriangle)
) {
  console.log("Ви ввели некоректне значення.");
}
let sum = oneSideTriangle + secondSideTriangle + thirdSideTriangle;
let p = sum / 2;
let areaTriangle = Math.sqrt(
  p * (p - oneSideTriangle) * (p - secondSideTriangle) * (p - thirdSideTriangle)
);
console.log(areaTriangle.toFixed(3));
let sumTwoSide = oneSideTriangle ** 2 + secondSideTriangle ** 2;
if (sumTwoSide == thirdSideTriangle) {
  console.log("Цей трикутник має прямийє прямокутним");
} else {
  console.log("Трикутник не є прямокутним");
}

//task №7

let currDay = new Date();
console.log(currDay);
let dayTime = currDay.getHours();
console.log(dayTime);
if (dayTime >= 23 && dayTime <= 5) {
  console.log("Доброї ночі!");
} else if (dayTime >= 5 && dayTime <= 11) {
  console.log("Доброго ранку!");
} else if (dayTime >= 11 && dayTime <= 17) {
  console.log("Доброго дня!");
} else if (dayTime >= 17 && dayTime <= 23) {
  console.log("Доброго вечора!");
}

switch (dayTime) {
  case 23:
  case 0:
  case 1:
  case 2:
  case 3:
  case 4:
  case 5:
    console.log("Доброї ночі!");
    break;
  case 5:
  case 6:
  case 7:
  case 8:
  case 9:
  case 10:
  case 11:
    console.log("Доброго ранку!");
    break;
  case 11:
  case 12:
  case 13:
  case 14:
  case 15:
  case 16:
  case 17:
    console.log("Доброго дня!");
    break;
  case 17:
  case 18:
  case 19:
  case 20:
  case 21:
  case 22:
  case 23:
    console.log("Доброго вечора!");
    break;
}
