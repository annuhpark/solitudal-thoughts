import React from 'react';
import { Form, Button } from 'react-bootstrap';

class Quiz extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    let total = 0;
    event.preventDefault();
    const ele1 = document.getElementsByName('group1');
    for (let i = 0; i < ele1.length; i++) {
      if (ele1[i].checked) {
        total = total + parseInt(ele1[i].value);
      }
    }
    const ele2 = document.getElementsByName('group2');
    for (let i = 0; i < ele2.length; i++) {
      if (ele2[i].checked) {
        total = total + parseInt(ele2[i].value);
      }
    }
    // console.log(total);
    const ele3 = document.getElementsByName('group3');
    for (let i = 0; i < ele3.length; i++) {
      if (ele3[i].checked) {
        total = total + parseInt(ele3[i].value);
      }
    }
    const ele4 = document.getElementsByName('group4');
    for (let i = 0; i < ele4.length; i++) {
      if (ele4[i].checked) {
        total = total + parseInt(ele4[i].value);
      }
    }
    const ele5 = document.getElementsByName('group5');
    for (let i = 0; i < ele5.length; i++) {
      if (ele5[i].checked) {
        total = total + parseInt(ele5[i].value);
      }
    }
    const ele6 = document.getElementsByName('group6');
    for (let i = 0; i < ele6.length; i++) {
      if (ele6[i].checked) {
        total = total + parseInt(ele6[i].value);
      }
    }
    const ele7 = document.getElementsByName('group7');
    for (let i = 0; i < ele7.length; i++) {
      if (ele7[i].checked) {
        total = total + parseInt(ele7[i].value);
      }
    }
    const ele8 = document.getElementsByName('group8');
    for (let i = 0; i < ele8.length; i++) {
      if (ele8[i].checked) {
        total = total + parseInt(ele8[i].value);
      }
    }
    const ele9 = document.getElementsByName('group9');
    for (let i = 0; i < ele9.length; i++) {
      if (ele9[i].checked) {
        total = total + parseInt(ele9[i].value);
      }
    }
    const ele10 = document.getElementsByName('group10');
    for (let i = 0; i < ele10.length; i++) {
      if (ele10[i].checked) {
        total = total + parseInt(ele10[i].value);
      }
    }
    if (total >= 10 && total < 20) {
      window.location.hash = 'resultone';
      window.localStorage.setItem('quiz', '#resultone');
    } else if (total >= 20 && total < 30) {
      window.location.hash = 'resulttwo';
      window.localStorage.setItem('quiz', '#resulttwo');
    } else if (total >= 30 && total <= 40) {
      window.location.hash = 'resultthree';
      window.localStorage.setItem('quiz', '#resultthree');
    }
  }

  render() {
    const { handleSubmit } = this;
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
          <div className="col-6 mx-auto">
            <Form onSubmit={handleSubmit}>
              <p className="roboto-questions">
                1. Do you have little interest or pleasure in doing things?
              </p>
              <div className="justify-content-center text-center padding-top">
                {['radio'].map(type => (
                  <div key={`inline-${type}`} className="mb-3 roboto-nav-links">
                    <Form.Check
                      inline
                      label="Not at all"
                      name="group1"
                      type={type}
                      id={`inline-${type}-1`}
                      value='1'
                    />
                    <Form.Check
                      inline
                      label="Several days"
                      name="group1"
                      type={type}
                      id={`inline-${type}-2`}
                      value='2'
                    />
                    <Form.Check
                      inline
                      label="More than half the days"
                      name="group1"
                      type={type}
                      id={`inline-${type}-3`}
                      value='3'
                    />
                    <Form.Check
                      inline
                      label="Nearly every day"
                      name="group1"
                      type={type}
                      id={`inline-${type}-4`}
                      value='4'
                    />
                  </div>
                ))}
              </div>
              <p className="roboto-questions padding-top2">
                2. Are you feeling depressed, down, or hopeless these days?
              </p>
              <div className="justify-content-center text-center padding-top">
                {['radio'].map(type => (
                  <div key={`inline-${type}`} className="mb-3 roboto-nav-links">
                    <Form.Check
                      inline
                      label="Not at all"
                      name="group2"
                      type={type}
                      id={`inline-${type}-1`}
                      value='1'
                    />
                    <Form.Check
                      inline
                      label="Several days"
                      name="group2"
                      type={type}
                      id={`inline-${type}-2`}
                      value='2'
                    />
                    <Form.Check
                      inline
                      label="More than half the days"
                      name="group2"
                      type={type}
                      id={`inline-${type}-3`}
                      value='3'
                    />
                    <Form.Check
                      inline
                      label="Nearly every day"
                      name="group2"
                      type={type}
                      id={`inline-${type}-4`}
                      value='4'
                    />
                  </div>
                ))}
              </div>
              <p className="roboto-questions padding-top2">
                3. How often have you been bothered by trouble falling or
                staying asleep, or sleeping too much?
              </p>
              <div className="justify-content-center text-center padding-top">
                {['radio'].map(type => (
                  <div key={`inline-${type}`} className="mb-3 roboto-nav-links">
                    <Form.Check
                      inline
                      label="Not at all"
                      name="group3"
                      type={type}
                      id={`inline-${type}-1`}
                      value='1'
                    />
                    <Form.Check
                      inline
                      label="Several days"
                      name="group3"
                      type={type}
                      id={`inline-${type}-2`}
                      value='2'
                    />
                    <Form.Check
                      inline
                      label="More than half the days"
                      name="group3"
                      type={type}
                      id={`inline-${type}-3`}
                      value='3'
                    />
                    <Form.Check
                      inline
                      label="Nearly every day"
                      name="group3"
                      type={type}
                      id={`inline-${type}-4`}
                      value='4'
                    />
                  </div>
                ))}
              </div>
              <p className="roboto-questions">
                4. Do you have poor appetite or tend to overeat?
              </p>
              <div className="justify-content-center text-center padding-top">
                {['radio'].map(type => (
                  <div key={`inline-${type}`} className="mb-3 roboto-nav-links">
                    <Form.Check
                      inline
                      label="Not at all"
                      name="group4"
                      type={type}
                      id={`inline-${type}-1`}
                      value='1'
                    />
                    <Form.Check
                      inline
                      label="Several days"
                      name="group4"
                      type={type}
                      id={`inline-${type}-2`}
                      value='2'
                    />
                    <Form.Check
                      inline
                      label="More than half the days"
                      name="group4"
                      type={type}
                      id={`inline-${type}-3`}
                      value='3'
                    />
                    <Form.Check
                      inline
                      label="Nearly every day"
                      name="group4"
                      type={type}
                      id={`inline-${type}-4`}
                      value='4'
                    />
                  </div>
                ))}
              </div>
              <p className="roboto-questions padding-top2">
                5. Do you have trouble concentrating on things, such as reading
                the newspaper or watching TV?
              </p>
              <div className="justify-content-center text-center padding-top">
                {['radio'].map(type => (
                  <div key={`inline-${type}`} className="mb-3 roboto-nav-links">
                    <Form.Check
                      inline
                      label="Not at all"
                      name="group5"
                      type={type}
                      id={`inline-${type}-1`}
                      value='1'
                    />
                    <Form.Check
                      inline
                      label="Several days"
                      name="group5"
                      type={type}
                      id={`inline-${type}-2`}
                      value='2'
                    />
                    <Form.Check
                      inline
                      label="More than half the days"
                      name="group5"
                      type={type}
                      id={`inline-${type}-3`}
                      value='3'
                    />
                    <Form.Check
                      inline
                      label="Nearly every day"
                      name="group5"
                      type={type}
                      id={`inline-${type}-4`}
                      value='4'
                    />
                  </div>
                ))}
              </div>
              <p className="roboto-questions padding-top2">
                6. Have other people noticed you moving or speaking so slowly?
                Or the opposite - being so fidgety or restless that you have
                been moving around a lot more than usual?
              </p>
              <div className="justify-content-center text-center padding-top">
                {['radio'].map(type => (
                  <div key={`inline-${type}`} className="mb-3 roboto-nav-links">
                    <Form.Check
                      inline
                      label="Not at all"
                      name="group6"
                      type={type}
                      id={`inline-${type}-1`}
                      value='1'
                    />
                    <Form.Check
                      inline
                      label="Several days"
                      name="group6"
                      type={type}
                      id={`inline-${type}-2`}
                      value='2'
                    />
                    <Form.Check
                      inline
                      label="More than half the days"
                      name="group6"
                      type={type}
                      id={`inline-${type}-3`}
                      value='3'
                    />
                    <Form.Check
                      inline
                      label="Nearly every day"
                      name="group6"
                      type={type}
                      id={`inline-${type}-4`}
                      value='4'
                    />
                  </div>
                ))}
              </div>
              <p className="roboto-questions padding-top2">
                7. Do you have thoughts that you would be better off dead, or of
                hurting yourself?
              </p>
              <div className="justify-content-center text-center padding-top">
                {['radio'].map(type => (
                  <div key={`inline-${type}`} className="mb-3 roboto-nav-links">
                    <Form.Check
                      inline
                      label="Not at all"
                      name="group7"
                      type={type}
                      id={`inline-${type}-1`}
                      value='1'
                    />
                    <Form.Check
                      inline
                      label="Several days"
                      name="group7"
                      type={type}
                      id={`inline-${type}-2`}
                      value='2'
                    />
                    <Form.Check
                      inline
                      label="More than half the days"
                      name="group7"
                      type={type}
                      id={`inline-${type}-3`}
                      value='3'
                    />
                    <Form.Check
                      inline
                      label="Nearly every day"
                      name="group7"
                      type={type}
                      id={`inline-${type}-4`}
                      value='4'
                    />
                  </div>
                ))}
              </div>
              <p className="roboto-questions padding-top2">
                8. Do you tend to feel bad about yourself - that you are a
                failure by letting yourself down or your family down?
              </p>
              <div className="justify-content-center text-center padding-top">
                {['radio'].map(type => (
                  <div key={`inline-${type}`} className="mb-3 roboto-nav-links">
                    <Form.Check
                      inline
                      label="Not at all"
                      name="group8"
                      type={type}
                      id={`inline-${type}-1`}
                      value='1'
                    />
                    <Form.Check
                      inline
                      label="Several days"
                      name="group8"
                      type={type}
                      id={`inline-${type}-2`}
                      value='2'
                    />
                    <Form.Check
                      inline
                      label="More than half the days"
                      name="group8"
                      type={type}
                      id={`inline-${type}-3`}
                      value='3'
                    />
                    <Form.Check
                      inline
                      label="Nearly every day"
                      name="group8"
                      type={type}
                      id={`inline-${type}-4`}
                      value='4'
                    />
                  </div>
                ))}
              </div>
              <p className="roboto-questions padding-top2">
                9. Are you feeling down, depressed or hopeless?
              </p>
              <div className="justify-content-center text-center padding-top">
                {['radio'].map(type => (
                  <div key={`inline-${type}`} className="mb-3 roboto-nav-links">
                    <Form.Check
                      inline
                      label="Not at all"
                      name="group9"
                      type={type}
                      id={`inline-${type}-1`}
                      value='1'
                    />
                    <Form.Check
                      inline
                      label="Several days"
                      name="group9"
                      type={type}
                      id={`inline-${type}-2`}
                      value='2'
                    />
                    <Form.Check
                      inline
                      label="More than half the days"
                      name="group9"
                      type={type}
                      id={`inline-${type}-3`}
                      value='3'
                    />
                    <Form.Check
                      inline
                      label="Nearly every day"
                      name="group9"
                      type={type}
                      id={`inline-${type}-4`}
                      value='4'
                    />
                  </div>
                ))}
              </div>
              <p className="roboto-questions padding-top2">
                10. If you checked off any problems, how difficult have these
                problems made it for you at work, home or with other people?
              </p>
              <div className="justify-content-center text-center padding-top">
                {['radio'].map(type => (
                  <div key={`inline-${type}`} className="mb-3 roboto-nav-links">
                    <Form.Check
                      inline
                      label="Not difficult at all"
                      name="group10"
                      type={type}
                      id={`inline-${type}-1`}
                      value='1'
                    />
                    <Form.Check
                      inline
                      label="Somewhat difficult"
                      name="group10"
                      type={type}
                      id={`inline-${type}-2`}
                      value='2'
                    />
                    <Form.Check
                      inline
                      label="Very difficult"
                      name="group10"
                      type={type}
                      id={`inline-${type}-3`}
                      value='3'
                    />
                    <Form.Check
                      inline
                      label="Extremely difficult"
                      name="group10"
                      type={type}
                      id={`inline-${type}-4`}
                      value='4'
                    />
                  </div>
                ))}
                <Button
                  className="btn btn-primary btn-sm black-button margin-bottom"
                  variant="primary"
                  type="submit"
                >
                  Submit
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

export default Quiz;
