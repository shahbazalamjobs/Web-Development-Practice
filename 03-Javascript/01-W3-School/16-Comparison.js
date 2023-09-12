// Comparison 

// Equality (==) comparison
var a = 5;
var b = "5";

console.log("a == b:", a == b); // Output: a == b: true (values are equal, type conversion)
console.log("a != b:", a != b); // Output: a != b: false (values are equal, type conversion)

// Strict equality (===) comparison
var c = 5;
var d = "5";

console.log("c === d:", c === d); // Output: c === d: false (values are equal, but different types)
console.log("c !== d:", c !== d); // Output: c !== d: true (values are equal, but different types)

// Greater than (>) and less than (<) comparisons
var x = 10;
var y = 5;

console.log("x > y:", x > y); // Output: x > y: true (x is greater than y)
console.log("x < y:", x < y); // Output: x < y: false (x is not less than y)

// Greater than or equal to (>=) and less than or equal to (<=) comparisons
var m = 10;
var n = 10;

console.log("m >= n:", m >= n); // Output: m >= n: true (m is equal to n)
console.log("m <= n:", m <= n); // Output: m <= n: true (m is equal to n)

// Equality comparisons with type coercion
var value1 = 42;
var value2 = "42";

console.log("value1 == value2:", value1 == value2); // Output: value1 == value2: true (values are equal, type conversion)
console.log("value1 === value2:", value1 === value2); // Output: value1 === value2: false (values are equal, but different types)

/* _______________________________________________*/

/*
2 < 12	true	
2 < "12"	true	
2 < "John"	false	
2 > "John"	false	
2 == "John"	false	
"2" < "12"	false	
"2" > "12"	true	
"2" == "12"	false
*/
