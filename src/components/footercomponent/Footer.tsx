import { Container, Row, Col } from 'react-bootstrap';
import { FaGithub, FaLinkedin, FaEnvelope, FaFilePdf } from 'react-icons/fa';
import { motion } from 'framer-motion';
import '../footercomponent/Footer.css';
import { ValidationError, useForm } from '@formspree/react';
import ResumeModal from '../resumemodalcomponent/Resume';
import { useState, FormEvent } from 'react';

const Footer = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const [state, handleSubmit] = useForm('xyyaoolr');

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { data, error } = await handleSubmit(e);

    if (error) {
      console.error(error);
    } else {
      alert("Thank you for reaching out to me! I'll get back to you as soon as I can!");
    }
  };

  const iconVariants = {
    hover: {
      scale: 2,
      transition: { duration: 0.3 },
    },
    tap: {
      scale: 0.8,
      transition: { duration: 0.3 },
    },
  };

  return (
    <footer>
      <Container>
        <div className='footer-top-space'></div>
        <Row>
          <Col md={4}>
            <h4 className='blackFont'>Contact Me</h4>
            <p className='blackFont'>209-244-2325</p>
            <div className="footer-social-icons">
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
              <motion.a
                href="#"
                onClick={handleOpenModal}
                variants={iconVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <FaFilePdf />
              </motion.a>
            </div>
            <p className='blackFont'>© 2023 [Brandon] Cuong Tran Le</p>
            <p className='blackFont'>CodeStack Academy Day Class '23</p>
            <p className='blackFont'>Profile picture credit: Redhatfter</p>

          </Col>
          <Col md={8}>
            <p className='blackFont'>Feel free to contact me for any questions, job inquiries, or just to say hi!</p>
            <div className="cta">
              <form className="footer-form" onSubmit={handleFormSubmit}>
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Name:</label>
                  <input type="text" name="name" id="name" required />
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">Email:</label>
                  <input type="email" name="_replyto" id="email" required />
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">Message:</label>
                  <textarea name="message" id="message" rows={5} required></textarea>
                </div>

                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />
                <button type="submit" disabled={state.submitting}>
                  Send
                </button>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
      {modalOpen && <ResumeModal closeModal={handleCloseModal} />}
    </footer>
  );
};

export default Footer;

