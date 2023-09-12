
// Typeof

// Basic Data Types
const num = 42;
const str = "Hello, world!";
const bool = true;
const undef = undefined;
const nul = null;

console.log(typeof num);    // "number"
console.log(typeof str);    // "string"
console.log(typeof bool);   // "boolean"
console.log(typeof undef);  // "undefined"
console.log(typeof nul);    // "object" (Note: typeof null is a known quirk in JavaScript)

// Objects and Functions
const obj = { name: "John" };
const arr = [1, 2, 3];
const func = function() {};

console.log(typeof obj);    // "object"
console.log(typeof arr);    // "object"
console.log(typeof func);   // "function"

// Checking for Undefined Variables
let variable;
console.log(typeof variable); // "undefined"

// Checking for Non-Existent Variables
console.log(typeof nonExistentVariable); // "undefined"

// Using typeof in Conditional Statements
const value = 42;
if (typeof value === "number") {
  console.log("It's a number!");
}

// Checking for NaN (Not-a-Number)
const result = 10 / "apple";
if (isNaN(result)) {
  console.log("It's NaN!");
}
