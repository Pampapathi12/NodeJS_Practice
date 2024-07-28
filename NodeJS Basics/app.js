
const readline = require('readline');
//  const r1 = readline.createInterface({
//     input:process.stdin,
//     output: process.stdout
//  })

//  r1.question('please enter the your name:',(name) =>{
//     console.log('youre name:' +name);
//     r1.close();  // caling the close function line number 13
//  })
//  r1.on('close', () =>{
//     console.log('interface closed');
//     process.exit(0);
//  })
//  reading AND WRITING FILES SYNCHRONOUSLY
const fs = require('fs');
let textIn = fs.readFileSync('./Files/input.txt', 'utf-8');

console.log(textIn)
let content = `Data read from input.txt: ${textIn}.\nDate created ${new Date()}`
fs.writeFileSync('./Files/output.txt', content); // single threaded
console.log(content)

// Asynchronous nature of node JS

// readfile 
fs.readFile('./Files/input.txt', 'utf-8', (err, data) => {
    console.log('pampa', data);
})
console.log('Reading file......');

// here when readfile read the file after the calling call back function then its execute the main thread like the single thereaded
// (err, data) => {
//     console.log(data)
// } // -> this is the call back function

// in javascript is a single threaded it executing code line by line , in another language we can create the multi threaded like php


// 7. reading & writing files asynchrounously

fs.readFile('./Files/start.txt', 'utf-8', (error1, data1) => {
    console.log('pampap1', data1);
    fs.readFile(`./Files/${data1}.txt`, 'utf-8', (error2, data2) => {
        console.log('pampadata2', data2)

        fs.readFile('./Files/append.txt', 'utf-8', (error3, data4) => {
            console.log(data4)
            fs.writeFile('./Files/output.txt', `${data2}\n\n${data4}\n\n Date created ${new Date()}`, () => {
                console.log('file written successfully')
            })
        })
    }) // in this method we are passing the first content to pass to second pass file to read the file from the input file name
    // dependnet file to read the file from the other file

    // call back hell is when we see the structrure os the code in triangle shape of on fucntion code block

})
//fs.readFile(); // which will execute first we dont know

console.log('reading a file from pampa')
