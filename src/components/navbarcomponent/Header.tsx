import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../assets/images/BLLOGO.png';
import '../navbarcomponent/Header.css';

const Header = () => {
  return (
    <Navbar bg="light" expand="lg">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="My Portfolio Logo" className="navbar-brand" />
        </Link>
      </div>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/skills" className="nav-link">Skills</Link>
          <Link to="/projects" className="nav-link">Projects</Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;

