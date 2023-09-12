
// The For Of Loop
/* The JavaScript for of statement loops through the values of an iterable object.
It lets you loop over iterable data structures such as Arrays, Strings, Maps, NodeLists, and more: */

// 1. Looping over an Array
const cars = ["BMW", "Volvo", "Mini"];

let text = "";
for (let x of cars) {
  text += x + "<br>";
}

document.getElementById("demo").innerHTML = text;

/* o/p: 
BMW
Volvo
Mini
*/

// 2. Looping over a String
let language = "JavaScript";

let text = "";
for (let x of language) {
  text += x + "<br>";
}

document.getElementById("demo").innerHTML = text;

/* o/p: 
J
a
v
a
S
c
r
i
p
t
*/
