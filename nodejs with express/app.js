// 31. frontend vs backend
// 32. what is WEB API
// static website => server and client, (server html,css,javascript) (clent browser (reuest resource))
// Dynamic website (DB + backend application + (template + build website)) => sever  <-> (client request(browser))
// api -> application programming interface(api is piece of software that can be used by another piece of software in order to talk or communicate each other )
// import package
// 33. REST Architecture(target 33,34,35,36,37,38)
// representational state transfer(rest)
// I. seperate APIs into logical resources (movies, users, reviews, is an object or representation of something which data associates)
// II. expose structure, resources based URL (https://proacademy.com/addmoview) , getmovies, updatemovies, end point caontain the resorces not action performed the by user
// sateless means -> routing sould be done in the client side routing not server side routing, when moving one page to another page, server should check the previuls and cureent page and then resources will send, but in state
// stateless all the are the client seide routing so the all the  routing should be remember the old and current route to remember the routes and configuration and going to next page
// 34. API: Handling GET request
// 35. API: Handling POST request

const { count } = require('console');
const express = require('express')
const fs = require('fs')

let app = express(); // calling the function
// after that return on object, in that object have bunch of mthods we can use in the application



// app.get('/',(req,res) =>{
// //    res.status(200).send('<h4>hello from express server<h4>')
// res.status(200).json({message:'<h4>hello from express server<h4>', status:200})
// }) // this is the get request

// app.post('/', (req,res)=>{

// })
// create a servers
let movies = JSON.parse(fs.readFileSync('./data/movies.json'));// convert the json data into using JSON parse

//GET - api/moviews
// using the v1 version change the api feature to get change the
// /api/v1/movies' -> end point will get the dat
app.get('/api/v1/movies',(req,res)=>{
    console.log('json', movies)
    res.status(200).json({
        status: "success",
        count: movies.length,
        data:{
            movies: movies
        }
        // envelop for the movies to movies

    });
    
})

//POST - api/movies
app.post('/api/v1/movies',(req,res) => {
   console.log(req.body);
   res.send('Created');
})
// note : post request need to send the data to server (that is body)
// in the express body doesnt put the data

//http://127.0.0.1:3000/
// http://127.0.0.1:3000/api/v1/movies
const port = 3000;
app.listen(port, () =>{
    console.log('server has started');
})

// we want to routes to the application
// route = http method(get,post,put,delete, patch) + url