import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import NotMatching from '../../layout/ui/NotFound/NotFound'

const useStyles = makeStyles((theme) => ({
  root: {
      padding: theme.spacing(4),
      minHeight: 'calc(100vh - 260px)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
  }
}))

export default function NotFound() {
  const classes = useStyles();


  return (
    <div className={classes.root}>
        <NotMatching/>
    </div>
  );
}
