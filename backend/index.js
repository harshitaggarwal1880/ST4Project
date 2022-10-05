
const connecttomongo = require('./db');


//this document is for express server to fetch data by doing api calls 
// we use thunderbolt to test api response and we have other option Like postman
// we have to structure your api file, so we make routes and model folfer for different files of routes and mondodb models

const express = require('express')    // importing express from express module 
const app = express()                 // creating app instance from express 

// connect with mongodb database
connecttomongo();


const port = 5000

app.get('/', (req, res) => {
  res.send('Hello World!')
})


// if we want to use req.body and pass data through req.body, then  we have to use these
app.use(express.json());   // here we use this middleware to use req.body


// Other routes with different files 

// here we use other routes of other file, means we make other route in other js 
app.use('/api/auth', require('./routes/auth'))    

app.use('/api/notes', require('./routes/notes'))


// this express server/api listening at port 3000 on localhost
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})