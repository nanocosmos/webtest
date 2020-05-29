import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

import Customer from '../../../components/ui/Customer';
import HeaderWrapper from '../../../components/withStyles/Header/Wrapper';
import BoldTitle from '../../../components/withStyles/Header/BoldTitle';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(4),
    color: theme.palette.common.white,
    backgroundColor: theme.palette.primary.light
  },
  customerWrapper: {
    width: '80%',
    margin: '0 auto',
    padding: theme.spacing(2)
  }
}))

export default function Review() {
  const classes = useStyles();


  return (
    <div className={classes.root}>
      <HeaderWrapper align="center">
        <BoldTitle color="white">Happy Customers</BoldTitle>
      </HeaderWrapper>
      <div className={classes.customerWrapper}>
        <Customer />
      </div>
    </div>
  );
}
