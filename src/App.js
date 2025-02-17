import React from "react";
import "./index.css";
import Home from "./routes/Home";
import Contact from "./routes/Contact";
import About from "./routes/About";
import Projects from "./routes/Projects";
import Education from "./routes/Education";
import Skills from "./routes/Skills";
import Experiences from "./routes/Experiences"
import { Routes, Route } from "react-router-dom";
// use rafce to create dummmy structure



function App() {
  return (
    <>

    <Routes>
    //creates the routes
      <Route path="/" element={<Home />} />
      <Route path="/Projects" element={<Projects />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/About" element={<About />} />
      <Route path="/Education" element={<Education />} />
      <Route path="/Skills" element={<Skills />} />
      <Route path="/Experiences" element={<Experiences />}/>     
    </Routes>

    </>
  );
  
}

export default App;
