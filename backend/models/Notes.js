
const mongoose = require ("mongoose")
const usersSchema = require("./Users")

const notesSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true,
    },
    tag:{
        type:String,
        default:"General"
    },
    date:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model("Note",notesSchema)