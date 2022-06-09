import React from 'react';
import { Button } from 'react-bootstrap';

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
        <div className="container-fluid purple-background">
          <div className="justify-content-center text-center padding-top3 padding-bottom3">
            <span className="cormorant-garamond-light">
              &quot;Just because you don&apos;t understand it doesn&apos;t mean
              it isn&apos;t so.&quot; <br></br>— Lemony Snicket
            </span>
          </div>
        </div>
        <div className="container-fluid grey-background">
          <div className="row justify-content-center text-center padding-top2 padding-bottom5">
            <div className="col-4">
              <p className="cormorant-garamond-bold padding-top5">
                your community
              </p>
              <i className="far fa-comment"></i>
            </div>
            <div className="col-4">
              <div className="row justify-content-center text-center padding-top5">
                <div>
                  <Button
                    className="quiz-button btn btn-primary btn-med black-button margin-right"
                    variant="primary"
                    type="button"
                    href="#creategroup"
                  >
                    create a group
                  </Button>
                  <Button
                    className="quiz-button btn btn-primary btn-med black-button"
                    variant="primary"
                    type="button"
                    href="#group"
                  >
                    search for group
                  </Button>
                </div>
              </div>
              <div className="row justify-content-center text-center">
                <p className="cormorant-garamond-bold padding-top2">
                  groups you are in:
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
