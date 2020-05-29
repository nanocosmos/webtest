import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        [theme.breakpoints.up('xs')]: {
            margin: `${theme.spacing(1)}px 0`,
            padding: theme.spacing(2),
            flexGrow: 1,
            maxWidth: '100%',
            borderRadius: theme.spacing(0.5)
        },
        [theme.breakpoints.up('md')]: {
            margin: theme.spacing(1)
        }
    }
}))

export default function Playback() {
    const classes = useStyles();


    window.loadPlayback = (entries) => {
        console.log("WINDOW LOAD PLAYBACK", entries)
        let script = document.createElement("script");
        script.setAttribute("id", "playback");
        script.setAttribute("entries", entries)
        script.setAttribute("color", "");
        script.setAttribute("showStats", "true");
        script.src = "./nano.h5live.js";
        document.body.appendChild(script);
    }

    return (
        <div className={classes.root}>
            <div className={classes.playerWrapper}>
                <div id="nanoStream-h5live" />
            </div>
        </div>
    );
}
