import '@babel/polyfill';

import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Pages
import Home from './Home';

const Router = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={renderProps => (
      <>
        <Component {...renderProps} />
      </>
    )}
  />
);

Router.propTypes = {
  component: PropTypes.func.isRequired
};

const Container = () => (
  <>
    <BrowserRouter>
      <Switch>
        <Router path='/' component={Home} />
      </Switch>
    </BrowserRouter>
  </>
);

ReactDOM.render(<Container />, document.getElementById('index'));
