import React from 'react';

export default class Navigation extends React.Component {
  render() {
    return (
      <div className="container-fluid padding-bottom-sm white-background">
        <div className="row">
          <a href="#" className="col cormorant-garamond-heading">
            SOLITU<br></br>
            DAL<br></br>
            THOUGH<br></br>
            TS.
          </a>
          <div className="col">
            <div className="flex-end">
              <a href="#group" className="roboto-nav-links padding-right padding-top2">
                groups
              </a>
              <a href="#ourstory" className="roboto-nav-links padding-right padding-top">
                our<br></br>
                story
              </a>
            </div>
            <div className="flex-direction-column">
              <i className="fas fa-cloud-moon big-fa-cloud-moon"></i>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
