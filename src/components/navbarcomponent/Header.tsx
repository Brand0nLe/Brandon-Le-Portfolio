import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { motion } from 'framer-motion';
import '../navbarcomponent/Header.css';

const Header = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <Navbar expand="lg" className="navbar-custom">
      <Link to="/" className="navbar-brand">My Portfolio</Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleToggle}>
        <motion.span
          animate={isExpanded ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
        ></motion.span>
        <motion.span
          animate={isExpanded ? { opacity: 0 } : { opacity: 1 }}
        ></motion.span>
        <motion.span
          animate={isExpanded ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
        ></motion.span>
      </Navbar.Toggle>
      <Navbar.Collapse id="basic-navbar-nav" className="navbar-links">
        <Nav className="ml-auto">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/skills" className="nav-link">Skills</Link>
          <Link to="/projects" className="nav-link">Projects</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
