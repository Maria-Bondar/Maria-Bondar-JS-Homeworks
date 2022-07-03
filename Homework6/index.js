//task 1
let test = document.querySelector("#test");
test.innerHTML = "Last";
//the second option:
//let idTest = document.getElementById("test");
//idTest.innerHTML = "Last";

//task 2
let image = document.querySelector(".image");
image.src = "cat.jpg";
alert(image.outerHTML);

// //task 3
let paragraphs = document.querySelectorAll("p");
console.log(paragraphs);

for (let i = 0; i < 3; i += 1) {
  console.log(`Selector text ${i}: ${paragraphs[i].innerText}`);
}

// task 4
let list = document.querySelector("#list");
// the second option - let list = document.getElementById("list");
arr = [];
arr.push(list.children[0].innerHTML);
arr.push(list.children[4].innerHTML);
arr.push(list.children[1].innerHTML);
arr.push(list.children[3].innerHTML);
arr.push(list.children[2].innerHTML);
alert(arr.join(", "));

//task 5
document.querySelector("h1").style.backgroundColor = "#90ee90";

let text = document.querySelector("#myDiv");
let firstParagraph = text.children[0];
firstParagraph.style.fontWeight = "bold";
let secondParagraph = text.children[1];
secondParagraph.style.color = "red";
let thirdParagraph = text.children[2];
thirdParagraph.style.textDecoration = "underline";
let fourthParagraph = text.children[3];
fourthParagraph.style.fontStyle = "italic";

let myList = document.querySelector("#myList");
arr1 = [];
arr1.push(myList.children[0].innerHTML);
arr1.push(myList.children[1].innerHTML);
arr1.push(myList.children[2].innerHTML);
myList.innerHTML = arr1.join(" ");

//task 6

let firstInput = document.querySelector("#input1");
firstInput.value = prompt("Enter some message", "");
let firstValue = firstInput.value;

let secondInput = document.querySelector("#input2");
secondInput.value = prompt("Enter some message", "");
let secondValue = secondInput.value;

firstInput.value = secondValue;
secondInput.value = firstValue;

//task 7
//В іншій папці, що треба був порожній HTML-документ.
