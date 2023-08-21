import http from 'http'; // For creating HTTP server
import fs from 'fs';     // For reading files
import url from 'url';   // For parsing URLs

// Create an HTTP server
const server = http.createServer((req, res) => {
    // Parse the URL of the incoming request
    const q = url.parse(req.url, true);

    // Construct the filename based on the path portion of the URL
    const filename = "." + q.pathname;
    console.log(filename);
    // Read the content of the requested file
    fs.readFile(filename, (err, data) => {
        if (err) {
            // If there's an error (e.g., file not found), respond with a 404 status and error message
            res.writeHead(404, { 'Content-Type': 'text/html' });
            return res.end("404 Not Found");
        }

        // If the file is successfully read, respond with a 200 status and the file content
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        return res.end();
    });
});

// Start listening on a specific port
const port = 8080;
server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

/*

"." + q.pathname: The dot (.) is a common way to refer to the current directory in file paths. 
In this context, it's used to create a relative file path. So, by concatenating the dot with 
q.pathname, you're essentially creating a file path that's relative to the current directory.

For example, if the server is running in a directory like /home/user/server/, and a request 
is made for /example/index.html, then "." + q.pathname would become ./example/index.html.
 This would correspond to the index.html file in the example directory relative to the current directory.

*/