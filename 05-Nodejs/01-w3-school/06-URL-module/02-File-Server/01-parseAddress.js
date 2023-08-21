// Parse an address with the url.parse() method, and it will return a URL object
// with each part of the address as properties:

import url from "url";

var adr = 'http://localhost:8080/default.htm?year=2017&month=february';
var q = url.parse(adr, true);

console.log(q.host); //returns 'localhost:8080'
console.log(q.pathname); //returns '/default.htm'
console.log(q.search); //returns '?year=2017&month=february'

var qdata = q.query; //returns an object: { year: 2017, month: 'february' }
console.log(qdata.month); //returns 'february'

/*

This code creates a URL string (addr) and then uses the url.parse() function to parse it.
The resulting q object contains various components of the URL, including the parsed query parameters as properties. The true argument in url.parse() ensures that the query parameters are parsed into an object format. This enables you to access and work with the query parameters using q.query.year and q.query.month.

*/