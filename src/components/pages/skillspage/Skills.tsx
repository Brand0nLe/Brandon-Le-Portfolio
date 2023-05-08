import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { Variants } from 'framer-motion';
import '../skillspage/Skills.css';

const Skills = () => {
  const skillTableVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };


  const skillListVariants: Variants = {
    hover: {
      scale: 1.2,
      transition: {
        duration: 0.5,
        repeat: Infinity,
        repeatType: "reverse"
      }
    }
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
                  <td>
                    <motion.span variants={skillListVariants} whileHover="hover">
                      HTML
                    </motion.span>
                  </td>
                  <td>
                    <motion.span variants={skillListVariants} whileHover="hover">
                      Node.js
                    </motion.span>
                  </td>
                  <td>
                    <motion.span variants={skillListVariants} whileHover="hover">
                      TypeScript
                    </motion.span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <motion.span variants={skillListVariants} whileHover="hover">
                      CSS
                    </motion.span>
                  </td>
                  <td>
                    <motion.span variants={skillListVariants} whileHover="hover">
                      placeholder skill
                    </motion.span>
                  </td>
                  <td>
                    <motion.span variants={skillListVariants} whileHover="hover">
                      Git
                    </motion.span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <motion.span variants={skillListVariants} whileHover="hover">
                      JavaScript
                    </motion.span>
                  </td>
                  <td>
                    <motion.span variants={skillListVariants} whileHover="hover">
                    placeholder skill 2
                    </motion.span>
                  </td>
                  <td>
                    <motion.span variants={skillListVariants} whileHover="hover">
                      Bootstrap
                    </motion.span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <motion.span variants={skillListVariants} whileHover="hover">
                      React
                    </motion.span>
                  </td>
                  <td>
                    <motion.span variants={skillListVariants} whileHover="hover">
                      SQL
                    </motion.span>
                  </td>
                  <td>
                    <motion.span variants={skillListVariants} whileHover="hover">
                      Material UI
                    </motion.span>
                  </td>
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
