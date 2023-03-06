import React from 'react'
import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer";
import HeroImg2 from '../components/HeroImg2.js';
import Work from '../components/Work';
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