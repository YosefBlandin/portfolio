import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';

const Router = () => (
  <>
    <BrowserRouter>
      <Switch>
        <Route component={Home} exact path="/" />
      </Switch>
    </BrowserRouter>
  </>
);

export default Router;
