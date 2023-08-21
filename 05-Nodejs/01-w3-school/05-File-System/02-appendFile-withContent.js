import fs from "fs";
fs.appendFile('myNewFile.txt', 'Hello, content', function (err) {
    if (err) {
        console.log('Saved');
    }
});

// A new file name myNewFile.txt created with content Hello, content
// The fs.appendFile() method appends the specified content at the end of the specified file:
// i.e. If content is changed, new changed contents gets addup at the end of content
