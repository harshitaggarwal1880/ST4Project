
const connecttomongo = require('./db');


//this document is for express server to fetch data by doing api calls 


const express = require('express')    // importing express from express module 
const app = express()                 // creating app instance from express 

// connect with mongodb database
connecttomongo();


const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/about', (req, res) => {
  res.send('This is the About Page request')
})


// this express server/api listening at port 3000 on localhost
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})