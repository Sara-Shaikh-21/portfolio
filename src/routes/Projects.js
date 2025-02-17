import React from 'react'
import Navbar from "../components/Navbar/Navbar.js";
import Footer from "../components/Footer/Footer.js";
import HeroImg2 from '../components/Hero Image 2/HeroImg2.js';
import Work from '../components/Work/Work.js';
// use rafce to create dummmy structure
// projects==work
// experience==word
const Projects = () => {
  return (
    <div>
    <Navbar/>
    <HeroImg2 heading="Projects" text="Some of my recent projects."/>
    <Work />
    <Footer />

    </div>
  )
}

export default Projects;