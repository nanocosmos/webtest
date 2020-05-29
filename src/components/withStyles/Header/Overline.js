import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    overline: {
        color: theme.palette.secondary.main,
        lineHeight: 1,
        fontWeight: 400
    },
    white: {
        color: theme.palette.common.white
    },
    primary: {
        color: theme.palette.primary.main
    },
    secondary: {
        color: theme.palette.secondary.main
    },
    bolder: {
        fontWeight: 600
    }
}));

export default function Overline(props) {
    const classes = useStyles();

    const overline = clsx(classes.overline, {
        [classes.white]: props.color === "white",
        [classes.primary]: props.color === "primary",
        [classes.secondary]: props.color === "secondary",
        [classes.bolder]: props.variant === "button"
    })

    return (
        <Typography variant={ props.variant ? props.variant : "subtitle1"} className={overline}>
            {props.children}
        </Typography>
    );
}
