import "./FooterStyles.css";
import React from 'react'
import {FaHome,FaPhone, FaMailBulk,FaTwitter, FaFacebook, FaLinkedin, FaGithub, FaInstagram} from "react-icons/fa"
// import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
        <div className="left">

        <div className="location">
          <FaHome size={20} style={{color:"#fff" ,marginRight:"2rem"}}/>
          <div>
            <p>Pune, Maharashtra</p> India
          </div>
        </div>

        <div className="phone">
        <FaPhone size={20} style={{color:"#fff" ,marginRight:"2rem"}}/>+91 72101*****
        </div>

        <div className="email">
        <h4><br></br>
          <FaMailBulk size={20} style={{color:"#fff" ,marginRight:"2rem"}} />
           sarassk21@gmail.com
           </h4>
         
        </div>
        </div>

        <div className="right">
        <h4> About Myself
        </h4>

        <p>I am a 3rd Year Undergrad student at Pune Institue of Computer Technology. </p>
        <br></br>
        <div className="socials"><br></br>
        <a href="https://www.linkedin.com/in/sara-shaikh/" target="_blank"><FaLinkedin size={30} style={{color:"#fff" ,marginRight:"1rem"}} /></a>
        <a href="https://github.com/Sara-Shaikh-21/" target="_blank"><FaGithub size={30} style={{color:"#fff" ,marginRight:"1rem"}}/></a>
        
        <a href="https://www.instagram.com/sara.shaikh.21/" target="_blank"><FaInstagram size={30} style={{color:"#fff" ,marginRight:"1rem"}}/></a>
        <a href="https://www.facebook.com/sara.shaikh.21/" target="_blank"><FaFacebook size={30} style={{color:"#fff" ,marginRight:"1rem"}}/></a>

        <a href="https://twitter.com/sara_shaikh_21" target="_blank"><FaTwitter size={30} style={{color:"#fff" ,marginRight:"1rem"}}/></a>
        <a href="mailto: sarassk21@gmail.com" target="_blank"><FaMailBulk size={30} style={{color:"#fff" ,marginRight:"1rem"}}/></a>

        </div>

        </div>
        </div>
    </div>
  )
}

export default Footer