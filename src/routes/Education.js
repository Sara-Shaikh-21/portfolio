import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import EducationData from '../components/EducationData/EducationData'
import Footer from '../components/Footer/Footer'
import HeroImg2 from '../components/Hero Image 2/HeroImg2'

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