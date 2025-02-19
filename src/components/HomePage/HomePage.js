import "./HomePage.css";
import React from 'react'
import IntroImg from "../../assets/bg7.jpg"
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="hero">

      <img className="into-img" src={IntroImg} alt="Intro Image"></img>

      <div className="content">
        <p class="heading-para"><b> Associate Software Engineer</b></p><br></br>
        <p class="para">Motivated Software Developer with professional experience and
          expertise in multiple technologies. Winner of Smart India Hackathon 2023,
          securing 1st place for solving the Contact Center Knowledge
          Management with Decision Trees problem statement. Ranked among the
          top 50 coders at the college level on GeeksForGeeks and secured Rank
          93 in Maharashtra in Diploma Final Year Merit. Developed a ChatBot for
          the college website, thus earning recognition. A technically sound
          problem solver with strong communication skills, passionate about
          building scalable and efficient applications.</p>
        <br></br>
        <Link to="/Projects" className="btn">Projects</Link>
        <Link to="/About" className="btn btn-light">Details about me!</Link>

      </div>

    </div>
  )
}

export default Home
