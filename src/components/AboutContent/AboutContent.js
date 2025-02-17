import "./AboutContentStyles.css"
import React from 'react'
import { Link } from "react-router-dom"
import r1 from "../../assets/mypic.jpeg"

const AboutContent = () => {
  return (
    <div className="about">
    <div className="left">
    <h1>Who am I?</h1>
    <p>Hello Readers!<br></br>
    My name is <b>Sara Shaikh</b>, and I'm an Associate Software Engineer 
    who believes in the power of programming to transform and improve the 
    lives of people around the world. Moreover, I love to give back to the 
    community by actively participating in and organizing community events 
    like seminars, workshops, hackathons, etc.</p>

    <p>I've been a member of the tech fests clubs since I was in high school. 
    Apart from quizzes and competitions, I have always enjoyed being on stage
     for comparing and handling the stage, which has helped me overcome stage 
     fright. I am a technoaguist who adapts to new technologies quickly and easily.</p>

    <Link to="#" onClick={() => window.open("https://www.linkedin.com/in/sara-shaikh/", "_blank", "noopener,noreferrer")}>
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

