import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        margin: theme.spacing(1),
        padding: theme.spacing(1),
        width: '150px',
        maxWidth: '100%',
        lineHeight: 1.2,
        textAlign: 'center'
    },
    subtitle: {
        color: theme.palette.text.secondary,
        lineHeight: 1.4
    },
    image: {
        height: '90px'
    }
}))

export default function Benefit(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <img className={classes.image} src={props.image} />
            <Typography className={classes.subtitle} variant="subtitle2">
                {props.text}
            </Typography>
        </div>
    );
}
