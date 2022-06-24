import React, { useState, useEffect } from 'react';
import { parseRoute } from '../lib';
import SignUp from '../components/sign-up';
import SignIn from '../components/sign-in';

const Auth = () => {
  const [route, setRoute] = useState(parseRoute(window.location.hash));

  useEffect(() => {

    window.addEventListener('hashchange', () => {
      setRoute(parseRoute(window.location.hash));
    });

  }, [route]);

  const renderPage = () => {
    if (route.path === '') {
      return <SignUp />;
    } else if (route.path === 'signin') {
      return <SignIn />;
    }
  };

  return <div className="container-fluid">{renderPage()}</div>;
};

export default Auth;
