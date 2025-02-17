import React from 'react'
import Navbar from "../components/Navbar/Navbar.js";
import Footer from "../components/Footer/Footer.js";
import HeroImg2 from '../components/Hero Image 2/HeroImg2.js';
import Form from "../components/Form/Form.js"
const contact = () => {
  return (
    <div>
    <Navbar/>
    <HeroImg2 heading="Let's Connect!" text="Contact me at the following." />
    <Form />
    <Footer />
    </div>
  )
}

export default contact