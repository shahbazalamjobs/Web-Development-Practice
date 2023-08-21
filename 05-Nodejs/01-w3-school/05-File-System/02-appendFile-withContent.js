import fs from "fs";
fs.appendFile('myNewFile.txt', 'Hello, content', function (err) {
    if (err) {
        console.log('Saved');
    }
});

// A new file name myNewFile.txt created with content Hello, content
// If we run the code again 2nd, 3rd .. times, in the same file myNewFile.txt, content is repeated again i.e 2 ,3 .. and so on times 
