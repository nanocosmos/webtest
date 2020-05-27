import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid, Button } from '@material-ui/core';
import * as link from '../../../utilities/link-config';

import auction from '../../../assets/icons/orange-auction.png';
import betting from '../../../assets/icons/orange-betting.png';
import entertainment from '../../../assets/icons/orange-entertainment.png';
import webcasts from '../../../assets/icons/orange-webcasts.png';

import Usecase from '../../../layout/ui/Usecase';
import HeaderWrapper from '../../../layout/withStyles/Header/Wrapper';
import Overline from '../../../layout/withStyles/Header/Overline';
import BoldTitle from '../../../layout/withStyles/Header/BoldTitle';
import RedirectLink from '../../../layout/withStyles/RedirectLink';

const useStyles = makeStyles((theme) => ({
    root: {
        [theme.breakpoints.up('xs')]: {
            margin: 0,
            flexGrow: 1,
            backgroundColor: theme.palette.common.white,
        }
    },
    container: {
        [theme.breakpoints.up('xs')]: {
            padding: theme.spacing(4),
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        }
    },
    item: {
        [theme.breakpoints.up('xs')]: {
            padding: theme.spacing(2)
        }
    },
    itemsWrapper: {
        [theme.breakpoints.up('xs')]: {
            display: 'flex',
            flexDirection: 'column'
        },
        [theme.breakpoints.up('sm')]: {
            flexDirection: 'row',
        },
    },
    usecaseWrapper: {
        [theme.breakpoints.up('xs')]: {
            display: 'flex',
            flexDirection: 'row',
        },
    },
    icon: {
        [theme.breakpoints.up('xs')]: {
            width: '80px',
            marginBottom: theme.spacing(1)
        }
    },
    // TEXT STYLES
    headerText: {
        fontWeight: 'bolder',
        lineHeight: 1,
        color: theme.palette.secondary.main
    },
    introText: {
        color: theme.palette.secondary.main,
        lineHeight: '1',
        fontWeight: 400
    },
    bold: {
        fontWeight: '900'
    },
    nanoOrangeText: {
        color: theme.palette.primary.main
    }
}))

export default function Intro() {
    const classes = useStyles();

    let usecases = [
        { title:"AUCTIONS", image:auction, link: link.BLOG_LIVE_AUCTIONS },
        { title:"BETTING", image:betting, link: link.BLOG_BETTING },
        { title:"WEBCASTS", image:webcasts, link: link.BLOG_WEBCASTS },
        { title:"ENTERTAINMENT", image:entertainment, link: link.BLOG_ENTERTAINMENT },
    ]

    return (
        <div className={classes.root}>
            <Grid container className={classes.container}>
                <Grid className={classes.item} item xs={12}>
                    <HeaderWrapper align="left">
                        <Overline color="secondary">
                            Grow your global footprint with truly engaging live video streaming
                        </Overline>
                        <BoldTitle color="secondary">
                            Interactive use cases enabled by <span className={classes.nanoOrangeText}>nanoStream Cloud</span>
                        </BoldTitle>
                    </HeaderWrapper>
                </Grid>
                <Grid item xs={12} className={classes.itemsWrapper}>
                    <div className={classes.usecaseWrapper}>
                        <Usecase 
                            title="AUCTIONS" 
                            image={auction}
                            link={link.BLOG_LIVE_AUCTIONS}
                        />
                        <Usecase 
                            title="BETTING" 
                            image={betting} 
                            link={link.BLOG_BETTING}
                        />
                    </div>
                    <div className={classes.usecaseWrapper}>
                        <Usecase 
                            title="WEBCASTS" 
                            image={webcasts} 
                            link={link.BLOG_WEBCASTS}
                        />
                        <Usecase 
                            title="ENTERTAINMENT" 
                            image={entertainment} 
                            link={link.BLOG_ENTERTAINMENT}
                        />
                    </div>
                </Grid>
                <Button color="primary" variant="contained">
                    <RedirectLink to={link.PAGE_USECASES}>
                        See more usecases
                    </RedirectLink>
                </Button>
            </Grid>
        </div>
    );
}
