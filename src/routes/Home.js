import React from 'react'
import Navbar from "../components/Navbar.js";
import HeroImg from "../components/HeroImg.js";
import Footer from "../components/Footer";
import AboutContent from '../components/AboutContent.js';
import Skills from '../components/MSkills.js';
// use rafce to create dummmy structure


const home = () => {
  return (
    <div>

    <Navbar/>
    <HeroImg />
    
    <AboutContent/>
    <Skills /><br></br>
    <Footer />
    
    </div>
  )
}

export default home