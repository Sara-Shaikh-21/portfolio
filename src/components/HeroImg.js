import "./HeroImgStyles.css";
import React from 'react'
import IntroImg from "../assets/bg9.jpg"
import { Link } from "react-router-dom";

const Heroimg = () => {
  return (
    <div className="hero">
    
    <div className="mask">
        <img className="into-img" src={IntroImg} alt="Intro Image"></img>
    </div>

    <div className="content">
    <p>I am an UnderGrad Student!</p>
    <h1>An Aspiring Software Engineer</h1>
    <div>
        <Link to="/Projects" className="btn">Projects</Link>
        <Link to="/About" className="btn btn-light">About Me!</Link>
    </div>
    </div>

    </div>
  )
}

export default Heroimg
