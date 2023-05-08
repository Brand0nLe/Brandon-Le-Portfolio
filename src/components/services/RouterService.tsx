import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/homepage/Home';
import Skills from '../pages/skillspage/Skills';
import Projects from '../pages/projectspage/Projects';
import Contact from '../pages/contactpage/Contact';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default AppRoutes;