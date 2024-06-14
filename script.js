const fs = require('node:fs');

// fs.rename("hello.text", "hello.text", function (err) {
//     if (err) console.log(err);
//     else console.log("done");
// })

// fs.copyFile("hello.text", "hlo.text", function (err) {
//     if (err) console.log(err);
//     else console.log("done");
// })




// const filePath = 'hello.text';

// if (fs.existsSync(filePath)) {
//     console.log(`File "${filePath}" exists. Attempting to read...`);

//     fs.readFile(filePath, 'utf8', (err, data) => {
//         if (err) {
//             console.error('Error reading the file:', err);
//             return;
//         }
//         console.log('File contents (String):', data);
//     });
// } else {
//     console.error(`File "${filePath}" does not exist.`);
// }


fs.unlink("hlo.text", function (err) {
    if (err) console.log(err);
    else console.log("remove");
})