import React from 'react';

export default function WelcomePage(props) {
  return (
    <div>
      <div className="container-fluid grey-background">
        <div className="justify-content-center text-center padding-top3">
          <i className="fas fa-cloud-moon big-fa-cloud-moon"></i>
          <p className="cormorant-garamond-bold padding-top2 padding-bottom">WELCOME</p>
        </div>
        <div className="col-6 mx-auto">
          <p className="cormorant-garamond-bold padding-top3 padding-bottom3">new to solitudal thoughts? take our quiz so we can do our part of providing the best practices for your state!</p>
        </div>
      </div>
    </div>
  );
}
