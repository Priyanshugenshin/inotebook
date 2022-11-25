const mongoose = require('mongoose');

const connectToMongoose = () => {
    mongoose.connect("mongodb://localhost:27017/inotebookDB",{useNewURLParser:true},()=>{
        console.log("connected to DB")
    })
}

module.exports= connectToMongoose