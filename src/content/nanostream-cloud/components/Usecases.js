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
import BoldTitle from '../../../layout/withStyles/Header/BoldTitle';

const useStyles = makeStyles((theme) => ({
    root: {
        [theme.breakpoints.up('xs')]: {
            margin: 0,
            flexGrow: 1,
            backgroundColor: theme.palette.common.white,
            padding: theme.spacing(4),
        }
    },
    container: {
        [theme.breakpoints.up('xs')]: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        }
    },
    item: {
        [theme.breakpoints.up('xs')]: {
        }
    },
    itemsWrapper: {
        [theme.breakpoints.up('xs')]: {
            display: 'flex',
            flexDirection: 'column',
        },
        [theme.breakpoints.up('sm')]: {
            flexDirection: 'row',
        },
    },
    usecaseWrapper: {
        [theme.breakpoints.up('xs')]: {
            display: 'flex',
            flexDirection: 'row'
        },
    }
}))

export default function Intro() {
    const classes = useStyles();


    return (
        <div className={classes.root}>
            <Grid container className={classes.container}>
                <Grid className={classes.item} item xs={12}>
                    <HeaderWrapper align="center">
                        <BoldTitle color="secondary">
                            Live Streaming Use Cases across all industries
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
                <Button onClick={() => { window.open(link.PAGE_USECASES, "_self") }} color="primary" variant="contained">
                    See more usecases
                </Button>
            </Grid>
        </div>
    );
}
