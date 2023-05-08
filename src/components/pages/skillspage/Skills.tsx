import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import '../skillspage/Skills.css';

const Skills = () => {
  const skillTableVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div id="skills">
      <Container>
        <motion.h2 animate={{ y: 20, opacity: 1 }} initial={{ y: 0, opacity: 0 }}>Skills</motion.h2>
        <Row>
          <Col md={12}>
            <motion.table variants={skillTableVariants} animate="visible" initial="hidden">
              <thead>
                <tr>
                  <th>Front-End</th>
                  <th>Back-End</th>
                  <th>Other</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>HTML</td>
                  <td>Node.js</td>
                  <td>TypeScript</td>
                </tr>
                <tr>
                  <td>CSS</td>
                  <td>Express</td>
                  <td>Git</td>
                </tr>
                <tr>
                  <td>JavaScript</td>
                  <td>MongoDB</td>
                  <td>Bootstrap</td>
                </tr>
                <tr>
                  <td>React</td>
                  <td>SQL</td>
                  <td>Material UI</td>
                </tr>
              </tbody>
            </motion.table>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Skills;
