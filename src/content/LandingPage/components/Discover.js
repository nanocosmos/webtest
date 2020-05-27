import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid, Button, Link } from '@material-ui/core';
import * as link from '../../../utilities/link-config';

import h5live from '../../../assets/icons/white-play.png';
import ull from '../../../assets/icons/white-ull.png';
import analytics from '../../../assets/icons/white-analytics.png';
import encoding from '../../../assets/icons/white-encoding.png';
import CloudItem from '../../../layout/ui/CloudItem';

import HeaderWrapper from '../../../layout/withStyles/Header/Wrapper';
import Overline from '../../../layout/withStyles/Header/Overline';
import BoldTitle from '../../../layout/withStyles/Header/BoldTitle';
import RedirectLink from '../../../layout/withStyles/RedirectLink';

const useStyles = makeStyles((theme) => ({
    root: {
        [theme.breakpoints.up('xs')]: {
            margin: 0,
            flexGrow: 1,
            // backgroundColor: theme.palette.primary.main,
            textAlign: 'center'
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
    icon: {
        [theme.breakpoints.up('xs')]: {
            width: '90px'
        }
    },
    bold: {
        fontWeight: '900'
    },
    link: {
        "&:hover": {
            cursor: 'pointer'
        },
        marginTop: theme.spacing(0.5),
        textDecoration: 'underline'
    }
}))

export default function Intro() {
    const classes = useStyles();


    return (
        <div className={classes.root}>
            <Grid container className={classes.container}>
                <Grid className={classes.item} item xs={12}>
                    <HeaderWrapper align="center">
                        <Overline color="secondary">
                            Easy to use, simple to integrate and trusted by major companies since 1998
                        </Overline>
                        <BoldTitle color="white">
                            Discover nanoStream Cloud
                        </BoldTitle>
                    </HeaderWrapper>
                </Grid>
                <Grid className={classes.item} item xs={12}>
                    <div className={classes.cardWrapper}>
                        <CloudItem
                            orange={false}
                            image={h5live}
                            title="nanoStream H5Live Player"
                            text="Ultra-lov latency playback on any mobile and desktop browser, including Safari on iOS."
                            link={link.PAGE_H5LIVE}
                        />
                        <CloudItem
                            orange={false}
                            image={ull}
                            title="nanoStream ULL CDN"
                            text="Improve your Quality of Service and your viewers Quality of Experience with valuable data."
                            link={link.PAGE_NANOSTREAMCLOUD}
                        />
                    </div>
                    <div className={classes.cardWrapper}>
                        <CloudItem
                            orange={false}
                            image={analytics}
                            title="nanoStream Analytics"
                            text="Scalable CDN with global footprint to reach your players anywhere around the world."
                            link={link.BLOG_ANALYTICS}
                        />
                        <CloudItem
                            orange={false}
                            image={encoding}
                            title="Flexible Live Encoding"
                            text="Take your own live encoder (RTMP) or the included nanoStream Webcaster."
                            link={link.BLOG_ENCODING}
                        />
                    </div>
                </Grid>
                <Grid className={classes.item} item xs={12}>
                    <div>
                        <Button
                            variant="contained"
                            color="secondary"
                        >
                            <RedirectLink to={link.PAGE_FREE_TRIAL}>
                                Start your free trial now
                            </RedirectLink>
                        </Button>
                        <Typography className={classes.link}>
                            <Link color="secondary">
                                <RedirectLink to={link.PAGE_CONTACT}>
                                    or contact us for more
                                </RedirectLink>
                            </Link>
                        </Typography>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}
