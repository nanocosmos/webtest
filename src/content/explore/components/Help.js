import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
      padding: theme.spacing(4)
  }
}))

export default function Help() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
    </div>
  );
}
