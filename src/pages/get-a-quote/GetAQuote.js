import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Quote from './components/Quote';

const useStyles = makeStyles((theme) => ({
  root: {
  }
}))

export default function GetAQuote() {
  const classes = useStyles();
  
  return (
    <div className={classes.root}>
      <Quote/>
    </div>
  );
}
