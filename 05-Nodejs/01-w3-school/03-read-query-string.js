import http from "http";     // HTTP is built in module, allows Nodejs to transfer dataover hyper text transfer protocol
const port = 8080;

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-type': 'text/plain' });
    res.end(`URL of client request is: ${req.url}`);
});

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
