import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import worldIcon from '../../assets/icons/white-integration.png';
import IntroCenterImage from '../../components/ui/Intro/IntroCenterImage';

import Quote from './components/Quote';
import Blog from './components/Blog';
import ExploreBanner from '../../components/ui/Banner/ExploreBanner';

const useStyles = makeStyles((theme) => ({
  root: {
  }
}))

export default function Usecases() {
  const classes = useStyles();


  return (
    <div className={classes.root}>
      <IntroCenterImage image={worldIcon} title="Our Usecases" subtitle="Integrate the high quality nanoStream video encoding and playback software easily into your business endeavors"/>
      <Blog/>
      <Quote/>
      <ExploreBanner/>
    </div>
  );
}
