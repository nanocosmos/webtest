import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(4),
        color: theme.palette.common.white
    },
    quote: {
        [theme.breakpoints.up('xs')]: {
            width: '90%',
            fontStyle: 'italic',
            lineHeight: 1.2,
            fontSize: '1rem',
            margin: '0 auto',
            textAlign: 'justify'
        },
        [theme.breakpoints.up('md')]: {
            width: '60%',
            marginBottom: theme.spacing(0.5)
        },
        [theme.breakpoints.up('lg')]: {
            width: '50%'
        }
    },
    citation: {
        [theme.breakpoints.up('xs')]: {
            color: theme.palette.secondary.main,
            width: '90%',
            margin: '0 auto',
            textAlign: 'right',
            fontWeight: 900
        },
        [theme.breakpoints.up('md')]: {
            width: '60%'
        },
        [theme.breakpoints.up('lg')]: {
            width: '50%'
        }
    }
}))

export default function Quote() {
    const classes = useStyles();


    return (
        <div className={classes.root}>
            <Typography className={classes.quote} variant="body1">
                &quot;Our customers have asked for complete end-to-end software solutions to achieve the quality of service they need.
                This includes highest quality video encoding with adaptive bitrate, even in unstable networks, combined with low end-to-end latency. <br/>
                Our customers have built diverse apps for video communication and live streaming.
                They use our screen sharing feature in webcasting, e-learning, and sports. <br/>
                Apps built with nanoStream enable journalists to send breaking news video material directly and safely to broadcasting stations or talents to promote their work and connect with fans personally.&quot;
            </Typography>
            <Typography className={classes.citation} variant="body2">
                &#8213; Oliver Lietz, CEO
            </Typography>
        </div>
    );
}
