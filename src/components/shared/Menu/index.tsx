import React, { memo } from 'react';
import { AppBar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    paddingLeft: 30
  }
}));

const Menu = memo(() => {
  const classes = useStyles({});

  return (
    <AppBar position='fixed' className={classes.appBar}>
      <h1>Insightzz</h1>
    </AppBar>
  );
});

export default Menu;
