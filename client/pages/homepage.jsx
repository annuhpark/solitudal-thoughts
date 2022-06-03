import React from 'react';
import { Form, Button } from 'react-bootstrap';

export default class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleEmail(event) {
    this.setState({
      email: event.target.value
    });
  }

  handlePassword(event) {
    this.setState({
      password: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    fetch('/api/auth/sign-up', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(this.state)
    })
      .then(response => response.json())
      .then(resBody => {
        this.setState({
          email: '',
          password: ''
        });
        alert('Yay you are officially a member, good for you woohoooooooo.');
        window.location.hash = '#welcome';
      })
      .catch(error => {
        console.error('Error: ', error);
      });
  }

  render() {
    return (
      <div className="container-fluid grey-background">
        <div className="justify-content-center text-center">
          <p className="cormorant-garamond-light padding-top2">escape reality for a <br></br>second & focus on yourself</p>
          <p className="cormorant-garamond-bold padding-top2">SIGN UP!</p>
        </div>
        <Form onSubmit={this.handleSubmit}>
          <div className="row justify-content-center">
            <Form.Group className="w-25 p-3" controlId="formBasicEmail">
              <Form.Label className="roboto-nav-links">Email</Form.Label>
              <Form.Control className="input" type="email" placeholder="Enter email" value={this.state.email} onChange={this.handleEmail} />
            </Form.Group>
          </div>
          <div className="row justify-content-center">
            <Form.Group className="w-25 p-3" controlId="formBasicPassword">
              <Form.Label className="roboto-nav-links">Password</Form.Label>
              <Form.Control className="input" type="password" placeholder="Password" value={this.state.password} onChange={this.handlePassword} />
            </Form.Group>
          </div>
          <div className="row justify-content-center">
            <Form.Group className="w-25 p-3 text-center margin-bottom" controlId="formBasicButton">
              <Button className="btn btn-primary btn-sm black-button margin-right" variant="primary" type="submit">
                sign up
              </Button>
              <Button href="#login" variant="primary" type="button" className="btn btn-primary btn-sm black-button">already a member?</Button>
            </Form.Group>
          </div>
        </Form>
        <div className="justify-content-center text-center">
          <p className="cormorant-garamond-light padding-top padding-bottom">this feeling will pass.</p>
        </div>
      </div>
    );
  }
}
