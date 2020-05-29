import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import * as link from '../../../utilities/link-config';

const useStyles = makeStyles((theme) => ({
    root: {
        [theme.breakpoints.up('xs')]: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        },
        [theme.breakpoints.up('sm')]: {
            justifyContent: 'center'

        }
    },
    fab: {
        [theme.breakpoints.up('xs')]: {
            position: 'fixed',
            bottom: theme.spacing(2),
            right: theme.spacing(2),
            zIndex: 99999999
        }
    },
    icon: {
        [theme.breakpoints.up('xs')]: {
            marginRight: theme.spacing(1)
        }
    },
    h5livewrapper: {
        [theme.breakpoints.up('xs')]: {
            width: '640px',
            maxWidth: '100%',
            // backgroundColor: theme.palette.common.white,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
        },
        [theme.breakpoints.up('sm')]: {
            backgroundColor: 'inherit'
        }
    },
    h5livePlayer: {
        [theme.breakpoints.up('xs')]: {
            boxShadow: theme.shadows[5],
            order: 2,
        },
        [theme.breakpoints.up('sm')]: {
            boxShadow: theme.shadows[0],
            order: 2
        }
    },
    textWrapper: {        
        [theme.breakpoints.up('xs')]: {
            '&:first-of-type': {
                order: 0,
            },
            '&:last-of-type': {
                order: 1
            }
        },
        [theme.breakpoints.up('sm')]: {
            '&:first-of-type': {
                order: 0,
            },
            '&:last-of-type': {
                order: 2
            }
        }
    },
    subtitleText: {
        [theme.breakpoints.up('xs')]: {
            fontWeight: 300,
            lineHeight: 1.3,
            padding: theme.spacing(0, 1, 1, 1),
            color: theme.palette.primary.main
        },
        [theme.breakpoints.up('sm')]: {
            padding: theme.spacing(1),
            fontSize: '1rem',
            backgroundColor: theme.palette.common.white,
            borderBottomRightRadius: theme.spacing(0.5),
            borderBottomLeftRadius: theme.spacing(0.5),
            boxShadow: theme.shadows[5],
        }
    },
    title: {
        [theme.breakpoints.up('xs')]: {
            padding: theme.spacing(1, 1, 0, 1),
            transformText: 'uppercase',
            fontWeight: 900,
            fontSize: '1.5rem',
            color: theme.palette.secondary.main
        },
        [theme.breakpoints.up('sm')]: {
            padding: theme.spacing(0, 0, 0.5, 0),
            fontSize: '2rem',
            lineHeight: 1.2,
            color: theme.palette.common.white
        }
    }
}))

export default function Player() {
    const classes = useStyles();

    const [praefix] = useState(link.PAGE_PLAYBACK)

    const addAttributes = (element, attributeList) => {
        for (let key in attributeList) {
            element.setAttribute(key, attributeList[key]);
        }
    }

    useEffect(() => {
        let script = document.createElement("script");
        let attributes = {
            id: "playback",
            showStats: "true",
            playbackPraefix: praefix,
            src: "./nanostream.h5live.js"
        };
        addAttributes(script, attributes);
        document.body.appendChild(script);
    }, [])

    return (
        <div className={classes.root}>
            <div className={classes.h5livewrapper}>
                <div className={classes.h5livePlayer} id="nanoStream-h5live" />
            </div>
        </div>
    );
}
