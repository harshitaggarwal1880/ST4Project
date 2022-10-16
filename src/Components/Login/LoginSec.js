import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./LoginSec.css"

const bcrypt = require('bcryptjs');

// jwt authentication 
// jwt is a node package for jwt (json web token) authentication 
const jwt = require('jsonwebtoken');
const JWT_SECRET_KEY = "shhhhhh";


const apihost = "http://localhost:4000"


const Login = (props) => {

    let navigate = useNavigate();   // here we are creating a navigate object

    const [credentials, setcredentials] = useState({email:"",password:""});

    const onchange = (e) => {
        // here we use spread operator and set note state value using event listener object by getting value by target feature of event object which is passed to an function as e
    
        setcredentials({ ...credentials, [e.target.name]: e.target.value });
      };


    const handelSubmit = async(e) =>{
        e.preventDefault();
          const response = await fetch(`${apihost}/users?email=${credentials.email}`, {
            method: 'GET', 
            headers: {
              'Content-Type': 'application/json'
            }
          });
          const json = await response.json()
          console.log(json)
         

          //   localStorage.setItem('token', json.AuthToken);

          //   // here we use useNavigate hook to navigate to another url in js
          //   navigate("/");

          //   props.showAlert("Login Successfully", "success")
          // }
          // else{
          //   // alert("Invalid Credentials")
          //   props.showAlert("Invalid Credentials", "danger")
          // }


            
          if(json.length===0){
            props.showAlert("Invalid Credentials", "danger")
            return
          }

          const passwordcompare = await bcrypt.compare(credentials.password, json[0].password);
          if(!passwordcompare){
            props.showAlert("Invalid Credentials", "danger")
            return
          }

          const data = {
              user:{
                  id: json[0].id
              }
          }

          const AuthToken = jwt.sign(data, JWT_SECRET_KEY);

          localStorage.setItem('token',AuthToken)

          // //   // here we use useNavigate hook to navigate to another url in js
          navigate("/");




    }




  return (
    <div>

    <div class='col-lg-10 col-xl-8 card mx-auto d-flex flex-row px-0'>
      
    <div class="img-left d-md-flex d-none" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1663640171543-9eef40a4b320?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjU4NzAyNjE&ixlib=rb-1.2.1&q=80")' }}></div>
    
    <div class="card-body d-flex flex-column justify-content-center bg-white" style={{height:"70vh"}}>
        <h2 class="title text-center mt-4 pb-3" style={{fontWeight:"bold"}}>Login into accont</h2>
        <form onSubmit={handelSubmit}>
        <div className="form-group my-3">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={credentials.email}
            onChange={onchange}
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group my-3">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            onChange={onchange}
            value={credentials.password}
            name="password"
            placeholder="Password"
          />
        </div>
        
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        <div className="mx-2 d-inline">
        <span> Not registered yet? </span> 
        <Link to="/signup"> Create a Account </Link>
        </div>
      </form>
    </div>

    </div>
    
    
  </div>

  );
};

export default Login;
