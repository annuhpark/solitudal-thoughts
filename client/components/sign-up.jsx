import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    fetch('/api/auth/sign-up', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    })
      .then(response => response.json())
      .then(resBody => {
        setEmail('');
        setPassword('');
        window.location.hash = '#';
      })
      .catch(error => {
        console.error('Error: ', error);
      });
  };

  const handleEmail = event => {
    setEmail(event.target.value);
  };

  const handlePassword = event => {
    setPassword(event.target.value);
  };
  return (
    <>
      <div className="justify-content-center text-center">
        <p className="cormorant-garamond-light padding-top2">
          escape reality for a <br></br>second & focus on yourself
        </p>
        <p className="cormorant-garamond-bold padding-top2">SIGN UP!</p>
      </div>
      <Form onSubmit={handleSubmit}>
        <div className="row justify-content-center">
          <Form.Group className="formgroup p-3" controlId="formBasicEmail">
            <Form.Label className="roboto-nav-links">Email</Form.Label>
            <Form.Control
              className="input"
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={handleEmail}
            />
          </Form.Group>
        </div>
        <div className="row justify-content-center padding-bottom-sm">
          <Form.Group className="formgroup p-3" controlId="formBasicPassword">
            <Form.Label className="roboto-nav-links">Password</Form.Label>
            <Form.Control
              className="input"
              type="password"
              placeholder="Password"
              value={password}
              onChange={handlePassword}
            />
          </Form.Group>
        </div>
        <div className="row justify-content-center padding-bottom">
          <div className="formgroup">
            <Form.Group
              className="text-center margin-bottom d-flex justify-content-sm-between"
              controlId="formBasicButton"
            >
              <Button
                className="auth-buttons margin-bottom"
                variant="primary"
                type="submit"
              >
                sign up
              </Button>
              <Button
                href="#signin"
                variant="primary"
                type="button"
                className="auth-buttons margin-bottom"
              >
                sign in
              </Button>
              <Button
                href="#demosignin"
                variant="primary"
                type="button"
                className="auth-buttons margin-bottom"
              >
                demo login
              </Button>
            </Form.Group>
          </div>
        </div>
      </Form>
      <div className="justify-content-center text-center">
        <p className="cormorant-garamond-light padding-top padding-bottom">
          this feeling will pass.
        </p>
      </div>
    </>
  );
};

export default SignUp;
