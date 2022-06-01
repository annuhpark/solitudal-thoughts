import React from 'react';

export default function Navigation(props) {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col cormorant-garamond-heading">
          SOLITU<br></br>
          DAL<br></br>
          THOUGH<br></br>
          TS.
        </div>
        <div className="col">
          <div className="flex-end">
            <a href="#login" className="roboto-nav-links padding-right padding-top2">
              login
            </a>
            <a href="#ourstory" className="roboto-nav-links padding-right padding-top">
              our<br></br>
              story
            </a>
          </div>
          <div className="flex-direction-column">
            <i className="fas fa-cloud-moon"></i>
          </div>
        </div>
      </div>
    </div>
  );
}
