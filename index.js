// import all needed packages
const express = require('express')
const cors = require('cors')
// loads .env file contents into process .env by default
require('dotenv').config()
const routes = require("./routes/allRoutes")
require('./config/db')


// creating server
const server = express()
// enable cors in server
server.use(cors())
// parse JSON to js content
server.use(express.json())
// use routes
server.use(routes)
// port
const PORT = process.env.PORT
// start server
server.listen(PORT,()=>{
    console.log("Sever Started....");
    
})
// resolve api in browser using get requst
server.get('/',(req,res)=>{
    res.status(200).send('<h1>Server Started and waiting for request!!!</h1')
})

 server.post('/',(req,res)=>{
     res.status(200).send("Post Request ")
 })