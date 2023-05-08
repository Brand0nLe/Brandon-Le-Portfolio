import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import '../styles/global.css';

const Home = () => {
  return (
    <div id="home">
      <Container>
        <Row>
          <Col md={4}>
            {/* <img src={profilePicture} alt="Profile" className="img-fluid" /> */}
          </Col>
          <Col md={8}>
            <h2>About Me</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut turpis eget nunc efficitur blandit. Duis quis faucibus nulla. Sed id molestie justo. Proin non enim risus. Morbi non leo id justo pharetra congue vel ac orci.</p>
            <p>Ut nec nunc vitae ipsum tristique eleifend. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed ut ante nulla. Aenean viverra nisl ac dui porttitor commodo. Nam nec risus vel velit pretium commodo quis in lorem. Etiam a est sit amet nulla tincidunt bibendum.</p>
            <div className="social-icons">
              <a href="https://github.com/Brand0nLe" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
              <a href="https://www.linkedin.com/in/brandonctle/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
              <a href="mailto:brandonctle.dev@gmail.com"><FaEnvelope /></a>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;