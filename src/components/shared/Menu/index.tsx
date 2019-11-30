import React, { memo } from 'react';
import { AppBar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AccountCircle from '@material-ui/icons/AccountCircle';
import logo from 'assets/images/logo.png';

const useStyles = makeStyles(() => ({
  appBar: {
    height: 120,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    padding: '0 70px'
  },
  account: {
    fontSize: 45
  }
}));

const Menu = memo(() => {
  const classes = useStyles({});

  return (
    <AppBar position='fixed' className={classes.appBar}>
      <div>
        <img src={logo} alt='Logo' />
      </div>
      <div>
        <AccountCircle className={classes.account} />
      </div>
    </AppBar>
  );
});

export default Menu;
