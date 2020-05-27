import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid, Button } from '@material-ui/core';
import * as link from '../../../utilities/link-config';

import logo from '../../../assets/logo/white-atw-logo.png';

const useStyles = makeStyles((theme) => ({
    root: {
        [theme.breakpoints.up('xs')]: {
            margin: 0,
            // backgroundColor: theme.palette.primary.main
        },
        [theme.breakpoints.up('md')]: {
            // padding: theme.spacing(4)
        }
    },
    container: {
        [theme.breakpoints.up('xs')]: {
            padding: theme.spacing(2),
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        },
        [theme.breakpoints.up('md')]: {
            padding: theme.spacing(4),
            flexDirection: 'row',
        }
    },
    item: {
        [theme.breakpoints.up('xs')]: {
            padding: theme.spacing(1),
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            order: 1
        },
        [theme.breakpoints.up('md')]: {
            order: 1,
        },
        [theme.breakpoints.up('lg')]: {
        }
    },
    item2: {
        [theme.breakpoints.up('xs')]: {
            padding: theme.spacing(1),
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            order: 2
        },
        [theme.breakpoints.up('md')]: {
            paddingLeft: theme.spacing(1),
            order: 2,
            justifyContent: 'flex-end',
        }
    },
    logo: {
        [theme.breakpoints.up('xs')]: {
            width: '200px',
        },
        [theme.breakpoints.up('md')]: {
            display: 'block',
            width: '300px',
        }
    },
    textWrapper: {
        [theme.breakpoints.up('xs')]: {
            textAlign: 'center',
            width: '90%'
        },
        [theme.breakpoints.up('md')]: {
            width: '100%'
        }
    },
    button: {
        [theme.breakpoints.up('xs')]: {
            margin: theme.spacing(1)
        },
        [theme.breakpoints.up('md')]: {
        }
    },
    // TEXT STYLES
    headerText: {
        fontWeight: 'bolder',
        lineHeight: 1,
        fontSize: '3rem',
        [theme.breakpoints.up('md')]: {
            fontSize: '3rem'
        }
    },
    subtitleText: {
        marginTop: theme.spacing(1),
        fontWeight: 300,
        lineHeight: 1.3,
        fontSize: '1rem',
        [theme.breakpoints.up('md')]: {
            fontSize: '1.4rem'
        }
    },
    bold: {
        fontWeight: '900'
    }
}))

export default function Intro() {
    const classes = useStyles();


    return (
        <div className={classes.root}>
            <Grid container className={classes.container}>
                <Grid className={classes.item2} item xs={12}>
                    <div className={classes.textWrapper}>
                        <Typography
                            className={classes.headerText}
                            variant="h4"
                        >
                            Get a quote
                        </Typography>
                        <Typography
                            className={classes.subtitleText}
                            variant="subtitle1"
                        >
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                        </Typography>
                        <div className={classes.buttonWrapper}>
                            <Button
                                color="secondary"
                                variant="contained"
                                className={classes.button}
                                onClick={() => { window.open(link.PAGE_PRICING, "_self") }}
                            >
                                Book a package
                            </Button>
                            <Button
                                color="secondary"
                                variant="outlined"
                                className={classes.button}
                                onClick={() => { window.open(link.PAGE_FREE_TRIAL, "_self") }}
                            >
                                Free trial
                            </Button>
                        </div>
                    </div>
                </Grid>
                <Grid className={classes.item} item xs={12}>
                    <div>
                        <img className={classes.logo} src={logo} alt="Around the World in one second" />
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}
