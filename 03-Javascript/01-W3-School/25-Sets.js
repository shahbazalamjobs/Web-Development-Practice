
// Sets

/*
In JavaScript, a "set" is a built-in data structure that represents a collection of unique values. 
Sets are similar to arrays, but they only store unique values, meaning no duplicate values are allowed. 
You can create and manipulate sets using the Set constructor and its associated methods.
*/

// 1. Creating a Set
const mySet = new Set(); // Creates an empty set

const fruitSet = new Set(["apple", "banana", "orange"]); // Initializes a set with values

// 2. Adding and Removing Elements
mySet.add("apple");
mySet.add("banana");
mySet.delete("banana");


  
// 3. Create a Set
const letters = new Set();

// Create Variables
const a = "a";
const b = "b";
const c = "c";

// Add Variables to the Set
letters.add(a);
letters.add(b);
letters.add(c);


// 4. Checking if an Element Exists
const hasBanana = mySet.has("banana"); // Returns false
const hasGrape = mySet.has("grape");   // Returns false

// 5. Getting the Size of a Set
const setSize = mySet.size;            // Returns 1

// 6. Iterating Over a Set
mySet.forEach((value) => {
  console.log(value);
});
// Output:
// apple

// 7. Using for...of
for (const item of mySet) {
  console.log(item);
}
// Output:
// apple

// 8. Converting a Set to an Array
const myArray = Array.from(mySet);
console.log(myArray);
// Output: ["apple"]


// Using For Each 
const letters = new Set(["a","b","c"]);

// List all Elements
let text = "";
letters.forEach (function(value) {
  text += value + "<br>";
})

document.getElementById("demo").innerHTML = text;
// o/p : a b c
