import React from 'react';
import { Modal, Button } from '@material-ui/core';
import '../resumemodalcomponent/Resume';
import getResumePdf from '../services/PdfService';

type ResumeModalProps = {
  closeModal: () => void;
};

const ResumeModal: React.FC<ResumeModalProps> = ({ closeModal }) => {
  const [pdfUrl, setPdfUrl] = React.useState('');

  React.useEffect(() => {
    getResumePdf().then(blob => {
      const url = URL.createObjectURL(blob);
      setPdfUrl(url);
    });
  }, []);

  const handleCloseModal = () => {
    closeModal();
  };

  return (
    <>
      {pdfUrl ? (
        <Modal
          open={true}
          onClose={handleCloseModal}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          <div className="resume-modal">
            <embed src={pdfUrl} type="application/pdf" style={{ maxHeight: "90vh" }} />
            <Button variant="contained" color="default" href="../../assets/images/BrandonResume2023.pdf" download>
              Download Resume
            </Button>
          </div>
        </Modal>
      ) : null}
    </>
  );
};

export default ResumeModal;
