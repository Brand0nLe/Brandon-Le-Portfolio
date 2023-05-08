import React from 'react';
import { Modal, Button } from '@material-ui/core';
import { AiOutlineClose } from 'react-icons/ai';
import { motion } from 'framer-motion';
import getResumePdf from '../services/PdfService';
import resumePdf from '../assets/images/brandonresume.pdf';
import '../resumemodalcomponent/Resume.css';
type ResumeModalProps = {
  closeModal: () => void;
};

const ResumeModal: React.FC<ResumeModalProps> = ({ closeModal }) => {
  const [pdfUrl, setPdfUrl] = React.useState('');

  React.useEffect(() => {
    getResumePdf().then(url => {
      setPdfUrl(url);
    });
  }, []);

  const handleDownload = () => {
    fetch(resumePdf)
      .then((response) => response.blob())
      .then((blob) => {
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'brandonresume.pdf';
        link.click();
        URL.revokeObjectURL(link.href);
      });
  };

  const handleCloseModal = () => {
    closeModal();
  };

  const closeButtonVariants = {
    hover: {
      scale: 50,
      transition: { duration: 0.2 },
    },
    tap: {
      scale: 0.9,
      transition: { duration: 0.2 },
    },
  };

  return (
    <>
      {pdfUrl ? (
        <Modal
          open={true}
          onClose={handleCloseModal}
          aria-labelledby="Resume PDF Modal"
          aria-describedby="Modal with download option for resume PDF file"
          BackdropProps={{
            invisible: true,
          }}
        >
          <div className="resume-modal">
            <button className="resume-close" onClick={handleCloseModal}>
              <motion.span
                variants={closeButtonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <AiOutlineClose />
              </motion.span>
            </button>
            <div className="resume-content resume-paper">
              <embed src={pdfUrl} type="application/pdf" style={{ maxHeight: "100vh", width: "100%", height: "100%" }} />
              <Button variant="contained" color="default" href="#" onClick={handleDownload}>
                Download Resume
              </Button>
            </div>
          </div>
        </Modal>
      ) : null}
    </>
  );
};

export default ResumeModal;