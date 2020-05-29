import React,  { }  from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Offer from './components/Offer';
import IntroLogoRight from '../../components/ui/Intro/IntroLogoRight';
import Positions from './components/Positions';
import OpenApplication from './components/OpenApplication';

const useStyles = makeStyles((theme) => ({
  root: {
  }
}))

export default function Careers() {
  const classes = useStyles();


  return (
    <div className={classes.root}>
      <IntroLogoRight title="We are hiring!" subtitle="Interested in Live Streaming? Work in a creative team with high skills in Berlin? Join our team and work with us."/>
      <Offer />
      <Positions />
      <OpenApplication />
    </div>
  );
}
