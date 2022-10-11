

const jwt = require('jsonwebtoken');
const JWT_SECRET_KEY = "shhhhhh";


const fetchUserid = (req, res, next) =>{

    // get the user from the jwt token and add id to req objeect
    const token = req.header('auth-token');

    if(!token){
        res.status(401).send({error: "Please Authenticates using a valid token"})
    }

    try {
    // here we get data , which we give data when we generate or sign token using jwt package 
    const data = jwt.verify(token,JWT_SECRET_KEY);

    req.user = data.user; 


    next();    // here next means , when middleware function end , then runs other next function    

    } 
    catch (error) {
        res.status(401).send({error: "Please Authenticate using a valid token"})   
    }
    
}


module.exports = fetchUserid;
 