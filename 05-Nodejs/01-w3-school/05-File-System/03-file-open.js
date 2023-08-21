// The fs.open() method takes a "flag" as the second argument, if the flag is "w" for "writing",
// the specified file is opened for writing. If the file does not exist, an empty file is created:

import fs from "fs";
const flag = "w";
fs.open('mynewfile2.txt', flag, function (err, file) {
    if (err) throw err;
    console.log('Saved!');
});

// flags specify how you want to open the file ("r" for reading, "w" for writing, "a" for appending, etc.).
// It creates new file name mynewfile2.txt
