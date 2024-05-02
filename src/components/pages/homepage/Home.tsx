import { Container, Row, Col } from 'react-bootstrap';
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
                <motion.h2 animate={{ y: 20, opacity: 1 }} initial={{ y: 0, opacity: 0 }} className="name-style">Brandon Le</motion.h2>
              </Col>
              <p>
                Currently a Junior Web Developer with CodeStack.
              </p>
              <p>
                Graduated from CodeStack Academy in 2023. During my time at CodeStack Academy, I have gained valuable knowledge and hands-on experience in various technologies and programming languages such as JavaScript, React, CSS, and HTML, and I'm always eager to expand my skill set and stay up-to-date with the latest industry trends.
              </p>
              <p>
                Prior to my journey in coding, I worked as a pharmacy technician for over 7 years. While I enjoyed my time in the pharmaceutical industry, I decided to make a career transition when I encountered a great opportunity to pursue my passion for programming.
              </p>
              <p>
                My current goal is to continue developing my skills and spend time programming my current passion project, Pill Pal. If you're interested please visit my projects to learn more about it, or feel free to reach out to me through the contact information provided below. I look forward to connecting with you and thanks for visiting my portfolio!
              </p>
            </Row>


            <Row>
              <Col md={12}>

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