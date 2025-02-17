import React from 'react'
import Navbar from "../components/Navbar/Navbar.js";
import Footer from "../components/Footer/Footer.js";
import HeroImg2 from '../components/Hero Image 2/HeroImg2.js';
import AboutContent from '../components/AboutContent/AboutContent.js';


const about = () => {
  return (
    <div>
    <Navbar/>
    <HeroImg2 heading="Hello" text="Some words about me!"/>
    <AboutContent />
    <Footer />
    </div>
  )
}

export default about