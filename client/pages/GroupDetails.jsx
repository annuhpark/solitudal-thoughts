import React from 'react';

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
      <div className="container-fluid grey-background">
        <div className="justify-content-center text-center padding-top3 padding-bottom5">
          <i className="fas fa-star-and-crescent"></i>
          <p className="cormorant-garamond-bold padding-top2 padding-bottom">
            {nameOfGroup}
          </p>
          <p className="cormorant-garamond-light padding-bottom5">{description}</p>
        </div>
      </div>
    );
  }
}
