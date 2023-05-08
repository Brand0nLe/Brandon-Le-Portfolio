import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import '../footercomponent/Footer.css';
import { useForm, ValidationError } from '@formspree/react';

const Footer = () => {
  const [state, handleSubmit] = useForm('xyyaoolr');

  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }

  return (
    <footer>
      <Container>
        <Row>
          <Col md={6}>
            <p>© 2023 Cuong Tran Le (Brandon)</p>
          </Col>
          <Col md={6}>
          <div className="footer-social-icons">
              <a href="https://github.com/Brand0nLe" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
              <a href="https://www.linkedin.com/in/brandonctle/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
              <a href="mailto:brandonctle.dev@gmail.com"><FaEnvelope /></a>
            </div>
            <div className="cta">
              <h4>Contact Me</h4>
              <form className="footer-form" onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input type="text" name="name" id="name" required />

                <label htmlFor="email">Email:</label>
                <input type="email" name="_replyto" id="email" required />

                <label htmlFor="message">Message:</label>
                <textarea name="message" id="message" rows={5} required></textarea>
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />

                <button type="submit" disabled={state.submitting}>Send</button>
              </form>
              <p>Feel free to contact me for any questions, job inquiries, or just to say hi!</p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
