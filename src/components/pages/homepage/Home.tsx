// import { Container, Row, Col } from 'react-bootstrap';
// import { FaGithub, FaLinkedin, FaEnvelope, FaFilePdf } from 'react-icons/fa';
// import { motion } from 'framer-motion';
// import { useState } from 'react';
// import profilePicture from '../../assets/images/profilepicture.jpg';
// import ResumeModal from '../../resumemodalcomponent/Resume';
// import '../homepage/Home.css';

// const Home = () => {
//   const [modalOpen, setModalOpen] = useState(false);

//   const handleOpenModal = () => {
//     setModalOpen(true);
//   };

//   const handleCloseModal = () => {
//     setModalOpen(false);
//   };

//   const profilePictureVariants = {
//     initial: {
//       border: "5px solid transparent",
//       borderRadius: "50%",
//       transition: { duration: 0.5 }
//     },
//     hover: {
//       border: "5px solid #ffffff",
//       borderRadius: "2%",
//       transition: { duration: 0.5 }
//     }
//   };

//   const socialIconsVariants = {
//     initial: {
//       scale: 1,
//       opacity: 0,
//       y: 0
//     },
//     animate: {
//       scale: 2,
//       opacity: 1,
//       y: 0,
//       transition: { delay: 1, duration: 2 }
//     }
//   };

//   const iconVariants = {
//     hover: {
//       scale: 2,
//       transition: { duration: 0.3 }
//     },
//     tap: {
//       scale: 0.8,
//       transition: { duration: 0.3 }
//     }
//   };

//   return (
//     <div id="home">
//       <Container>
//         <Row>
//           <Col md={4}>
//             <motion.img
//               src={profilePicture}
//               alt="Profile"
//               className="img-fluid"
//               variants={profilePictureVariants}
//               initial="initial"
//               whileHover="hover"
//               onClick={handleOpenModal}
//             />
//           </Col>
//           <Col md={6}>
//             <Row className="align-items-center">
//               <Col md={8}>
//                 <h1 className="name-style mb-0">Brandon Le</h1>
//               </Col>
//               <Col md={4}>
//                 <motion.div className="social-icons ml-auto" variants={socialIconsVariants} initial="initial" animate="animate">
//                   <motion.a
//                     href="https://github.com/Brand0nLe"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     variants={iconVariants}
//                     whileHover="hover"
//                     whileTap="tap"
//                   >
//                     <FaGithub />
//                   </motion.a>
//                   <motion.a
//                     href="https://www.linkedin.com/in/brandonctle/"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     variants={iconVariants}
//                     whileHover="hover"
//                     whileTap="tap"
//                   >
//                     <FaLinkedin />
//                   </motion.a>
//                   <motion.a
//                     href="mailto:brandonctle.dev@gmail.com"
//                     variants={iconVariants}
//                     whileHover="hover"
//                     whileTap="tap"
//                   >
//                     <FaEnvelope />
//                   </motion.a>
//                   <motion.a
//                     href="#"
//                     onClick={handleOpenModal}
//                     variants={iconVariants}
//                     whileHover="hover"
//                     whileTap="tap"
//                   >
//                     <FaFilePdf />
//                   </motion.a>
//                 </motion.div>
//               </Col>
//             </Row>


//             <Row>
//               <Col md={12}>
//                 <p>
//                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam veritatis voluptate adipisci ex nesciunt maiores aut inventore error consequatur sapiente cupiditate non labore nam mollitia quos omnis doloremque sint dolores, placeat fuga. Doloremque ex delectus aliquam impedit assumenda quasi deleniti tenetur nihil odit exercitationem ipsum odio, esse aspernatur quibusdam officia, saepe beatae libero, magnam nulla quaerat cumque aperiam neque culpa. Libero enim, atque reprehenderit excepturi eaque itaque, quo ipsa odio assumenda voluptate laudantium magnam incidunt architecto omnis mollitia soluta dignissimos rem corrupti? Dicta rerum vitae nam iure perferendis deleniti voluptas veritatis quis numquam voluptatibus officiis cumque, commodi dolores animi quisquam dolor soluta sint molestias! A, dolorum, voluptatibus omnis magni quidem itaque harum iste unde officiis, fugit eveniet! Rerum magni a ipsam mollitia sit. Porro esse ab commodi ut architecto dolor asperiores soluta fugiat sapiente nostrum rem dolore qui tenetur cumque facere adipisci eos pariatur voluptates, doloribus quasi, neque eaque modi. Excepturi atque placeat ratione expedita aliquid quis veniam ipsa consequatur eum error, dolor dicta perspiciatis officia fugiat quas illum autem, eligendi vero laborum a numquam nobis nihil aperiam! Beatae provident inventore, reiciendis veritatis, libero, quis omnis sed quos modi sapiente doloremque nulla quidem dolorum fuga ex culpa! Repudiandae, consequuntur fugit.
//                 </p>
//               </Col>
//             </Row>

//           </Col>
//         </Row>
//       </Container>
//       {modalOpen && <ResumeModal closeModal={handleCloseModal} />}
//     </div>
//   );
// };

// export default Home;


import { Container, Row, Col } from 'react-bootstrap';
import { FaFilePdf } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useState } from 'react';
import profilePicture from '../../assets/images/profilepicture.jpg';
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

  const profilePictureVariants = {
    initial: {
      border: "5px solid transparent",
      borderRadius: "50%",
      transition: { duration: 0.5 }
    },
    hover: {
      border: "5px solid #ffffff",
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
              src={profilePicture}
              alt="Profile"
              className="img-fluid"
              variants={profilePictureVariants}
              initial="initial"
              whileHover="hover"
              onClick={handleOpenModal}
            />
          </Col>
          <Col md={6}>
            <Row className="align-items-center pl-5">
              <Col md={8}>
                <h1 className="name-style mb-0">Brandon Le</h1>
              </Col>
              {/* <Col md={4}>
                <motion.div className="social-icons" variants={socialIconsVariants} initial="initial" animate="animate">
                  <motion.a
                    href="https://github.com/Brand0nLe"
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={iconVariants}
                    whileHover="hover"
                    whileTap="tap"
                  >
                    <FaFilePdf />
                  </motion.a>
                </motion.div>
              </Col> */}
            </Row>
          </Col>
        </Row>
      </Container>
      {modalOpen && <ResumeModal closeModal={handleCloseModal} />}
    </div>
  );
};

export default Home;


{/* 
Testing about me info:
<p>
My name is [Your Name], and I am a student at CodeStack Academy with a planned graduation date of September 2023. I am a Vietnamese-American from Stockton, CA.
</p>
<p>
I have experience in [insert industry or company] and have held roles such as [insert role or job title]. Some notable accomplishments in my career include [insert specific accomplishments].
</p>
<p>
Outside of my professional life, I am known for my [insert personal qualities]. I enjoy practicing cooking and learning new recipes, particularly Vietnamese dishes. It's a fun and relaxing break from coding all day.
</p>
<p>
My short-term goals within the next 3-6 months are to further develop my front-end skills, focusing on React, Javascript, CSS, and HTML while continuing to work on my Medication Adherence application. In the next year, I hope to have a fully functioning application available as a mobile app and desktop website.
</p>
<p>
Thank you for visiting my portfolio, and please feel free to reach out to me at [insert email] or through my [insert social media link(s)].
</p> */}