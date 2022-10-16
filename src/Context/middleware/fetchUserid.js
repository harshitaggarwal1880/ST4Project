

const jwt = require('jsonwebtoken');
const JWT_SECRET_KEY = "shhhhhh";


const fetchUserid = () =>{

    // get the user from the jwt token and add id to req objeect
    const token = localStorage.getItem('token')

    if(!token){
        return false;
    }

    try {
    // here we get data , which we give data when we generate or sign token using jwt package 
    const data = jwt.verify(token,JWT_SECRET_KEY);

    return data.user; 

    } 
    catch (error) {
        return false;
    }
    
}


module.exports = fetchUserid;
 