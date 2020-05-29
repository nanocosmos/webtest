import React,  { useState, useEffect, useReducer }  from 'react';
import { makeStyles } from '@material-ui/core/styles';
import * as link from '../../utilities/link-config';

import FullDemo from './components/FullDemo';
import QuickTests from './components/QuickTests';
import NextStepBanner from '../../components/ui/Banner/NextStepBanner';
import WebcasterInfo from './components/WebcasterInfo';
import IntroLogoRightButtons from '../../components/ui/Intro/IntroLogoRightButtons';

const useStyles = makeStyles((theme) => ({
  root: {
  }
}))

export default function FreeTrial() {
  const classes = useStyles();


  return (
    <div className={classes.root}>
      <IntroLogoRightButtons 
        title="Get ready to stream in ultra-low latency" 
        subtitle="Try the quick demo of our nanoStream Webcaster, or get a 7 days full demo account for the nanoStream Cloud!"
        button1title="Get started"
        button1link={link.PAGE_PRICING}
        button2title="explore"
        button2link={link.PAGE_VIDEOS}
        />
      <QuickTests/>
      <WebcasterInfo/>
      <FullDemo/>
      <NextStepBanner/>
    </div>
  );
}
