// use rafce to create dummmy structure
import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import MSkills from '../components/MSkills'
import HeroImg2 from '../components/HeroImg2'

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