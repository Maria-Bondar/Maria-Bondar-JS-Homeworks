// завдання №2 - Напишіть скріпт в зовнішньому файлі, який виводить в консоль ваше прізвище
const surname = "Bondar";
console.log(surname);

// завдання №3 - оголосити змінні
const course = "JavaScript Fundamental";
let members = 7;
console.log(course);
console.log(members);
members = course;

//завдання №4 - створити об'єкт
const dataTypes = {
  string: "Maria",
  number: 25,
  boolean: true,
  undefined: undefined,
  null: null,
};

//завдання №5 - використати метод confirm
let isAdult = confirm("Are you already 18 years old?");
console.log(isAdult);

//завдання №6 - створити змінні, перевірити тип даних і вивести їх в консоль
const name = "Maria";
const mySurname = "Bondar";
const group = "JS Fun";
const yearBirth = 1997;
const married = false;
console.log(typeof name);
console.log(typeof mySurname);
console.log(typeof group);
console.log(typeof yearBirth);
console.log(typeof married);
console.log(yearBirth);
console.log(typeof married);
console.log(name);
console.log(mySurname);
console.log(group);
let education = "university";
education = null;
let work;
console.log(education);
console.log(work);

// завдання №7 - за допомогою методу prompt запитати користувача пошту, логін і пароль
let login = prompt("What is your login?", "Maria Bondar");
let email = prompt("What is your email?", "mariabondar@gmail.com");
let password = prompt("What is your password?");
alert(
  "Dear " +
    login +
    ", your email is " +
    email +
    ", your password is " +
    password +
    "."
);

// завдання №8 - вирахувати секунди в годині, добі та місяці
const hour = 3600;
const day = 86400;
const month = 2592000;
console.log(
  "In an hour " +
    hour +
    " seconds, in a day " +
    day +
    " seconds and in a month - " +
    month +
    " seconds."
);
//імпровізація з користувачем, щоб він теж вгадував)
let hour2 = prompt("Try to guess - how many seconds per hour", "your number");
let day2 = prompt("Try to guess - how many seconds per day", "your number");
let month2 = prompt("Try to guess - how many seconds per month", "your number");
alert(
  "Check yourself! In an hour " +
    hour +
    " seconds, in a day " +
    day +
    " seconds and in a month - " +
    month +
    " seconds."
);
