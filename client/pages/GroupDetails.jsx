import React from 'react';
import { Button } from 'react-bootstrap';

export default class GroupDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      group: null
    };
  }

  componentDidMount() {
    fetch(`/api/groups/${this.props.groupId}`)
      .then(res => res.json())
      .then(group => this.setState({ group }));
  }

  render() {
    if (!this.state.group) {
      return null;
    }
    const { nameOfGroup, description } = this.state.group;
    return (
      <div className="container-fluid">
        <div className="row justify-content-center padding-top3 padding-bottom5">
          <div className="col-5 padding-top2 padding-bottom">
            <p className="cormorant-garamond-bold-subtext">{nameOfGroup}</p>
            <p className="cormorant-garamond-light-subtext padding-bottom5">
              {description}
            </p>
          </div>
          <div className="col-5 text-center padding-top2 padding-bottom">
            <i className="fas fa-star-and-crescent"></i>
            <div className="padding-top2">
              <Button
                className="quiz-button btn btn-primary btn-med black-button margin-bottom"
                variant="primary"
                type="button"
                href="#createcomment"
              >
                leave a comment
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
