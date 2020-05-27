import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import windows from '../../../assets/platform/white-windows.png';
import playstore from '../../../assets/platform/white-playstore.png';
import macos from '../../../assets/platform/white-macos.png';
import browser from '../../../assets/platform/white-browser.png';
import appstore from '../../../assets/platform/white-appstore.png';

import Platform from './Platform';

const useStyles = makeStyles((theme) => ({
    root: {
        [theme.breakpoints.up('xs')]: {
            textAlign: 'center',
            paddingTop: theme.spacing(2),
        },
        [theme.breakpoints.up('sm')]: {
        }
    },
    plattformWrapper: {
        [theme.breakpoints.up('xs')]: {
            marginTop: theme.spacing(1),
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap'
        },
        [theme.breakpoints.up('sm')]: {
            flexDirection: 'row',
        }
    },
    introWrapper: {
        [theme.breakpoints.up('xs')]: {
            lineHeight: 1.2,
            color: theme.palette.secondary.main
        },
        [theme.breakpoints.up('sm')]: {
        }
    }
}))

export default function CrossPlatform() {
    const classes = useStyles();
    let platforms = [
        { logo: appstore, title: "iOS", kind: "App" },
        { logo: playstore, title: "Android", kind: "App" },
        { logo: windows, title: "Windows", kind: "App" },
        { logo: macos, title: "macOs", kind: "App" },
        { logo: browser, title: "Browser", kind: "Web" }
    ]

    return (
        <div className={classes.root}>
            <Typography className={classes.introWrapper} variant="subtitle2">
                True cross-platform nanoStream Software Toolkits, Apps and SDKs for encoding and playback available for
            </Typography>
            <div className={classes.plattformWrapper}>
                {
                    platforms.map((platform, index) => (
                        <Platform key={`${platform}-${index}`} logo={platform.logo} title={platform.title} kind={platform.kind}/>
                    ))
                }
            </div>
        </div>
    );
}
