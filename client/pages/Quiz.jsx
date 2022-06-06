import React from 'react';
import { Form } from 'react-bootstrap';

const Quiz = () => {
  return (
    <div>
      <div className="container-fluid purple-background">
        <div className="justify-content-center text-center padding-top3 padding-bottom3">
          <span className="cormorant-garamond-light">
            &quot;You are more precious to this world than you&apos;ll ever
            know.&quot;<br></br> -Lili Rhinehart
          </span>
        </div>
      </div>
      <div className="container-fluid grey-background">
        <div className="justify-content-center text-center padding-top3">
          <i className="fas fa-star-and-crescent"></i>
          <p className="cormorant-garamond-bold padding-top2 padding-bottom">
            QUIZ
          </p>
        </div>
        <div className="col-8 mx-auto">
          <Form>
            <p className="roboto-questions">
              1. Do you have little interest or pleasure in doing things?
            </p>
            {['radio'].map(type => (
              <div key={`inline-${type}`} className="mb-3 roboto-nav-links">
                <Form.Check
                  inline
                  label="Not at all"
                  name="group1"
                  type={type}
                  id={`inline-${type}-1`}
                />
                <Form.Check
                  inline
                  label="Several days"
                  name="group1"
                  type={type}
                  id={`inline-${type}-2`}
                />
                <Form.Check
                  inline
                  label="More than half the days"
                  name="group1"
                  type={type}
                  id={`inline-${type}-3`}
                />
                <Form.Check
                  inline
                  label="Nearly every day"
                  name="group1"
                  type={type}
                  id={`inline-${type}-3`}
                />
              </div>
            ))}
          </Form>
          <Form>
            <p className="roboto-questions padding-top2">
              2. Are you feeling depressed, down, or hopeless these days?
            </p>
            {['radio'].map(type => (
              <div key={`inline-${type}`} className="mb-3 roboto-nav-links">
                <Form.Check
                  inline
                  label="Not at all"
                  name="group2"
                  type={type}
                  id={`inline-${type}-1`}
                />
                <Form.Check
                  inline
                  label="Several days"
                  name="group2"
                  type={type}
                  id={`inline-${type}-2`}
                />
                <Form.Check
                  inline
                  label="More than half the days"
                  name="group2"
                  type={type}
                  id={`inline-${type}-3`}
                />
                <Form.Check
                  inline
                  label="Nearly every day"
                  name="group2"
                  type={type}
                  id={`inline-${type}-3`}
                />
              </div>
            ))}
          </Form>
          <Form>
            <p className="roboto-questions padding-top2">
              3. How often have you been bothered by trouble falling or staying
              asleep, or sleeping too much?
            </p>
            {['radio'].map(type => (
              <div key={`inline-${type}`} className="mb-3 roboto-nav-links">
                <Form.Check
                  inline
                  label="Not at all"
                  name="group3"
                  type={type}
                  id={`inline-${type}-1`}
                />
                <Form.Check
                  inline
                  label="Several days"
                  name="group3"
                  type={type}
                  id={`inline-${type}-2`}
                />
                <Form.Check
                  inline
                  label="More than half the days"
                  name="group3"
                  type={type}
                  id={`inline-${type}-3`}
                />
                <Form.Check
                  inline
                  label="Nearly every day"
                  name="group3"
                  type={type}
                  id={`inline-${type}-3`}
                />
              </div>
            ))}
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
