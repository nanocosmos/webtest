import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        margin: theme.spacing(1),
        padding: theme.spacing(1),
    },
    title: {
        paddingTop: theme.spacing(1),
        color: theme.palette.text.secondary,
        fontWeight: 600,
        lineHeight: 1
    },
    logo: {
        height: '35px',
        lineHeight: 1
    }
}))

export default function Plattform(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <img className={classes.logo} src={props.logo}/>
            <Typography className={classes.title} variant="body1">
                {props.title}
            </Typography>
            <Typography color="textSecondary" variant="button">
                {props.kind} / SDK
            </Typography>
        </div>
    );
}
