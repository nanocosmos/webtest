import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { Typography, Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        "&:hover": {
            cursor: 'pointer',
            transform: 'scale(1.01)'
        },
        [theme.breakpoints.up('xs')]: {
            margin: theme.spacing(1),
            textAlign: 'center',
            color: theme.palette.secondary.main,
            width: '400px'
        },
        [theme.breakpoints.up('sm')]: {
            width: 'auto'
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
        marginBottom: theme.spacing(0.5),
        textAlign: 'center',
        fontWeight: 'bolder'
    }
}))

export default function Usecase(props) {
    const classes = useStyles();


    return (
        <Grid item xs={12} className={classes.root} href={props.link}>
            <img className={classes.icon} src={props.image} />
            <Typography className={classes.title} variant="h6">
                {props.title}
            </Typography>
        </Grid>
    );
}
