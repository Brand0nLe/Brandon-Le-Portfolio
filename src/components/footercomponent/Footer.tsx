import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { useForm, ValidationError } from '@formspree/react';
import '../footercomponent/Footer.css';

const Footer = () => {
  const [state, handleSubmit] = useForm('xyyaoolr');

  return (
    <footer>
      <Container>
        <Row>
          <Col md={6}>
            <p>© Cuong Tran Le (Brandon) 2023</p>
          </Col>
          <Col md={6}>
            <div className="social-icons">
              <a href="https://github.com/Brand0nLe" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
              <a href="https://www.linkedin.com/in/brandonctle/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
              <a href="mailto:brandonctle.dev@gmail.com"><FaEnvelope /></a>
            </div>
            <form onSubmit={handleSubmit}>
              <label htmlFor="email">Email:</label>
              <input type="email" name="email" id="email" required />

              <label htmlFor="message">Message:</label>
              <textarea name="message" id="message" rows={5} required></textarea>
              <ValidationError 
                prefix="Email" 
                field="email"
                errors={state.errors}
              />
              <ValidationError 
                prefix="Message" 
                field="message"
                errors={state.errors}
              />

              <button type="submit" disabled={state.submitting}>Send</button>
            </form>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
