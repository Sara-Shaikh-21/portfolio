import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./routes/Home";
import Contact from "./routes/Contact";
import About from "./routes/About";
import Projects from "./routes/Projects";
import Education from "./routes/Education";
import Skills from "./routes/Skills";
import Experiences from "./routes/Experiences";
import Freelancing from "./routes/Freelancing";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/education" element={<Education />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/experience" element={<Experiences />} />
      <Route path="/freelancing" element={<Freelancing />} />
    </Routes>
  );
}

export default App;