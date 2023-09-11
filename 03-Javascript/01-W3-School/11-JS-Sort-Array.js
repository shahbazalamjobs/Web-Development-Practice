
// 1. The sort() method sorts an array alphabetically:

const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo1").innerHTML = fruits;

fruits.sort();
document.getElementById("demo2").innerHTML = fruits;

// o/p: Banana,Orange,Apple,Mango
// Apple,Banana,Mango,Orange

// 2. The reverse() method reverses the elements in an array.
// We can use it to sort an array in descending order:

const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo1").innerHTML = fruits;

// First sort the array
fruits.sort();

// Then reverse it:
fruits.reverse();

document.getElementById("demo2").innerHTML = fruits;
// o/p: Banana,Orange,Apple,Mango
// Orange,Mango,Banana,Apple


// 3. Numeric Sort in ascending 

/* 
By default, the sort() function sorts values as strings. This works well for strings ("Apple" comes before "Banana").
However, if numbers are sorted as strings, "25" is bigger than "100", because "2" is bigger than "1".
Because of this, the sort() method will produce incorrect result when sorting numbers.
You can fix this by providing a compare function:
*/

const points = [40, 100, 1, 5, 25, 10];
document.getElementById("demo1").innerHTML = points;  

points.sort(function(a, b){return a - b});
document.getElementById("demo2").innerHTML = points;

// o/p: 40,100,1,5,25,10
// 1,5,10,25,40,100

// 4. Sort in descending order

const points = [40, 100, 1, 5, 25, 10];
document.getElementById("demo1").innerHTML = points;

points.sort(function(a, b){return b - a});
document.getElementById("demo2").innerHTML = points;

// 5. Sort array in random order
/*
<button onclick="myFunction()">Try it</button>
<p id="demo"></p>
*/
const points = [40, 100, 1, 5, 25, 10];
document.getElementById("demo").innerHTML = points;  

function myFunction() {
  points.sort(function(){return 0.5 - Math.random()});
  document.getElementById("demo").innerHTML = points;
}

// 6. The Fisher Yates Method
/*
The above example, array.sort(), is not accurate. It will favor some numbers over the others.
The most popular correct method, is called the Fisher Yates shuffle.
*/

const points = [40, 100, 1, 5, 25, 10];
document.getElementById("demo").innerHTML = points;  

function myFunction() {
  for (let i = points.length -1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i+1));
    let k = points[i];
    points[i] = points[j];
    points[j] = k;
  }
  document.getElementById("demo").innerHTML = points;
}

// 7. Sort in decreasing order

const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return a-b});
document.getElementById("demo").innerHTML = points[0];
//  o/p:The lowest number is 1.

// points[0] contains the lowest value
// And points[points.length-1] contains the highest value

// 8. You can use Math.max.apply to find the highest number in an array:
/*
<p>The highest number is <span id="demo"></span>.</p>
*/
const points = [40, 100, 1, 5, 25, 10];
document.getElementById("demo").innerHTML = myArrayMax(points);

function myArrayMax(arr) {
  return Math.max.apply(null, arr);
}
// o/p: The highest number is 100.

// 9. You can use Math.min.apply to find the lowest number in an array:
const points = [40, 100, 1, 5, 25, 10];
document.getElementById("demo").innerHTML = myArrayMin(points);

function myArrayMin(arr) {
  return Math.min.apply(null, arr);
}
// o/p: The lowest number is 1.

// 10. The fastest solution is to use a "home made" method to find max value
// This function loops through an array comparing each value with the highest value found:
const points = [40, 100, 1, 5, 25, 10];
document.getElementById("demo").innerHTML = myArrayMax(points);

function myArrayMax(arr) {
  let len = arr.length;
  let max = -Infinity;
  while (len--) {
    if (arr[len] > max) {
      max = arr[len];
    }
  }
  return max;
}

// 11. Fastest method to find lowest value
const points = [40, 100, 1, 5, 25, 10];
document.getElementById("demo").innerHTML = myArrayMin(points);

function myArrayMin(arr) {
  let len = arr.length;
  let min = Infinity;
  while (len--) {
    if (arr[len] < min) {
      min = arr[len];
    }
  }
  return min;
}

// 12. Sorting Object Arrays
const cars = [
  {type:"Volvo", year:2016},
  {type:"Saab", year:2001},
  {type:"BMW", year:2010}
];

displayCars();

cars.sort(function(a, b){return a.year - b.year});
displayCars();

function displayCars() {
  document.getElementById("demo").innerHTML =
  cars[0].type + " " + cars[0].year + "<br>" +
  cars[1].type + " " + cars[1].year + "<br>" +
  cars[2].type + " " + cars[2].year;
}

/*
o/p:

Saab 2001
BMW 2010
Volvo 2016

*/

// 13. 

/*
<button onclick="myFunction()">Sort</button>
<p id="demo"></p>
*/
const cars = [
  {type:"Volvo", year:2016},
  {type:"Saab", year:2001},
  {type:"BMW", year:2010}
];

displayCars();

function myFunction() {
  cars.sort(function(a, b){
    let x = a.type.toLowerCase();
    let y = b.type.toLowerCase();
    if (x < y) {return -1;}
    if (x > y) {return 1;}
    return 0;
  });
  displayCars();
}

function displayCars() {
  document.getElementById("demo").innerHTML =
  cars[0].type + " " + cars[0].year + "<br>" +
  cars[1].type + " " + cars[1].year + "<br>" +
  cars[2].type + " " + cars[2].year;
}

// 14. Stable Array sort()

const myArr = [
  {name:"X00",price:100 },
  {name:"X01",price:100 },
  {name:"X02",price:100 },
  {name:"X03",price:100 },
  {name:"X04",price:110 },
  {name:"X05",price:110 },
  {name:"X06",price:110 },
  {name:"X07",price:110 },
  {name:"X08",price:120 },
  {name:"X09",price:120 },
  {name:"X10",price:120 },
  {name:"X11",price:120 },
  {name:"X12",price:130 },
  {name:"X13",price:130 },
  {name:"X14",price:130 },
  {name:"X15",price:130 },
  {name:"X16",price:140 },
  {name:"X17",price:140 },
  {name:"X18",price:140 },
  {name:"X19",price:140 }
];

myArr.sort( (p1, p2) => {
  if (p1.price < p2.price) return -1;
  if (p1.price > p2.price) return 1;
  return 0;
});

let txt = "";
myArr.forEach(myFunction);

function myFunction(value) {
  txt += value.name + " " + value.price + "<br>"; 
}
document.getElementById("demo").innerHTML = txt;
