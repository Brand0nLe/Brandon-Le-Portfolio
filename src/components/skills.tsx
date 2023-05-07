import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../styles/global.css';

const Skills = () => {
  return (
    <div id="skills">
      <Container>
        <h2>Skills</h2>
        <Row>
          <Col md={4}>
            <h3>Front-End</h3>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React</li>
            </ul>
          </Col>
          <Col md={4}>
            <h3>Back-End</h3>
            <ul>
              <li>Node.js</li>
              <li>Express</li>
              <li>MongoDB</li>
              <li>SQL</li>
            </ul>
          </Col>
          <Col md={4}>
            <h3>Other</h3>
            <ul>
              <li>TypeScript</li>
              <li>Git</li>
              <li>Bootstrap</li>
              <li>Material UI</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Skills;
