const express = require('express')

const router = express.Router() 

const User = require("../models/User")

// bcryptjs is a node package for hashing password with bcrypt generated salt and pepper
// password hasing - is a one way function to hash/encrpt a password with different algorithm and impossible to convert back into plain text
// salt - salt is a addition data added to password text to make a password not common and then hashing that password to make password unable to hack
// pepper - pepper is also like salt comes after salt and pepper is hardcore value in backend
const bcrypt = require('bcryptjs');


// jwt authentication 
// jwt is a node package for jwt (json web token) authentication 
const jwt = require('jsonwebtoken');
const JWT_SECRET_KEY = "shhhhhh";


router.use('/authall/', require('./authall'));



// express validator for data validtion wihh post method 

const { body, validationResult} = require('express-validator');

// create a new user (store new data of user into mongodb)
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

    // here we generate a salt from bcrypt package
    const salt = await bcrypt.genSalt(10)
    
    // here we hash a user password with salt 
    const Securedpass = await bcrypt.hash(req.body.password, salt);

    user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: Securedpass    // here we store hash passwrod in mongodb 
    })

    const data = {
        user: {
            id: user.id
        }
    }

    // here we generate a json web token by signing with secret key using jwt package and here we using mongodb user document id as data, so that id retrieval from db is efficient.
    const jwtToken = jwt.sign(data,JWT_SECRET_KEY);

    // we sending jwt token to user
    res.json({jwtToken});
    }

    catch(error){
        console.log(error.message)
        res.status(500).send("Something went Wrong");
    } 
    
})





module.exports = router;

