import React from 'react';

export default function WelcomePage(props) {
  return (
    <div>
      <div className="container-fluid purple-background">
        <div className="justify-content-center text-center padding-top3 padding-bottom3">
          <span className="cormorant-garamond-light">&quot;Your illness is not your identity<br></br>
            Your chemistry is not your<br></br>
            character.&quot; - Rick Warren
          </span>
        </div>
      </div>
      <div className="container-fluid grey-background">
        <div className="justify-content-center text-center padding-top3">
          <i className="fas fa-cloud-moon small-fa-cloud-moon"></i>
          <p className="cormorant-garamond-bold padding-top2 padding-bottom">ABOUT US</p>
        </div>
        <div className="col-6 mx-auto">
          <p className="roboto-text">
            <div className="padding-bottom">
              <span>Caring for your mental health should be equally as prioritized as caring for your physical health.</span>
            </div>
            <div className="padding-bottom">
              <span>But it comes at a cost.</span>
            </div>
            <div className="padding-bottom">
              The cost of therapy will add up, so how do we mentally heal without breaking our wallet?
            </div>
            <div className="padding-bottom">
              Find natural ways to take care of your mind with our suggested exercises, tools & conversations. Join/create groups to build a community where you can anonymously post & read forums. Your privacy will always be protected!
            </div>
            <div className="padding-bottom3">
              No questions. No judgement.
            </div>
          </p>
        </div>
      </div>
    </div>
  );
}
