import React from 'react';
import { Modal, Button } from '@material-ui/core';
import '../resumemodalcomponent/Resume';
import getResumePdf from '../services/PdfService';
import resumePdf from '../assets/images/brandonresume.pdf';

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

  return (
    <>
      {pdfUrl ? (
        <Modal
          open={true}
          onClose={handleCloseModal}
          aria-labelledby="Modal Title Goes Here"
          aria-describedby="Modal Description Goes Here"
        >
          <div className="resume-modal">
            <embed src={pdfUrl} type="application/pdf" style={{ maxHeight: "90vh" }} />
            <Button variant="contained" color="default" href="#" onClick={handleDownload}>
              Download Resume
            </Button>
          </div>
        </Modal>
      ) : null}
    </>
  );
};

export default ResumeModal;
