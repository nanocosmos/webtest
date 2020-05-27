import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid, Button } from '@material-ui/core';
import * as link from '../../../utilities/link-config';

import h5live from '../../../assets/icons/orange-play.png';
import ull from '../../../assets/icons/orange-ull.png';
import analytics from '../../../assets/icons/orange-analytics.png';
import encoding from '../../../assets/icons/orange-encoding.png';
import CloudItem from '../../../layout/ui/CloudItem';
import Overline from '../../../layout/withStyles/Header/Overline';
import BoldTitle from '../../../layout/withStyles/Header/BoldTitle';
import Underline from '../../../layout/withStyles/Header/Underline';
import HeaderWrapper from '../../../layout/withStyles/Header/Wrapper';

const useStyles = makeStyles((theme) => ({
    root: {
        [theme.breakpoints.up('xs')]: {
            padding: theme.spacing(4),
            color: theme.palette.primary.main,
            backgroundColor: theme.palette.common.white
        },
        [theme.breakpoints.up('md')]: {
        }
    },
    includedWrapper: {
        [theme.breakpoints.up('xs')]: {
            padding: theme.spacing(2),
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
        }
    },
    cardWrapper: {
        [theme.breakpoints.up('xs')]: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            margin: theme.spacing(1)
        },
        [theme.breakpoints.up('sm')]: {
            flexDirection: 'row',
        }
    },
    buttonWrapper: {
        [theme.breakpoints.up('xs')]: {
            textAlign: 'center'
        },
        [theme.breakpoints.up('md')]: {
        }
    },
    button: {
        marginRight: theme.spacing(1)
    }
}))

export default function FullDemo() {
    const classes = useStyles();


    return (
        <Grid container className={classes.root}>
            <Grid className={classes.headerWrapper} item xs={12}>
                <HeaderWrapper align="center">
                    <Overline variant="button" color="secondary">
                        7 days full demo account
                    </Overline>
                    <BoldTitle color="primary">
                        nanoStream Cloud
                    </BoldTitle>
                    <Underline color="secondary">
                    Try the best streaming solution including:
                    </Underline>
                </HeaderWrapper>
            </Grid>
            <Grid className={classes.includedWrapper} item xs={12}>
                <div className={classes.cardWrapper}>
                    <CloudItem
                        orange={true}
                        image={h5live}
                        title="nanoStream H5Live Player"
                        text="for ULL playback on any mobile and desktop browser"
                        link={link.PAGE_H5LIVE}
                    />
                    <CloudItem
                        orange={true}
                        image={ull}
                        title="nanoStream ULL CDN"
                        text="with global footprint to reach your viewers everywhere"
                        link={link.PAGE_NANOSTREAMCLOUD}
                    />
                </div>
                <div className={classes.cardWrapper}>
                    <CloudItem
                        orange={true}
                        image={analytics}
                        title="nanoStream Analytics"
                        text="for improved QoS and better insights"
                        link={link.BLOG_ANALYTICS}
                    />
                    <CloudItem
                        orange={true}
                        image={encoding}
                        title="Flexible Live Encoding"
                        text="with nanoStream Webcaster or your own live encoder (RTMP)"
                        link={link.BLOG_ENCODING}
                    />
                </div>
            </Grid>
            <Grid className={classes.buttonWrapper} item xs={12}>
                <Button onClick={() => { window.open(link.PAGE_FREE_TRIAL, "_self") }} className={classes.button} variant="contained" color="primary">
                    START YOUR FREE TRIAL                    
                </Button>
                <Button onClick={() => { window.open(link.LANDING_PAGE, "_self")}} variant="outlined" color="primary">
                    LEARN MORE
                </Button>
            </Grid>
        </Grid>
    );
}
