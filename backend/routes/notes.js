const express = require("express")
const router = express.Router()
const fetchUser = require('../middleware/fetchUser')
const Notes = require('../models/Notes')
const { body, validationResult } = require('express-validator');

// Get all the notes using Get: "/api/notes/fetchallnotes" . Login required

router.get('/fetchallnotes',fetchUser,async(req,res)=>{
    try {
        const notes = await Notes.find({user:req.user.id})
        res.json(notes)
    } catch (error) {
        console.error(error.message)
        res.status(500).send("Internal Server Error")
    }
})

// Add a new Notes post: "/api/notes/addnote" . Login required

router.post('/addnote',fetchUser,[
    body('title','Enter the valid title').isLength({ min: 3 }),
    body('description','Decription must have 5 character').isLength({ min: 5 }),
],async(req,res)=>{
    try {
        const {title,description,tag} = req.body;
        const errors = validationResult(req);   
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
          }
          const notes = new Notes({
            title,description,tag,user: req.user.id
          })
          const saveNotes = await notes.save()
          res.json(saveNotes)    
    } catch (error) {   
        console.error(error.message)
        res.status(500).send("Internal Server Error")
    }
    
})

// Update a new Notes post: "/api/notes/updatenote/:id" . Login required

router.put("/updatenote/:id",fetchUser,async(req,res)=>{
    const {title,description,tag} = req.body
    //Create newNote object
    let newNote = {}
    if(title){newNote.title = title}
    if(description){newNote.description = description}
    if(tag){newNote.tag = tag}

    // Find the notes and update it
    let notes = await Notes.findById(req.params.id)

    if (!notes) {
       return res.status(404).send("Not Found")
    }
    if(notes.user.toString()!== req.user.id){
       return res.status(401).send("Unauthorized")
    }
    notes = await Notes.findByIdAndUpdate(req.params.id,{$set:newNote},{new:true})
    res.json({notes})
})


// Update a new Notes post: "/api/notes/deletenote/:id" . Login required

router.delete("/deletenote/:id",fetchUser,async(req,res)=>{
    
    const {title,description,tag} = req.body
    let notes = await Notes.findById(req.params.id)

    if (!notes) {
        return res.status(404).send("Not Found")
    }
    if(notes.user.toString()!== req.user.id){
        return res.status(401).send("Unauthorized")
     }

    notes = await Notes.findByIdAndDelete(req.params.id,{new:true})
    res.json({"Success": "Note has been deleted",notes:notes})
})

module.exports = router