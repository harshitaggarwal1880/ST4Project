const express = require('express')

const router = express.Router() 

const User = require("../models/User")


router.use('/authall/', require('./authall'));



// express validator for data validtion wihh post method 

const { body, validationResult} = require('express-validator');

router.post('/createuser', [ 
    body('email','Enter the valid Email').isEmail(),
    body('name','Enter the valid Name').isLength({ min:5 }),
    body('password','Enter the valid password of length more than 4 characters`').isLength({ min:5 })    
] , async (req, res)=>{

    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({ errors:errors.array() });
    } 


    // check whether the user email exits already
    try{
    let user = await User.findOne({email: req.body.email})  // findOne find a same email in mongodb databse, if exist , it return that user data
    if(user){
        return res.status(400).json({error: "User with Same Email exits already", UserAlready: user})
    }



    user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    })

    res.json(user);
    }
    catch(error){
        console.log(error.message)
        res.status(500).send("Something went Wrong");
    } 
    
})





module.exports = router;

