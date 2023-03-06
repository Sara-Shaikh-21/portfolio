import React from 'react'
import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer";
import HeroImg2 from '../components/HeroImg2.js';
import Form from "../components/Form.js"
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