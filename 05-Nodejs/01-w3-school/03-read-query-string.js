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
