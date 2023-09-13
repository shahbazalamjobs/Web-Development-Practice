
// Scope determines the accessibility (visibility) of variables.

/*
JavaScript has 3 types of scope:

Block scope
Function scope
Global scope
*/


// 1. Block Scope
/* Before ES6 (2015), JavaScript had only Global Scope and Function Scope.
ES6 introduced two important new JavaScript keywords: let and const.
These two keywords provide Block Scope in JavaScript.
Variables declared inside a { } block cannot be accessed from outside the block: */

// 1. Let scope
{
  let x = 2;
}
// x can NOT be used here


// 2. var scope
{
  var x = 2;
}
// x CAN be used here


// 3. Local scope: Variables declared within a JavaScript function, become LOCAL to the function.
// code here can NOT use carName

function myFunction() {
  let carName = "Volvo";
  // code here CAN use carName
}

// code here can NOT use carName

/* _______________________________________ */


// Local variables have Function Scope: They can only be accessed from within the function.



/* 2. Function Scope
JavaScript has function scope: Each function creates a new scope.
Variables defined inside a function are not accessible (visible) from outside the function.
Variables declared with var, let and const are quite similar when declared inside a function. */

function myFunction() {
  var carName = "Volvo";   // Function Scope
}



// 3. Global JavaScript Variables

// A variable declared outside a function, becomes GLOBAL.

let carName = "Volvo";
// code here can use carName

function myFunction() {
// code here can also use carName
}

// A global variable has Global Scope: All scripts and functions on a web page can access it. 

var x = 2;       // Global scope
let x = 2;       // Global scope
const x = 2;       // Global scope



// 4. Automatically Global
// If you assign a value to a variable that has not been declared, it will automatically become a GLOBAL variable.

myFunction();
// code here can use carName as a global variable
document.getElementById("demo").innerHTML = "I can display " + carName;

function myFunction() {
  carName = "Volvo";
}

// o/p: I can display Volvo



// 5. Strict Mode
// All modern browsers support running JavaScript in "Strict Mode".
// In "Strict Mode", undeclared variables are not automatically global.



// 6. Global Variables in HTML
/* With JavaScript, the global scope is the JavaScript environment.
In HTML, the global scope is the window object.
Global variables defined with the var keyword belong to the window object: */

// 6.1 
var carName = "Volvo";

// code here can use window.carName
document.getElementById("demo").innerHTML = "I can display " + window.carName;
// o/p: I can display Volvo


// 6.2
let carName = "Volvo";
// code here can not use window.carName



