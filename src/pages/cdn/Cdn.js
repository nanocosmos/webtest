import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import player from '../../assets/icons/white-cdn.png';
import IntroCenterImage from '../../components/ui/Intro/IntroCenterImage';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: 'calc(100vh - 200px)'
  }
}))

export default function Cdn() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <IntroCenterImage image={player} title="nanoStream CDN" subtitle="Reach your viewers all over the world through a trustful live streaming Cloud." />
    </div>
  );
}
