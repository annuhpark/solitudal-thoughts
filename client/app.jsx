import React from 'react';
import { parseRoute } from './lib';
import Navigation from './pages/navigation';

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

  // renderPage() {
  //   // const { route } = this.state;
  //   // if (route.path === '') {
  //   //   return <Navigation />;
  //   // }
  // }

  render() {
    return (
      <Navigation />
    );
  }
}
