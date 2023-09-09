// JavaScript Arrays

// 1. Using an array literal is the easiest way to create a JavaScript Array

const cars = ["Saab", "Volvo", "BMW"];
document.getElementById("demo").innerHTML = cars;

// 2. Spaces and line breaks are not important. A declaration can span multiple lines:

const cars = [
  "Saab",
  "Volvo",
  "BMW"
];


// 3. Create an array, and then provide the elements:

const cars = [];
cars[0]= "Saab";
cars[1]= "Volvo";
cars[2]= "BMW";

// 4. Using the JavaScript Keyword new

const cars = new Array("Saab", "Volvo", "BMW");
document.getElementById("demo").innerHTML = cars;

// 5. Accessing Array Elements

const cars = ["Saab", "Volvo", "BMW"];
document.getElementById("demo").innerHTML = cars[0];

// 6. Changing an Array Element

const cars = ["Saab", "Volvo", "BMW"];
cars[0] = "Opel";
document.getElementById("demo").innerHTML = cars;

// 7. JavaScript method toString() converts an array to a string of (comma separated) array values

const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits.toString();

// o/p: Banana,Orange,Apple,Mango

// 8. Access the Full Array

const cars = ["Saab", "Volvo", "BMW"];
document.getElementById("demo").innerHTML = cars;

// o/p: Saab,Volvo,BMW

// 9. Arrays are Objects

const person = ["John", "Doe", 46];
document.getElementById("demo").innerHTML = person[0];

// o/p: John

// 10. Objects use names to access its "members"

const person = {firstName:"John", lastName:"Doe", age:46};
document.getElementById("demo").innerHTML = person.firstName;

// o/p: John

// 11. We can have variables of different types in the same Array.
// We can have objects, functions and arrays in an Array

myArray[0] = Date.now;
myArray[1] = myFunction;
myArray[2] = myCars;

// 12. The length property of an array returns the length of an array 

const fruits = ["Banana", "Orange", "Apple", "Mango"];
let size = fruits.length;
document.getElementById("demo").innerHTML = size;

// 13. Accessing the First and Last Array Element

const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits[0];

const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits[fruits.length - 1];
  

// 14. Looping Array Elements

const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fLen = fruits.length;

let text = "<ul>";
for (let i = 0; i < fLen; i++) {
  text += "<li>" + fruits[i] + "</li>";
}
text += "</ul>";

document.getElementById("demo").innerHTML = text;







