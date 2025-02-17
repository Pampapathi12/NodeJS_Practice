// 9. how the web works

// client -> 192.168.20.134
// in the server where the node and java and .net application are there in that we have to access the node application to specify the url and request to the server and
// server requeat and response model of clirnt and server archietecture
// domain name -> port number access the application, address of the server
// server have IP Address -> 192.168.20.134 , application hosted in the server
// convert the domain name in the real IP configurstion
// domain into actual server address -> match application of server and convert into the server IP host number
// IP Address + port number + page
// TCP/IP
// Htpp request for the get that we are sedning the get method and resources url and http version
// and we are sending as request header , url, language, user-agent browser type
// request body for the request the data from the database to get the data
// autho
// HTTP Response -> status code and  response headers ( date, content-type, transfer-encoding) and body the content of the data


// 10. how request and response works

// 11. What is Routing
// ROuting defines the way in which the client request are handled by the application endpoints
// 1.a File based url
// index.html, about.html like that
// 1.b Resource based url
// the routung map name to the physical html file in the application

// Route Paramete
// www.nodeapp.com/Product/101
//  www.nodeapp.com/Books/Programming/js
// here 101 is paramete for getting the specific product details

// Query String
// www.nodeapp.com/Books?author=john&id=101
// Books?author=john&id=101
// key and value sending the request to the api
// & symbol for seperate more the 1 query


// 12. Creating Routes in NodeJS
// 13. sending HTML Response instead of text message for the both err and success
// 14. Setting Headers for response
// 15. working with  JSON Data (1 create folder data, new file produxt.json)
// convert json data into javascript object use the method Json.parse(data)
// 16. Transforming JSON data into HTML( create new html product-list.html)
// 17. Parsing Query string from URL
// ?id=10&name=phone -> query string
// 18. creating a reusable function
// 19. creating a custom module ( a module script export some value, we can use those value to other module) app.js is also a module
// core modules provided by nodejs, third party modules, user defined module
// 20. Understanding event-driven architecture
//  21. Emitting and handling custom events
// 22. Understanding streams in NODEJS  ()
// there are 4 streams in nodejs 1. readable strea, 2 writable stream, 3. duplex stream, 4.transform stream
// request stream -> read file stream (readable stream)
// method -> data & end, read & pipe, -> readable streams events
// (writablse stream) :-  drain & finish , write & end -> important readbale streams  events
// duplex stream :-  bothe readbake and writable streams -> web sockets
// transfrom stream :- zlib -> transform streams are duplex streams which cal also modify or transform data as it is read or written
// 23. understanding streams in practice
// 24. understand PIPE method
// 25. what is NPM (node pack manager), // package repositiry, commandline interface
// where we can install package ans manage, npm commanda line interface installed automaticaluuy when npm install the npm and packgesa
// from package repository, npmjs.com -> repositorsy
// npm command line interface -> third part packages
// 26. types of packages and install
// types of dependencies, (regular dependencies)(development dependencies)
// 27. archietecture of nodejs runtime (v8 engine convert javascript code into machine code (nodejs) LIBUV => open source async input and output, handling )
// LIBUV C++ provides the file system (eventloop and threadpool)
// event loop -> responsibly easy task call back method execution, 
// thread pool exectution is the execution of the heavy process application like file processing
// nodejs (c++) => HTTP parser, C-ares, openssl, ZLIB
// I. all the modules and function call and console in the are executin main thred
// II. thread pool -> all others fs function excuted in the thread poll readFile in the thread pool , in these function we have call back function the once the readfile is completed tthen the call back function pushed into the Eventpool -> inthe event pool call back wait for the execution until the main thread is empty
// III. multiple call back in the event the pool -> event full start the pushes the call back to the main FIFO
// IV.if the call back heavy task will not execute in the main thread, it will move to the thread pool and execution
// V heavy task are in thread pool
// 28. event loop in Nodejs
// event loop have phases, expired timers, io tasks and polling, setimmidiate callback, cloed callback
// one by one call back execution in the phases and and again it will chek the timers and settimeout call back function will execute
// microtask queue (promise), nexttick queue (in the call back in the nexttick queue call back functions)
// 29. NodeJS Event Loop in practice
// 30. What is Express JS (is nodejs framework for the nodejs), it have minimul code to like .net framework
// using express minimal the code, express is completely build on nodejs
// express contains very robust ans useful set of features
// faster and simpler
// exprees makes developer Architectuter

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

// creating the web server
// 1. create server
// 2. run server

const html = fs.readFileSync('./Template/index.html', 'utf-8') //  here sending the the html content as response when server started
let products = JSON.parse(fs.readFileSync('./data/product.json', 'utf-8'))
let productListHtml = fs.readFileSync('./Template/product-list.html', 'utf-8');
let productDetailtHtml = fs.readFileSync('./Template/product-details.html', 'utf-8');
// let productHtmlArray = products.map((prod)=>{
//         let output = productListHtml.replace('{{%IMAGE}}',prod.productImage);
//       output =  output.replace('{{%NAME%}}', prod.name);
//       output =  output.replace('{{%MODELNAME%}}', prod.modeName);
//       output =   output.replace('{{%MODELNO%}}', prod.modelNumber);
//       output =   output.replace('{{%SIZE%}}', prod.size);
//       output =   output.replace('{{%CAMERA%}}', prod.camera);
//       output =  output.replace('{{%PRICE%}}', prod.price);
//       output =  output.replace('{{%COLOR%}}', prod.color);
//       output =  output.replace('{{%ID%}}', prod.id);

//         return output;
// })
// function replaceHtml(template, product) {
//     let output = template.replace('{{%IMAGE}}', product.productImage);
//     output = output.replace('{{%NAME%}}', product.name);
//     output = output.replace('{{%MODELNAME%}}', product.modeName);
//     output = output.replace('{{%MODELNO%}}', product.modelNumber);
//     output = output.replace('{{%SIZE%}}', product.size);
//     output = output.replace('{{%CAMERA%}}', product.camera);
//     output = output.replace('{{%PRICE%}}', product.price);
//     output = output.replace('{{%COLOR%}}', product.color);
//     output = output.replace('{{%ID%}}', product.id);
//     output = output.replace('{{%ROM%}}', product.ROM);
//     output = output.replace('{{%DESC%}}', product.Description);

//     return output;

// }
// const server = http.createServer((request, response) => {
//     // response.end('<h1>Hello from the server<h1>')
//     // response.end(html)
//     // console.log('new request running')
//     // console.log(request)
//     // console.log('pamparesponse', response)
//     let { query, pathname: path } = url.parse(request.url, true) // return as object http://localhost:8000/Products?id=10&name=iphone
//     // console.log(x)
//     // let path = request.url; // this request url into the main url
//     // response.end(path);

//     if (path === '/' || path.toLocaleLowerCase() === '/home') {
//         // response.end(html)
//         response.writeHead(200, {
//             'Content-type': 'text/html',
//             'my-header': 'Hello, World'
//         }) // Setting Headers for response
//         response.end(html.replace('{{%CONTENT%}}', 'You are in Home page'));
//     } else if (path.toLocaleLowerCase() === '/about') {
//         response.writeHead(200, {
//             'Content-type': 'text/html',
//             'my-header': 'Hello, World'
//         })
//         response.end(html.replace('{{%CONTENT%}}', 'You are in about page'))
//     } else if (path.toLocaleLowerCase() === '/contact') {
//         // response.end('ure in content page')
//         response.writeHead(200, {
//             'Content-type': 'text/html',
//             'my-header': 'Hello, World'
//         })
//         response.end(html.replace('{{%CONTENT%}}', 'You are in Contact page'))
//     } else if (path.toLocaleLowerCase() == '/products') {
//         if (!query.id) {
//             let productHtmlArray = products.map((prod) => {
//                 return replaceHtml(productListHtml, prod)
//             })

//             let productResponseHtml = html.replace('{{%CONTENT%}}', productHtmlArray.join(',')); // assing the html content to here fromthe json array to the html page
//             // response.writeHead(200, {
//             //     'Content-Type': 'application/json'
//             // });
//             response.writeHead(200, {
//                 'Content-Type': 'text/html'
//             });
//             response.end(productResponseHtml)
//         } else {
//             let prod = products[query.id]
//             let productDetailResponseHtml = replaceHtml(productDetailtHtml, prod)
//             response.end(html.replace('{{%CONTENT%}}', productDetailResponseHtml));
//             console.log(productDetailResponseHtml)
//         }
//         // console.log(productHtmlArray.join(','))
//         // fs.readFile('./data/product.json', 'utf-8', (error, data) => {
//         //     let products = json.parse(data)
//         //     response.end(data)
//         // }); // here each time when request call its callling the thie methos instead of this we need call the once time

//     }
//     else {
//         // response.end('Error 404: Page Not found')
//         response.writeHead(404)
//         response.end(html.replace('{{%CONTENT%}}', 'Error 404: Page Not found'))
//     }

// }); // each request will execute the call back function each time new request

//127.0.0.1:8000

const server = http.createServer(); // when ever new request hit the server request listen event
// event driven architecture
server.on('request', (request, response) => {
    // response.end('<h1>Hello from the server<h1>')
    // response.end(html)
    // console.log('new request running')
    // console.log(request)
    // console.log('pamparesponse', response)
    let { query, pathname: path } = url.parse(request.url, true) // return as object http://localhost:8000/Products?id=10&name=iphone
    // console.log(x)
    // let path = request.url; // this request url into the main url
    // response.end(path);

    if (path === '/' || path.toLocaleLowerCase() === '/home') {
        // response.end(html)
        response.writeHead(200, {
            'Content-type': 'text/html',
            'my-header': 'Hello, World'
        }) // Setting Headers for response
        response.end(html.replace('{{%CONTENT%}}', 'You are in Home page'));
    } else if (path.toLocaleLowerCase() === '/about') {
        response.writeHead(200, {
            'Content-type': 'text/html',
            'my-header': 'Hello, World'
        })
        response.end(html.replace('{{%CONTENT%}}', 'You are in about page'))
    } else if (path.toLocaleLowerCase() === '/contact') {
        // response.end('ure in content page')
        response.writeHead(200, {
            'Content-type': 'text/html',
            'my-header': 'Hello, World'
        })
        response.end(html.replace('{{%CONTENT%}}', 'You are in Contact page'))
    } else if (path.toLocaleLowerCase() == '/products') {
        if (!query.id) {
            let productHtmlArray = products.map((prod) => {
                return replaceHtml(productListHtml, prod)
            })

            let productResponseHtml = html.replace('{{%CONTENT%}}', productHtmlArray.join(',')); // assing the html content to here fromthe json array to the html page
            // response.writeHead(200, {
            //     'Content-Type': 'application/json'
            // });
            response.writeHead(200, {
                'Content-Type': 'text/html'
            });
            response.end(productResponseHtml)
        } else {
            let prod = products[query.id]
            let productDetailResponseHtml = replaceHtml(productDetailtHtml, prod)
            response.end(html.replace('{{%CONTENT%}}', productDetailResponseHtml));
            console.log(productDetailResponseHtml)
        }
        // console.log(productHtmlArray.join(','))
        // fs.readFile('./data/product.json', 'utf-8', (error, data) => {
        //     let products = json.parse(data)
        //     response.end(data)
        // }); // here each time when request call its callling the thie methos instead of this we need call the once time

    }
    else {
        // response.end('Error 404: Page Not found')
        response.writeHead(404)
        response.end(html.replace('{{%CONTENT%}}', 'Error 404: Page Not found'))
    }

}) // after request then its call the call back function in the call function have a request and response data

server.listen(8000, '127.0.0.1', () => {
    console.log('server started');
})

// all the event emitter , sever inherits from eventemitter calss
// observer pattern
// decoupled module

// let myEmitter = new events.EventEmitter();

let myEmitter = new user();// creating instance to call the user() class



myEmitter.on('userCreate', (id, name) => {
    console.log(` a new ${name} with id ${id} user is created!`)
})
myEmitter.on('userCreate', (id, name) => {
    console.log(` a new user ${name} with id ${id}  data base created!`)
})

myEmitter.emit('userCreate', 101, 'john');
// create class custom event