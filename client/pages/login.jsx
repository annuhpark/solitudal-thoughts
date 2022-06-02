import React from 'react';
import { Form, Button } from 'react-bootstrap';

export default function LogIn(props) {
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
      </div>
    </div>
  );
}
