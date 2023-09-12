
Math.round(x)  //	Returns x rounded to its nearest integer
Math.ceil(x)   //	Returns x rounded up to its nearest integer
Math.floor(x)  //	Returns x rounded down to its nearest integer
Math.trunc(x)
/*
Original: 4
Math.round: 4
Math.ceil: 4
Math.floor: 4
Math.trunc: 4
--------------------
Original: 4.3
Math.round: 4
Math.ceil: 5
Math.floor: 4
Math.trunc: 4
--------------------
Original: 4.5
Math.round: 5
Math.ceil: 5
Math.floor: 4
Math.trunc: 4
--------------------
Original: -4.1
Math.round: -4
Math.ceil: -4
Math.floor: -5
Math.trunc: -4
--------------------
Original: -4.8
Math.round: -5
Math.ceil: -4
Math.floor: -5
Math.trunc: -4
--------------------
*/

// 2. Power, Absolute, Sqrt
var x = 5;
var y = -3;

// Calculate the power of x raised to y
var powerResult = Math.pow(x, y); // Math.pow(5, -3) = 0.008

// Calculate the absolute value of y
var absoluteValue = Math.abs(y); // Math.abs(-3) = 3

// Calculate the square root of x
var squareRootResult = Math.sqrt(x); // Math.sqrt(5) = 2.23606797749979

// Math.min(), Math.max()
// Math.min() and Math.max() can be used to find the lowest or highest value in a list of arguments:
document.getElementById("demo").innerHTML = Math.min(0, 150, 30, 20, -8, -200);
// -200

document.getElementById("demo").innerHTML = Math.max(0, 150, 30, 20, -8, -200);
// 150

// Find min, max by passing array using spread oprator ...
var numbers = [3, 7, 1, 9, 4, 6];

// Find the minimum value in the array
var minValue = Math.min(...numbers); // Math.min(3, 7, 1, 9, 4, 6) = 1

// Find the maximum value in the array
var maxValue = Math.max(...numbers); // Math.max(3, 7, 1, 9, 4, 6) = 9

/*
When you use ...numbers, it spreads the elements of the numbers array as individual arguments to the functions. 
In this case, it's equivalent to writing Math.min(3, 7, 1, 9, 4, 6) and Math.max(3, 7, 1, 9, 4, 6).

If didnt used ... spread operator, it will give us unexpected result
*/
