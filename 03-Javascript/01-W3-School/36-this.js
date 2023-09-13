// In JavaScript, the this keyword refers to an object.

/*
Which object depends on how this is being invoked (used or called).

The this keyword refers to different objects depending on how it is used:

In an object method, this refers to the object.
Alone, this refers to the global object.
In a function, this refers to the global object.
In a function, in strict mode, this is undefined.
In an event, this refers to the element that received the event.
Methods like call(), apply(), and bind() can refer this to any object.
*/

// 1. this in a Method

/* When used in an object method, this refers to the object. */

// Create an object:
const person = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  fullName : function() {
    return this.firstName + " " + this.lastName;
  }
};

// Display data from the object:
document.getElementById("demo").innerHTML = person.fullName();

// o/p: John Doe

// 2. this Alone

/* When used alone, this refers to the global object.
Because this is running in the global scope.
In a browser window the global object is [object Window]: */

let x = this;
document.getElementById("demo").innerHTML = x;

// o/p: [object Window]

//  In strict mode, when used alone, this also refers to the global object:

// 3. this in a Function (Default)

/*  In a function, the global object is the default binding for this.  */

document.getElementById("demo").innerHTML = myFunction();

function myFunction() {
  return this;
}

// o/p: [object Window]

// 4. this in a Function (Strict)

document.getElementById("demo").innerHTML = myFunction();

function myFunction() {
  return this;
}

// o/p: undefined

// 5. this in Event Handlers

<h1>The JavaScript <i>this</i> Keyword</h1>

<button onclick="this.style.display='none'">Click to Remove Me!</button>

// 6. Object Method Binding
// In these examples, this is the person object:

// Create an object:
const person = {
  firstName  : "John",
  lastName   : "Doe",
  id     : 5566,
  myFunction : function() {
    return this;
  }
};

// Display data from the object:
document.getElementById("demo").innerHTML = person.myFunction();

// o/p: [object Object]
