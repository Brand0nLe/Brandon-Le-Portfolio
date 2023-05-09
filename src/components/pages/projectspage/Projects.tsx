import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import '../projectspage/Projects.css';

const projectVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1 } },
};

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div id="projects">
      <Container>
        <h2>Projects</h2>
        <Row>
          <Col md={4}>
            <motion.div
              className="card-wrapper"
              variants={projectVariants}
              initial="hidden"
              animate={isVisible ? 'visible' : ''}
            >
              <Card>
                {/* <Card.Img variant="top" src={project1} /> */}
                <Card.Body>
                  <Card.Title>Project 1</Card.Title>
                  <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut turpis eget nunc efficitur blandit.
                    Duis quis faucibus nulla.
                  </Card.Text>
                  <Button variant="primary" href="#">
                    Learn More
                  </Button>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
          <Col md={4}>
            <motion.div
              className="card-wrapper"
              variants={projectVariants}
              initial="hidden"
              animate={isVisible ? 'visible' : ''}
              transition={{ delay: 0.3 }}
            >
              <Card>
                {/* <Card.Img variant="top" src={project2} /> */}
                <Card.Body>
                  <Card.Title>Project 2</Card.Title>
                  <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut turpis eget nunc efficitur blandit.
                    Duis quis faucibus nulla.
                  </Card.Text>
                  <Button variant="primary" href="#">
                    Learn More
                  </Button>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
          <Col md={4}>
            <motion.div
              className="card-wrapper"
              variants={projectVariants}
              initial="hidden"
              animate={isVisible ? 'visible' : ''}
              transition={{ delay: 0.6 }}
            >
              <Card>
                {/* <Card.Img variant="top" src={project3} /> */}
                <Card.Body>
                  <Card.Title>Project 3</Card.Title>
                  <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut turpis eget nunc efficitur blandit.
                    Duis quis faucibus nulla.
                  </Card.Text>
                  <Button variant="primary" href="#">
                    Learn More
                  </Button>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
        </Row>



        {/* <Row>
          <Col md={4}>
            <motion.div
              className="card-wrapper"
              variants={projectVariants}
              initial="hidden"
              animate={isVisible ? 'visible' : ''}
              transition={{ delay: 0.9 }}
            >
              <Card>
                <Card.Img variant="top" src={project4} />
                <Card.Body>
                  <Card.Title>Project 4</Card.Title>
                  <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam ut turpis eget nunc efficitur blandit. Duis quis faucibus nulla.
                  </Card.Text>
                  <Button variant="primary" href="#">
                    Learn More
                  </Button>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
          <Col md={4}>
            <motion.div
              className="card-wrapper"
              variants={projectVariants}
              initial="hidden"
              animate={isVisible ? 'visible' : ''}
              transition={{ delay: 1.2 }}
            >
              <Card>
                <Card.Img variant="top" src={project5} />
                <Card.Body>
                  <Card.Title>Project 5</Card.Title>
                  <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam ut turpis eget nunc efficitur blandit. Duis quis faucibus nulla.
                  </Card.Text>
                  <Button variant="primary" href="#">
                    Learn More
                  </Button>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
          <Col md={4}>
            <motion.div
              className="card-wrapper"
              variants={projectVariants}
              initial="hidden"
              animate={isVisible ? 'visible' : ''}
              transition={{ delay: 1.5 }}
            >
              <Card>
                <Card.Img variant="top" src={project6} />
                <Card.Body>
                  <Card.Title>Project 6</Card.Title>
                  <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam ut turpis eget nunc efficitur blandit. Duis quis faucibus nulla.
                  </Card.Text>
                  <Button variant="primary" href="#">
                    Learn More
                  </Button>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
        </Row> */}





      </Container>
    </div>
  );
};

export default Projects;