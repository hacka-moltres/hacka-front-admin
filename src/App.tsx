import Home from 'components/pages/Home';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Menu from 'components/shared/Menu';

import './assets/global.css';
import { theme } from 'assets/theme';
import { MuiThemeProvider } from '@material-ui/core';

export default () => (
  <MuiThemeProvider theme={theme}>
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
  </MuiThemeProvider>
);
