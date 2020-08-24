import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Icon,
  IconButton,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const useStyles = makeStyles((theme) => ({
  details: {
    fontSize: 15,
  },
  toolbar: {
    justifyContent: 'space-between',
  },
  left: {
    flex: 1,
  },
  right: {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-end',
  },
}));

const MenuBar = ({ contacts, handleLogout }) => {
  const classes = useStyles();

  return (
    <AppBar position="sticky">
      <Toolbar>
        <div className={classes.left}>
          <Typography variant="h6" className={classes.details}>
            {contacts.name} <br />
            {contacts.email}
          </Typography>
        </div>
        <div className={classes.right}>
          <IconButton color="inherit" onClick={handleLogout}>
            <ExitToAppIcon />
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default MenuBar;
