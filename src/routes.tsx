import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/home';
import Skills from './components/skills';
import Projects from './components/projects';
import Contact from './components/contact';

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