import React from "react";
import "./Homeheader.css";
import { Link } from "react-router-dom";
import Noteitem from "../NoteItem/Noteitems";

const Homeheader = () => {
  const note = {
    title: "dgfdfgfdg",
    description: "gfdgfdg",
    tag: "gfdgdfgdf",
    userId: 1,
    id: 12,
  };

  const margin = () => {
    const random_margin = ["-5px", "1px", "5px", "10px", "15px", "20px"];

    return random_margin[Math.floor(Math.random() * random_margin.length)];
  };

  const rotate = () => {
    const random_rotate = [
      "rotate(3deg)",
      "rotate(1deg)",
      "rotate(-1deg)",
      "rotate(-3deg)",
      "rotate(-5deg)",
      "rotate(-10deg)",
    ];

    return random_rotate[Math.floor(Math.random() * random_rotate.length)];
  };

  const color = () => {
    const random_color = [
      "#c2ff3d",
      "#ff3de8",
      "#3dc2ff",
      "#04e022",
      "#bc83e6",
      "#ebb328",
    ];

    return random_color[Math.floor(Math.random() * random_color.length)];
  };

  return (
    <div>
      <div className="hero">
        <div className="lamp-container">
          <div
            className="note-item"
            onMouseEnter={(e) => {
              e.target.style.transform = "scale(1.1";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "scale(1)";
            }}
            style={{
              width: "270px",
              margin: `${margin()}`,
              marginTop: "100px",
              transform: `${rotate()}`,
              backgroundColor: `${color()}`,
            }}
          >
            <h1 className="note-desc"> Sticky Note.. </h1>
          </div>
          <div
            className="note-item"
            onMouseEnter={(e) => {
              e.target.style.transform = "scale(1.1";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "scale(1)";
            }}
            style={{
              width: "270px",
              margin: `${margin()}`,
              position: "absolute",
              top: "50%",
              right: "70%",
              transform: `${rotate()}`,
              backgroundColor: `${color()}`,
            }}
          >
            <h1 className="note-desc"> Sticky Note.. </h1>
          </div>
          <div
            className="note-item"
            onMouseEnter={(e) => {
              e.target.style.transform = "scale(1.1";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "scale(1)";
            }}
            style={{
              width: "270px",
              margin: `${margin()}`,
              position: "absolute",
              top: "80%",
              right: "0%",
              transform: `${rotate()}`,
              backgroundColor: `${color()}`,
            }}
          >
            <h1 className="note-desc"> Memories... </h1>
          </div>
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
          <h1 style={{ textAlign: "left", backgroundColor: "#1d2026" }}>
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
