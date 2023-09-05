/* 

A JavaScript function is a block of code designed to perform a particular task.
A JavaScript function is executed when "something" invokes it (calls it).


Function Invocation
The code inside the function will execute when "something" invokes (calls) the function:

When an event occurs (when a user clicks a button)
When it is invoked (called) from JavaScript code
Automatically (self invoked)

When JavaScript reaches a return statement, the function will stop executing.

With functions you can reuse code
You can use the same code with different arguments, to produce different results.

*/

/*
<html>
    <p id ="demo"></p>
</html>
*/

function myFunction(a, b) {
    return a * b;
}

let result = myFunction(2, 4);
document.querySelector("#demo").innerHTML = result;


/* ________________________________________________ */


// Function without Parameters:

function sayHello() {
  console.log("Hello, World!");
}

sayHello(); // Output: Hello, World!

/* ________________________________________________ */

// Function with Default Parameters:

function greet(name = "User") {
  console.log(`Hello, ${name}!`);
}

greet(); // Output: Hello, User!
greet("Alice"); // Output: Hello, Alice!

/* ________________________________________________ */


// Function Expression (Anonymous Function):

const multiply = function(x, y) {
  return x * y;
};

const result = multiply(3, 4);
console.log(result); // Output: 12

/* ________________________________________________ */

// Arrow Function:

const square = (x) => x * x;

const squaredValue = square(5);
console.log(squaredValue); // Output: 25

/* ________________________________________________ */


// Higher-Order Function (Function that takes a function as an argument):

function operateOnNumbers(x, y, operation) {
  return operation(x, y);
}

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

const result1 = operateOnNumbers(5, 3, add);
console.log(result1); // Output: 8

const result2 = operateOnNumbers(5, 3, subtract);
console.log(result2); // Output: 2

/* ________________________________________________ */


// Recursive Function (a function that calls itself):

function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

const result = factorial(5);
console.log(result); // Output: 120

/* ________________________________________________ */


//Callback Function (Function passed as an argument to another function):

function doSomethingAsync(callback) {
  setTimeout(function() {
    console.log("Async operation completed.");
    callback();
  }, 2000);
}

function afterAsync() {
  console.log("After async operation.");
}

doSomethingAsync(afterAsync);
