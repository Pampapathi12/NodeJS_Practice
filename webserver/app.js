const readline = require('readline');
const fs = require('fs');
const http = require('http');

// creating the web server
// 1. create server
// 2. run server

const server = http.createServer((request, response) => {
    response.end('Hello from the server')
    console.log('new request running')
    // console.log(request)
    // console.log('pamparesponse', response)

}); // each request will execute the call back function each time new request

//127.0.0.1:8000

server.listen(8000,'127.0.0.1', () =>{
    console.log('server started');
})

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