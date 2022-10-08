import React from "react";
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom'
import { useEffect } from "react";


const Navbar = () => {
  
  // useLocation: This hook returns the location object of current url used by the react-router. This object represents the current URL and is immutable. Whenever the URL changes, the useLocation() hook returns a newly updated location object.
  const location = useLocation();
  
  useEffect(() => {
    
    console.log(location);
    console.log(location.pathname);

  }, [])
  

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
                About
              </Link>
            </li>
      
          </ul>
          
            
          <button className="btn btn-primary mx-3" type="button">
              Login
          </button>

          <button className="btn btn-success" type="button">
              Sign up
          </button>
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
