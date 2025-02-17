import "./FormStyles.css"
import React from 'react'
import { FaLinkedin,FaMailBulk ,FaInstagram,FaGithub,FaFacebook,FaTwitter } from "react-icons/fa"
// use rafce to create dummmy structure

const Form = () => {
  return (
    <div className="form">
    <form>
        <label>Your Sweet Name:</label>
        <input type="text"></input>
        <label>Email:</label>
        <input type="email"></input>
        <label>Subject: </label>
        <input type="text"></input>
        <label>Message: </label>
        <textarea rows="6" placeholder="Type your message here..">
        </textarea>

        <button className="btn">Submit</button>
        <br></br><br></br>
        <div className="socials"><br></br>
        <a href="https://www.linkedin.com/in/sara-shaikh/" target="_blank"><FaLinkedin size={50} style={{color:"#fff" ,marginRight:"4rem"}} /></a>
        <a href="https://github.com/Sara-Shaikh-21/" target="_blank"><FaGithub size={50} style={{color:"#fff" ,marginRight:"4rem"}}/></a>
        <a href="https://www.facebook.com/sara.shaikh.21/" target="_blank"><FaFacebook size={50} style={{color:"#fff" ,marginRight:"4rem"}}/></a>
        <a href="https://twitter.com/sara_shaikh_21" target="_blank"><FaTwitter size={50} style={{color:"#fff" ,marginRight:"4rem"}}/></a>
        <a href="mailto: sarassk21@gmail.com" target="_blank"><FaMailBulk size={50} style={{color:"#fff" ,marginRight:"0rem"}}/></a>

        </div>
    </form>
    
    </div>
  )
}

export default Form
