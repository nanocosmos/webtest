import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import VideoPlayer from '../../../layout/ui/Video/VideoPlayer';

import events from '../../../assets/icons/white-h5live.png'
import HeaderWrapper from '../../../layout/withStyles/Header/Wrapper';
import BoldTitle from '../../../layout/withStyles/Header/BoldTitle';
import Underline from '../../../layout/withStyles/Header/Underline';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(4)
    },
    videoWrapper: {
        [theme.breakpoints.up('xs')]: {
            marginTop: theme.spacing(2),
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
        },
        [theme.breakpoints.up('sm')]: {
            flexDirection: 'row',
            flexWrap: 'wrap',
            alignItems: 'flex-start'
        },
        [theme.breakpoints.up('md')]: {
            flexWrap: 'unset'
        },
    },
    whiteBackground: {
        backgroundColor: theme.palette.common.white
    }
}))

export default function Themes(props) {
    const classes = useStyles();

    const themeWrapper = clsx(classes.root, {
        [classes.whiteBackground]: props.backgroundColor === "white"
    })

    return (
        <div className={themeWrapper}>
            <HeaderWrapper align="center">
                <BoldTitle color={props.backgroundColor === "white" ? "primary" : "white"}>
                    {props.title}
                </BoldTitle>
                <Underline color="secondary">
                    {props.underline}
                </Underline>
            </HeaderWrapper>
            <div className={classes.videoWrapper}>
                {
                    props.videos.map((video, index) => (
                            <VideoPlayer
                                key={`${video.title}-${index}`}
                                image={events}
                                videoId={video.videoId}
                                tag={video.tag}
                                title={video.title}
                                description={video.description}
                            />
                    ))
                }
            </div>
        </div>
    );
}
