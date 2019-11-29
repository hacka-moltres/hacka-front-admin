import Home from 'components/pages/Home';
import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Menu from 'components/shared/Menu';

export default () => (
  <Fragment>
    <CssBaseline />
    <Menu />

    <main>
      <div style={{ marginTop: 90 }} />

      <Router>
        <Switch>
          <Route path='/' exact component={Home} />
        </Switch>
      </Router>
    </main>
  </Fragment>
);
