import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';

import LandingPage from './LandingPage/LandingPage';
import FreeTrial from './free-trial/FreeTrial';
import NanoStreamCloud from './nanostream-cloud/NanoStreamCloud';
import GetAQuote from './get-a-quote/GetAQuote';
import Playback from './playback/Playback';
import Usecases from './usecases/Usecases';
import Pricing from './pricing/Pricing';
import AboutUs from './about-us/AboutUs';
import Careers from './careers/Careers';
import Contact from './contact/Contact';
import H5Live from './h5live/H5Live';
import AppsAndSdks from './apps-and-sdks/AppsAndSdks';
import Webcaster from './webcaster/Webcaster';
import Videos from './videos/Videos';
import Imprint from './imprint/Imprint';
import Explore from './explore/Explore';
import Video from './video/Video';
import Press from './press/Press';
import Cdn from './cdn/Cdn';
import Analytics from './analytics/Analytics';
import Events from './events/Events';
import VirtualPresentation from './virtual-presentation/VirtualPresentation';
import Blog from './blog/Blog';
import Article from './article/Article';
import Event from './event/Event';
import NotFound from './not-found/NotFound';

const useStyles = makeStyles((theme) => ({
  root: {
  }
}))

export default function App() {
  const classes = useStyles();


  return (
    <div className={classes.root}>
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path="/" component={LandingPage}/>
          <Route path="/free-trial" component={FreeTrial}/>
          <Route path="/nanostream-cloud" component={NanoStreamCloud}/>
          <Route path="/get-a-quote" component={GetAQuote}/>
          <Route path="/playback" component={Playback}/>
          <Route path="/usecases" component={Usecases}/>
          <Route path="/pricing" component={Pricing}/>
          <Route path="/about-us" component={AboutUs}/>
          <Route path="/careers" component={Careers}/>
          <Route path="/contact" component={Contact}/>
          <Route path="/h5live" component={H5Live}/>
          <Route path="/apps-and-sdks" component={AppsAndSdks}/>
          <Route path="/webcaster" component={Webcaster}/>
          <Route path="/videos" component={Videos}/>
          <Route path="/imprint" component={Imprint}/>
          <Route path="/explore" component={Explore}/>
          <Route path="/video" component={Video}/>
          <Route path="/press" component={Press}/>
          <Route path="/cdn" component={Cdn}/>
          <Route path="/analytics" component={Analytics}/>
          <Route path="/events" component={Events}/>
          <Route path="/virtual-presentation" component={VirtualPresentation}/>
          <Route path="/blog" component={Blog}/>
          <Route path="/article" component={Article}/>
          <Route path="/event" component={Event}/>
          <Route path="*" component={NotFound}/>/>
        </Switch>        
      </Router>
      {/* <Usecases/> */}
    </div>
  );
}

