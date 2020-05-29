import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import IntroLogoLeft from '../../components/ui/Intro/IntroLogoLeft';
import PricingTable from './components/PricingTable';


const useStyles = makeStyles((theme) => ({
  root: {
      padding: theme.spacing(4)
  }
}))

export default function Pricing() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <IntroLogoLeft title="The right plan for your needs" subtitle="Our pricing and licensing for nanoStream cloud based live video streaming software and services (passthrough streaming)." />
      <PricingTable/>
    </div>
  );
}
