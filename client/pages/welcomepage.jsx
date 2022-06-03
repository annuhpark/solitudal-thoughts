import React from 'react';
import { Form, Button } from 'react-bootstrap';

export default class WelcomePage extends React.Component {
  constructor(props) {
    super(props);
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
    this.state = { burgerClicked: false };
  }

  showModal(event) {
    if (event.target.className.includes('quiz-button')) {
      this.setState({ burgerClicked: true });
    }
  }

  hideModal(event) {
    if (event.target.parentElement.className.includes('background')) {
      this.setState({ burgerClicked: false });
    }
  }

  render() {
    if (this.state.burgerClicked === true) {
      console.log('yes');
    } else if (this.state.burgerClicked === false) {
      console.log('no');
    }
    return (
      <div onClick={this.hideModal}>
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
            <Button className="quiz-button btn btn-primary btn-med black-button" variant="primary" type="button" onClick={this.showModal}>
              take our quiz!
            </Button>
          </Form.Group>
        </div>
      </div>
    </div>
    );
  }
}
