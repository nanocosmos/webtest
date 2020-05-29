import React, { useState, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

import logo from '../../../assets/logo/white-logo.png';
import icon from '../../../assets/icons/orange-mobile.png';

const useStyles = makeStyles((theme) => ({
    root: {
        color: theme.palette.primary.main
    },
    title: {
        fontWeight: 900,
        lineHeight: 1,
        textAlign: 'center'
    },
    image: {
        height: '100px',
        marginBottom: theme.spacing(1)
    },
    responseWrapper: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: theme.spacing(4),
    }
}))

export default function Response(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.responseWrapper}>
                <img className={classes.image} src={icon} />
                <Typography className={classes.title} variant="h4">
                    {props.message}
                </Typography>
                <Typography variant="body1">
                    We will reach out to you as soon as possible.
                </Typography>
            </div>
        </div>
    );
}
