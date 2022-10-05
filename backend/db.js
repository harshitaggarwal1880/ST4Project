// connect with mongodb database

const mongoose = require('mongoose')

// mongodb database uri string from mongocompass of localhost 
const mongoURI = "mongodb://localhost:27017/cloudbook"  // localhost with cloudbook database

const connecttomongo =() =>{
    mongoose.connect(mongoURI, ()=>{
        console.log("Connected to Mongo Successfully");
    })
}

module.exports = connecttomongo;
