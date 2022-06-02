import React from 'react';
import { Form, Button } from 'react-bootstrap';

export default function SignUp(props) {
  return (
    <div className="container-fluid grey-background">
      <div className="justify-content-center text-center">
        <p className="cormorant-garamond-light padding-top2">escape reality for a <br></br>second & focus on yourself</p>
        <p className="cormorant-garamond-bold padding-top2">SIGN UP!</p>
      </div>
      <Form>
        <div className="row justify-content-center">
          <Form.Group className="w-25 p-3" controlId="formBasicEmail">
            <Form.Label className="roboto-nav-links">Email</Form.Label>
            <Form.Control className="input" type="email" placeholder="Enter email" />
          </Form.Group>
        </div>
        <div className="row justify-content-center">
          <Form.Group className="w-25 p-3" controlId="formBasicPassword">
            <Form.Label className="roboto-nav-links">Password</Form.Label>
            <Form.Control className="input" type="password" placeholder="Password" />
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
      <div className="justify-content-center text-center">
        <p className="cormorant-garamond-light padding-top padding-bottom">this feeling will pass.</p>
      </div>
    </div>
  );
}
