import fs from 'fs';
// console.log(fs);

// The readFile Function
fs.readFile('exercise.txt', 'utf8', (err, data) => {
    if(err) {
        console.log("Error reading file: ", err);
        return;
    } 
    console.log(data);
});

// Stop: Note(line 43)
