import React from "react";
import { Link, useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom'
// import { useEffect } from "react";


const Navbar = () => {

  const navigate = useNavigate();

  // useLocation: This hook returns the location object of current url used by the react-router. This object represents the current URL and is immutable. Whenever the URL changes, the useLocation() hook returns a newly updated location object.
  const location = useLocation();
  
  // useEffect(() => {
    
  //   // console.log(location);
  //   // console.log(location.pathname);

  // }, [])
  
  const handellogout = ()=>{
    localStorage.removeItem('token');
    navigate("/login");
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          MyWorld
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname==='/'?"active":""}`} aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname==='/about'?"active":""}`} to="/about">
                Contact us
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname==='/notes'?"active":""}`} to="/notes">
                Notes
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname==='/addnote'?"active":""}`} to="/addnote">
                Add Note
              </Link>
            </li>
      
          </ul>
          
          {!localStorage.getItem('token')? <form>
          <Link className="btn btn-primary mx-3" to="/login" type="button"> Login </Link>
          <Link className="btn btn-success" to="/signup" type="button"> Sign up </Link> 
          </form>:<button className="btn btn-success" onClick={handellogout} type="button"> Logout </button>}


        </div>
      </div>
    </nav>
  );
};

export default Navbar;
