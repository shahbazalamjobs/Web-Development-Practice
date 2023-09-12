https://www.w3schools.com/js/js_iterables.asp

### Generally use for loop to iterate over elements

for (variable of iterable) {
  // code block to be executed
}

### Iterating Over a String
```js
for (const x of name) {
  // code block to be executed
}
```

### Iterating Over an Array
```js
const letters = ["a","b","c"];

for (const x of letters) {
  // code block to be executed
}
```

### Iterating Over a Set
```js
const letters = new Set(["a","b","c"]);

for (const x of letters) {
  // code block to be executed
}
```

### Iterating Over a Map
```js
const fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);

for (const x of fruits) {
  // code block to be executed
}
```
