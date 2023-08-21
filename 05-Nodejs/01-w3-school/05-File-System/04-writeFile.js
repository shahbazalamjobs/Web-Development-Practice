
import fs from "fs";

fs.writeFile('mynewfile3.txt', 'Byeeee!', function (err) {
    if (err) throw err;
    console.log('Saved!');
});

// Creates new file with soecified content
// If content change then file get replaced with changed content
