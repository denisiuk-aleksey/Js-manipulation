"use strict";

function multiplyAddition(n) {
  //Var 1 первое что пришло в голову
  /*let result = 0;
  for (let i = 0; i < n + 1; i++) {
    result += i;
  }
  return result;*/

  //Var 2 recursion
  if (n === 1) return 1;
  return n + multiplyAddition(n - 1);
}
//task 2

/*class Student {
  constructor(name, surname, sex, contacts) {
    this.name = name;
    this.surname = surname;
    this.sex = sex;
    this.contacts = contacts;
    this.university = new Department();
  }
  set name(name) {
    const buff = name;
    if (typeof buff !== "string") {
      throw new TypeError("Name must be string (sorry Ilon Musk dotter XD)");
    }
    this._name = buff;
  }

  set surname(surname) {
    const buff = surname;
    if (typeof buff !== "string") {
      throw new TypeError("Surname must be string");
    }
    this._surname = buff;
  }

  set sex(sex) {
    const buff = sex;
    buff.toLowerCase();
    if (buff !== "man" || buff !== "woman") {
      throw new RangeError("Not correct input (tip: man && woman)");
    }
    if (typeof buff !== "string") {
      throw new TypeError("Sex must be string");
    }
    this._sex = buff;
  }

  set contacts(contacts) {
    const buff = contacts;
    if (typeof buff !== "string") {
      throw new TypeError("Surname must be string");
    }
    this._surname = buff;
  }

  get name() {
    return this._name;
  }
  get surname() {
    return this._surname;
  }
  get sex() {
    return this._sex;
  }
  get contacts() {
    return this._contacts;
  }

  aboutStudent(stud) {
    if (typeof stud !== Student) {
      throw new TypeError("This obj not Student");
    }
    for (const [key, value] of Object.entries(stud)) {
      console.log(`${key}: ${value}`);
    }
    console.log(this.department);
    console.log(this.faculty);
  }
}

class Department {
  constructor(department, faculty) {
    this.department = department;
    this.faculty = faculty;
  }
}*/

// task 3

function fillArray(n) {
  for (let i = 0; i < n; i++) {
    this.push(Math.round(Math.random()));
  }
}

function showElementsByIndex() {
  for (let i = 0; i < this.length; i++) {
    if (i === 0) {
      console.log(this[i]);
    }
    if ((i %= 2)) {
      console.log(this[i]);
    }
  }
}

function showEvenElements() {
  for (let i = 0; i < this.length; i++) {
    if ((this[i] %= 0)) {
      console.log(this[i]);
    }
  }
}

function showNullElements() {
  let count;
  for (let i = 0; i < this.length; i++) {
    if (this[i] === 0) {
      console.log(this[i]);
      count++;
    }
  }
}

// const arr = new Array(25).fill(0).map((v) => Math.round(Math.random(v)));

//task 4

class Book {
  constructor(author, nameOfBook, yearOfPublishing, publishingHouse) {
    this.author = author;
    this.nameOfBook = nameOfBook;
    this.yearOfPublishing = yearOfPublishing;
    this.publishingHouse = publishingHouse;
  }
}

class ElectronicVersionOfBook extends Book {
  constructor(format, eletronicNumber) {
    super(author, nameOfBook, yearOfPublishing, publishingHouse);
    this.format = format;
    this.eletronicNumber = eletronicNumber;
  }
}

//task 5

function name(n) {
  console.log(
    this.apply(null, { length: n })
      .map(function (val, index) {
        index++;
        if (index % 3 === 0 && index % 5 === 0) {
          return "FizzBuzz";
        }
        if (index % 3 === 0) {
          return "Fizz";
        }
        if (index % 5 === 0) {
          return "Buzz";
        }
        return index;
      })
      .join("\n")
  );

  /*this.apply(null, {length: n}).map(function(val, index) {
    return (++index%3?'':'Fizz')+(index%5?'':'Buzz')||index;
  }).join('\n')*/ // что-то страшное и не понятное))
}
