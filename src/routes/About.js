import React from 'react'
import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer";
import HeroImg2 from '../components/HeroImg2.js';
import AboutContent from '../components/AboutContent.js';


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