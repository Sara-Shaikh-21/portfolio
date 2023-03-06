import "./AboutContentStyles.css"
import React from 'react'
import { Link } from "react-router-dom"
import r1 from "../assets/my_pic.jpeg"

const AboutContent = () => {
  return (
    <div className="about">
    <div className="left">
    <h1>Who am I?</h1>
    <p>Hello Readers!<br></br>
    My name is <b>Sara Shaikh</b>, and I am a student at the Pune 
    Institute of Computer Technology. I am an active and self-motivated 
    student who strives for perfection in my work. I am a quick learner of 
    programming and prefer to complete tasks through implementation rather than 
    conceptual understanding.</p>
    <p>I've been a member of the tech fests clubs since I was in high school. 
    Apart from quizzes and competitions, I have always enjoyed being on stage
     for comparing and handling the stage, which has helped me overcome stage 
     fright. I am a technoaguist who adapts to new technologies quickly and easily.</p>

    <Link to="../contact">
    <button className="btn">Get in Touch!</button>
    </Link>
    </div>

    <div className="right">
    <div className="img-container">
        
        <div className="img-stack top">
            <img src={r1} className="img" alt="image-top" />
        </div>

        

    </div>
    </div>


    </div>
  )
}

export default AboutContent

