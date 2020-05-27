import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    title: {
        fontWeight: 900,
        lineHeight: 1
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

export default function BoldTitle(props) {
    const classes = useStyles();

    const title = clsx(classes.title, {
        [classes.white]: props.color === "white",
        [classes.primary]: props.color === "primary",
        [classes.secondary]: props.color === "secondary"
    })

    return (
        <Typography variant={props.variant ? props.variant : "h4"} className={title}>
            {props.children}
        </Typography>
    );
}

