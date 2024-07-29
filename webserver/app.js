const readline = require('readline');
const fs = require('fs');
const http = require('http');

// creating the web server
// 1. create server
// 2. run server

const html = fs.readFileSync('./Template/index.html', 'utf-8') //  here sending the the html content as response when server started

const server = http.createServer((request, response) => {
    // response.end('<h1>Hello from the server<h1>')
    // response.end(html)
    // console.log('new request running')
    // console.log(request)
    // console.log('pamparesponse', response)
    let path = request.url;
    // response.end(path);

    if(path === '/' || path.toLocaleLowerCase() === '/home'){
        // response.end(html)
        response.end(html.replace('{{%CONTENT%}}', 'You are in Home page'));
    } else if(path.toLocaleLowerCase() === '/about'){
        response.end(html.replace('{{%CONTENT%}}', 'You are in about page'))
    } else if(path.toLocaleLowerCase() === '/contact'){
        // response.end('ure in content page')
        response.end(html.replace('{{%CONTENT%}}', 'You are in Contact page'))
    } else {
        // response.end('Error 404: Page Not found')
        response.end(html.replace('{{%CONTENT%}}', 'Error 404: Page Not found'))
    }

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


