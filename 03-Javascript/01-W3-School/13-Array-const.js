
// JavaScript Array Const

/*
It has become a common practice to declare arrays using const:
const cars = ["Saab", "Volvo", "BMW"];

*/


// 1. An array declared with const cannot be reassigned:

const cars = ["Saab", "Volvo", "BMW"];
cars = ["Toyota", "Volvo", "Audi"];    // ERROR

// 2. It does NOT define a constant array. It defines a constant reference to an array.
// Because of this, we can still change the elements of a constant array.

// Create an Array:
const cars = ["Saab", "Volvo", "BMW"];

// Change an element:
cars[0] = "Toyota";

// Add an element:
cars.push("Audi");

// Display the Array:
document.getElementById("demo").innerHTML = cars; 

// 3. An array declared with const must be initialized when it is declared. Otherwise will give syntax error:

const cars;
cars = ["Saab", "Volvo", "BMW"]; // This will not work:

// 4. Redeclaring an array declared with var is allowed anywhere in a program:

var cars = ["Volvo", "BMW"];     // Allowed
const cars = ["Volvo", "BMW"];   // Not allowed
{
  var cars = ["Volvo", "BMW"];   // Allowed
  const cars = ["Volvo", "BMW"]; // Not allowed
}

// 5. Redeclaring or reassigning an existing const array, in the same scope, or in the same block, is not allowed:
// 6. Redeclaring an array with const, in another scope, or in another block, is allowed:
