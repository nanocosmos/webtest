import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';
import Layout from './layout/Layout';
import LandingPage from './content/LandingPage/LandingPage';
import FreeTrial from './content/free-trial/FreeTrial';
import NanoStreamCloud from './content/nanostream-cloud/NanoStreamCloud';
import GetAQuote from './content/get-a-quote/GetAQuote';
import Playback from './content/playback/Playback';
import Usecases from './content/usecases/Usecases';
import Pricing from './content/pricing/Pricing';
import AboutUs from './content/about-us/AboutUs';
import Careers from './content/careers/Careers';
import Contact from './content/contact/Contact';
import H5Live from './content/h5live/H5Live';
import AppsAndSdks from './content/apps-and-sdks/AppsAndSdks';
import Webcaster from './content/webcaster/Webcaster';
import Videos from './content/videos/Videos';
import Imprint from './content/imprint/Imprint';
import Explore from './content/explore/Explore';
import Video from './content/video/Video';
import Press from './content/press/Press';
import Cdn from './content/cdn/Cdn';
import Analytics from './content/analytics/Analytics';
import Events from './content/events/Events';
import VirtualPresentation from './content/virtual-presentation/VirtualPresentation';
import Blog from './content/blog/Blog';
import Article from './content/article/Article';
import Event from './content/event/Event';
import NotFound from './layout/ui/NotFound/NotFound';


const generateClassName = createGenerateClassName({
    productionPrefix: 'nano',
    seed: 'embedded'
});

document.body.style.margin = 0;
document.body.style.padding = 0;
document.body.style.color = '#fff';
document.body.style.backgroundColor = '#ed7d0e'


const theme = createMuiTheme({
    palette: {
        primary: {
            // light: '',
            main: '#ed7d0e',
            // dark: '#706f6f',
            // contrastText: ''
        },
        secondary: {
            // light: '#8f7666',
            main: '#3e2516',
            // dark: '',
            // contrastText: ''
        },
        error: {
            main: '#000'
        }
    },
    typography: {
        fontFamily: [
            'Source Sans Pro',
            "sans-serif"
        ],
        fontSize: 13,
    },
    overrides: {
        MuiButton: {
            containedPrimary: {
                backgroundColor: '#ed7d0e',
                color: '#fff'
            },
            containedSecondary: {
                backgroundColor: '#fde0cc',
                color: '#3e2516',
                '&:hover': {
                    backgroundColor: '#fde0cc90'
                }
            },
            outlinedPrimary: {
                borderColor: '#ed7d0e',
                color: '#ed7d0e'
            },
            outlinedSecondary: {
                borderColor: '#fde0cc',
                color: '#fde0cc',
                '&:hover': {
                    borderColor: '#fde0cc90'
                }
            },
        }
    }
})
console.log(theme)

const app = (
    <StylesProvider generateClassName={generateClassName}>
        <MuiThemeProvider theme={theme}>
            <Router basename={`${process.env.PUBLIC_URL}`}>
                <Layout>
                    <Switch>
                        <Route exact path="/" component={LandingPage} />
                        <Route path="/free-trial" component={FreeTrial} />
                        <Route path="/nanostream-cloud" component={NanoStreamCloud} />
                        <Route path="/get-a-quote" component={GetAQuote} />
                        <Route path="/playback" component={Playback} />
                        <Route path="/usecases" component={Usecases} />
                        <Route path="/pricing" component={Pricing} />
                        <Route path="/about-us" component={AboutUs} />
                        <Route path="/careers" component={Careers} />
                        <Route path="/contact" component={Contact} />
                        <Route path="/h5live" component={H5Live} />
                        <Route path="/apps-and-sdks" component={AppsAndSdks} />
                        <Route path="/webcaster" component={Webcaster} />
                        <Route path="/videos" component={Videos} />
                        <Route path="/imprint" component={Imprint} />
                        <Route path="/explore" component={Explore} />
                        <Route path="/video" component={Video} />
                        <Route path="/press" component={Press} />
                        <Route path="/cdn" component={Cdn} />
                        <Route path="/analytics" component={Analytics} />
                        <Route path="/events" component={Events} />
                        <Route path="/virtual-presentation" component={VirtualPresentation} />
                        <Route path="/blog" component={Blog} />
                        <Route path="/article" component={Article} />
                        <Route path="/event" component={Event} />
                        <Route path="*" component={NotFound} />/>
        </Switch>
                </Layout>
            </Router>
        </MuiThemeProvider>
    </StylesProvider>
);

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
