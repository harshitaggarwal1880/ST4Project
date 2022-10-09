const express = require('express')

const router = express.Router()

const Notes = require('../models/Notes')

const fetchUserid = require('../middleware/fetchUserid')


// ROUTE 1: Get all the Notes of the user from the databse
router.get('/fetchallnotes', fetchUserid , async (req, res)=>{
    try{
    const notes = await Notes.find({user: req.user.id});

    res.json(notes);
    }
    catch(error){
        res.status(500).send("Internal Server Error")
    }
})



const { body, validationResult } = require('express-validator');

// ROUTE 2: Add a new Note of the user in the databse using /api/notes/addnote
router.post('/addnote', fetchUserid , [
    body('title', 'Enter a Valid title').isLength({min:1}),
    body('description', 'Enter a Valid description').isLength({min:1})
], async (req, res)=>{

    try {

    const errors = validationResult(req.body);
    if(!errors.isEmpty()){
        return res.status(401).json({error: errors.array()})
    }

    // destructuring of res.body to get individual variables
    const { title , description, tag } = req.body;


    // adding a note to the Notes db
    const note = new Notes({
        title, description, tag, user: req.user.id
    })

    const saveNote = await note.save();
    
    res.json(saveNote);

    }
    catch(error){
        console.log(error)
        return res.status(500).send("Internal Server Error")
    }


})



// ROUTE 3 : Update the existing note using PUT "/api/updatenote/:id" , LOGIN Required
router.put('/updatenote/:id', fetchUserid , async (req, res)=>{

    try {

    // destructuring of res.body to get individual variables
    const { title , description, tag } = req.body;
    
    
    // create a note to the Notes db
    const newNote = {}
    
    if(title){newNote.title = title}
    if(description){newNote.description =  description}
    if(tag){newNote.tag =  tag}
    

    // Find the note to the update and update it 
    let note = await Notes.findById(req.params.id);

    if(!note){
        return res.status(404).send("Not Found")
    }

    if(note.user.toString() !== req.user.id){
        return res.status(401).send("Not Allowed")
    }
    // here new:true meams , if new data will come , then create it
    note = await Notes.findByIdAndUpdate(req.params.id,{$set: newNote}, {new:true})


    res.json({note});

    }
    catch(error){
        console.log(error)
        return res.status(500).send("Internal Server Error")
    }

})


// ROUTE 4 : Delete an existing note using DELETE "/api/deletenote/:id" , LOGIN Required
router.delete('/deletenote/:id', fetchUserid, async ( req, res )=>{
    try{    
    // Find the note to the delete  and delete it 
    let note = await Notes.findById(req.params.id);

    if(!note){
        return res.status(404).send("Not Found")
    }

    if(note.user.toString() !== req.user.id){
        return res.status(401).send("Not Allowed")
    }
    // here new:true meams , if new data will come , then create it
    note = await Notes.findByIdAndDelete(req.params.id)


    res.json({"Success": "Note has been Deleted", note});
    }
    catch(error){
        console.log(error)
        return res.status(500).send("Internal Server Error")
    }

})


module.exports = router;

