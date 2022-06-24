import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const QuizModal = ({ body, show, handleClose }) => {

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Body className="roboto-nav-links">{body}</Modal.Body>
      <Modal.Footer>
        <Button href="#quiz" className="black-button"
        variant="secondary"
        onClick={handleClose}
        >
          got it
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default QuizModal;
