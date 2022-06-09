//task №1
let arr1 = [2, 3, 4, 5];
let product = 1;
for (let i = 0; i < arr1.length; i += 1) {
  product *= arr1[i];
}
console.log(product);

let arr2 = [2, 3, 4, 5];
let p = 0;
let product1 = 1;
while (p < arr2.length) {
  product1 *= arr2[p];
  p += 1;
}
console.log(product1);

//task №2
for (let n = 1; n < 15; n += 1) {
  if (n % 2 == 0) {
    console.log(`${n} is even`);
  } else {
    console.log(`${n} is odd`);
  }
}

//task №3
let k = [];
function randArray(k) {
  for (let i = 0; i < 5; i += 1) {
    k.push(Math.floor(Math.random() * 500));
  }
  return k;
}
randArray(k);

//task №4
function raiseToDegree(a, b) {
  let pow = a;
  pow **= b;
  return pow;
}
let a = +prompt("Enter first number", "");
let b = +prompt("Enter second number", "");
if (Number.isInteger(a) || Number.isInteger(b)) {
  console.log(raiseToDegree(a, b));
} else {
  console.log("You enter incorect value!");
}

//task №5
function findMin() {
  return Math.min(...arguments);
}
findMin(6, 10, 0, -2, 5);

//task №6
function findUnique(arr) {
  for (let i = 0; i < arr.length; i += 1) {
    for (let a = i + 1; a < arr.length; a += 1) {
      if (arr[i] === arr[a]) {
        return false;
      }
    }
  }
  return true;
}
findUnique([1, 2, 3, 5, 3]);
findUnique([1, 2, 3, 5, 7]);

//task № 7

function backArray(array7, num) {
  if (num === undefined) {
    num = 1;
  }
  for (let i = array7.length - num; i < array7.length; i += 1) {
    console.log(array7[i]);
  }
}
backArray([3, 4, 10, -5]);
backArray([3, 4, 10, -5], 2);

//task №8
let str = " ";
function stringUpperCase(str) {
  let arrWord = str.split(" ");
  for (let i = 0; i < arrWord.length; i += 1) {
    let word = arrWord[i];
    let upperWord = word[0].toUpperCase();
    arrWord[i] = upperWord;
    let endWord = word.substring(1, word.length);
    word = upperWord + endWord;
    arrWord[i] = word;
  }
  str = arrWord.join(" ");
  return str;
}

stringUpperCase("i love java script");
