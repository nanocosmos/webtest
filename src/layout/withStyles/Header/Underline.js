import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    underline: {
        color: theme.palette.common.white,
        lineHeight: 1.2,
    },
    white: {
        color: theme.palette.common.white
    },
    primary: {
        color: theme.palette.primary.main
    },
    secondary: {
        color: theme.palette.secondary.main
    }
}));

export default function Underline(props) {
    const classes = useStyles();

    const underline = clsx(classes.underline, {
        [classes.white]: props.color === "white",
        [classes.primary]: props.color === "primary",
        [classes.secondary]: props.color === "secondary"
    })

    return (
        <Typography variant="body1" className={underline}>
            {props.children}
        </Typography>
    );
}
