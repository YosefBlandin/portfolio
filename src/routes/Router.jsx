import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import { Loader } from '../components/Loader/index.tsx';
import About from '../pages/About';
import Projects from '../pages/Projects/index.tsx';

const Router = () => {
  const [loading, setLoading] = useState(false);

  // setTimeout(() => {
  //   setLoading(false);
  // }, 3000);

  return (
    <>
      <BrowserRouter>
        <Switch>
          {loading ? (
            <Route component={Loader} />
          ) : (
            <Route component={Home} exact path="/" />
          )}
          <Route component={Projects} exact path="/projects" />
          <Route component={About} exact path="/about" />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default Router;
