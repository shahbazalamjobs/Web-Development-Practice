
// Regular Expression (RegExp)

/* Regular expressions (regex or regexp) in JavaScript are used for pattern matching within strings. 
They are represented by a pattern enclosed in slashes /pattern/ and can be used with various
string methods and regex-specific functions.  */

// Testing for a Match (test method)
const patternTest = /apple/;
const textTest = "I have an apple and a banana.";
const isMatch = patternTest.test(textTest);
console.log(isMatch); // Output: true

// Matching and Extracting (match method)
const patternMatch = /apple/g; // 'g' flag for global search
const textMatch = "I have an apple and a banana. Apples are delicious.";
const matches = textMatch.match(patternMatch);
console.log(matches); // Output: ["apple", "apple"]

// Replacing Matches (replace method)
const patternReplace = /apple/g;
const textReplace = "I have an apple and a banana.";
const newText = textReplace.replace(patternReplace, "orange");
console.log(newText); // Output: "I have an orange and a banana."

// Searching for a Match (search method)
const patternSearch = /banana/;
const textSearch = "I have an apple and a banana.";
const position = textSearch.search(patternSearch);
console.log(position); // Output: 18 (index where the match starts)

// Splitting a String (split method)
const patternSplit = /\s+/; // Matches one or more whitespace characters
const textSplit = "apple  banana orange";
const parts = textSplit.split(patternSplit);
console.log(parts); // Output: ["apple", "banana", "orange"]

// Using Regex in Functions
const patternFunction = /[0-9]+/; // Matches one or more digits
const textFunction = "The price is $10.99 for product ID 12345.";
const numbers = textFunction.match(patternFunction);
console.log(numbers); // Output: ["10", "99", "12345"]

// Creating Regex with Constructor
const patternConstructor = new RegExp("apple", "g");
const textConstructor = "I have an apple and a banana. Apples are delicious.";
const matchesConstructor = textConstructor.match(patternConstructor);
console.log(matchesConstructor); // Output: ["apple", "apple"]

// Using Capture Groups
const patternGroups = /(\d{2})-(\d{2})-(\d{4})/;
const date = "23-09-2023";
const matchGroups = date.match(patternGroups);
console.log(matchGroups[0]); // Output: "23-09-2023" (the whole match)
console.log(matchGroups[1]); // Output: "23" (first capture group)
console.log(matchGroups[2]); // Output: "09" (second capture group)
console.log(matchGroups[3]); // Output: "2023" (third capture group)
