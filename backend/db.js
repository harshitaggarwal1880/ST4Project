// connect with mongodb database

const mongoose = require('mongoose')

const mongoURI = "mongodb://localhost:27017"

const connecttomongo =() =>{
    mongoose.connect(mongoURI, ()=>{
        console.log("Connected to Mongo Successfully");
    })
}

module.exports = connecttomongo;
