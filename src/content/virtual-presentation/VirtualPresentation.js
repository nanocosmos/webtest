import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import IntroLogoLeft from '../../layout/ui/Intro/IntroLogoLeft';
import FreeTrialBanner from '../../layout/ui/Banner/FreeTrialBanner';
import Video from './components/Video';
import Text from './components/Text';

const useStyles = makeStyles((theme) => ({
  root: {
  }
}))

export default function VirtualPresentation() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <IntroLogoLeft title="2020 Virtual Presentation" subtitle="Download or watch!" />
      <Text/>
      <Video/>
      <FreeTrialBanner/>
    </div>
  );
}
