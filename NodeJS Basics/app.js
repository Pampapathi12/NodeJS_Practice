
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
