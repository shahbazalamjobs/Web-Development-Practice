
// Arrow functions were introduced in ES6.
// Arrow functions allow us to write shorter function syntax:

// 1. 
let myFunction = (a, b) => a * b;

// 2. Before Arrow:
let hello = "";

hello = function() {
  return "Hello World!";
}

document.getElementById("demo").innerHTML = hello();

// 3. With Arrow Function:
let hello = "";

hello = () => {
  return "Hello World!";
}

document.getElementById("demo").innerHTML = hello();

// Short the code
// hello = () => "Hello World!";

// 4. Arrow Function With Parameters:
let hello = "";

hello = (val) => "Hello " + val;

document.getElementById("demo").innerHTML = hello("Universe!");

// o/p: Hello Universe!


/* _________________________________________*/

// Behaviour of this in arrow function

/* The handling of this is also different in arrow functions compared to regular functions.

In short, with arrow functions there are no binding of this.

In regular functions the this keyword represented the object that called the function, which could be the window, the document, a button or whatever.

With arrow functions the this keyword always represents the object that defined the arrow function. */

const obj = {
  name: 'John',
  sayNormal: function() {
    console.log(`Hello, ${this.name}!`);
  },
  sayArrow: () => {
    console.log(`Hello, ${this.name}!`);
  }
};

obj.sayNormal(); // Outputs: "Hello, John!"
obj.sayArrow();  // Outputs: "Hello, undefined!" (this.name is undefined in arrow function)


/*
Arguments object:

- Normal functions have an arguments object, which is an array-like object containing all the arguments passed to the function.
- Arrow functions do not have their own arguments object. Instead, they inherit the arguments object from their containing function or lexical context.
*/


/* ________________________________________ */

// Behaviour of this in normal regular function and arrow function

// 1. Regular Function:

hello = function() {
  document.getElementById("demo").innerHTML += this;
}

// When called as an event handler:
// this refers to the object that triggers the event.
window.addEventListener("load", hello); // this is window
document.getElementById("btn").addEventListener("click", hello); // this is the button element


// 2. Arrow Function:

hello = () => {
  document.getElementById("demo").innerHTML += this;
}

// When called as an event handler:
// 2. this refers to the owner of the function (lexical context).
window.addEventListener("load", hello); // this is the surrounding object (e.g., global object)
document.getElementById("btn").addEventListener("click", hello); // this is the same surrounding object

/*
Regular functions have a dynamic this binding based on how they are called.
Arrow functions have a fixed this binding, determined by their lexical context when defined.
In regular functions, this can refer to different objects depending on the calling context (e.g., window or an element).
In arrow functions, this always refers to the owner of the function where the arrow function is defined (usually the surrounding object or the global object in a browser context).
*/
