import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid, Button } from '@material-ui/core';
import * as link from '../../../utilities/link-config';

import logo from '../../../assets/logo/white-atw-logo.png';
import { PlayCircleFilled } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    root: {
        [theme.breakpoints.up('xs')]: {
            margin: 0,
            flexGrow: 1,
        },
        [theme.breakpoints.up('md')]: {
            padding: theme.spacing(4)
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
            justifyContent: 'center'
        },
        [theme.breakpoints.up('md')]: {
            justifyContent: 'flex-end'
        }
    },
    item2: {
        [theme.breakpoints.up('xs')]: {
            padding: theme.spacing(1),
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center'
        },
        [theme.breakpoints.up('md')]: {
            // justifyContent: 'flex-start',
            paddingLeft: theme.spacing(1)
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
            width: '80%'
        },
        [theme.breakpoints.up('md')]: {
            textAlign: 'left'
        },
        [theme.breakpoints.up('lg')]: {
            textAlign: 'left',
        }
    },
    button: {
        [theme.breakpoints.up('xs')]: {
            margin: theme.spacing(1)
        },
        [theme.breakpoints.up('md')]: {
            margin: `${theme.spacing(1)}px ${theme.spacing(1)}px ${theme.spacing(1)}px 0`
        }
    },
    // TEXT STYLES
    headerText: {
        fontWeight: 'bolder',
        lineHeight: 1,
        [theme.breakpoints.up('md')]: {
            fontSize: '3rem'
        }
    },
    subtitleText: {
        marginTop: theme.spacing(1),
        fontWeight: 300,
        lineHeight: 1.3,
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
                <Grid className={classes.item} item xs={12} md={4} lg={3}>
                    <div>
                        <img className={classes.logo} src={logo} alt="Around the World in one second" />
                    </div>
                </Grid>
                <Grid className={classes.item2} item xs={12} md={8} lg={9}>
                    <div className={classes.textWrapper}>
                        <Typography
                            className={classes.headerText}
                            variant="h4"
                        >
                            Live stream your interactive use cases with ultra-low latency
                        </Typography>
                        <Typography
                            className={classes.subtitleText}
                            variant="subtitle1"
                        >
                            <span className={classes.bold}>nanoStream Cloud</span> includes everything you need to create the best <span className={classes.bold}>interactive live video streaming</span> experience for your viewers and reach <span className={classes.bold}>maximum audience engagement!</span>
                        </Typography>
                        <div className={classes.buttonWrapper}>
                            <Button
                                color="secondary"
                                variant="contained"
                                className={classes.button}
                                onClick={() => { window.open(link.PAGE_CONTACT, "_self") }}
                            >
                                CONTACT US
                            </Button>
                            <Button
                                startIcon={ <PlayCircleFilled/> }
                                color="secondary"
                                variant="outlined"
                                className={classes.button}
                                onClick={() => { window.open(link.PAGE_VIDEOS, "_self") }}
                            >
                                Explore
                            </Button>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}
