import React from 'react';
import { parseRoute } from './lib';
import Navigation from './pages/navigation';
import NotFound from './pages/not-found';
import SignUp from './pages/homepage';
import OurStory from './pages/ourstory';
import LogIn from './pages/login';
import WelcomePage from './pages/welcomepage';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      route: parseRoute(window.location.hash)
    };
  }

  componentDidMount() {
    window.addEventListener('hashchange', () => {
      this.setState({ route: parseRoute(window.location.hash) });
    });
  }

  renderPage() {
    const { route } = this.state;
    if (route.path === '') {
      return <SignUp />;
    }
    if (route.path === 'ourstory') {
      return <OurStory />;
    }
    if (route.path === 'login') {
      return <LogIn />;
    }
    if (route.path === 'welcome') {
      return <WelcomePage />;
    }
    return <NotFound />;
  }

  render() {
    return (
      <>
        <Navigation />
        {this.renderPage()}
      </>
    );
  }
}
