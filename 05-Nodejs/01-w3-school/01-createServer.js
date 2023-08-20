// 1st code for creating server
// var http = require('http');
import http from "http";    

http.createServer(function (req, res) {    // create instance of http server using http.createServer
    res.writeHead(200, { 'Content-Type': 'text/plain' });    // res.writeHead sets the respoinse header, heare with status code 200 OK, and etc etc
    res.end('Hello World!');    // this methods data sends the actual response to the client .. here string "Hello World!"
}).listen(3000);    // listen method is used to start server and make it listen on a specific por.. here 3000



/* ****************************** */



// 2nd code for creating server
import http from "http";

const hostname = "127.0.0.1";   // host name assign represent the ip ddress of local machine
const port = 3000;  // port number in which server will listen to incoming connectios

// Create HTTP server
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("Hello World Shahbaz");
});

// Start the server
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

