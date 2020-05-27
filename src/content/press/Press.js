import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import player from '../../assets/icons/white-press.png';
import IntroCenterImage from '../../layout/ui/Intro/IntroCenterImage';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: 'calc(100vh - 200px)'
  }
}))

export default function Press() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <IntroCenterImage image={player} title="Press Releases" subtitle="Keep in touch with nanocosmos!" />
    </div>
  );
}
