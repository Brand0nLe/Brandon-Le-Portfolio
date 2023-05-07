import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
// import project1 from '../assets/project1.jpg';
// import project2 from '../assets/project2.jpg';
// import project3 from '../assets/project3.jpg';

const Projects = () => {
  return (
    <div id="projects">
      <Container>
        <h2>Projects</h2>
        <Row>
        <Col md={4}>
            <Card>
              {/* <Card.Img variant="top" src={project1} /> */}
              <Card.Body>
                <Card.Title>Project 1</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut turpis eget nunc efficitur blandit. Duis quis faucibus nulla.
                </Card.Text>
                <Button variant="primary" href="#">Learn More</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              {/* <Card.Img variant="top" src={project2} /> */}
              <Card.Body>
                <Card.Title>Project 2</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut turpis eget nunc efficitur blandit. Duis quis faucibus nulla.
                </Card.Text>
                <Button variant="primary" href="#">Learn More</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              {/* <Card.Img variant="top" src={project3} /> */}
              <Card.Body>
                <Card.Title>Project 3</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut turpis eget nunc efficitur blandit. Duis quis faucibus nulla.
                </Card.Text>
                <Button variant="primary" href="#">Learn More</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Projects;
  
