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
                <h1 className="name-style mb-0">Brandon Le</h1>
              </Col>
              <p>
              Hello! My name is Brandon and I'm a student at CodeStack Academy. I'm currently working towards graduating in September 2023. I have always been passionate about technology and coding, and I'm thrilled to be pursuing a career in the field.
            </p>
            <p>
              Prior to my journey in coding, I worked as a pharmacy technician for over 7 years. While I enjoyed my time in the pharmaceutical industry, I decided to make a career transition when I encountered a great opportunity to pursue my passion for programming.
            </p>
            <p>
              During my time at CodeStack Academy, I have gained valuable knowledge and hands-on experience in various technologies and programming languages such as JavaScript, React, CSS, and HTML, and I'm always eager to expand my skill set and stay up-to-date with the latest industry trends.
            </p>
            <p>
              Aside from coding, I love cooking and exploring new recipes, especially when it comes to Vietnamese cuisine. It's a wonderful way for me to relax and recharge after spending hours immersed in coding projects.
            </p>
            <p>
              My current goal is to continue developing my front-end skills and spend time programming passion projects in my free time.
            </p>
            <p>
              Thank you for visiting my portfolio! If you have any questions, job inquiries, or simply want to say hello, please feel free to reach out to me through the contact information provided below. I look forward to connecting with you!
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