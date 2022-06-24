import React from 'react';
import { Form, Button } from 'react-bootstrap';
import QuizModal from '../components/modal';

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
        <div className="background container-fluid">
          <div
            className="background justify-content-center text-center padding-top3"
            onClick={this.hideModal}
          >
            <i className="fas fa-cloud-moon small-fa-cloud-moon"></i>
            <p className="cormorant-garamond-bold padding-top2 padding-bottom">
              WELCOME
            </p>
          </div>
          <div className="col-6 mx-auto">
            <div className="background justify-content-center text-center">
              <p className="cormorant-garamond-bold padding-top3 padding-bottom3">
                new to solitudal thoughts? take our quiz so we can do our part
                of providing the best practices for your state!
              </p>
            </div>
          </div>
          <div className="row justify-content-center">
            <Form.Group
              className="w-25 p-3 text-center margin-bottom"
              controlId="formBasicButton"
            >
              <Button
                className="quiz-button btn btn-primary btn-med black-button margin-bottom"
                variant="primary"
                type="button"
                onClick={this.handleShow}
              >
                take our quiz!
              </Button>
            </Form.Group>
            <QuizModal
              handleClose={this.handleClose}
              show={this.state.showModal}
              body="We're going to ask you a series of questions. Please pick an answer that you identify the most with, & make sure to be honest! Remember that there is no judgment in this space, &amp; being honest helps us better identify where you are with your mental health."
            />
          </div>
          <div className="background justify-content-center text-center">
            <p className="cormorant-garamond-light padding-top3">
              not you? sign out
            </p>
            <Button
              className="quiz-button btn btn-primary btn-med black-button margin-bottom"
              variant="primary"
              type="button"
              href="#signout"
            >
              sign out
            </Button>
          </div>
        </div>
      </div>
    );
  }
}
