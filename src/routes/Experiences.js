import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import HeroImg2 from '../components/Hero Image 2/HeroImg2'
import Experience from '../components/Experience/experience'
// use rafce to create dummmy structure
// projects==work
// experience==word

const Experiences = () => {
  return (
    <div>
    <Navbar/>
    <HeroImg2 heading="Work Experiences" text="Some of my potential contributions."/>
    <Experience />
    <Footer />
    </div>
  )
}

export default Experiences;