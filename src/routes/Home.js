import React from 'react'
import Navbar from "../components/Navbar/Navbar.js";
import Home from "../components/HomePage/HomePage.js";
import Footer from "../components/Footer/Footer.js";
import AboutContent from '../components/AboutContent/AboutContent.js';
import Skills from '../components/Skills/MSkills.js';
// use rafce to create dummmy structure


const HomeRoute = () => {
  return (
    <div>

    <Navbar/>
    <Home />
    <AboutContent/>
    <Skills /><br></br>
    <Footer />
    
    </div>
  )
}

export default HomeRoute