import React from 'react';
import { parseRoute } from './lib';
import Navigation from './components/Navigation';
import NotFound from './pages/NotFound';
import Auth from './pages/Auth';
import OurStory from './pages/OurStory';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Welcome from './pages/Welcome';
import Welcome2 from './pages/Welcome2.jsx';
import decodeToken from './lib/decode-token';
import Groups from './pages/Groups';
import GroupDetails from './pages/GroupDetails';
import Quiz from './pages/Quiz/Quiz';
import SignOut from './components/SignOut';
import Result1 from './pages/Quiz/Result1';
import Result2 from './pages/Quiz/Result2';
import Result3 from './pages/Quiz/Result3';
import CreateGroupForm from './pages/CreateGroupForm.jsx';

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
    const quiz = window.localStorage.getItem('quiz');
    if (route.path === '' && !token) {
      return <Auth />;
    }
    if (route.path === '' && token && !quiz) {
      return <Welcome />;
    }
    if (route.path === '' && token && quiz) {
      return <Welcome2 />;
    }
    if (route.path === 'ourstory') {
      return <OurStory />;
    }
    if (route.path === 'signin') {
      return <SignIn />;
    }
    if (route.path === 'welcome' & !quiz) {
      return <Welcome />;
    }
    if (route.path === 'group' && token) {
      return <Groups />;
    }
    if (route.path === 'groups') {
      const groupId = route.params.get('groupId');
      return <GroupDetails groupId={groupId} />;
    }
    if (route.path === 'group' && !token) {
      return (
        <div className="container-fluid grey-background"><SignUp /></div>
      );
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
    if (route.path === 'creategroup') {
      return <CreateGroupForm />;
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
