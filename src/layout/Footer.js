import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid, Link } from '@material-ui/core';
import { Twitter, Facebook, LinkedIn } from '@material-ui/icons';
import * as link from '../utilities/link-config';

import logo from '../assets/logo/orange-logo.png';


const useStyles = makeStyles((theme) => ({
    root: {
        [theme.breakpoints.up('xs')]: {
            margin: 0,
            flexGrow: 1,
            backgroundColor: '#fde0cc',
        }
    },
    container: {
        [theme.breakpoints.up('xs')]: {
            padding: theme.spacing(2),
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        }
    },
    item: {
        [theme.breakpoints.up('xs')]: {
            padding: theme.spacing(2),
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
        }
    },
    contactWrapper: {
        [theme.breakpoints.up('xs')]: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center'
        }
    },
    contacts: {
        "&:hover": {
            cursor: 'pointer'
        }
    },
    logo: {
        [theme.breakpoints.up('xs')]: {
            width: '60px',
        }
    },
    // TEXT STYLES
    underlineText: {
        "&:hover": {
            cursor: 'pointer'
        },
        fontWeight: '700',
        lineHeight: 1,
        textAlign: 'center'
    },
    links: {
        "&:hover": {
            cursor: 'pointer'
        },
        margin: `0 ${theme.spacing(0.5)}px`
    }
}))

export default function Footer() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container className={classes.container}>
                <Grid className={classes.contactWrapper} item xs={12}>
                    <div>
                        <img src={logo} className={classes.logo}/>
                    </div>
                    <div className={classes.contacts}>
                        <Facebook onClick={() => { window.open(link.FACEBOOK, "_self") }} color="primary" />
                        <LinkedIn onClick={() => { window.open(link.LINKEDIN, "_self") }} color="primary" />
                        <Twitter onClick={() => { window.open(link.TWITTER, "_self") }} color="primary" />                        
                    </div>

                </Grid>
                <Grid item xs={12}>
                    <Typography variant="overline" className={classes.links}>
                        <Link onClick={() => { window.open(link.LANDING_PAGE, "_self") }}>Home</Link>
                    </Typography>
                    <Typography variant="overline" className={classes.links}>
                        <Link onClick={() => { window.open(link.BLOG, "_self") }}>Blog</Link>
                    </Typography>
                    <Typography variant="overline" className={classes.links}>
                        <Link onClick={() => { window.open(link.PAGE_FREE_TRIAL, "_self") }}>Free trial</Link>
                    </Typography>
                    <Typography variant="overline" className={classes.links}>
                        <Link onClick={() => { window.open(link.DOCS, "_self") }}>Docs</Link>
                    </Typography>
                    <Typography variant="overline" className={classes.links}>
                        <Link onClick={() => { window.open(link.PAGE_PRICING, "_self") }}>Pricing</Link>
                    </Typography>
                    <Typography variant="overline" className={classes.links}>
                        <Link onClick={() => { window.open(link.CONTACT, "_self") }}>Contact</Link>
                    </Typography>
                </Grid>
                <Grid className={classes.item} item xs={12}>
                    <Typography
                        variant="overline"
                        color="secondary"
                        className={classes.underlineText}>
                        &#169; nanocosmos GmbH 2020
                    </Typography>
                    <Typography
                        variant="overline"
                        className={classes.underlineText}
                    >
                        <Link onClick={() => { window.open(link.PAGE_IMPRINT, "_self") }}>Legal Information</Link>
                    </Typography>
                </Grid>
            </Grid>
        </div>
    );
}
