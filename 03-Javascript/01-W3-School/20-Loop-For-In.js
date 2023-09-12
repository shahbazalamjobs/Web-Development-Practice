
// The For In Loop: The JavaScript for in statement loops through the properties of an Object

// 1. Syntax
for (key in object) {
  // code block to be executed
}

// 2.
const person = {fname:"John", lname:"Doe", age:25}; 

let txt = "";
for (let x in person) {
  txt += person[x] + " ";
}

document.getElementById("demo").innerHTML = txt;

// o/p: John Doe 25

/* The for in loop iterates over a person object. Each iteration returns a key (x)
The key is used to access the value of the key. The value of the key is person[x] */
