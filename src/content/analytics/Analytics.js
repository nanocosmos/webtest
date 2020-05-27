import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import player from '../../assets/icons/white-analytics.png';
import IntroCenterImage from '../../layout/ui/Intro/IntroCenterImage';
import Discover from './components/Discover';
import GoodToKnow from './components/GoodToKnow';
import Information from './components/Information';
import Cdn from './components/Cdn';
import FreeTrialBanner from '../../layout/ui/Banner/FreeTrialBanner';

const useStyles = makeStyles((theme) => ({
  root: {
  }
}))

export default function Analytics() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <IntroCenterImage image={player} title="nanoStream Analytics" subtitle="A great way to monitor and analyze the performance and quality of service of your live streams." />
      <Discover />
      <GoodToKnow />
      <Information/>
      <Cdn />
      <FreeTrialBanner/>
    </div>
  );
}
