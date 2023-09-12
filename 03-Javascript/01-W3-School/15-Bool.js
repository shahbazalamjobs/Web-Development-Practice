

// Boolean Values
var isTrue = true; // Represents true
var isFalse = false; // Represents false

// Boolean Expressions
var x = 5;
var y = 10;
var isEqual = x === y; // Evaluates to false
var isLessThan = x < y; // Evaluates to true

// Truthy and Falsy Values
var truthyValue = "Hello"; // Truthy
var falsyValue = 0; // Falsy

// Conditional Statements
var age = 25;
if (age < 18) {
  console.log("You are a minor."); // Not executed
} else {
  console.log("You are an adult."); // Output: You are an adult.
}

// Boolean Functions
var myArray = [1, 2, 3];
var isArray = Array.isArray(myArray); // Evaluates to true

/* ____________________________________________________ */

// Boolean values
// Everything without a "Value" is false

// The Boolean value of 0 (zero) is false:
let x = 0;
console.log(Boolean(x)); // Output: false

// The Boolean value of -0 (minus zero) is false:
let x = -0;
console.log(Boolean(x)); // Output: false

// The Boolean value of "" (empty string) is false:
let x = "";
console.log(Boolean(x)); // Output: false

// The Boolean value of undefined is false:
let x;
console.log(Boolean(x)); // Output: false

// The Boolean value of null is false:
let x = null;
console.log(Boolean(x)); // Output: false

// The Boolean value of false is (you guessed it) false:
let x = false;
console.log(Boolean(x)); // Output: false

// The Boolean value of NaN is false:
let x = 10 / "Hallo";
console.log(Boolean(x)); // Output: false

// JavaScript Booleans as Objects
// Normally JavaScript booleans are primitive values created from literals:
let x = false;

// But booleans can also be defined as objects with the keyword new:
let y = new Boolean(false);

// Example
let x = false;
let y = new Boolean(false);

// typeof x returns boolean
// typeof y returns object
console.log("typeof x:", typeof x); // Output: typeof x: boolean
console.log("typeof y:", typeof y); // Output: typeof y: object

// Do not create Boolean objects.
// The new keyword complicates the code and slows down execution speed.
// Boolean objects can produce unexpected results:

// When using the == operator, x and y are equal:
let x = false;
let y = new Boolean(false);
console.log("x == y:", x == y); // Output: x == y: true

// When using the === operator, x and y are not equal:
let x = false;
let y = new Boolean(false);
console.log("x === y:", x === y); // Output: x === y: false

// Note the difference between (x==y) and (x===y).
// (x == y) true or false?
let x = new Boolean(false);
let y = new Boolean(false);
console.log("(x == y):", x == y); // Output: (x == y): true

// (x === y) true or false?
let x = new Boolean(false);
let y = new Boolean(false);
console.log("(x === y):", x === y); // Output: (x === y): false

// Comparing two JavaScript objects always returns false.

// Complete Boolean Reference
// For a complete reference, go to our Complete JavaScript Boolean Reference.
// The reference contains descriptions and examples of all Boolean properties and methods.
