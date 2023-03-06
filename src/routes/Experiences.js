import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImg2 from '../components/HeroImg2'
import Word from '../components/word'
// use rafce to create dummmy structure
// projects==work
// experience==word

const Experiences = () => {
  return (
    <div>
    <Navbar/>
    <HeroImg2 heading="Experiences" text="Some of my potential contributions."/>
    <Word />
    <Footer />
    </div>
  )
}

export default Experiences;