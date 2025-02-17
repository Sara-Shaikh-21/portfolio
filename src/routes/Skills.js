// use rafce to create dummmy structure
import React from 'react'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'
import MSkills from '../components/Skills/MSkills'
import HeroImg2 from '../components/Hero Image 2/HeroImg2'

const Skills = () => {
  return (
    <div>
    <Navbar />
    <HeroImg2 heading="My Skills" text="Here are some of my skills but its always updating!" />
    <MSkills /><br></br><br></br>
    <Footer />
    </div>
  )
}

export default Skills