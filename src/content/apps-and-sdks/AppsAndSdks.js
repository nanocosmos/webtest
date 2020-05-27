import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import IntroCenterImage from '../../layout/ui/Intro/IntroCenterImage';

import introImage from '../../assets/icons/white-apps.png';
import Explanation from './components/Explanation';
import AddOns from './components/AddOns';
import PricingBanner from '../../layout/ui/Banner/PricingBanner';
import CrossPlatform from '../../layout/ui/CrossPlatform/CrossPlatform';

const useStyles = makeStyles((theme) => ({
  root: {
  }
}))

export default function AppsAndSdks() {
  const classes = useStyles();


  return (
    <div className={classes.root}>
        <IntroCenterImage image={introImage} title="nanoStream Toolkits" subtitle="Live encoding &amp; playback"/>
        <Explanation/>
        <CrossPlatform/>
        <AddOns/>
        <PricingBanner/>
    </div>
  );
}
