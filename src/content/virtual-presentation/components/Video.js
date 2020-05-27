import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import VideoPlayer from 'react-responsive-embed';
import { Typography, Button } from '@material-ui/core';

import pdf from '../../../assets/pdf/nanocosmos-virtual-presentation.pdf'
import { GetApp } from '@material-ui/icons';
import Overline from '../../../layout/withStyles/Header/Overline';
import BoldTitle from '../../../layout/withStyles/Header/BoldTitle';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(4)
    },
    videoPlayer: {
        [theme.breakpoints.up('xs')]: {
            maxWidth: '100%',
            maxHeight: '100%',
            margin: '0 auto',
        },
        [theme.breakpoints.up('sm')]: {
            maxWidth: '550px',
            maxHeight: '100%'
        },
        [theme.breakpoints.up('md')]: {
            maxWidth: '700px',
            maxHeight: '100%'
        },
    },
    titleWrapper: {
        [theme.breakpoints.up('xs')]: {
            width: '80%',
            margin: '0 auto',
            marginBottom: theme.spacing(2),
            textAlign: 'center',
        },
        [theme.breakpoints.up('md')]: {
            width: '50%'
        }
    },
    link: {
        textDecoration: 'none',
        color: theme.palette.secondary.main
    },
    downloadWrapper: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        [theme.breakpoints.up('xs')]: {
            maxWidth: '100%',
            maxHeight: '100%',
            margin: '0 auto',
            marginTop: theme.spacing(2),
        },
        [theme.breakpoints.up('sm')]: {
            maxWidth: '550px',
            maxHeight: '100%'
        },
        [theme.breakpoints.up('md')]: {
            maxWidth: '700px',
            maxHeight: '100%'
        },
    }
}))

export default function Video() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.titleWrapper}>
                <Overline variant="button" color="secondary">
                    Oliver Lietz, Founder &amp; CEO presents:
                </Overline>
                <BoldTitle color="white">
                    Engaging Your Viewers With Ultra Low Latency Live Video Streaming
                </BoldTitle>
            </div>
            <div className={classes.videoPlayer}>
                <VideoPlayer src='https://www.youtube.com/embed/46_q7JfbdAU' allowFullScreen />
            </div>
            <div className={classes.downloadWrapper}>
                <Button startIcon={<GetApp/>}>
                    <a className={classes.link} href={pdf} download>Download PDF</a>
                </Button>
            </div>
        </div>
    );
}
