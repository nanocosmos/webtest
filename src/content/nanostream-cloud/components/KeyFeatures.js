import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

import cdn from '../../../assets/icons/white-cdn.png';
import h5live from '../../../assets/icons/white-play.png';
import webcaster from '../../../assets/icons/white-webcaster.png';
import bintu from '../../../assets/icons/white-bintu.png';
import integration from '../../../assets/icons/white-integration.png';
import support from '../../../assets/icons/white-support.png';

import KeyFeature from '../../../layout/ui/KeyFeature';
import CrossPlatform from '../../../layout/ui/CrossPlatform/CrossPlatform';
import HeaderWrapper from '../../../layout/withStyles/Header/Wrapper';
import BoldTitle from '../../../layout/withStyles/Header/BoldTitle';

const useStyles = makeStyles((theme) => ({
    root: {
        [theme.breakpoints.up('xs')]: {
            padding: theme.spacing(4)
        },
        [theme.breakpoints.up('md')]: {
        }
    },
    contentWrapper: {
        [theme.breakpoints.up('xs')]: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        },
        [theme.breakpoints.up('sm')]: {
            flexDirection: 'row',
            justifyContent: 'center'
        }
    },
    featureWrapper: {
        [theme.breakpoints.up('xs')]: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center'
        },
        [theme.breakpoints.up('sm')]: {
            flexDirection: 'row',
        },
        [theme.breakpoints.up('sm')]: {
            flexDirection: 'column',
            alignItems: 'center'
        }
    },
    featureCard: {
        [theme.breakpoints.up('xs')]: {
            maxWidth: '1000px',
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            flexWrap: 'wrap'
        },
        [theme.breakpoints.up('sm')]: {
        }
    }
}))

export default function Intro() {
    const classes = useStyles();


    return (
        <div className={classes.root}>
            <HeaderWrapper align="center">
                <BoldTitle color="white">
                    Our key features
                </BoldTitle>
            </HeaderWrapper>
            <div className={classes.contentWrapper}>
                <div className={classes.featureWrapper}>
                        <KeyFeature
                            image={cdn}
                            title="Worldwide CDN"
                            text="for ultra-low-latency delivery with a global scale on any platform!"
                        />
                        <KeyFeature
                            image={h5live}
                            title="nanoStream H5Live"
                            text="the unique live player for all browser with ultra-low-latency on any platform!"
                        />
                </div>
                <div className={classes.featureWrapper}>
                        <KeyFeature
                            image={webcaster}
                            title="nanoStream Webcaster"
                            text="live broadcast, webcast or chat instantly from your browser."
                        />
                        <KeyFeature
                            image={bintu}
                            title="bintu.live"
                            text="to create, tag, group and manage streams."
                        />
                </div>
                <div className={classes.featureWrapper}>
                        <KeyFeature
                            image={integration}
                            title="Easy integration"
                            text="with existing live streaming architectures"
                        />
                        <KeyFeature
                            image={support}
                            title="Great support"
                            text="based on our long-term experience."
                        />
                </div>
            </div>
            <CrossPlatform />
        </div>
    );
}
