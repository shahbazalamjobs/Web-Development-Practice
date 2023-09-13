
// JavaScript Classes
// ES6, introduced JavaScript Classes. JavaScript Classes are templates for JavaScript Objects.

// 1. Syntax
class ClassName {
  constructor() { ... }
}

// 2. Example
class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
}

// 3. Create object using class

class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
}

const myCar1 = new Car("Ford", 2014);
const myCar2 = new Car("Audi", 2019);

document.getElementById("demo").innerHTML = myCar1.name + " " + myCar2.name;

// o/p: Ford Audi

/*
The Constructor Method

The constructor method is a special method:

It has to have the exact name "constructor"
It is executed automatically when a new object is created
It is used to initialize object properties
If you do not define a constructor method, JavaScript will add an empty constructor method.
*/

// 4. Class Methods syntax
class ClassName {
  constructor() { ... }
  method_1() { ... }
  method_2() { ... }
  method_3() { ... }
}

// 5. Class method example
class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;

  }
  age() {
    const date = new Date();
    return date.getFullYear() - this.year;
  }
}

const myCar = new Car("Ford", 2014);
document.getElementById("demo").innerHTML =
"My car is " + myCar.age() + " years old.";

// o/p: My car is 9 years old.

