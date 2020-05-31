import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        [theme.breakpoints.up('xs')]: {
            padding: theme.spacing(4),
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            minHeight: '25vh',

        },
        [theme.breakpoints.up('md')]: {
        }
    },
    // TEXT STYLES
    textWrapper: {
        textAlign: 'center',
        marginTop: theme.spacing(0.5)
    },
    headerText: {
        fontWeight: 'bolder',
        lineHeight: 1,
        [theme.breakpoints.up('md')]: {
            fontSize: '3rem'
        }
    },
    overline: {
        fontWeight: 600
    },
    underline: {
        fontWeight: 300,
        lineHeight: 1.3,
        maxWidth: '300px',
        display: 'block',
        margin: '0 auto',
        marginTop: theme.spacing(1),
        [theme.breakpoints.up('md')]: {
            fontSize: '1.4rem',
            maxWidth: '600px',
        },
    },
    bold: {
        fontWeight: '900'
    },
    image: {
        height: '100px',
        display: 'block',
        margin: '0 auto',
    }
}))

export default function IntroCenterImage(props) {
    const classes = useStyles();


    return (
        <div className={classes.root}>
            <div>
                <img className={classes.image} src={props.image}/>
            </div>
            <div className={classes.textWrapper}>
                <Typography
                    className={classes.headerText}
                    variant="h4"
                >
                    {props.title}
                </Typography>
                <Typography
                    className={classes.underline}
                    variant="subtitle1"
                >
                    {props.subtitle}
                </Typography>
            </div>
        </div>
    );
}
