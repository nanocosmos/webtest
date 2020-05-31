import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid, Button } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    root: {
        [theme.breakpoints.up('xs')]: {
            margin: 0,
        },
        [theme.breakpoints.up('md')]: {
            padding: `0 ${theme.spacing(4)}px 0 ${theme.spacing(4)}px`
        }
    },
    container: {
        [theme.breakpoints.up('xs')]: {
            paddingTop: theme.spacing(1),
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        },
        [theme.breakpoints.up('md')]: {
            padding: theme.spacing(2),
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
            width: '150px',
        },
        [theme.breakpoints.up('md')]: {
            display: 'block',
            width: '250px',
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
    buttonWrapper: {
        [theme.breakpoints.up('xs')]: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
        },
        [theme.breakpoints.up('md')]: {
            justifyContent: 'flex-start'
        }
    },
    button: {
        [theme.breakpoints.up('xs')]: {
            margin: theme.spacing(0.5),
            lineHeight: 1,
            padding: theme.spacing(1)
        },
        [theme.breakpoints.up('sm')]: {
            lineHeight: 1.5,
            padding: 'auto'
        },
        [theme.breakpoints.up('md')]: {
            margin: theme.spacing(1, 1, 1, 0)
        }
    },
    // TEXT STYLES
    headerText: {
        [theme.breakpoints.up('xs')]: {
            fontWeight: 900,
            lineHeight: 0.9,
            fontSize: '2rem'
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '3rem'
        }
    },
    underline: {
        [theme.breakpoints.up('xs')]: {
            lineHeight: 1,
            fontWeight: 300,
            fontSize: '1rem',
            paddingBottom: theme.spacing(1),
            paddingTop: theme.spacing(1)
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '1.5rem'
        }
    },
    bold: {
        [theme.breakpoints.up('xs')]: {
            fontWeight: '900'
        }
    }
}))

export default function IntroLogoLeft(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container className={classes.container}>
                <Grid className={classes.item} item xs={12} md={4} lg={3}>
                    <div>
                        <img className={classes.logo} src='/assets/logo/white-atw-logo.png' alt="Around the World in one second" />
                    </div>
                </Grid>
                <Grid className={classes.item2} item xs={12} md={8} lg={9}>
                    <div className={classes.textWrapper}>
                        <Typography
                            className={classes.headerText}
                            variant="subtitle1"
                        >
                            {props.title}
                        </Typography>
                        <Typography className={classes.underline} variant="body1">
                            {props.subtitle}
                        </Typography>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}
