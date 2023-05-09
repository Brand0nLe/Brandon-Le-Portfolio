import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { Variants } from 'framer-motion';
import { IoIosFastforward, IoLogoAngular } from 'react-icons/io';
import { FaDatabase, FaHeart } from 'react-icons/fa';
import { MdExtension } from 'react-icons/md';
import {
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiNotion,
  SiFigma,
  SiJira,
  SiGithub,
  SiReact,
  SiMicrosoftazure,
  SiTypescript,
  SiTailwindcss,
  SiReactrouter,
  SiPostman
} from 'react-icons/si';
import './Skills.css';

const Skills = () => {
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
            <motion.table className="skill-table">
              <tbody>
                <tr>
                  <td>
                    <motion.span variants={skillListVariants} whileHover="hover">
                      <SiJavascript />
                      JavaScript
                    </motion.span>
                  </td>
                  <td>
                    <motion.span variants={skillListVariants} whileHover="hover">
                      <SiCss3 />
                      CSS
                    </motion.span>
                  </td>
                  <td>
                    <motion.span variants={skillListVariants} whileHover="hover">
                      <SiHtml5 /> HTML
                    </motion.span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <motion.span variants={skillListVariants} whileHover="hover">
                      <SiBootstrap />
                      Bootstrap
                    </motion.span>
                  </td>
                  <td>
                    <motion.span variants={skillListVariants} whileHover="hover">
                      C#
                    </motion.span>
                  </td>
                  <td>
                    <motion.span variants={skillListVariants} whileHover="hover">
                      <SiReact />
                      React.js
                    </motion.span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <motion.span variants={skillListVariants} whileHover="hover">
                      <SiNotion />
                      Notion
                    </motion.span>
                  </td>
                  <td>
                    <motion.span variants={skillListVariants} whileHover="hover">
                      <SiFigma />
                      Figma
                    </motion.span>
                  </td>
                  <td>
                    <motion.span variants={skillListVariants} whileHover="hover">
                      <SiJira />
                      Jira
                    </motion.span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <motion.span variants={skillListVariants} whileHover="hover">
                      <SiGithub />
                      GitHub
                    </motion.span>
                  </td>
                  <td>
                    <motion.span variants={skillListVariants} whileHover="hover">
                      <MdExtension />
                      Material UI
                    </motion.span>
                  </td>
                  <td>
                    <motion.span variants={skillListVariants} whileHover="hover">
                      <IoIosFastforward />
                      Framer-Motion
                    </motion.span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <motion.span variants={skillListVariants} whileHover="hover">
                      <SiReactrouter />
                      React Router
                    </motion.span>
                  </td>
                  <td>
                    <motion.span variants={skillListVariants} whileHover="hover">
                      <SiReact />
                      React Native
                    </motion.span>
                  </td>
                  <td>
                    <motion.span variants={skillListVariants} whileHover="hover">
                      <FaDatabase />
                      Azure SQL databases
                    </motion.span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <motion.span variants={skillListVariants} whileHover="hover">
                      <SiMicrosoftazure />
                      Microsoft Azure
                    </motion.span>
                  </td>
                  <td>
                    <motion.span variants={skillListVariants} whileHover="hover">
                      <SiTailwindcss />
                      Tailwind
                    </motion.span>
                  </td>
                  <td>
                    <motion.span variants={skillListVariants} whileHover="hover">
                      <SiTypescript />
                      TypeScript
                    </motion.span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <motion.span variants={skillListVariants} whileHover="hover">
                      <IoLogoAngular />
                      Angular
                    </motion.span>
                  </td>
                  <td>
                    <motion.span variants={skillListVariants} whileHover="hover">
                      <SiPostman />
                      Postman
                    </motion.span>
                  </td>
                  <td>
                    <motion.span variants={skillListVariants} whileHover="hover">
                      <SiTypescript />
                      TypeScript
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

