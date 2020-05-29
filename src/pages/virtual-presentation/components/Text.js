import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import VideoPlayer from 'react-responsive-embed';
import { Typography, Button } from '@material-ui/core';

import pdf from '../../../assets/pdf/nanocosmos-virtual-presentation.pdf'

const useStyles = makeStyles((theme) => ({
    root: {
        [theme.breakpoints.up('xs')]: {
            backgroundColor: theme.palette.common.white,
            padding: theme.spacing(4),
        },
        [theme.breakpoints.up('sm')]: {

        },
        [theme.breakpoints.up('md')]: {
        },
    },
    textWrapper: {
        [theme.breakpoints.up('xs')]: {
            padding: theme.spacing(4),
        },
        [theme.breakpoints.up('sm')]: {

        },
        [theme.breakpoints.up('md')]: {
            maxWidth: '80%',
            margin: '0 auto'
        },
    },
    intro: {
        fontSize: '1.2em',
        lineHeight: 1,
        fontWeight: 800,
        color: theme.palette.primary.main
    },
    text: {
        fontSize: '1em',
        lineHeight: 1,
        color: theme.palette.secondary.main
    }

}))

export default function Text() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.textWrapper}>
                <Typography className={classes.intro} variant="button">
                    To cover the latest trends and make up for missed opportunities at recently cancelled shows, we are pleased to share our latest Virtual Presentation!
                </Typography>
                <Typography className={classes.text} variant="body1">
                    nanocosmos Founder &amp; CEO, Oliver Lietz, will present different applications and use cases for audience engagement that are being enabled by ultra-low latency live streaming. Besides that, he will analyze market trends, discuss major challenges and reveal the latest updates for our nanoStream Cloud service. 
                    Join this session to learn how to engage your audience with ultra-low latency live streaming!
                </Typography>
            </div>
        </div>
    );
}
