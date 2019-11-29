import React, { memo, Fragment } from 'react';
import { Link } from 'react-router-dom';

export default memo(() => (
  <Fragment>
    <Link to='/about'>About Page</Link>

    <h1>Welcome to React with TS</h1>
  </Fragment>
));
