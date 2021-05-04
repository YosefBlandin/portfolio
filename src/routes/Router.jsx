import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import About from '../pages/About';

const Router = () => (
  <>
    <BrowserRouter>
      <Switch>
        <Route component={Home} exact path="/" />
        <Route component={About} exact path="/about" />
      </Switch>
    </BrowserRouter>
  </>
);

export default Router;
