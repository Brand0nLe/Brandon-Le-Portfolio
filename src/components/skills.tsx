import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import '../styles/global.css';

const Skills = () => {
    const skillListVariants = {
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0 }
    };
  
    return (
      <div id="skills">
        <Container>
          <motion.h2 animate={{ y: 20, opacity: 1 }} initial={{ y: 0, opacity: 0 }}>Skills</motion.h2>
          <Row>
            <Col md={4}>
              <motion.h3 variants={skillListVariants} animate="visible" initial="hidden">Front-End</motion.h3>
              <motion.ul variants={skillListVariants} animate="visible" initial="hidden">
                <motion.li variants={skillListVariants} animate="visible" initial="hidden">HTML</motion.li>
                <motion.li variants={skillListVariants} animate="visible" initial="hidden">CSS</motion.li>
                <motion.li variants={skillListVariants} animate="visible" initial="hidden">JavaScript</motion.li>
                <motion.li variants={skillListVariants} animate="visible" initial="hidden">React</motion.li>
              </motion.ul>
            </Col>
            <Col md={4}>
              <motion.h3 variants={skillListVariants} animate="visible" initial="hidden">Back-End</motion.h3>
              <motion.ul variants={skillListVariants} animate="visible" initial="hidden">
                <motion.li variants={skillListVariants} animate="visible" initial="hidden">Node.js</motion.li>
                <motion.li variants={skillListVariants} animate="visible" initial="hidden">Express</motion.li>
                <motion.li variants={skillListVariants} animate="visible" initial="hidden">MongoDB</motion.li>
                <motion.li variants={skillListVariants} animate="visible" initial="hidden">SQL</motion.li>
              </motion.ul>
            </Col>
            <Col md={4}>
              <motion.h3 variants={skillListVariants} animate="visible" initial="hidden">Other</motion.h3>
              <motion.ul variants={skillListVariants} animate="visible" initial="hidden">
                <motion.li variants={skillListVariants} animate="visible" initial="hidden">TypeScript</motion.li>
                <motion.li variants={skillListVariants} animate="visible" initial="hidden">Git</motion.li>
                <motion.li variants={skillListVariants} animate="visible" initial="hidden">Bootstrap</motion.li>
                <motion.li variants={skillListVariants} animate="visible" initial="hidden">Material UI</motion.li>
              </motion.ul>
            </Col>
          </Row>
        </Container>
      </div>
    );
  };
  
  export default Skills;