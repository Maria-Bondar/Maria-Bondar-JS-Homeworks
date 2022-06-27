// task 1
function checkStr(string) {
  let regExp = /^[A-Z]/.test(string);
  if (regExp === true) {
    console.log("String's starts with uppercase character");
  } else if (regExp === false) {
    console.log("String's not starts with uppercase character ");
  }
}
checkStr("regexp");
checkStr("RegExp");

// task 2
let input = document.querySelector("#input");
input.value = prompt("Enter your email", "");
let emailUser = input.value;
function checkEmail(emailUser) {
  let checkUserEmail = /\S+@\S+\.\S/.test(emailUser);
  if (checkUserEmail === true) {
    console.log(`Your email ${emailUser} is correct`);
  } else {
    console.log(`You enter incorect email. Please use gmail.com`);
  }
}
checkEmail(emailUser);

// task 3
let str3 = "cdbBdbsbz";
let regExp3 = /d(b+)(d)/i;
console.log(str3.match(regExp3));

// task 4
let str4 = "Java Script";
let regExp4 = /(\w+) (\w+)/i;
let result = str4.replace(regExp4, "$2, $1");
console.log(result);

// task 5
let cardNumber = "9999 - 9999 - 9999 - 9999";
let regExp5 = /^(\d{4}) - (\d{4}) - (\d{4}) - (\d{4})$/;
console.log(regExp5.test(cardNumber));

// task 6

let newEmailUser = prompt("Please enter your email", "");
function checkNewEmail(newEmailUser) {
  let redExp6 = /^[a-zA-Z0-9]+([-]?\w+)*@a-zA-Z0-9]+([-]?\w+)*(\.\w{2,3})+$/;
  let emailText = redExp6.test(newEmailUser);
  if (emailText === true) {
    console.log(`Your email is correct!`);
  } else {
    console.log(`Your email is not correct!`);
  }
}
checkNewEmail(newEmailUser);

//task 7

function checkLogin(login) {
  let regularExpression = /^[a-zA-Z](_(?!(0-9))|[a-zA-Z0-9.]){1,11}$/;
  let log = regularExpression.test(login);
  if (log === true) {
    console.log(log);
  } else {
    console.log(log);
  }
}
checkLogin("ee1.1ret3");
checkLogin("ee1*1ret3");
