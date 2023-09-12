
// 1. The forEach() method calls a function (a callback function) once for each array element.
const numbers = [45, 4, 9, 16, 25];

let txt = "";
numbers.forEach(myFunction);
document.getElementById("demo").innerHTML = txt;

function myFunction(value, index, array) {
  txt += value + "<br>"; 
}

// 2. Note that the function takes 3 arguments: value , index, array 
// The example above uses only the value parameter. The example can be rewritten to:

const numbers = [45, 4, 9, 16, 25];

let txt = "";
numbers.forEach(myFunction);
document.getElementById("demo").innerHTML = txt;

function myFunction(value) {
  txt += value + "<br>"; 
}
/* o/p: 
45 
4
9
16
25
*/

// 3. JavaScript Array map()
/*
The map() method creates a new array by performing a function on each array element.

The map() method does not execute the function for array elements without values.

The map() method does not change the original array.

This example multiplies each array value by 2: const numbers1 = [45, 4, 9, 16, 25];
*/

const numbers2 = numbers1.map(myFunction);
document.getElementById("demo").innerHTML = numbers2;
function myFunction(value, index, array) {
  return value * 2;
}

// o/p: 90,8,18,32,50

/* we can omit index and array */
function myFunction(value) {
  return value * 2;
}

// flatMap() : The flatMap() method first maps all elements of an array and then creates a new array by flattening the array.
const myArr = [1, 2, 3, 4, 5,6];
const newArr = myArr.flatMap((x) => x * 2);
document.getElementById("demo").innerHTML = newArr;

// 4. JavaScript Array filter()
// The filter() method creates a new array with array elements that pass a test.

const numbers = [45, 4, 9, 16, 25];
const over18 = numbers.filter(myFunction);

document.getElementById("demo").innerHTML = over18;

function myFunction(value) {
  return value > 18;
}

// 5. JavaScript Array reduce()
// The reduce() method runs a function on each array element to produce (reduce it to) a single value.
// The reduce() method works from left-to-right in the array. See also reduceRight().

const numbers = [45, 4, 9, 16, 25];
let sum = numbers.reduce(myFunction);

document.getElementById("demo").innerHTML = "The sum is " + sum;

function myFunction(total, value) {
  return total + value;
}

// o/p: The sum is 99


// 6. The reduce() method can accept an initial value:
const numbers = [45, 4, 9, 16, 25];
let sum = numbers.reduce(myFunction, 100);

document.getElementById("demo").innerHTML = "The sum is " + sum;

function myFunction(total, value) {
  return total + value;
}

// o/p: The sum is 199


// 7. JavaScript Array every()
// The every() method checks if all array values pass a test.

const numbers = [45, 4, 9, 16, 25];
let allOver18 = numbers.every(myFunction);

document.getElementById("demo").innerHTML = "All over 18 is " + allOver18;

function myFunction(value) {
  return value > 18;
}

// 8. JavaScript Array some()
// The some() method checks if some array values pass a test.

const numbers = [45, 4, 9, 16, 25];
let someOver18 = numbers.some(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}

// 9. JavaScript Array indexOf()
// The indexOf() method searches an array for an element value and returns its position.
const fruits = ["Apple", "Orange", "Apple", "Mango"];
let position = fruits.indexOf("Apple") + 1;

document.getElementById("demo").innerHTML = "Apple is found in position " + position;

// 10. The find() method returns the value of the first array element that passes a test function.
// 11. The findIndex() method returns the index of the first array element that passes a test function.
