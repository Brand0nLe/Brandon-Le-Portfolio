import { Route, Routes } from 'react-router-dom';
import Home from '../pages/homepage/Home';
import Skills from '../pages/skillspage/Skills';
import Projects from '../pages/projectspage/Projects';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/projects" element={<Projects />} />
    </Routes>
  );
};

export default AppRoutes;