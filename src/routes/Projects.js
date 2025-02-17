import React from 'react'
import Navbar from "../components/Navbar/Navbar.js";
import Footer from "../components/Footer/Footer.js";
import HeroImg2 from '../components/Hero Image 2/HeroImg2.js';
import Projects from '../components/Projects/projects.js';
// use rafce to create dummmy structure

const ProjectsRoute = () => {
  return (
    <div>
    <Navbar/>
    <HeroImg2 heading="Projects" text="Some of my recent projects."/>
    <Projects />
    <Footer />

    </div>
  )
}

export default ProjectsRoute;