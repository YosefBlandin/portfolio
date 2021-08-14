import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import { Loader } from "../components/Loader";
import About from '../pages/About';

const Router = () => {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 3000);

  return (
    <>
      <BrowserRouter>
        <Switch>
          {loading ? (
            <Route component={Loader} />
          ) : (
            <Route component={Home} exact path="/" />
          )}
          <Route component={About} exact path="/about" />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default Router;
