import React from 'react';

export default class Drawer extends React.Component {
  constructor(props) {
    super(props);
    this.showDrawer = this.showDrawer.bind(this);
    this.hideDrawer = this.hideDrawer.bind(this);
    this.state = { burgerClicked: false };
  }

  showDrawer(event) {
    if (event.target.className === 'fas fa-bars') {
      this.setState({ burgerClicked: true });
    }
  }

  hideDrawer(event) {
    if (event.target.className.includes('link') || (event.target.className.includes('page-container'))) {
      this.setState({ burgerClicked: false });
    }
  }

  render() {
    const burgerClass = 'fas fa-bars';
    let menuClass;
    let pageClass;
    if (this.state.burgerClicked === true) {
      menuClass = 'drawer white-background-color drawer-reveal';
      pageClass = 'page-container full-vp transparent-background-color';
    } else if (this.state.burgerClicked === false) {
      menuClass = 'drawer white-background-color';
      pageClass = 'page-container full-vp';
    }
    return (
      <div className='full-vp'>
        <div onClick={this.hideDrawer} className={pageClass}>
          <i onClick={this.showDrawer} className={burgerClass}></i>
          <div className={menuClass}>
            <div>
              <h1>Menu</h1>
            </div>
            <div className="align-items-center link">
              <a className="target-link">About Me</a>
            </div>
            <div className="align-items-center link">
              <a className="target-link">Eat</a>
            </div>
            <div className="align-items-center link">
              <a className="target-link">Sleep</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
