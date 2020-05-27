import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import IntroCenterImage from '../../layout/ui/Intro/IntroCenterImage';

import introImage from '../../assets/icons/white-play.png';
import Explanation from './components/Explanation';
import AddOns from './components/AddOns';
import PricingBanner from '../../layout/ui/Banner/PricingBanner';

const useStyles = makeStyles((theme) => ({
  root: {
  }
}))

export default function H5Live() {
  const classes = useStyles();


  return (
    <div className={classes.root}>
        <IntroCenterImage image={introImage} title="nanoStream H5Live Player" subtitle="Plugin-free live video player with ultra-low latency"/>
        <Explanation/>
        <AddOns/>
        <PricingBanner/>
    </div>
  );
}
