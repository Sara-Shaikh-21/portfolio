import React from 'react'
import "./MSkills.css"
import In from "../../assets/html.png"
import php from "../../assets/php.png"
import react from "../../assets/reactjs.png"
import mysql from "../../assets/mysql.png"
import mongo from "../../assets/mongo.png"
import java from "../../assets/java.png"
import py from "../../assets/python.png"
import d from "../../assets/d.png"
import elk from "../../assets/elk.png"
import cpp from "../../assets/cpp.png"
import c from "../../assets/c.png"
import git from "../../assets/git.png"
import vs from "../../assets/vs.png"
import docker from "../../assets/docker.png"
import node from "../../assets/node.png"


import { FaLinkedin } from 'react-icons/fa'

// use rafce
const MSkills = () => {
  return (

    <div className="skills-main">
      <strong id="skills-txt">Skills & Tools</strong>
      <div className="skills-container">
        <img src={c} alt="C" />
        <img src={cpp} alt="CPP" />
        <img src={java} alt="JAVA" />
        <img src={py} alt="PYTHON" />
        <img src={In} alt="HTML" />
        <img src={php} alt="PHP" />
        <img src={react} alt="react" />
        <img src={mysql} alt="MySql" />
        <img src={mongo} alt="MongoDB" />
        <img src={d} alt="Dialog Flow" />
        <img src={elk} alt="ELK" />
        <img src={git} alt="Github" />
        <img src={vs} alt="Visual Studio Code" />
        <img src={docker} alt="Docker" />
        <img src={node} alt="NodeJs" />
      </div>
      <br></br><br></br>
      <div className="for_more">
        Visit my   <a href="https://www.linkedin.com/in/sara-shaikh/" target="_blank"><FaLinkedin size={26} style={{ color: "#fff", marginRight: "1rem" }} /></a>for updated skills!
      </div>
    </div>


  )
}

export default MSkills