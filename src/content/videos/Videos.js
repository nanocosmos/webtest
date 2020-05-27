import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import * as link from '../../utilities/link-config';

import IntroLogoRight from '../../layout/ui/Intro/IntroLogoRight';
import FreeTrialBanner from '../../layout/ui/Banner/FreeTrialBanner';
import Themes from './components/Themes';

const useStyles = makeStyles((theme) => ({
  root: {
  }
}))

export default function Videos() {
  const classes = useStyles();
  const [themes] = useState([
    {
      title: "Tutorials",
      underline: "In these videos, Eric will show you how you can go live around the world in 1 second on any device or mobile browser. Learn how to live stream in ultra-low latency with nanoStream Cloud, and gamify your content!",
      videos: [
        { videoId: "ZwWl0KI2vzA", tag: "Tutorial", title: "Live stream directly from your browser to nanoStream Cloud", description: "Learn how to stream directly from your browser with the included WebRTC.live into nanoStream Cloud, and playback on any mobile or desktop browser with H5Live Player." },
        { videoId: "1-Ut2aENSaY", tag: "Tutorial", title: "Live streaming with nanoStream Cloud and nanoStream Apps", description: "Start streaming from your smartphone with nanoStream Apps. Learn how to send your streams to nanoStream Cloud, and playback on any mobile or desktop browser with H5Live Player." },
        { videoId: "GcisLMSV3ug", tag: "Tutorial", title: "nanoStream Cloud in combination with OBS Live Encoder", description: "OBS is one of the most popular free live encoders available nowadays. Watch this video to learn how to stream into nanoStream Cloud, and go live around the world in 1 second." },
      ]
    },
    {
      title: "Interviews",
      underline: "Curious about our vision and perspectives for the present and the future? Watch one of the interviews given by our CEO, Oliver Lietz, and learn how we work to take your live streams around the world in 1 second.",
      videos: [
        { videoId: "SvDsn1pnZFs", tag: "#NAB2019", title: "What is nanoStream Cloud?", description: "In this interview, Joe fom Broadcast Beat asks Oliver Lietz, nanocosmos CEO, about nanoStream Cloud, and how it enables ultra-low latency on any mobile and desktop browser." },
        { videoId: "Ra-2atoegTA", tag: "#NAB2019", title: "Interactive use cases with nanoStream Cloud", description: "Maria Ingold from CMIP interviews Oliver Lietz at the NAB Show 2019, and asks which use cases can benefit from nanostream Cloud." },
        { videoId: "6c3Nz4q_sU8", tag: "#SMW2018", title: "What defines the new OTT experiences?", description: "New aplications go beyond standard OTT, becoming more interactive and enbling several new use cases. Watch this video to learn more about interactive live streaming in the OTT world." },
      ]
    },
    {
      title: "Presentations",
      underline: "Watch our product presentations and panel sessions to learn more details about nanoStream Cloud, use cases and opportunities.",
      videos: [
        { videoId: "xACeRyKnjxs", tag: "#SME2018", title: "Interactive Live Streaming CDN for Ultra-Low Latency", description: "In this presentation, Oliver Lietz, nanocosmos CEO, brings up the biggest challenges in interactive live streaming and how nanoStream Cloud helps you to tackle them." },
        { videoId: "6F9C-Y1ielo", tag: "#NAB2019", title: "Ultra-Low-Latency Live Streaming with nanoStream Cloud", description: "In this video, Oliver Lietz took over the CMIP stage at the NAB Show 2019, and presented how nanoStream Cloud has been helping businesses worldwide to go live around the world in 1 second." },
        { videoId: "nsEMJP6zopI", tag: "#IBC2018", title: "Tackling Latency in Live Streaming: Reducing the Delay Between Broadcast and OTT", description: "In this presentation, Oliver Lietz has joined a panel session at the IBC Show 2018 to discuss how to tackle latency for use cases where every second counts." },
      ]
    },
    {
      title: "Events",
      underline: "We are joining several events around the world every year. Keep up with our best moments!",
      videos: [
        { videoId: "Fc12IumdLHI", tag: "#IBC2018", title: "IBC 2018", description: "Couldn't make it to the IBC Show 2018? No worries, we have put together the best moments for you!" }
      ]
    },
  ])

  const [videos, setVideos] = useState([])

  const fetchVideos = () => {
    axios.get(`${link.STRAPI_BASE}/videos?_sort=section:DESC`)
      .then((response) => {
        console.log(response.data)
        let videoObjects = response.data;
        setVideos(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  useEffect(() => {
    fetchVideos();
  }, [])

  return (
    <div className={classes.root}>
      <IntroLogoRight title="Videos" subtitle="Keep up with our videos to learn how to live stream around the world in 1 second on any device with nanoStream Cloud!" />
      {
        themes.map((theme, index) => (
          <Themes
            key={`${theme.title}-${index}`}
            title={theme.title}
            underline={theme.underline}
            videos={theme.videos}
            backgroundColor={index % 2 === 0 ? "white" : "inherit"}
          />
        ))
      }
      <FreeTrialBanner />
    </div>
  );
}