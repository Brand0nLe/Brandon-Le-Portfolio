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
        <div className='footer-top-space'></div>
        <Row>
          <Col md={4}>
          <h4>Contact Me</h4>
          <div className="footer-social-icons">
              <a href="https://github.com/Brand0nLe" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
              <a href="https://www.linkedin.com/in/brandonctle/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
              <a href="mailto:brandonctle.dev@gmail.com"><FaEnvelope /></a>
            </div>
            <p>CodeStack Academy Day Class '23</p>
            <p>© 2023 Cuong Tran Le [Brandon]</p>
          </Col>
          <Col md={8}>
          <p>Feel free to contact me for any questions, job inquiries, or just to say hi!</p>
            <div className="cta">
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
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
