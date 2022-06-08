import React from 'react';
import { parseRoute } from './lib';
import Navigation from './components/Navigation';
import NotFound from './pages/NotFound';
import Auth from './pages/Auth';
import OurStory from './pages/OurStory';
import SignIn from './components/SignIn';
import Welcome from './pages/Welcome';
import decodeToken from './lib/decode-token';
import Groups from './pages/Groups';
import Quiz from './pages/Quiz';
import SignOut from './components/SignOut';
import Result1 from './pages/Result1';
import Result2 from './pages/Result2';
import Result3 from './pages/Result3';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      route: parseRoute(window.location.hash),
      user: null,
      isAuthorizing: true
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

    // if (!token) {
    //   return <Auth />;
    // }

    if (route.path === '' && !token) {
      return <Auth />;
    }
    if (route.path === '' && token) {
      return <Welcome />;
    }
    if (route.path === 'ourstory') {
      return <OurStory />;
    }
    if (route.path === 'signin') {
      return <SignIn />;
    }
    if (route.path === 'welcome') {
      return <Welcome />;
    }
    if (route.path === 'group') {
      return <Groups />;
    }
    if (route.path === 'quiz') {
      return <Quiz />;
    }
    if (route.path === 'resultone') {
      return <Result1 />;
    }
    if (route.path === 'resulttwo') {
      return <Result2 />;
    }
    if (route.path === 'resultthree') {
      return <Result3 />;
    }
    if (route.path === 'signout') {
      return <SignOut />;
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
