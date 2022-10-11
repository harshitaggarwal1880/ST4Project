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



// importing a middleware

const fetchUserid = require("../middleware/fetchUserid")


router.use('/authall/', require('./authall'));



// express validator for data validtion wihh post method 

// body() is a middleware used to validate the incoming data as per the fields
const { body, validationResult} = require('express-validator');



// ROUTE 1 :  create a new user (store new data of user into mongodb)
router.post('/createuser', [ 
    body('email','Enter the valid Email').isEmail(),
    body('name','Enter the valid Name').isLength({ min:5 }),
    body('password','Enter the valid password of length more than 4 characters`').isLength({ min:5 })    
] , async (req, res)=>{

    let success = false;
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({ success, errors:errors.array() });
    } 


    // check whether the user email exits already
    try{
    let user = await User.findOne({email: req.body.email})  // findOne find a same email in mongodb databse, if exist , it return that user data
    if(user){
        return res.status(400).json({success,error: "User with Same Email exits already", UserAlready: user})
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
    const AuthToken = jwt.sign(data,JWT_SECRET_KEY);
    success = true;
    // we sending jwt token to user
    res.json({success,AuthToken});    // here we use es6, means it return { jwtToken : jwtToken }
    }

    catch(error){
        console.log(error.message)
        res.status(500).json({success, error:"Something went Wrong"});
    } 
    
})



// ROUTE 2 : for verify lofin crendential and give a authentication token for further operation

router.post('/login', [
    body('email','Please enter Valid email').isEmail(),   // body() is a middleware used to validate the incoming data as per the fields
    body('password','Please Enter Valid Password').isLength({min:1})
] , async (req,res) => {
    
    let success = false;
    const error = validationResult(req)
    if(!error.isEmpty()){
        return res.status(400).json({ errors:error.array() });
    } 

    const{ email, password } = req.body;

    try {
        let user = await User.findOne({email});
        if(!user){
            return res.status(400).json({success,error: "Please try to login with correct crendential"})
        }

        const passwordcompare = await bcrypt.compare(password, user.password);
        if(!passwordcompare){
            return res.status(400).json({success,error: "Please try to login with correct crendential"})
        }

        const data = {
            user:{
                id: user.id
            }
        }

        const AuthToken = jwt.sign(data, JWT_SECRET_KEY);
        success = true;
        res.json({ success, AuthToken});
        
    } 
    catch (error) {

        res.status(500).send("Internal Server Error")

    }

})



// ROUTE 3: Get logged user details using : "/api/auth/getuser" : Login Required
// in this route, we create a middleware function , which decode the authentication token coming from the user as a header , middleware decode the token and return userid, then using id , we get all user information using id. So by using middleware, we dont want to write that code again and agian in all routes.simply we use that middle in all routes
// middleware : middleware is a function which runs everytime , when a route calls , then after middleware function runs , other functions runs.

router.post('/getuser', fetchUserid, async (req, res)=>{
    try {
        const userid = req.user.id;
        const user = await User.findById(userid).select("-password");
        res.json({user})
    }
    catch (error) {
        res.status(500).send("Internal Server Error")
    }

})




module.exports = router;

