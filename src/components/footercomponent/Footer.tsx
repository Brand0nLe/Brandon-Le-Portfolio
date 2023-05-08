import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import '../footercomponent/Footer.css';

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col md={6}>
            <p>© Cuong Tran Le (Brandon) 2023</p>
          </Col>
          <Col md={6}>
            <div className="social-icons">
              <a href="https://github.com/Brand0nLe" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
              <a href="https://www.linkedin.com/in/brandonctle/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
              <a href="mailto:brandonctle.dev@gmail.com"><FaEnvelope /></a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
