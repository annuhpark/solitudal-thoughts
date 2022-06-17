import React from 'react';
import { Form, Button } from 'react-bootstrap';

export default class CreateGroupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nameOfGroup: '',
      description: '',
      userId: null
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTitle = this.handleTitle.bind(this);
    this.handleContent = this.handleContent.bind(this);
  }

  handleSubmit(event) {
    alert('Yay you created a group!');
    event.preventDefault();
    const formData = new FormData();
    formData.append('nameOfGroup', this.state.nameOfGroup);
    formData.append('description', this.state.description);
    formData.append('userId', this.state.userId);

    fetch('/api/creategroup', {
      method: 'POST',
      headers: { 'X-Access-Token': window.localStorage.getItem('solitudalthoughts-jwt') },
      body: formData
    })
      .then(response => response.json())
      .then(resBody => {
        this.setState({
          nameOfGroup: resBody.nameOfGroup,
          description: resBody.description,
          userId: resBody.userId
        });
        window.location.hash = '#group';
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }

  handleTitle(event) {
    this.setState({
      nameOfGroup: event.target.value
    });
  }

  handleContent(event) {
    this.setState({
      description: event.target.value
    });
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="justify-content-center text-center padding-top3">
          <i className="fas fa-star-and-crescent"></i>
          <p className="cormorant-garamond-bold padding-top2 padding-bottom">
            new group:
          </p>
        </div>
        <div className="col-8 mx-auto">
          <Form onSubmit={this.handleSubmit}>
            <Form.Group className="mb-3" controlId="FormTitle">
              <Form.Label className="roboto-nav-links">name:</Form.Label>
              <Form.Control
                className="input"
                type="text"
                name="nameOfGroup"
                placeholder="enter name of your group"
                value={this.state.nameOfGroup}
                onChange={this.handleTitle}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label className="roboto-nav-links">description:</Form.Label>
              <Form.Control
                className="input"
                name="description"
                as="textarea"
                placeholder="describe your group"
                style={{ height: '150px' }}
                value={this.state.description}
                onChange={this.handleContent}
              />
            </Form.Group>
            <div className="text-center padding-top padding-bottom5">
              <Button
                variant="primary"
                size="med"
                type="submit"
                className="black-button roboto-text"
              >
                submit
              </Button>
            </div>
          </Form>
        </div>
      </div>
    );
  }
}
