import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Redirect } from 'react-router-dom';
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
    links: {
        "&:hover": {
            cursor: 'pointer'
        },
        margin: `0 ${theme.spacing(0.5)}px`
    }
}))

export default function Footer() {
    const classes = useStyles();
    const [redirectRoute, setRedirectRoute] = useState(null);

    const redirect = (link) => {
        setRedirectRoute(<Redirect to={link}/>)
    }

    return (
        <div className={classes.root}>
            {redirectRoute}
            <Grid container className={classes.container}>
                <Grid className={classes.contactWrapper} item xs={12}>
                    <div>
                        <img src={logo} className={classes.logo} />
                    </div>
                    <div className={classes.contacts}>
                        <Facebook href={link.FACEBOOK} color="primary" />
                        <LinkedIn href={link.LINKEDIN} color="primary" />
                        <Twitter href={link.TWITTER} color="primary" />
                    </div>

                </Grid>
                <Grid item xs={12}>
                    <Typography variant="overline" className={classes.links}>
                        <Link onClick={() => { redirect(link.LANDING_PAGE) }}>Home</Link>
                    </Typography>
                    <Typography variant="overline" className={classes.links}>
                        <Link onClick={() => { redirect(link.PAGE_BLOG) }}>Blog</Link>
                    </Typography>
                    <Typography variant="overline" className={classes.links}>
                        <Link onClick={() => { redirect(link.PAGE_FREE_TRIAL) }}>Free trial</Link>
                    </Typography>
                    <Typography variant="overline" className={classes.links}>
                        <Link href={link.DOCS}>Docs</Link>
                    </Typography>
                    <Typography variant="overline" className={classes.links}>
                        <Link onClick={() => { redirect(link.PAGE_PRICING) }}>Pricing</Link>
                    </Typography>
                    <Typography variant="overline" className={classes.links}>
                        <Link onClick={() => { redirect(link.PAGE_CONTACT) }}>Contact</Link>
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
                        <Link onClick={() => { redirect(link.PAGE_IMPRINT) }}>Legal Information</Link>
                    </Typography>
                </Grid>
            </Grid>
        </div>
    );
}
