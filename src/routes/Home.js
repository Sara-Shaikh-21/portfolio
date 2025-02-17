import React from 'react'
import Navbar from "../components/Navbar/Navbar.js";
import HeroImg from "../components/Hero Image/HeroImg.js";
import Footer from "../components/Footer/Footer.js";
import AboutContent from '../components/AboutContent/AboutContent.js';
import Skills from '../components/Skills/MSkills.js';
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