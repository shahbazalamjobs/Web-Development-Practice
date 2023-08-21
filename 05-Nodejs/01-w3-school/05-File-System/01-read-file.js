import fs from "fs";
import http from "http";
const port = 8080;

const server = http.createServer((req, res) => {
    fs.readFile('demo.html', function (err, data) {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.write(data);
        return res.end();
    });

});

server.listen(port, () => {
    console.log(`Your server is running at ${port}`);
});
