import React from 'react'
import "./MSkills.css"
import In from "../assets/html.png"
import php from "../assets/php.png"
import react from "../assets/reactjs.png"
import mysql from "../assets/mysql.png"
import mongo from "../assets/mongo.png"
import java from "../assets/java.png"
import py from "../assets/python.png"
import d from "../assets/d.png"
import { FaLinkedin } from 'react-icons/fa'

// use rafce
const MSkills = () => {
  return (
    
        <div className="skills-main">
        <strong id="skills-txt">Skills & Tools</strong>
        <div className="skills-container">
            
           <img src={In} alt="HTML"/>
           <img src={php} alt="PHP"/>
           <img src={react} alt="REACT"/>
           <img src={py} alt="PYTHON"/>
           <img src={mysql} alt="MYSQL"/>
           <img src={d} alt="DIALOG FLOW"/>
           <img src={mongo} alt="MONGO"/>
           
           <img src={java} alt="JAVA"/>
        </div><div className="for_more">
          Visit my   <a href="https://www.linkedin.com/in/sara-shaikh/" target="_blank"><FaLinkedin size={26} style={{color:"#fff" ,marginRight:"1rem"}} /></a>for updated skills!
        </div>
        </div>
        
    
  )
}

export default MSkills