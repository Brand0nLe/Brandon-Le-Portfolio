import { Container, Row, Col } from 'react-bootstrap';
import { FaGithub, FaLinkedin, FaEnvelope, FaFilePdf } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useState } from 'react';
import ProfilePicture from '../../assets/images/profilepicture.jpg';
import ResumeModal from '../../resumemodalcomponent/Resume';
import '../homepage/Home.css';

const Home = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const ProfilePictureVariants = {
    initial: {
      border: "5px solid transparent",
      borderRadius: "50%",
      transition: { duration: 0.5 }
    },
    hover: {
      border: "5px solid tansparent",
      borderRadius: "2%",
      transition: { duration: 0.5 }
    }
  };

  const socialIconsVariants = {
    initial: {
      scale: 1,
      opacity: 0,
      y: 0
    },
    animate: {
      scale: 2,
      opacity: 1,
      y: 0,
      transition: { delay: 1, duration: 2 }
    }
  };

  const iconVariants = {
    hover: {
      scale: 2,
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
              src={ProfilePicture}
              alt="Profile"
              className="img-fluid"
              variants={ProfilePictureVariants}
              initial="initial"
              whileHover="hover"
              onClick={handleOpenModal}
            />
          </Col>
          <Col md={6}>
            <Row className="align-items-center">
              <Col md={8}>
                <h1 className="name-style mb-0">Brandon Le</h1>
              </Col>
              <Col md={4}>
                <motion.div className="social-icons ml-auto" variants={socialIconsVariants} initial="initial" animate="animate">
                  {/* <motion.a
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
                  </motion.a> */}
                  <motion.a
                    href="#"
                    className=""
                    onClick={handleOpenModal}
                    variants={iconVariants}
                    whileHover="hover"
                    whileTap="tap"
                  >
                    <FaFilePdf />
                  </motion.a>
                </motion.div> 
              </Col>
            </Row>


            <Row>
              <Col md={12}>
              <p>
Hello there, as you might have noticed, my name is Brandon and I am a student at CodeStack Academy with a planned graduation date of September 2023. I am a Vietnamese-American from Stockton, CA.
</p>
<p>
I have experience in [insert industry or company] and have held roles such as [insert role or job title]. Some notable accomplishments in my career include [insert specific accomplishments].
</p>
<p>
Outside of my professional life, I am known for my [insert personal qualities]. I enjoy practicing cooking and learning new recipes, particularly Vietnamese dishes. It's a fun and relaxing break from coding all day.
</p>
<p>
My current goals are to further develop my front-end skills, focusing on React, Javascript, CSS, and HTML while continuing to develop my Medication Adherence application. In the next year, I hope to have a fully functioning application available as a mobile app and desktop website.
</p>
<p>
Thank you for visiting my portfolio, and please feel free to reach out to me at [insert email] or through my [insert social media link(s)].
</p> 
              </Col>
            </Row>

          </Col>
        </Row>
      </Container>
      {modalOpen && <ResumeModal closeModal={handleCloseModal} />}
    </div>
  );
};

export default Home;