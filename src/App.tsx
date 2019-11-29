import About from 'components/pages/About';
import Home from 'components/pages/Home';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

export default () => (
  <Router>
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/about' component={About} />
    </Switch>
  </Router>
);
