import React,  { useState, useEffect, useReducer }  from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Intro from './components/Intro';
import Usecases from './components/Usecases';
import Discover from './components/Discover';
import Faq from './components/Faq';
import NextStepBanner from '../../layout/ui/Banner/NextStepBanner';
import OurProducts from './components/OurProducts';


const useStyles = makeStyles((theme) => ({
  root: {
  }
}))

export default function LandingPage() {
  const classes = useStyles();


  return (
    <div className={classes.root}>
      <Intro/>
      <OurProducts/>
      <Usecases/>
      <Discover/>
      <Faq/>
      <NextStepBanner/>
    </div>
  );
}
