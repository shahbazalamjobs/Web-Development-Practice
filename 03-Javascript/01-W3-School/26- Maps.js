
// Maps

// Creating a Map
const myMap = new Map(); // Creates an empty Map

const fruitMap = new Map([
  ["apple", 5],
  ["banana", 3],
  ["orange", 8]
]); // Initializes a Map with key-value pairs

// Adding and Updating Entries
myMap.set("grape", 4); // Adds a new entry
myMap.set("apple", 7); // Updates an existing entry

// Getting Values by Key
const appleCount = myMap.get("apple"); // Retrieves the value associated with the key "apple"

// Checking if a Key Exists
const hasBanana = myMap.has("banana"); // Returns true
const hasGrape = myMap.has("grape");   // Returns true for the newly added key

// Deleting Entries
myMap.delete("orange"); // Removes the entry with the key "orange"

// Getting the Size of a Map
const mapSize = myMap.size; // Returns the number of entries in the Map

// Iterating Over a Map
myMap.forEach((value, key) => {
  console.log(key, value);
});
// Output:
// grape 4
// apple 7

// Using for...of
for (const [key, value] of myMap) {
  console.log(key, value);
}
// Output:
// grape 4
// apple 7

// Converting a Map to an Array
const myArray = Array.from(myMap);
console.log(myArray);
// Output: [ ["grape", 4], ["apple", 7] ]


/*____________________________*/

// 1. Creating a Map from an Array:

const fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);

document.getElementById("demo").innerHTML = fruits.get("apples");

// o/p: 500

// 2. size

document.getElementById("demo").innerHTML = fruits.size;
// o/p: 3

