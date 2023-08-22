// This code upload the file then submit, after submit it gives error

// Install formidable: npm install formidable
// The formidable module helps in working with file uploads

// Create a web page that allows users to upload files to your server


// Import the required modules
import formidable from "formidable";  // For handling form data, including file uploads
import http from "http";
// Define the port number
const port = 8080;

// Create an HTTP server
const server = http.createServer((req, res) => {
    // Parse the uploaded file once it reaches the server

    // Check if the URL is '/fileupload' and the method is POST
    if (req.url === '/fileupload' && req.method.toLowerCase() === 'post') {
        // Create a new instance of IncomingForm to parse the form data
        var form = new formidable.IncomingForm();

        // Parse the form data
        form.parse(req, function (err, fields, files) {
            // Get the temporary path of the uploaded file on the server
            var oldpath = files.filetoupload.path;

            // Define the new path where the file will be moved
            var newpath = 'C:/Users/hp/01-Code/' + files.filetoupload.name;

            // Move the uploaded file to the specified new path
            fs.rename(oldpath, newpath, function (err) {
                // Respond to the client after the file is successfully moved
                if (err) throw err;
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.write('File uploaded and moved!');
                console.log("File uploaded");
                res.end();
            });
        });
    } else {
        // If URL is not '/fileupload' or method is not POST

        // Set the response header
        res.writeHead(200, { 'Content-Type': 'text/html' });

        // Create an HTML form for file upload
        res.write('<form action="/fileupload" method="post" enctype="multipart/form-data">');
        res.write('<input type="file" name="filetoupload"><br>');
        res.write('<input type="submit">');
        res.write('</form>');
        res.end();
    }
});

// Start the server
server.listen(port, () => {
    console.log(`Server is running at port: ${port}`);
});





/*

<form>: This is an HTML element used to create a form on a web page. Forms are used to collect user 
input and submit it to a server for further processing.

action="fileupload": The action attribute specifies the URL to which the form data will be sent when
 the user submits the form. In this case, the URL is "fileupload", which is a relative URL. The 
 actual server endpoint that handles the file upload would be determined by the server's routing 
 configuration.

method="post": The method attribute specifies the HTTP method used to send the form data. In this case, 
it's set to "post", which means the data will be sent in the body of an HTTP POST request.

enctype="multipart/form-data": The enctype attribute specifies how the form data should be encoded
 before sending it to the server. When dealing with file uploads, multipart/form-data is used to 
 handle binary data like files.

<input type="file" name="filetoupload">: This is an HTML input element with the type attribute set
 to "file". It creates a file input field where users can select a file from their local device to upload.

name="filetoupload": The name attribute specifies the name of the input field. This name is used
 to identify the field when the form is submitted to the server. The server can access the uploaded 
 file using this name.

*/

