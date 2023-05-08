import React from 'react';
import { Modal, Button } from '@material-ui/core';
import { AiOutlineClose } from 'react-icons/ai';
import { motion, AnimatePresence } from 'framer-motion';
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
      scale: 1.2,
      transition: { duration: 0.2 },
    },
    tap: {
      scale: 0.8,
      transition: { duration: 0.2 },
    },
  };

  return (
    <AnimatePresence mode="wait">
      {pdfUrl && (
        <Modal
          open={true}
          onClose={handleCloseModal}
          aria-labelledby="Modal Title Goes Here"
          aria-describedby="Modal Description Goes Here"
          BackdropProps={{
            invisible: true,
          }}
        >
          <motion.div
            className="resume-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.5, ease: "easeInOut", delay: 0.5 }, scale: 0.8 }}
          >

            <motion.button className="resume-close" onClick={handleCloseModal} variants={closeButtonVariants} whileHover="hover" whileTap="tap">
              <AiOutlineClose />
            </motion.button>

            <div className="resume-content resume-paper">
              <embed
                src={pdfUrl}
                type="application/pdf"
                style={{ maxHeight: '90vh', width: '100%', height: '100%' }}
              />
              <Button
                variant="contained"
                color="default"
                href="#"
                onClick={handleDownload}
              >
                Download Resume
              </Button>
            </div>
          </motion.div>
        </Modal>
      )}
    </AnimatePresence>
  );
};

export default ResumeModal;
