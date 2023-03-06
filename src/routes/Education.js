import React from 'react'
import Navbar from '../components/Navbar'
import EducationData from '../components/EducationData'
import Footer from '../components/Footer'
import HeroImg2 from '../components/HeroImg2'

const Education = () => {
  return (
    <div>
        <Navbar/>
        <HeroImg2 heading="My Educational Details" text="I have studied in some of the prestigious schools and colleges in Pune!" />

        <EducationData />
        <Footer />
    </div>
  )
}

export default Education