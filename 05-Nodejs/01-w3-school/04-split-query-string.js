import http from "http";
import url from "url";
const port = 8080;

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    const q = url.parse(req.url, true).query;
    const txt = q.year + " " + q.month;
    res.end(txt);
});

server.listen(port, () => {
    console.log(`Server is running at port ${8080}`);
});

// Go at this address: http://localhost:8080/?year=2017&month=Juls
// o/p: 2017 July
