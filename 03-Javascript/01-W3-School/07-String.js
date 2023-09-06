
/* ________________String ______________________ */

// Declare and initialize a string variable using single quotes.
let singleQuotedString = 'This is a single-quoted string.';

// Declare and initialize a string variable using double quotes.
let doubleQuotedString = "This is a double-quoted string.";

// Declare and initialize a string variable using a template literal.
let templateLiteral = `You can embed variables like ${singleQuotedString} inside a template literal.`;

// Concatenation of strings using the + operator.
let firstName = 'John';
let lastName = 'Doe';
let fullName = firstName + ' ' + lastName; 

// Concatenation of strings using the concat() method.
let greeting = 'Hello, '.concat(firstName, ' ', lastName);

// Find the length of a string.
let text = 'Hello, World!';
let length = text.length;

// Access individual characters in a string.
let firstChar = text[0]; // 'H'
let sixthChar = text[5]; // ','

// Extract a substring using substring() method.
let substring1 = text.substring(0, 5); // 'Hello'

// Extract a substring using string slicing.
let substring2 = text.slice(7, 12); // 'World'

// Find the index of a substring in a string.
let indexOfIs = text.indexOf('is'); // 7

// Replace a substring in a string.
let replacedText = text.replace('World', 'JavaScript'); 

// Split a string into an array of substrings.
let words = text.split(' '); // ['Hello,', 'World!']

// Convert a string to uppercase.
let uppercaseText = text.toUpperCase(); // 'HELLO, WORLD!'

// Convert a string to lowercase.
let lowercaseText = text.toLowerCase(); // 'hello, world!'

// Strings are immutable; you can't change a character at a specific index.
// Instead, create a new string with the desired changes.
let modifiedText = text.replace('H', 'J'); // 'Jello, World!'


/* ________________String Search______________________ */


let text = 'JavaScript is a powerful scripting language. JavaScript is widely used for web development.';

// Using indexOf() to find the first occurrence of a substring.
let indexOfIs = text.indexOf('is'); // Returns 11

// Using lastIndexOf() to find the last occurrence of a substring.
let lastIndexOfIs = text.lastIndexOf('is'); // Returns 54

// Using includes() to check if a substring exists in the string.
let includesIs = text.includes('is'); // Returns true

// Using startsWith() to check if a string starts with a specific substring.
let startsWithJS = text.startsWith('JavaScript'); // Returns true

// Using endsWith() to check if a string ends with a specific substring.
let endsWithDevelopment = text.endsWith('development.'); // Returns true

// Using a regular expression with test() to search for a pattern.
let pattern = /JavaScript/g; // 'g' flag for global search
let isPatternFound = pattern.test(text); // Returns true

// Using match() with a regular expression to find all matches.
let matches = text.match(/JavaScript/g); // Returns an array of all occurrences

// Using match() with a regular expression to find the first match.
let firstMatch = text.match(/JavaScript/); // Returns the first occurrence

// Using search() with a regular expression to find the index of the first match.
let searchResult = text.search(/JavaScript/); // Returns the index of the first occurrence (0-based)

// Using a for loop to find all occurrences of a substring.
let searchSubstring = 'JavaScript';
let searchPositions = [];
for (let i = 0; i < text.length; i++) {
  if (text.substring(i, i + searchSubstring.length) === searchSubstring) {
    searchPositions.push(i);
  }
}


/* ________________String Tempelate______________________ */


// Basic template literal with string interpolation.
let name = 'John';
let greeting = `Hello, ${name}!`; // String interpolation using ${}

// Multiline string using template literals.
let multilineString = `
  This is a
  multiline
  string.`;

// Expressions and functions within template literals.
let num1 = 5;
let num2 = 10;
let sum = `The sum of ${num1} and ${num2} is ${num1 + num2}.`;

let uppercase = (str) => str.toUpperCase();
let greetingWithFunction = `Hello, ${uppercase('John')}!`;

// Displaying results in the console.
console.log(greeting);
console.log(multilineString);
console.log(sum);
console.log(greetingWithFunction);



/*______________String Tempelates using ES6_____________________*/


let header = "Templates Literals";
let tags = ["template literals", "javascript", "es6"];

let html = `<h2>${header}</h2><ul>`;

for (const x of tags) {
  html += `<li>${x}</li>`;
}

html += `</ul>`;
document.getElementById("demo").innerHTML = html;


/*______________HTML tempelate using ES6______________________*/


// Data for the template

const data = { title: 'Hello', content: 'World' };

// Template using Template Literals
const template = `
  <div>
    <h1>${data.title}</h1>
    <p>${data.content}</p>
  </div>
`;

// Render the template
document.getElementById('app').innerHTML = template;


/*______________HTML tempelate using DOM_______________________*/


// Data for the template
const data = { title: 'Hello', content: 'World' };

// Create a new div element
const template = document.createElement('div');

// Set the HTML content using DOM manipulation
template.innerHTML = `
  <h1>${data.title}</h1>
  <p>${data.content}</p>
`;

// Get the "app" element and append the template
const appElement = document.getElementById('app');
appElement.appendChild(template);
