import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        "&:hover": {
            cursor: 'pointer'
        },
        [theme.breakpoints.up('xs')]: {
            margin: theme.spacing(1),
            textAlign: 'center',
            width: '100%'
        },
        [theme.breakpoints.up('md')]: {
            maxWidth: '300px'   
        }
    },
    icon: {
        [theme.breakpoints.up('xs')]: {
            width: '80px'
        }
    },
    // TEXT
    title: {
        fontWeight: '800',
        lineHeight: 1,
        margin: `${theme.spacing(1)}px 0`
    },
    text: {
        lineHeight: 1,
        color: theme.palette.secondary.main,
    },
    orange: {
        color: theme.palette.primary.main
    },
    white: {
        color: theme.palette.common.white
    }
}))

export default function CloudItem(props) {
    const classes = useStyles();

    const colorTitle = clsx(classes.title, {
        [classes.orange]: props.orange,
        [classes.white]: !props.orange
    });

    return (
        <div className={classes.root} onClick={() => { window.open(props.link, "_self") }}>
            <img className={classes.icon} src={props.image} />
            <Typography className={colorTitle} variant="h6">
                {props.title}
            </Typography>
            <Typography className={classes.text} variant="body2">
                {props.text}
            </Typography>
        </div>
    );
}
