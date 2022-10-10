import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = (props) => {

  let navigate = useNavigate();   // here we are creating a navigate object

    const [credentials, setcredentials] = useState({name:"",email:"",password:"",cpassword:""});

    const onchange = (e) => {
        // here we use spread operator and set note state value using event listener object by getting value by target feature of event object which is passed to an function as e
    
        setcredentials({ ...credentials, [e.target.name]: e.target.value });
      };


    const handelSubmit = async(e) =>{
        e.preventDefault();
        if(credentials.password === credentials.cpassword){
          const response = await fetch(`http://localhost:5000/api/auth/createuser`, {
              method: 'POST', 
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({name: credentials.name, email: credentials.email, password: credentials.password})
          });
          const json = await response.json()
          console.log(json)
          if(json.success){
            // save the auth token and redirect to home page
            localStorage.setItem('token', json.AuthToken)

            // here we use useNavigate hook to navigate to another url in js
            navigate("/");

            props.showAlert("Signup Successfully","success");

          }
          else{
            // alert("Invalid Credentials")
            props.showAlert("Invalid Credentials","danger");
          }
        }
        else{
            props.showAlert("Password and Confirm Password should be same.","danger")
        }
    }

  return (
    <div>
        <div className="container">
            <h1> Sign Up Page</h1>
      <form onSubmit={handelSubmit}>
        <div className="form-group my-3">
          <label htmlFor="exampleInputEmail1">Name</label>
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

        <div className="form-group my-3">
          <label htmlFor="exampleInputEmail1">Email address</label>
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
        <div className="form-group my-3">
          <label htmlFor="exampleInputPassword1">Password</label>
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
        <div className="form-group my-3">
          <label htmlFor="exampleInputPassword1">Confirm Password</label>
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
        
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
    </div>
  )
}

export default Signup;