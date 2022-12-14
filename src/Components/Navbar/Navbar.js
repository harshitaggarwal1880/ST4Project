import React from "react";
import { Link, useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom'
// import { useEffect } from "react";
import "./Navbar.css"

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
    // <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
    //   <div className="container-fluid">
    //     <Link className="navbar-brand" to="/">
    //       MyWorld
    //     </Link>
    //     <button
    //       className="navbar-toggler"
    //       type="button"
    //       data-bs-toggle="collapse"
    //       data-bs-target="#navbarNav"
    //       aria-controls="navbarNav"
    //       aria-expanded="false"
    //       aria-label="Toggle navigation"
    //     >
    //     <span className="navbar-toggler-icon"></span>
    //     </button>
    //     <div className="collapse navbar-collapse" id="navbarSupportedContent">
    //       <ul className="navbar-nav me-auto mb-2 mb-lg-0">
    //         <li className="nav-item">
    //           <Link className={`nav-link ${location.pathname==='/'?"active":""}`} aria-current="page" to="/">
    //             Home
    //           </Link>
    //         </li>
    //         <li className="nav-item">
    //           <Link className={`nav-link ${location.pathname==='/about'?"active":""}`} to="/about">
    //             Contact us
    //           </Link>
    //         </li>
    //         <li className="nav-item">
    //           <Link className={`nav-link ${location.pathname==='/notes'?"active":""}`} to="/notes">
    //             Notes
    //           </Link>
    //         </li>
           
      
    //       </ul>
          
    //       {!localStorage.getItem('token')? <form>
    //       <Link className="btn btn-primary mx-3" to="/login" type="button"> Login </Link>
    //       <Link className="btn btn-success" to="/signup" type="button"> Sign up </Link> 
    //       </form>:<button className="btn btn-success" onClick={handellogout} type="button"> Logout </button>}


    //     </div>
    //   </div>
    // </nav>
  
    <nav style={{background:"#1d2026", color:"white"}}>

          {/* <img
            src="https://www.canva.com/design/DAFPQKGH8Z8/EAsckyCB2eBnLRF1DWCJbA/view?utm_content=DAFPQKGH8Z8&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink"
            alt=""
            // className="menu-img"
          /> */}
          <Link to="/"> <h2 style={{fontFamily:"cursive", fontWeight:"bold"}}> MyWorld</h2> </Link>
          {/* <img
            src="https://i.postimg.cc/RZSD7FZd/logo.png"
            alt=""
            className="logo"
          /> */}
          <ul>
            <li>
            <Link className={`nav-link ${location.pathname==='/'?"active":""}`} aria-current="page" to="/">
                 Home
            </Link>
            </li>
            <li>
            <Link className={`nav-link ${location.pathname==='/contact'?"active":""}`} to="/contact">
                 Contact us
               </Link>
            </li>
            <li>
            <Link className={`nav-link ${location.pathname==='/notes'?"active":""}`} to="/notes">
                 Notes
            </Link>
            </li>
            {/* <li>
            <Link className={`nav-link ${location.pathname==='/notes'?"active":""}`} to="/addnotes">
                Add Notes
            </Link>
            </li>
           */}
          
          </ul>


                    
        {!localStorage.getItem('token')? <form>
        <Link className="btn btn-primary mx-3" to="/login" type="button"> Login </Link>
        <Link className="btn btn-success" to="/signup" type="button"> Sign up </Link> 
        </form>:<button className="btn btn-success" onClick={handellogout} type="button"> Logout </button>}

         
        </nav>
  
  
  
    );



};

export default Navbar;
