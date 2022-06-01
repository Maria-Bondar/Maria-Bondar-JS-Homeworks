//task №1
let width = prompt("Enter width of triangle", "");
let height = prompt("Enter height of triangle", "");
function caltRectagleArea(width, height) {
  try {
    if (isNaN(width) || isNaN(height)) {
      throw Error("You enter incorrect width and height of triangle");
    }

    return width * height;
  } catch (error) {
    console.log(error);
  } finally {
    console.log("Good job!");
  }
}
let result = caltRectagleArea(width, height);
console.log(result);

//task №2
function checkAge(userAge) {
  try {
    let userAge = Number(prompt("Enter your age", "14"));
    if (userAge == null || userAge == "") {
      throw new Error("The field is empty! Please enter your age");
    }
    if (isNaN(userAge)) {
      throw new Error("Enter your age (use numbers)");
    }
    if (userAge < 14) {
      throw new Error("Your age does not allow you to watch this movie");
    }
    console.log(`Your age is ${userAge}! Enjoy watching the movie!`);
  } catch (exception) {
    console.log(exception.stack);
  }
}
checkAge();

//task №3
class MonthException {
  constructor(message, name) {
    this.name = "MonthException";
    this.message = message;
  }
}
function showMonthName(month) {
  try {
    if (month == null || month == "") {
      throw new Error("The field is empty! Please enter the month number");
    }
    if (isNaN(month)) {
      throw new Error("Enter the month number");
    }
    if (month > 12 || month === 0) {
      throw new MonthException("Incorrect month number");
    }
    switch (month) {
      case 1:
        console.log("It's a January");
        break;
      case 2:
        console.log("It's a February");
        break;
      case 3:
        console.log("It's a March");
        break;
      case 4:
        console.log("It's an April");
        break;
      case 5:
        console.log("It's a May");
        break;
      case 6:
        console.log("It's a June");
        break;
      case 7:
        console.log("It's a July");
        break;
      case 8:
        console.log("It's an August");
        break;
      case 9:
        console.log("It's a Septemder");
        break;
      case 10:
        console.log("It's an October");
        break;
      case 11:
        console.log("It's a November");
        break;
      case 12:
        console.log("It's a December");
        break;
    }
  } catch (exception) {
    console.log(exception.stack);
  }
}
let month = Number(prompt("Enter the month number", ""));
showMonthName(month);

//task №4
let ids = [
  Number(prompt("Enter your ID-number", "")),
  Number(prompt("Enter your ID-number", "")),
  Number(prompt("Enter your ID-number", "")),
];
function showUser(id) {
  try {
    if (id < 0) {
      throw new Error(`ID must not be negative. You enter ${id}!`);
    }
    return {
      id: id,
    };
  } catch (exception) {
    console.log(exception.stack);
  }
}

function showUsers(ids) {
  let users = [];

  for (let i = 0; i < ids.length; i += 1) {
    let user = showUser(ids[i]);
    users.push(user);
  }

  return users;
}

showUsers(ids);
