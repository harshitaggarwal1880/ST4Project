const express = require('express')

const router = express.Router() 

const User = require("../models/User")




router.get('/' , (req, res)=>{

    obj ={
        "name": 'Harsh',
        "roll": 2311344
    }
    res.json(obj);
})


// sending json data to user 
router.get('/json1' , (req, res)=>{

    obj ={
        name: 'Harsh',
        roll: 2311344
    }
    res.json(obj);
})



// testing and passing req body 
router.get('/reqbody' , (req, res)=>{

    console.log(req.body);
    res.send(req.body);
})



// get request sends data in plain text , means sending important/privacy data is not recomended , that why we use post method to send dat in encrypted way
router.get('/user' , (req, res)=>{

    // Inserting a user data in mongodb using User model  
    const user = User(req.body);
    user.save();

    console.log(req.body);
    res.send(req.body);
})


// post method sends data in encrypted format
router.post('/user' , (req, res)=>{

    // Inserting a user data in mongodb using User model  
    const user = User(req.body);
    user.save();

    console.log(req.body);
    res.send(req.body);
})

router.post('/createuser', (req, res) => {
    User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    }).then(user => res.json(user));
  });



// express validator for data validtion 

const { body, validationResult} = require('express-validator');    //destructuring of variables

router.post('/inputval', [ 
    body('email','Enter the valid Email').isEmail(),
    body('name','Enter the valid Name').isLength({ min:5 }),
    body('password','Enter the valid password of length more than 4 characters`').isLength({ min:5 })    
] , (req, res)=>{

    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({ errors:errors.array() });
    } 


    // here this User.create returns promise , so we use .then to handel promise
    // and if it return error, then we use .catch to handel error 
    User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    }).then(user=>{res.json(user)}).catch(err =>{       
        console.log(err)
        res.json({error: "Please enter a unique value for email", message: err.message})
    })

})





module.exports = router;

