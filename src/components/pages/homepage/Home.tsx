import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';
import '../homepage/Home.css';
import profilePicture from '../../assets/images/profilepicture.jpg';

const Home = () => {
  const profilePictureVariants = {
    initial: {
      border: "5px solid transparent",
      borderRadius: "50%",
      transition: { duration: 0.5 }
    },
    hover: {
      border: "5px solid #ffffff",
      borderRadius: "2%",
      transition: { duration: 0.5 }
    }
  };

  const socialIconsVariants = {
    initial: {
      scale: 0.8,
      opacity: 0,
      y: -50
    },
    animate: {
      scale: 1,
      opacity: 1,
      y: 0,
      transition: { delay: 1, duration: 1 }
    }
  };

  const iconVariants = {
    hover: {
      scale: 1.2,
      transition: { duration: 0.3 }
    },
    tap: {
      scale: 0.8,
      transition: { duration: 0.3 }
    }
  };

  return (
    <div id="home">
      <Container>
        <Row>
          <Col md={4}>
            <motion.img 
              src={profilePicture} 
              alt="Profile" 
              className="img-fluid"
              variants={profilePictureVariants}
              initial="initial"
              whileHover="hover"
            />
          </Col>
          <Col md={8}>
            <h2>About Me</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut turpis eget nunc efficitur blandit. Duis quis faucibus nulla. Sed id molestie justo. Proin non enim risus. Morbi non leo id justo pharetra congue vel ac orci.</p>
            <p>Ut nec nunc vitae ipsum tristique eleifend. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed ut ante nulla. Aenean viverra nisl ac dui porttitor commodo. Nam nec risus vel velit pretium commodo quis in lorem. Etiam a est sit amet nulla tincidunt bibendum.</p>
            <motion.div className="social-icons" variants={socialIconsVariants} initial="initial" animate="animate">
              <motion.a 
                href="https://github.com/Brand0nLe" 
                target="_blank" 
                rel="noopener noreferrer"
                variants={iconVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <FaGithub />
              </motion.a>
              <motion.a 
                href="https://www.linkedin.com/in/brandonctle/" 
                target="_blank" 
                rel="noopener noreferrer"
                variants={iconVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <FaLinkedin />
              </motion.a>
              <motion.a 
                href="mailto:brandonctle.dev@gmail.com"
                variants={iconVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <FaEnvelope />
              </motion.a>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
