import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = (props) => {

    let navigate = useNavigate();   // here we are creating a navigate object

    const [credentials, setcredentials] = useState({email:"",password:""});

    const onchange = (e) => {
        // here we use spread operator and set note state value using event listener object by getting value by target feature of event object which is passed to an function as e
    
        setcredentials({ ...credentials, [e.target.name]: e.target.value });
      };


    const handelSubmit = async(e) =>{
        e.preventDefault();
        const response = await fetch(`http://localhost:5000/api/auth/login`, {
            method: 'POST', 
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({email: credentials.email, password: credentials.password})
          });
          const json = await response.json()
          console.log(json)
          if(json.success){
            // save the auth token and redirect to home page
          console.log(json)

            localStorage.setItem('token', json.AuthToken);

            // here we use useNavigate hook to navigate to another url in js
            navigate("/");

            props.showAlert("Login Successfully", "success")
          }
          else{
            // alert("Invalid Credentials")
            props.showAlert("Invalid Credentials", "danger")
          }
    }

  return (
    <div className="container">
        <h1> Login Page </h1> 
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
      </form>
    </div>
  );
};

export default Login;
