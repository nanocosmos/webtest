import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        margin: theme.spacing(1),
        padding: theme.spacing(1),
        maxWidth: '250px',
        minHeight: '150px',
        lineHeight: 1.2,
        textAlign: 'center'
    },
    title: {
        color: theme.palette.common.white,
        fontWeight: 600,
        lineHeight: 1.2
    },
    subtitle: {
        color: theme.palette.text.secondary,
        lineHeight: 1.4
    },
    image: {
        height: '80px'
    }
}))

export default function KeyFeature(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <img className={classes.image} src={props.image} />
            <Typography className={classes.title} variant="body1">
                {props.title}
            </Typography>
            <Typography className={classes.subtitle} variant="subtitle2">
                {props.text}
            </Typography>
        </div>
    );
}
