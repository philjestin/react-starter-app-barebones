
import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Pages
import Summary from './Summary';

// Navigation
import Navigation from './Navigation';

import Footer from './Footer';

const Router = ({ component: Component, ...rest}) => (
  <Route
    {...rest}
    render={renderProps => (
      <>
        <Navigation />
        <Component {...renderProps} />
        <Footer />
      </>
    )}
  />
);

Router.propTypes = {
  component: PropTypes.func.isRequired,
};

const Container = () => (
  <>
    <BrowserRouter>
      <Switch>
        <Router path="/" component={Summary} />
      </Switch>
    </BrowserRouter>
  </>
);

ReactDOM.render(<Container />, document.getElementById('index'));
