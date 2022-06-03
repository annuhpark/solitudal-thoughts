import React from 'react';
import { Form, Button } from 'react-bootstrap';

export default class LogIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    // const { name, value } = event.target;
    // this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();
    fetch('api/auth/log-in', {
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
        // window.localStorage.setItem('', resBody.token);
        alert('Welcome back!');
        window.location.hash = '#welcome';
      })
      .catch(err => {
        console.error('Error ', err);
      });
  }

  render() {
    return (
      <div>
        <div className="container-fluid purple-background">
          <div className="justify-content-center text-center padding-top3 padding-bottom3">
            <span className="cormorant-garamond-light">“Self-care is how you take your<br></br> power back.” — Lalah Delia
            </span>
          </div>
        </div>
        <div className="container-fluid grey-background">
          <div className="justify-content-center text-center padding-top3">
            <i className="fas fa-star-and-crescent"></i>
            <p className="cormorant-garamond-bold padding-top2 padding-bottom">LOG IN</p>
          </div>
          <Form onSubmit={this.handleSubmit}>
            <div className="row justify-content-center">
              <Form.Group className="w-25 p-3" controlId="formBasicEmail">
                <Form.Label className="roboto-nav-links">Email</Form.Label>
                <Form.Control className="input" type="email" placeholder="Enter email" value={this.state.email} onChange={this.handleChange} />
              </Form.Group>
            </div>
            <div className="row justify-content-center">
              <Form.Group className="w-25 p-3" controlId="formBasicPassword">
                <Form.Label className="roboto-nav-links">Password</Form.Label>
                <Form.Control className="input" type="password" placeholder="Password" value={this.state.password} onChange={this.handleChange}/>
              </Form.Group>
            </div>
            <div className="row justify-content-center">
              <Form.Group className="w-25 p-3 text-center margin-bottom" controlId="formBasicCheckbox">
                <Button className="btn btn-primary btn-sm black-button" variant="primary" type="submit">
                  Submit
                </Button>
              </Form.Group>
            </div>
          </Form>
        </div>
      </div>
    );
  }
}
