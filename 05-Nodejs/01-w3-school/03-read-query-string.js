// 1. Read query string

import http from "http";     // HTTP is built in module, allows Nodejs to transfer dataover hyper text transfer protocol
const port = 8080;

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-type': 'text/plain' });
    res.end(`URL of client request is: ${req.url}`);
});

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

// o/p: localhost:3000 -> URL of client request is: /
// o/p: localhost:3000/about -> URL of client request is: /about
// o/p: localhost:3000/abc -> URL of client request is: /abc


/* ******* */

// 2 Specific URLs

import http from "http";

const port = 8080; // You can change this to any port you prefer

const server = http.createServer((req, res) => {
    if (req.method === 'GET') {
        if (req.url === '/') {
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end('\nHello, this is the root route! : ' + req.url);

        } else if (req.url === '/about') {
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end('This is the about page. : ' + req.url);
        } else {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('404 - Not Found');
        }
    } else {
        res.writeHead(405, { 'Content-Type': 'text/plain' });
        res.end('405 - Method Not Allowed');
    }
});

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
