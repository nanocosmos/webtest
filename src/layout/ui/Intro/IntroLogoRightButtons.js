import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid, Button } from '@material-ui/core';

import logo from '../../../assets/logo/white-atw-logo.png';
import { PlayCircleFilled } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    root: {
        [theme.breakpoints.up('xs')]: {
            margin: 0,
            flexGrow: 1,
            // backgroundColor: theme.palette.primary.main
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
            justifyContent: 'center',
            order: 1
        },
        [theme.breakpoints.up('md')]: {
            order: 2,
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
            order: 1,
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
            width: '80%'
        },
        [theme.breakpoints.up('md')]: {
            textAlign: 'left'
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

export default function IntroLogoRightButtons(props) {
    const classes = useStyles();


    return (
        <div className={classes.root}>
            <Grid container className={classes.container}>
                <Grid className={classes.item2} item xs={12} md={6} >
                    <div className={classes.textWrapper}>
                        <Typography
                            className={classes.headerText}
                            variant="h4"
                        >
                            {props.title}
                        </Typography>
                        <Typography
                            className={classes.subtitleText}
                            variant="subtitle1"
                        >
                            {props.subtitle}
                        </Typography>
                        <div className={classes.buttonWrapper}>
                            <Button
                                color="secondary"
                                variant="contained"
                                className={classes.button}
                                onClick={() => { window.open(props.button1link, "_self") }}
                            >
                                {props.button1title}
                            </Button>
                            <Button
                                startIcon={<PlayCircleFilled/>}
                                color="secondary"
                                variant="outlined"
                                className={classes.button}
                                onClick={() => { window.open(props.button2link, "_self") }}
                            >
                                {props.button2title}
                            </Button>
                        </div>
                    </div>
                </Grid>
                <Grid className={classes.item} item xs={12} md={6} >
                    <div>
                        <img className={classes.logo} src={logo} alt="Around the World in one second" />
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}
