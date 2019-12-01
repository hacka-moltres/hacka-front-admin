import React, { memo } from 'react';
import { AppBar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import perfil from 'assets/images/image-perfil.png';
import { Avatar } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  appBar: {
    height: 80,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    padding: '0 70px',
    backgroundColor: '#0069FF',
    boxShadow: 'none'
  },
  account: {
    fontSize: 45
  },
  title: {
    fontWeight: 400,
    fontSize: '1.8rem'
  },
  avatar: {
    fontWeight: 400,
    display: 'flex',
    alignItems: 'center'
  }
}));

const Menu = memo(() => {
  const classes = useStyles({});

  return (
    <AppBar position='fixed' className={classes.appBar}>
      <div>
        <h3 className={classes.title}>EDUZZ INSIGHTS</h3>
      </div>
      <div className={classes.avatar}>
        <div style={{ marginRight: 20 }}>Dan Palmieri</div>
        <Avatar src={perfil} />
      </div>
    </AppBar>
  );
});

export default Menu;
