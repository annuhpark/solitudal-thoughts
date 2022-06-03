import React from 'react';
import { parseRoute } from './lib';
import Navigation from './pages/navigation';
import NotFound from './pages/not-found';
import SignUp from './pages/homepage';
import OurStory from './pages/ourstory';
import LogIn from './pages/login';
import WelcomePage from './pages/welcomepage';
import decodeToken from './lib/decode-token';
import Groups from './pages/group';

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
    const token = window.localStorage.getItem('solitudalthoughts-jwt');
    const user = token ? decodeToken(token) : null;
    this.setState({ user, isAuthorizing: false });
  }

  renderPage() {
    const { route } = this.state;
    const token = window.localStorage.getItem('solitudalthoughts-jwt');

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
    if (route.path === 'group' && !token) {
      return <SignUp />;
    }
    if (route.path === 'group' && token) {
      return <Groups />;
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
