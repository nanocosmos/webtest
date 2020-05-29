import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import IntroLogoLeft from '../../components/ui/Intro/IntroLogoLeft';
import FreeTrialBanner from '../../components/ui/Banner/FreeTrialBanner';
import PricingBanner from '../../components/ui/Banner/PricingBanner';

const useStyles = makeStyles((theme) => ({
  root: {
      minHeight: 'calc(100vh - 200px)'
  }
}))

export default function Explore() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <IntroLogoLeft title="Explore nanocosmos" subtitle="Experience and explore nanoStream Cloud, our ULL CDN with the integrated nanoStream H5Live Player, on Mobile or Desktop Browser Platforms." />
      <FreeTrialBanner/>
      <PricingBanner/>
    </div>
  );
}
