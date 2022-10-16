import React from "react";
import "./Homeheader.css"
import { Link } from "react-router-dom"

const Homeheader = () => {
  return (
    <div>
      <div className="hero">
        


        <div className="lamp-container">
          {/* <img
            src="https://i.postimg.cc/yYz5Nnqw/lamp.png"
            alt=""
            className="lamp"
          />
          <img
            src="https://i.postimg.cc/SxgtDhXh/light.png"
            alt=""
            className="light"
            id="light"
          /> */}

          {/* <textarea value={"HEllo"}> </textarea> */}

        </div>

        <div className="text-container">
          <h1 style={{textAlign: 'left',
    backgroundColor: '#1d2026'}} >
            Notes.. <br /> My Memories
          </h1>
          <p>
            This is the first lamp from our company. We're makinga huge
            collection of modern lamps in all categories from home use to office
            use.
          </p>
          <Link to="/notes">Check All Collections</Link>
          
        </div>
      </div>
    </div>
  );
};

export default Homeheader;
