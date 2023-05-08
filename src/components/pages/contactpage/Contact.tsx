import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../contactpage/Contact.css';

const Contact = () => {
  return (
    <div id="contact">
      <Container>
        <Row>
          <Col md={12}>
            <h2>Contact Me</h2>
            <form
              action="https://formspree.io/f/xyyaoolr"
              method="POST"
            >
              <label htmlFor="name">Name:</label>
              <input type="text" name="name" id="name" />

              <label htmlFor="email">Email:</label>
              <input type="email" name="_replyto" id="email" />

              <label htmlFor="message">Message:</label>
              <textarea name="message" id="message" rows={5}></textarea>

              <button type="submit">Send</button>
            </form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
