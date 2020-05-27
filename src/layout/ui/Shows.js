import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid } from '@material-ui/core';

import nab from '../../assets/shows/nab.png';
import mwc from '../../assets/shows/mwc.png';
import ibc from '../../assets/shows/ibc.png';
import streamingmedia from '../../assets/shows/streamingmedia.png'

const useStyles = makeStyles((theme) => ({
    root: {
        margin: theme.spacing(4)
    },
    showWrapper: {
        [theme.breakpoints.up('xs')]: {
            margin: theme.spacing(1),
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            color: theme.palette.secondary.main,
        },
        [theme.breakpoints.up('sm')]: {
            width: 'auto',
            flexDirection: 'row'
        }
    },
    icon: {
        [theme.breakpoints.up('xs')]: {
            height: '50px',
            margin: theme.spacing(1, 0)
        },        
        [theme.breakpoints.up('md')]: {
            margin: theme.spacing(0, 2)
        }
    },
    // TEXT
    title: {
        fontWeight: 500,
        lineHeight: 1,
        textAlign: 'center',
        margin: '0 auto'
    }
}))

export default function Shows(props) {
    const classes = useStyles();
    const [shows] = useState([
        { name: "NAB", image: nab },
        { name: "IBC", image: ibc },
        { name: "MWC", image: mwc },
        { name: "Streaming Media", image: streamingmedia },
    ])

    return (
        <div className={classes.root}>
            <Typography gutterBottom className={classes.title} variant="h6">
                Usually you can find us at
            </Typography>
            <div className={classes.showWrapper}>
            {
                shows.map((show, index) => (
                    <div key={`${show.name}-${index}`}>
                        <img className={classes.icon} src={show.image} />
                        {/* <Typography className={classes.title} variant="h6">
                            {show.name}
                        </Typography> */}
                    </div>
                ))
            }
            </div>
        </div>
    );
}
