import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import * as link from '../../utilities/link-config';

import IntroLogoLeftButtons from '../../layout/ui/Intro/IntroLogoLeftButtons';
import Player from './components/Player';


const useStyles = makeStyles((theme) => ({
  root: {
      padding: theme.spacing(4)
  }
}))

export default function Playback() {
  const classes = useStyles();


  return (
    <div className={classes.root}>
      <IntroLogoLeftButtons 
        title="nanoStream H5Live Player" 
        subtitle="You are currently watching a livestream from the nanoStream Cloud created by the nanoStream Webcaster. You can easily integrate the player on your own website." 
        button1title="About nanocosmos"
        button1link={link.LANDING_PAGE} 
        button2title="try the nanostream webcaster"
        button2link={link.PAGE_FREE_TRIAL}
      />
      <Player/>
    </div>
  );
}
