

// Hoisting is JavaScript's default behavior of moving all declarations to the top of the current scope 
// (to the top of the current script or the current function).

// JavaScript Declarations are Hoisted
// In JavaScript, a variable can be declared after it has been used. In other words; a variable can be used before it has been declared.

// 1. 
x = 5; // Assign 5 to x

elem = document.getElementById("demo"); // Find an element
elem.innerHTML = x;                     // Display x in the element

var x; // Declare x

// 2. 
var x; // Declare x
x = 5; // Assign 5 to x

elem = document.getElementById("demo"); // Find an element
elem.innerHTML = x;                     // Display x in the element


/*
Variables defined with let and const are hoisted to the top of the block, but not initialized.

Meaning: The block of code is aware of the variable, but it cannot be used until it has been declared.

Using a let variable before it is declared will result in a ReferenceError.

The variable is in a "temporal dead zone" from the start of the block until it is declared:
*/


// 3. JavaScript Initializations are Not Hoisted
// JavaScript only hoists declarations, not initializations.

// 3.1 
var x = 5; // Initialize x
var y = 7; // Initialize y

elem = document.getElementById("demo"); // Find an element 
elem.innerHTML = x + " " + y;       // Display x and y

// o/p: 5 7

// 3.2
var x = 5;  // Initialize x

elem = document.getElementById("demo");      // Find an element 
elem.innerHTML = "x is " + x + " and y is " + y;  // Display x and y
var y = 7;  // Initialize y

// o/p: x is 5 and y is undefined
