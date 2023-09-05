/*

In JavaScript, an object is a fundamental data type that represents a collection of key-value pairs.
It is a versatile and powerful construct used to store and organize data. Objects can contain various
types of data, including other objects, functions, and primitive data types like strings, numbers, and booleans.

*/

// Creating an object using object literal notation
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  isStudent: false,
};

// Accessing object properties
console.log(person.firstName); // Output: "John"
console.log(person.age);       // Output: 30

// Modifying object properties
person.age = 31;

// Adding a new property
person.email = "john@example.com";

// Deleting a property
delete person.isStudent;

// Checking if a property exists
if ("email" in person) {
  console.log("Email exists:", person.email);
} else {
  console.log("Email does not exist");
}


/* _____________________Object Methods:__________________________________ */

/*
You can define functions as properties of an object, turning them into object methods. 
Object methods are functions that can perform actions related to the object's data.
*/

const car = {
  brand: "Toyota",
  model: "Camry",
  start: function() {
    console.log("Engine started");
  },
  stop: function() {
    console.log("Engine stopped");
  },
};

car.start(); // Output: "Engine started"
car.stop();  // Output: "Engine stopped"
Object Constructors:
You can create multiple instances of objects using constructor functions or, in modern JavaScript, classes. This allows you to define a blueprint for creating similar objects.

javascript
Copy code
// Using constructor function
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

const john = new Person("John", "Doe");

// Using class
class Animal {
  constructor(name, species) {
    this.name = name;
    this.species = species;
  }
}

const cat = new Animal("Whiskers", "Cat");
Object Prototypes:
JavaScript objects have a prototype chain that allows them to inherit properties and methods from other objects. You can add properties and methods to an object's prototype, which will be shared among all instances of that object.

javascript
Copy code
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

Person.prototype.getFullName = function() {
  return `${this.firstName} ${this.lastName}`;
};

const john = new Person("John", "Doe");
console.log(john.getFullName()); // Output: "John Doe"
Object Destructuring:
You can extract values from an object and assign them to variables using object destructuring. This is a concise way to access object properties.

javascript
Copy code
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
};

const { firstName, lastName } = person;
console.log(firstName); // Output: "John"
console.log(lastName);  // Output: "Doe"
Object Spread and Rest:
JavaScript also provides the spread operator (...) for creating a shallow copy of an object and the rest operator (...) for collecting remaining properties into a new object.

javascript
Copy code
const original = { a: 1, b: 2 };
const copy = { ...original, c: 3 }; // Spread operator
console.log(copy); // Output: { a: 1, b: 2, c: 3 }

const { a, ...rest } = original; // Rest operator
console.log(a);    // Output: 1
console.log(rest); // Output: { b: 2 }
Object Serialization:
You can convert objects to JSON format using JSON.stringify() and parse JSON strings back into objects using JSON.parse().

javascript
Copy code
const person = { name: "Alice", age: 25 };
const jsonStr = JSON.stringify(person);
console.log(jsonStr); // Output: '{"name":"Alice","age":25}'

const parsedObj = JSON.parse(jsonStr);
console.log(parsedObj.name); // Output: "Alice"
These are just a few of the many aspects of working with objects in JavaScript. Objects are a fundamental concept in the language and are used extensively in a wide range of applications, from managing data in web development to implementing complex data structures and algorithms.


/* _____________________Object Constructors:__________________________________ */

/*
You can create multiple instances of objects using constructor functions or, in modern JavaScript, classes. 
This allows you to define a blueprint for creating similar objects.
*/

// Using constructor function
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

const john = new Person("John", "Doe");

// Using class
class Animal {
  constructor(name, species) {
    this.name = name;
    this.species = species;
  }
}

const cat = new Animal("Whiskers", "Cat");


/* _____________________Object Prototype:__________________________________ */

/*
JavaScript objects have a prototype chain that allows them to inherit properties and methods from other objects. 
You can add properties and methods to an object's prototype, which will be shared among all instances of that object.
*/

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

Person.prototype.getFullName = function() {
  return `${this.firstName} ${this.lastName}`;
};

const john = new Person("John", "Doe");
console.log(john.getFullName()); // Output: "John Doe"
