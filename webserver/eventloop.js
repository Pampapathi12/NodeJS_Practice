// 1. its going to execute the main console
// 2. next it will goto excute settimeout it in thread pool excuted bacground after the all the main excute then
// 3. event loop will start the then setimeout is 0 then immedietly excute the call back to push to the event loop from the thread pool to the event loop after that then event loop will push the call back function to main thread then execute if main thread is empty
const readline = require('readline');
const fs = require('fs');
const http = require('http');
const { error, profile } = require('console');
const path = require('path');
const url = require('url');
// user defined module
const replaceHtml = require('./Modules/replaceHtml');
const events = require('events');
const user = require('./Modules/user');
console.log('program started');// top level code execute

// stored in the first phase, it will excute asynchronously
setTimeout(() =>{
    console.log('timer call back excuted');// 
}, 0) // after the 8 second the inside call back will execute the 8 seconds

fs.readFile('./Files/input.txt', () =>{
    console.log('files read complete');

    setTimeout(() =>{
        console.log('timer call back excuted1');// 
    }, 0)// asyn its run in the backgroung

    setImmediate(() =>{
        console.log('set immediate call execute2')
      }) 

      process.nextTick(() =>{
            console.log('process next tick call back executed')
      })
}) // 2nd phase IO and pooler,
// it will large so it not going to excute then immediately its going to execute the 3rd phase leve

// 3rd phase of event loop
setImmediate(() =>{
  console.log('set immediate call execute')
}) 
// before the set timeout expire other any timer
// 

console.log('program has completed')

// 1 top level executed 
// in the event loop 1st phase
// 2nd phase readfile completed pool from the and call back pushed to the 2nd phase
// event loop to main thread execution
// ist line and then settimeout -> async, then its will push to firact phase call back event llop
// setimmeditate -> pushed to third phase
// next puhsed to call back to event

// current executing phase 2 , if event loop then 2 nd phase call 
//back executed after then it going to the nexttick call back to execute then its going to the 3rd phase to execute and again its going to the 1 phase exection