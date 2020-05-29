import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import EmbeddedVideo from './components/EmbeddedVideo';
import IntroLogoLeft from '../../components/ui/Intro/IntroLogoLeft';
import ExploreBanner from '../../components/ui/Banner/ExploreBanner';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: 'calc(100vh - 200px)'
  }
}))

const getUrlId = (url) => {
  let params = new URLSearchParams(url);
  if (params.has("video")) {
    return params.get("video")
  }
}

export default function Video() {
  const classes = useStyles();
  const [videoId] = useState(getUrlId(window.location.search))

  return (
    <div className={classes.root}>
      <IntroLogoLeft title="Keep in touch with nanocosmos" subtitle="Watch the video below!" />
      <EmbeddedVideo/>
      <ExploreBanner/>
    </div>
  );
}
