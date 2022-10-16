import React from "react";
// import { useEffect, useContext } from 'react'
// import noteContext from '../../Context/Notes/noteContext'
import "./About.css";

const About = () => {
  // const a = useContext(noteContext);

  // useEffect(() => {

  //     a.update();

  // }, [])

  return (
    <div >
      {/* <h1>About {a.state.name} </h1>  */}
      <h1 className="common-heading">Contact us </h1>

      
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3437.1749715516926!2d76.65758911445572!3d30.516091103093657!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fc32344a6e2d7%3A0x81b346dee91799ca!2sChitkara%20University!5e0!3m2!1sen!2sin!4v1665259460021!5m2!1sen!2sin"
        width="100%"
        height="450"
        title="map"
        className="my-3"
        style={{ border: "0" }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>


<section id="contact">
  <div className="contact-box">
    <div className="contact-links">
      <h2 style={{color: "white"}}>CONTACT</h2>
      <div className="links">
        <div className="link">
          <a><img src="https://i.postimg.cc/m2mg2Hjm/linkedin.png" alt="linkedin"/></a>
        </div>
        <div className="link">
          <a><img src="https://i.postimg.cc/YCV2QBJg/github.png" alt="github"/></a>
        </div>
        <div className="link">
          <a><img src="https://i.postimg.cc/W4Znvrry/codepen.png" alt="codepen"/></a>
        </div>
        <div className="link">
          <a><img src="https://i.postimg.cc/NjLfyjPB/email.png" alt="email"/></a>
        </div>
      </div>
    </div>
    <div className="contact-form-wrapper">
      <form>
        <div className="form-item">
          <input type="text" name="sender" required/>
          <label>Name:</label>
        </div>
        <div className="form-item">
          <input type="text" name="email" required/>
          <label>Email:</label>
        </div>
        <div className="form-item">
          <textarea className="" name="message" required></textarea>
          <label>Message:</label>
        </div>
        <button className="submit-btn">Send</button>  
      </form>
    </div>
  </div>
</section>

      
    </div>
  );
};

export default About;
