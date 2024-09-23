// 31. frontend vs backend
// 32. what is WEB API
// static website => server and client, (server html,css,javascript) (clent browser (reuest resource))
// Dynamic website (DB + backend application + (template + build website)) => sever  <-> (client request(browser))
// api -> application programming interface(api is piece of software that can be used by another piece of software in order to talk or communicate each other )
// import package
// 33. REST Architecture(target 33,34,35,36,37,38)

const express = require('express')

let app = express(); // calling the function
// after that return on object, in that object have bunch of mthods we can use in the application



app.get('/',(req,res) =>{
//    res.status(200).send('<h4>hello from express server<h4>')
res.status(200).json({message:'<h4>hello from express server<h4>', status:200})
}) // this is the get request

app.post('/', (req,res)=>{

})
// create a server
//http://127.0.0.1:3000/
const port = 3000;
app.listen(port, () =>{
    console.log('server has started');
})

// we want to routes to the application
// route = http method(get,post,put,delete, patch) + url