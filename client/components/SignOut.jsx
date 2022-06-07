import React from 'react';
import { Button, Form } from 'react-bootstrap';

export default class SignOut extends React.Component {
  constructor(props) {
    super(props);
    this.state = { user: '' };
    this.handleSignout = this.handleSignout.bind(this);
  }

  handleSignout() {
    window.localStorage.removeItem('solitudalthoughts-jwt');
    this.setState({ user: null });
    window.location.assign('#');
  }

  render() {
    const { handleSignout } = this;
    return (
      <div>
        <div className="container-fluid purple-background">
          <div className="justify-content-center text-center padding-top3 padding-bottom3">
            <span className="cormorant-garamond-light">
              “Consequently, actions that successfully improve the overall
              <br></br>
              mental health of the population are likely to be accompanied by
              <br></br>
              other important benefits to society.” <br></br>-Elliot Goldner,
              Emily Jenkins, Dan Bilsker.
            </span>
          </div>
        </div>
        <div className="background container-fluid grey-background">
          <div className="background justify-content-center text-center padding-top3">
            <p className="cormorant-garamond-bold padding-top2 padding-bottom">
              we are sorry to see you go! <br></br>please come back anytime.
            </p>
            <i className="fas fa-star-and-crescent"></i>
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
                onClick={handleSignout}
              >
                sign out
              </Button>
            </Form.Group>
          </div>
        </div>
      </div>
    );
  }
}
