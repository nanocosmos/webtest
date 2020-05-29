import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Youtube from 'react-youtube';

import { Typography } from '@material-ui/core';
import VideoModal from './VideoModal';

const useStyles = makeStyles((theme) => ({
    root: {
        [theme.breakpoints.up('xs')]: {
            width: '320px',
            borderRadius: theme.spacing(0.5),
            backgroundColor: theme.palette.common.white,
            boxShadow: theme.shadows[4],
            margin: theme.spacing(1),
            display: 'flex',
            flexDirection: 'column',
            height: '100%'
        },
        [theme.breakpoints.up('sm')]: {
        }
    },
    descriptionWrapper: {
        color: theme.palette.secondary.light,
        padding: theme.spacing(1),
        backgroundColor: theme.palette.common.white,
        borderBottomLeftRadius: theme.spacing(0.5),
        borderBottomRightRadius: theme.spacing(0.5),
        minHeight: 150,
        height: '100%'
    },
    overlineWrapper: {
        backgroundColor: theme.palette.primary.main,
        display: 'inline-block',
        borderRadius: theme.spacing(0.5)
    },
    overline: {
        marginLeft: theme.spacing(1),
    },
    title: {
        fontWeight: 700,
        marginTop: theme.spacing(0.5),
        color: theme.palette.secondary.main,
        lineHeight: 1
    },
    underline: {
        color: theme.palette.secondary.light,
        lineHeight: 1
    },
    image: {
        height: '150px',
        '&:hover': {
            transform: 'scale(1.02)',
            cursor: 'pointer'
        }
    },
    imageWrapper: {
        [theme.breakpoints.up('xs')]: {
            backgroundColor: theme.palette.primary.main,
            borderTopLeftRadius: theme.spacing(0.5),
            borderTopRightRadius: theme.spacing(0.5),
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: '320px',
            height: '240px',
            '&:hover': {
                cursor: 'pointer'
            },
        }
    },
    button: {
        padding: theme.spacing(0.5, 1, 0.5, 1),
        color: theme.palette.common.white
    },
    youtube: {
        borderTopLeftRadius: theme.spacing(0.5),
        borderTopRightRadius: theme.spacing(0.5)
    },
    videoWrapper: {
        backgroundColor: theme.palette.common.white,
        borderTopLeftRadius: theme.spacing(0.5),
        borderTopRightRadius: theme.spacing(0.5)
    }
}))

export default function VideoPlayer(props) {
    const classes = useStyles();
    const [showPlayer, setShowPlayer] = useState(false);
    const settings = {
        width: '320',
        height: '240'
    }

    const startPlayerPreview = () => {
        setShowPlayer(true);
    }

    return (
        <div className={classes.root}>
            <div className={classes.contentWrapper}>
                <div className={classes.videoWrapper}>
                    {
                        showPlayer
                            ? <VideoModal />
                            : <Youtube videoId={props.videoId} opts={settings} className={classes.youtube} />
                    }
                </div>
                <div className={classes.descriptionWrapper}>
                    <div className={classes.button}>
                        <div className={classes.overlineWrapper}>
                            <Typography variant="button" className={classes.button}>
                                {props.tag}
                            </Typography>
                        </div>
                        <div className={classes.titleWrapper}>
                            <Typography gutterBottom variant="h6" className={classes.title}>
                                {props.title}
                            </Typography>
                        </div>
                        <div className={classes.underlineWrapper}>
                            <Typography variant="body1" className={classes.underline}>
                                {props.description}
                            </Typography>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
