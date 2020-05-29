import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import VideoPlayer from 'react-responsive-embed';
import { Typography } from '@material-ui/core';

import player from '../../../assets/icons/white-h5live.png'
import HeaderWrapper from '../../../components/withStyles/Header/Wrapper';
import Overline from '../../../components/withStyles/Header/Overline';
import BoldTitle from '../../../components/withStyles/Header/BoldTitle';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(4),
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
    image: {
        [theme.breakpoints.up('xs')]: {
            height: '250px',
            display: 'block',
            margin: '0 auto'
        },
        [theme.breakpoints.up('sm')]: {
        },
        [theme.breakpoints.up('md')]: {
            height: '50vh'
        }
    },
    imageWrapper: {
        [theme.breakpoints.up('xs')]: {
            height: 360,
            width: 480,
            maxWidth: '100%',
            margin: '0 auto',
            marginTop: theme.spacing(2),
            backgroundColor: theme.palette.primary.light,
            borderRadius: theme.spacing(0.5),
            boxShadow: theme.shadows[8]
        },
        [theme.breakpoints.up('sm')]: {
        },
        [theme.breakpoints.up('md')]: {
        },
    }
}))

const getParams = (url) => {
    let params = new URLSearchParams(url);
    if (params.has("watch")) { return params.get("watch") }
    else {
        return false
    }
}

export default function EmbeddedVideo() {
    const classes = useStyles();
    const [videoId] = useState(getParams(window.location.search))

    return (
        <div className={classes.root}>
            <HeaderWrapper align="center">
                <Overline color="secondary" variant="button">
                    Lorem ipsum dolor sit amet
                </Overline>
                <BoldTitle color="white">
                    Lorem ipsum dolor sit amet
                </BoldTitle>
            </HeaderWrapper>
            <div className={classes.videoPlayer}>
                {
                    videoId
                        ? <VideoPlayer src={`https://www.youtube.com/embed/${videoId}`} allowFullScreen />
                        :
                        <div className={classes.imageWrapper}>
                        </div>
                }
            </div>
        </div>
    );
}
