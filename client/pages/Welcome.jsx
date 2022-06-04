import React from 'react';
import { Form, Button, Modal } from 'react-bootstrap';

export default class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.handleClose = this.handleClose.bind(this);
    this.handleShow = this.handleShow.bind(this);
    this.state = { showModal: false };
  }

  handleClose() {
    this.setState({
      showModal: false
    });
  }

  handleShow() {
    this.setState({
      showModal: true
    });
  }

  render() {
    return (
      <div>
        <div className="background container-fluid grey-background">
          <div className="background justify-content-center text-center padding-top3" onClick={this.hideModal}>
            <i className="fas fa-cloud-moon small-fa-cloud-moon"></i>
            <p className="cormorant-garamond-bold padding-top2 padding-bottom">WELCOME</p>
          </div>
          <div className="col-6 mx-auto">
            <p className="cormorant-garamond-bold padding-top3 padding-bottom3">new to solitudal thoughts? take our quiz so we can do our part of providing the best practices for your state!</p>
          </div>
          <div className="row justify-content-center">
            <Form.Group className="w-25 p-3 text-center margin-bottom" controlId="formBasicButton">
              <Button className="quiz-button btn btn-primary btn-med black-button" variant="primary" type="button" onClick={this.handleShow}>
                take our quiz!
              </Button>
            </Form.Group>
            <Modal show={this.state.showModal} onHide={this.handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Hey Freak</Modal.Title>
              </Modal.Header>
              <Modal.Body>Woohoo, you are reading this text in a modal! </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={this.handleClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={this.handleClose}>
                  Save Changes
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
        </div>
    </div>
    );
  }
}
