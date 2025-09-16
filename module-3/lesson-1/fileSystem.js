import fs from 'fs';
// console.log(fs);

// The readFile Function
// fs.readFile('exercise.txt', 'utf8', (err, data) => {
//     if(err) {
//         console.log("Error reading file: ", err);
//         return;
//     } 
//     console.log(data);
// });

// Reading Synchronouslly
// try{
//     const data = fs.readFileSync('exercise.txt', 'utf-8');
//     console.log(data);
// } catch(err) {
//     console.log('Error reading file: ', err);
// }

// Writitng file asynchronously
// fs.writeFile('writtenFile.txt', 'Hello World!', (err) => {
//     if(err){
//         console.log('Error writing file: ', err);
//         return;
//     }
//     console.log('File written successfully!');
// });

// Writing file synchronously
// try{
//     fs.writeFileSync('writtenFile.txt', 'File written synchronously');
//     console.log('File written successfully');
// } catch(err){
//     console.error('Error writing file: ', err);
// }

// Appending file asynchronously
// fs.appendFile('writtenFile.txt', '\nSub-Title', (err) => {
//     if(err) {
//         console.error('Error appending file: ', err);
//         return;
//     }
//     console.log('File appended successfully.');
// });

// fs.writeFile('writtenFile.txt', 'Title', (err) => {
//     if(err) {
//         console.log('Error writing file: ', err);
//         return;
//     }
//     console.log('File written successfully.');
// });



// Stop: Note(line 135)
