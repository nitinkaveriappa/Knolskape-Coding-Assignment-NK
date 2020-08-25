import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Grid, Link, Button } from '@material-ui/core';
import btn_google_dark_normal_ios from '../../Resources/btn_google_dark_normal_ios.svg';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  buttonLink: { textDecoration: 'none' },
}));

const Login = () => {
  const classes = useStyles();

  useEffect(() => {
    document.title = `Login`;
  }, []);

  return (
    <Box
      style={{
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Link
            className={classes.buttonLink}
            href={`${process.env.REACT_APP_API}/auth/google`}
          >
            <Button variant="contained" color="primary">
              <img
                src={btn_google_dark_normal_ios}
                style={{ paddingRight: '8px' }}
                alt="Google Icon"
              />
              Login with Google
            </Button>
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Login;
