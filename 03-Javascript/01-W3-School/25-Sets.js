
// Sets

/*
In JavaScript, a "set" is a built-in data structure that represents a collection of unique values. 
Sets are similar to arrays, but they only store unique values, meaning no duplicate values are allowed. 
You can create and manipulate sets using the Set constructor and its associated methods.
*/

// Creating a Set
const mySet = new Set(); // Creates an empty set

const fruitSet = new Set(["apple", "banana", "orange"]); // Initializes a set with values

// Adding and Removing Elements
mySet.add("apple");
mySet.add("banana");
mySet.delete("banana");

// Checking if an Element Exists
const hasBanana = mySet.has("banana"); // Returns false
const hasGrape = mySet.has("grape");   // Returns false

// Getting the Size of a Set
const setSize = mySet.size;            // Returns 1

// Iterating Over a Set
mySet.forEach((value) => {
  console.log(value);
});
// Output:
// apple

// Using for...of
for (const item of mySet) {
  console.log(item);
}
// Output:
// apple

// Converting a Set to an Array
const myArray = Array.from(mySet);
console.log(myArray);
// Output: ["apple"]
