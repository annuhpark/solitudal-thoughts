import React from 'react';
import { Button } from 'react-bootstrap';

export default class Welcome2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quizResults: window.localStorage.getItem('quiz'),
      groups: []
    };
  }

  render() {
    const quizResults = this.state.quizResults;
    return (
      <>
      <div className="container-fluid purple-background">
        <div className="justify-content-center text-center padding-top3 padding-bottom3">
          <span className="cormorant-garamond-light">
            “Not until we are lost do we begin to understand ourselves” <br></br>― Henry David Thoreau
          </span>
        </div>
      </div>
      <div className="container-fluid grey-background">
        <div className="row justify-content-center text-center padding-top2">
          <div className="col-2">
            <p className="cormorant-garamond-bold padding-top2">welcome</p>
            <i className="far fa-moon"></i>
            <div className="padding-top">
              <Button
                className="quiz-button btn btn-primary btn-med black-button margin-bottom"
                variant="primary"
                type="button"
                href={quizResults}
              >
                daily suggestions
              </Button>
            </div>
          </div>
          <div className="col-2">
            <p className="cormorant-garamond-bold padding-top2">
              your community
            </p>
            <i className="far fa-comment"></i>
            <div className="padding-top">
              <Button
                className="quiz-button btn btn-primary btn-med black-button margin-bottom"
                variant="primary"
                type="button"
                href="#group"
              >
                groups
              </Button>
            </div>
          </div>
        </div>
        <div className="row justify-content-center padding-top5">
          <p className="cormorant-garamond-light padding-top3 text-center">
            not you? sign out
          </p>
          <div className="text-center">
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
      </>
    );
  }
}
