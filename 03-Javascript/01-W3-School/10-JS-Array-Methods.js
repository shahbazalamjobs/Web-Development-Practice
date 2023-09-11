
// JavaScript Array Methods

/*

List of Array Methods

Array length
Array toString()
Array pop()
Array push()
Array shift()
Array unshift()
Array join()
Array delete()
Array concat()
Array flat()
Array splice()
Array slice()

*/

// 1. Array Length: The length property returns the length (size) of an array:
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let size = fruits.length;
document.getElementById("demo").innerHTML = size;


// 2. Array toString() : The JavaScript method toString() converts an array to a string of (comma separated) array values.
const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits.toString();

// o/p: Banana,Orange,Apple,Mango

// 3. The join() method also joins all array elements into a string, but in addition you can specify the separator:
const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits.join(" * ");

// o/p: Banana * Orange * Apple * Mango

// 4. The pop() method removes the last element from an array:

const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo1").innerHTML = fruits;

fruits.pop();
document.getElementById("demo2").innerHTML = fruits;

// o/p: Banana,Orange,Apple,Mango
// Banana,Orange,Apple

// 5. The pop() method returns the value that was "popped out":
const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo1").innerHTML = fruits.pop();
document.getElementById("demo2").innerHTML = fruits;

// Mango
// Banana,Orange,Apple

// 6. The push() method adds a new element to an array (at the end):
const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo1").innerHTML = fruits;

fruits.push("Kiwi");
document.getElementById("demo2").innerHTML = fruits;

// o/p: Banana,Orange,Apple,Mango
// Banana,Orange,Apple,Mango,Kiwi

// 7. The push() method returns the new array length:
const fruits = ["Banana", "Orange", "Apple", "Mango"];

document.getElementById("demo1").innerHTML = fruits.push("Kiwi");
document.getElementById("demo2").innerHTML = fruits;

// o/p: 5
// Banana,Orange,Apple,Mango,Kiwi

// 8. The shift() method removes the first array element and "shifts" all other elements to a lower index.

const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo1").innerHTML = fruits;

fruits.shift();
document.getElementById("demo2").innerHTML = fruits;

// The shift() method returns the value that was "shifted out":

// 9. The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements:
const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo1").innerHTML = fruits;
fruits.unshift("Lemon");
document.getElementById("demo2").innerHTML = fruits;

// o/p:  Banana,Orange,Apple,Mango
// Lemon,Banana,Orange,Apple,Mango

// The unshift() method returns the new array length:

// 10. Array elements are accessed using their index number:
const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo1").innerHTML = fruits;

fruits[0] = "Kiwi";
document.getElementById("demo2").innerHTML = fruits;
// Banana,Orange,Apple,Mango
// Kiwi,Orange,Apple,Mango

/* ______________________________________ */

/*
11. Array elements can be deleted using the JavaScript operator delete.
Using delete leaves undefined holes in the array.
Use pop() or shift() instead
*/

const fruits = ["Banana", "Orange", "Apple", "Mango"];

document.getElementById("demo1").innerHTML =
"The first fruit is: " + fruits[0];

delete fruits[0];

document.getElementById("demo2").innerHTML =
"The first fruit is: " + fruits[0];

// o/p: The first fruit is: Banana
// The first fruit is: undefined

// 12. The concat() method creates a new array by merging (concatenating) existing arrays:
const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];
const myChildren = myGirls.concat(myBoys);

document.getElementById("demo").innerHTML = myChildren;

// o/p: Cecilie,Lone,Emil,Tobias,Linus
// The concat() method does not change the existing arrays. It always returns a new array.

// 12. The concat() method can take any number of array arguments:
const array1 = ["Cecilie", "Lone"];
const array2 = ["Emil", "Tobias", "Linus"];
const array3 = ["Robin", "Morgan"];

const myChildren = array1.concat(array2, array3); 

document.getElementById("demo").innerHTML = myChildren;

// o/p: Cecilie,Lone,Emil,Tobias,Linus,Robin,Morgan

// 13. The concat() method can also take strings as arguments:
const myArray = ["Emil", "Tobias", "Linus"];
const myChildren = myArray.concat("Peter"); 
document.getElementById("demo").innerHTML = myChildren;

// Emil,Tobias,Linus,Peter


// 14. Flattening an array is the process of reducing the dimensionality of an array.
const myArr = [[1,2],[3,4],[5,6]];

const newArr = myArr.flat();
document.getElementById("demo").innerHTML = newArr;

