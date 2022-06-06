//task №1
let course = {
  name: "JS fundamental",
  members: 9,
  direction: "web-development",
};

function propsCount(currentObject) {
  return this.keys(currentObject).length;
}
propsCount(course);

//task №2
let person = {
  name: "Maria Bondar",
  age: 25,
  city: "Lviv",
  course: "JS fundamental",
  work: "journalist",
};
function showProps(object) {
  return this.keys(object);
}
let property = showProps(person);
console.log(property);
console.log(Object.values(person));

//task №3
class Person {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }
  showFullName() {
    return this.name + " " + this.surname;
  }
}

class Student extends Person {
  constructor(name, surname, year) {
    super(name, surname);
    this.year = year;
  }
  showFullName(midleName) {
    return super.showFullName() + " " + midleName;
  }
  showCourse() {
    let currentDay = new Date();
    let dayYear = currentDay.getFullYear();
    return dayYear - this.year;
  }
}
const student1 = new Student("Petro", "Petrenko", 2016);
console.log(student1);
console.log(student1.showFullName("Petrovych"));
console.log("Current course: " + student1.showCourse());

//task №4
class Worker {
  constructor(fullName, dayRate, workingDays) {
    this.fullName = fullName;
    this.dayRate = dayRate;
    this.workingDays = workingDays;
  }
  showSalary() {
    let salary = this.dayRate * this.workingDays;
    return salary;
  }
  #experience = 1.2;

  showSalaryWithExperience() {
    return this.showSalary() * this.#experience;
  }
  set experience(value) {
    this.#experience = value;
  }
  get experience() {
    return this.#experience;
  }
}

console.log(worker1.fullName);
console.log(worker1.showSalary());
console.log("New experience: " + worker1.experience);
worker1.showSalaryWithExperience();
worker1.experience = 1.5;
console.log("New experience: " + worker1.experience);
console.log(worker1.showSalaryWithExperience());

let worker1 = new Worker("Maria Bondar", 20, 25);
let worker2 = new Worker("Anna Ivaniv", 22, 30);
let worker3 = new Worker("Sergey Pelle", 20, 50);
let worker4 = new Worker("Dima Hello", 20, 15);

let arr = [worker1, worker2, worker3, worker4];

function sortBySalary(arr) {
  arr.sort((a, b) =>
    a.showSalaryWithExperience() > b.showSalaryWithExperience() ? 1 : -1
  );
  console.log("Sorted salary:");
  for (let i = 0; i < arr.length; i += 1) {
    console.log(arr[i].fullName + ": " + arr[i].showSalaryWithExperience());
  }
}
sortBySalary(arr);

//task №5
class GeometricFigure {
  constructor() {}
  getArea() {
    return 0;
  }
  toString() {
    return Object.getPrototypeOf(this).constructor.name;
  }
}

class Triangle extends GeometricFigure {
  constructor(oneSideTriangle, secondSideTriangle, thirdSideTriangle) {
    super();
    this.oneSideTriangle = oneSideTriangle;
    this.secondSideTriangle = secondSideTriangle;
    this.thirdSideTriangle = thirdSideTriangle;
  }
  getArea() {
    let param =
      (this.oneSideTriangle +
        this.secondSideTriangle +
        this.thirdSideTriangle) /
      2;
    let areaTriangle = Math.sqrt(
      param *
        (param - this.oneSideTriangle) *
        (param - this.secondSideTriangle) *
        (param - this.thirdSideTriangle)
    );
    return areaTriangle;
  }
}

class Square extends GeometricFigure {
  constructor(sideSquare) {
    super();
    this.sideSquare = sideSquare;
  }
  getArea() {
    return this.sideSquare ** 2;
  }
}

class Circle extends GeometricFigure {
  constructor(radius) {
    super();
    this.radius = radius;
  }
  getArea() {
    return Math.PI * this.radius ** 2;
  }
}

const figures = [new Triangle(4, 3, 5), new Square(7), new Circle(5)];
function handleFigures(figures) {
  for (let i = 0; i < figures.length; i += 1) {
    if (figures[i] instanceof GeometricFigure) {
      console.log(
        "Geometric figure: " +
          figures[i].toString() +
          " - area: " +
          figures[i].getArea()
      );
    }
  }
}
handleFigures(figures);

let totalArea = figures.reduce(function (previousValue, currentValue) {
  let square1 = previousValue;
  if (previousValue instanceof GeometricFigure) {
    square1 = previousValue.getArea();
  }

  let square2 = currentValue;
  if (currentValue instanceof GeometricFigure) {
    square2 = currentValue.getArea();
  }

  return square1 + square2;
});
console.log(totalArea);
