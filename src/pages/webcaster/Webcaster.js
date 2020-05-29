import React,  { useState, useEffect, useReducer }  from 'react';
import { makeStyles } from '@material-ui/core/styles';

import introImage from '../../assets/icons/white-webcasts.png';

import IntroCenterImage from '../../components/ui/Intro/IntroCenterImage';
import Explanation from './components/Explanation';
import AddOns from './components/AddOns';
import QuickTests from '../free-trial/components/QuickTests';
import WebcasterInfo from '../free-trial/components/WebcasterInfo';
import NextStepBanner from '../../components/ui/Banner/NextStepBanner';

const useStyles = makeStyles((theme) => ({
  root: {
  }
}))

export default function Webcaster() {
  const classes = useStyles();


  return (
    <div className={classes.root}>
      <IntroCenterImage image={introImage} title="nanoStream Webcaster" subtitle="The nanoStream Webcaster is perfect for browser-based interactive live streaming use cases and screen sharing."/>
      <Explanation/>
      <AddOns/>
      <QuickTests/>
      <WebcasterInfo/>
      <NextStepBanner/>
    </div>
  );
}
