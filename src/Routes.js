import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';

import App from './containers/home/App';
import { Login } from './containers/login/Login';

const NoMatch = () => {
  return (
    <Fragment>
      404 Page not Found.
    </Fragment>
  );
};

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/login" component={Login} />
      <Route component={NoMatch}/>
    </Switch>
  );
};
