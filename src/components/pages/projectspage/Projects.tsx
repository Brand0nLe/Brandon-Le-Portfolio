import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import '../projectspage/Projects.css';
import project1 from '../../assets/images/pillpalapp.png';
import project2 from '../../assets/images/pokemoncatcher.png';
import project3 from '../../assets/images/advicegenerator.png';
import project4 from '../../assets/images/githubexplorer.png';

const projectVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1 } },
};

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const storedVisible = sessionStorage.getItem('projectsVisible');
    setIsVisible(storedVisible === 'true');
  }, []);

  useEffect(() => {
    sessionStorage.setItem('projectsVisible', isVisible.toString());
  }, [isVisible]);

  return (
    <div id="projects">
      <Container>
        <motion.h2 className='projects-style' animate={{ y: 20, opacity: 1 }} initial={{ y: 0, opacity: 0 }}>Projects</motion.h2>
        <Row>
          <Col lg={4}>
            <motion.div
              className="card-wrapper"
              variants={projectVariants}
              initial="hidden"
              animate={isVisible ? 'visible' : ''}
              transition={{ delay: 0.6 }}
            >
              <Card>
                <a href="https://pillpalapp.azurewebsites.net" target="_blank" rel="noopener noreferrer">
                  <Card.Img variant="top" src={project1} />
                </a>
                <Card.Body>
                  <Card.Title>Pill Pal: In Development</Card.Title>
                  <Card.Text>
                    This is a full stack app built using React.js, Typescript, Bootstrap, and Material UI. The purpose of the app is to provide users with a place to store medical information. Medication history, insurance information, allergies, doctor's contacts, pharmacy contacts, etc. I'm collaborating with 2 classmates, but this project is not yet complete.
                  </Card.Text>
                  <Button variant="primary" href="#">
                    Learn More
                  </Button>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
          <Col lg={4}>
            <motion.div
              className="card-wrapper"
              variants={projectVariants}
              initial="hidden"
              animate={isVisible ? 'visible' : ''}
              transition={{ delay: 0.3 }}
            >
              <Card>
                <a href="https://whoisthatpokemon.azurewebsites.net" target="_blank" rel="noopener noreferrer">
                  <Card.Img variant="top" src={project2} />
                </a>
                <Card.Body>
                  <Card.Title>Pokemon Catcher</Card.Title>
                  <Card.Text>
                    Originally a project built in Javascript, and I recreated it using React.js, Typescript, and Bootstrap. It uses data that's been fetched from https://pokeapi.co to allow the user to search for a Pokemon and display their name, type, abilities, and moves. There's also an option to choose a random Pokemon and for the Pokemon to be "caught" and added to a list of favorites.
                  </Card.Text>
                  <Button href="https://whoisthatpokemon.azurewebsites.net/">
                    Catch Some Pokemon!
                  </Button>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>


          <Col lg={4}>
            <motion.div
              className="card-wrapper"
              variants={projectVariants}
              initial="hidden"
              animate={isVisible ? 'visible' : ''}
            >
              <Card>
                <a href="https://githubexplorer.azurewebsites.net/" target="_blank" rel="noopener noreferrer">
                  <Card.Img variant="top" src={project4} /></a>
                <Card.Body>
                  <Card.Title>GitHub Repository Explorer</Card.Title>
                  <Card.Text>
                    A simple Github Repository searching application built with React, Bootstrap, and TypeScript. It allows users to search for repositories based on a specific GitHub user's profile. The application utilizes the GitHub REST API to fetch repository data and display details such as repository name, description, stars, and forks. It also displays the users info if it was provided.                 </Card.Text>
                  <Button href="https://githubexplorer.azurewebsites.net/">
                    Explore GitHub                  </Button>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
        </Row>



        <Row>

          <Col lg={4}>
            <motion.div
              className="card-wrapper"
              variants={projectVariants}
              initial="hidden"
              animate={isVisible ? 'visible' : ''}
            >
              <Card>
                <a href="https://advicegenbrandon.azurewebsites.net" target="_blank" rel="noopener noreferrer">
                  <Card.Img variant="top" src={project3} /></a>
                <Card.Body>
                  <Card.Title>Advice Generator API</Card.Title>
                  <Card.Text>
                    Developed an advice generator web application using React and Bootstrap. The project involved calling an API and recreating a
                    product design that was provided to us. The goal was to test our ability to accurately recreate the design and incorporate API data
                    into the application.
                  </Card.Text>
                  <Button href="https://advicegenbrandon.azurewebsites.net">
                    Get Advice
                  </Button>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>




          {/* <Col md={4}>
            <motion.div
              className="card-wrapper"
              variants={projectVariants}
              initial="hidden"
              animate={isVisible ? 'visible' : ''}
              transition={{ delay: 1.2 }}
            >
              <Card>
                <Card.Img variant="top" src={project4} />
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
          </Col> */}
        </Row>





      </Container>
    </div>
  );
};

export default Projects;