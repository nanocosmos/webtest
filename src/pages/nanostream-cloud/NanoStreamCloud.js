import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Overview from './components/Overview';
import KeyFeatures from './components/KeyFeatures';
import Usecases from './components/Usecases';
import PricingTable from '../pricing/components/PricingTable';
import FreeTrialBanner from '../../components/ui/Banner/FreeTrialBanner';
import IntroCenterImage from '../../components/ui/Intro/IntroCenterImage';

import introImage from '../../assets/icons/white-rocket.png';
import Parts from './components/Parts';

const useStyles = makeStyles((theme) => ({
  root: {
  }
}))

export default function NanoStreamCloud() {
  const classes = useStyles();


  return (
    <div className={classes.root}>
      <IntroCenterImage image={introImage} title="nanoStream Cloud including bintu.live" subtitle="Explore new business opportunities with interactive live streaming for your brand!"/>
      <Parts />
      <Overview/>
      <KeyFeatures/>
      <Usecases/>
      <PricingTable/>
      <FreeTrialBanner/>
    </div>
  );
}
