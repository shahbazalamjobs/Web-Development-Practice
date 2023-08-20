// 1. This gives output, current date and time in console 
// Using ES6 modules
import { myDateTime } from './myFirstModule.js';

const currentDateTime = myDateTime();
console.log("\n", currentDateTime);



// 2. Server gives current date time on request of client 

// importing modules 
import { myDateTime } from './myFirstmodule.js';
import http from "http";

// Get the current date and time 
const currentDateTime = myDateTime();
console.log("\n", currentDateTime);

// Create an HTTP server
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write("The date and time are currently: " + currentDateTime);
    res.end();
}).listen(8080);

// O/p: The date and time are currently: Sun Aug 20 2023 20:31:21 GMT+0530 (India Standard Time)
