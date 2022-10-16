import React, { useState, useEffect } from "react";
import { useNavigate , Link } from "react-router-dom";

import "./SignupOne.css"

const bcrypt = require('bcryptjs');

// jwt authentication 
// jwt is a node package for jwt (json web token) authentication 
const jwt = require('jsonwebtoken');
const JWT_SECRET_KEY = "shhhhhh";


const apihost = "http://localhost:4000"

const Signup = (props) => {

  let navigate = useNavigate();   // here we are creating a navigate object

    const [credentials, setcredentials] = useState({name:"",email:"",password:"",cpassword:""});

    const onchange = (e) => {
        // here we use spread operator and set note state value using event listener object by getting value by target feature of event object which is passed to an function as e
    
        setcredentials({ ...credentials, [e.target.name]: e.target.value });
      };



      const state =[];

   
      const [users, setUsers] = useState(state);
    

      
    const getusers = async ()=>{
      const response1 = await fetch(`${apihost}/users`, {
        method: 'GET', 
        headers: {
          'Content-Type': 'application/json'
        }
        
      });
      const json1 = await response1.json()
       console.log(json1)
      setUsers(json1)
    }



    useEffect(() => {
        
        getusers();
        
    }, [])
      
      

    const handelSubmit = async(e) =>{
        e.preventDefault();

        let boola = true;

        
        console.log(users)

        for(let x = 0; x<users.length;x++){
          const element = users[x];
          if(element.email === credentials.email){
            boola = false;
            break;
          }
        }  
        console.log(boola)

        if(credentials.password === credentials.cpassword && boola){

          // here we generate a salt from bcrypt package
          const salt = await bcrypt.genSalt(10)
          
          // here we hash a user password with salt 
          const Securedpass = await bcrypt.hash(credentials.password, salt);


          const response = await fetch(`${apihost}/users`, {
              method: 'POST', 
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({name: credentials.name, email: credentials.email, password: Securedpass})
          });
          const json = await response.json()
          console.log(json)
        

          const data = {
            user: {
                id: json.id
            }
          }
    
          const AuthToken = jwt.sign(data,JWT_SECRET_KEY);


          localStorage.setItem('token',AuthToken)

            navigate("/");

         
        }
        else{
            props.showAlert("Invalid Crendential...","danger")
        }
    }

  return (
    <div>

    <div className='col-lg-10 col-xl-8 card mx-auto d-flex flex-row px-0'>
      
    <div className="img-left d-md-flex d-none" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1665006518423-b81a193b4100?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80")' }}></div>
    
    <div className="card-body d-flex flex-column justify-content-center bg-white">
        <h2 className="title text-center mt-2 pb-1">Register into accont</h2>
        <form onSubmit={handelSubmit}>
        <div className="form-group my-1">
          <label htmlFor="exampleInputEmail1" className="labelsign" >Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            minLength={1}
            value={credentials.name}
            onChange={onchange}
            aria-describedby="emailHelp"
            placeholder="Enter Name"
            required
          />
        </div>

        <div className="form-group my-1">
          <label htmlFor="exampleInputEmail1" className="labelsign">Email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            minLength={1}
            value={credentials.email}
            onChange={onchange}
            aria-describedby="emailHelp"
            placeholder="Enter email"
            required
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group my-1">
          <label htmlFor="exampleInputPassword1" className="labelsign">Password</label>
          <input
            type="password"
            minLength={5}
            className="form-control"
            id="password"
            name="password"
            onChange={onchange}
            value={credentials.password}
            placeholder="Password"
            required
          />
        </div>
        <div className="form-group my-1">
          <label htmlFor="exampleInputPassword1" className="labelsign">Confirm Password</label>
          <input
            type="password"
            className="form-control"
            id="cpassword"
            name="cpassword"
            onChange={onchange}
            value={credentials.cpassword}
            placeholder="Confirm Password"
            required
          />
        </div>
        
        <button type="submit" className="btn btn-primary my-1">
          Submit
        </button>  
        <div className="mx-2 d-inline">
        <span> Already have Account? </span> 
        <Link to="/login"> Login </Link>
        </div>
      </form>
    </div>

    </div>
    
    
  </div>

  )
}

export default Signup;