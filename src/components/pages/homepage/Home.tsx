import { Container, Row, Col } from 'react-bootstrap';
import { FaGithub, FaLinkedin, FaEnvelope, FaFilePdf } from 'react-icons/fa';
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

  const socialIconsVariants = {
    initial: {
      scale: 1,
      opacity: 0,
      y: 0
    },
    animate: {
      scale: 2,
      opacity: 1,
      y: 0,
      transition: { delay: 1, duration: 2 }
    }
  };

  const iconVariants = {
    hover: {
      scale: 2,
      transition: { duration: 0.3 }
    },
    tap: {
      scale: 0.8,
      transition: { duration: 0.3 }
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
              <Col md={4}>
                <motion.div className="social-icons ml-auto" variants={socialIconsVariants} initial="initial" animate="animate">
                  {/* <motion.a
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
                  </motion.a> */}
                  <motion.a
                    href="#"
                    className=""
                    onClick={handleOpenModal}
                    variants={iconVariants}
                    whileHover="hover"
                    whileTap="tap"
                  >
                    <FaFilePdf />
                  </motion.a>
                </motion.div> 
              </Col>
            </Row>


            <Row>
              <Col md={12}>
              <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem ad dolor possimus accusamus, esse, eligendi ullam modi odit facilis vero quam ipsa! Laudantium unde praesentium corrupti tempore. Doloribus earum nisi, assumenda aut itaque dolore delectus quia reiciendis. Illum eaque blanditiis magni autem sit quod quos suscipit fugiat ut. Repudiandae totam molestias porro iste neque quisquam, cupiditate fugiat voluptatibus debitis maxime est exercitationem, dolore, aliquam quod? Repudiandae itaque ratione cum incidunt facere minus quod delectus aut, quae quam libero expedita, facilis labore consequatur dolores magnam? Repellat, quos autem ea eum magni quia unde esse tempora minus neque nihil quo ducimus expedita natus corrupti vero quibusdam, cumque necessitatibus alias totam pariatur quidem sit sequi dolorum. Nulla impedit sed magni ad repellendus cupiditate eos nisi ex aperiam sit consequuntur deserunt enim repudiandae eveniet laborum quos, eum velit possimus. Provident maiores nihil laborum recusandae quo! Cupiditate minus ratione quo. Distinctio fugiat, corporis aperiam quasi praesentium vitae illo consequatur error hic nemo laboriosam dolor, necessitatibus aliquam! Similique repellat blanditiis quod vitae nemo quis enim tempora, officia architecto quasi veritatis nisi hic pariatur esse? Quisquam autem doloribus fuga nam libero corporis laudantium explicabo quod? Accusamus voluptate ipsum perspiciatis sapiente minima ab reprehenderit nam culpa asperiores, incidunt, tempore corrupti vero natus molestiae dolore? Nisi veniam voluptatibus odit consequuntur porro cumque quo non nihil, distinctio minima fugiat! Ducimus dolorem libero tempore aut ut vitae at, delectus doloremque quo eius eligendi ea neque tempora minus quas beatae quam repudiandae optio similique ad amet voluptate vero repellat. Modi maiores ipsum cum explicabo, enim tempore laborum culpa iusto officia rem ad quam, obcaecati a corrupti exercitationem dolores dolorum quasi repellendus itaque saepe perspiciatis vero iste necessitatibus? Aperiam et officia consequatur iure blanditiis dolore numquam harum atque, sapiente dolorum, minus commodi laborum assumenda saepe error facilis molestias sit beatae laboriosam ad rerum illo. Odit hic laudantium delectus rem dicta, cupiditate libero, voluptas impedit unde, nam nisi? Veniam, maxime dolores. Deserunt, amet assumenda enim facere repudiandae labore nobis possimus consectetur nihil nemo totam explicabo, fuga doloremque, quidem quos corporis architecto quibusdam accusamus ipsam sequi ad. Ab dolorem minus quaerat quia reprehenderit saepe optio voluptatibus numquam libero similique. Similique blanditiis delectus beatae vero illo, earum eius omnis fugiat reprehenderit praesentium saepe quae sequi officiis veniam eos placeat aut eligendi? Libero rerum quod obcaecati culpa maiores harum deleniti fugiat in eaque accusantium voluptatibus voluptate repellat excepturi enim nisi quasi quos ad deserunt, similique a iste?</p>
{/* Hello there, as you might have noticed, my name is Brandon and I am a student at CodeStack Academy with a planned graduation date of September 2023. I am a Vietnamese-American from Stockton, CA.
</p>
<p>
I have experience in [insert industry or company] and have held roles such as [insert role or job title]. Some notable accomplishments in my career include [insert specific accomplishments].
</p>
<p>
Outside of my professional life, I am known for my [insert personal qualities]. I enjoy practicing cooking and learning new recipes, particularly Vietnamese dishes. It's a fun and relaxing break from coding all day.
</p>
<p>
My current goals are to further develop my front-end skills, focusing on React, Javascript, CSS, and HTML while continuing to develop my Medication Adherence application. In the next year, I hope to have a fully functioning application available as a mobile app and desktop website.
</p>
<p>
Thank you for visiting my portfolio, and please feel free to reach out to me at [insert email] or through my [insert social media link(s)].
</p>  */}
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