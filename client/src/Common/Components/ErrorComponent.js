import React from 'react';
import { Link, Typography } from '@material-ui/core';

const ErrorComponent = ({ errorMessage }) => {
  return (
    <>
      <Typography>
        Error - {`${errorMessage}`}
        <br />
        <Link href="#">Go to Home Page</Link>
      </Typography>
    </>
  );
};

export default ErrorComponent;
