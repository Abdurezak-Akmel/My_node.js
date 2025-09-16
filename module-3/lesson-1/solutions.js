import fs from 'fs';

// #1, Asynchronously
// fs.readFile('exercise.txt', 'utf-8', (err, data) => {
//     if(err){
//         console.log("Error reading file: ", err);
//         return;
//     }
//     console.log(data);
// });

// #1, Synchronously
// try {
//     const data = fs.readFileSync('exercise.txt', 'utf-8');
//     console.log(data);
// } catch(err) {
//     console.log('Error reading file: ', err);
// }

// #2, writing a new file
// try{
//     fs.writeFileSync('output.txt', 'Hello Node.js!');
//     console.log('File Written Successfully!');
// } catch(err){
//     console.error('Error writing file: ', err);
// }