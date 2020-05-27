import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Button } from '@material-ui/core';
import * as link from '../../../utilities/link-config';

import cloud from '../../../assets/icons/white-rocket.png';
import h5live from '../../../assets/icons/white-play.png';
import webcaster from '../../../assets/icons/white-webcasts.png';
import apps from '../../../assets/icons/white-apps.png';

import BoldTitle from '../../../layout/withStyles/Header/BoldTitle';
import Overline from '../../../layout/withStyles/Header/Overline';
import Underline from '../../../layout/withStyles/Header/Underline';
import HeaderWrapper from '../../../layout/withStyles/Header/Wrapper';

const useStyles = makeStyles((theme) => ({
    root: {
        [theme.breakpoints.up('xs')]: {
            padding: theme.spacing(4)
        }
    },
    image: {
        [theme.breakpoints.up('xs')]: {
            width: '50px',
            marginBottom: theme.spacing(1)
        },
        [theme.breakpoints.up('md')]: {
            width: '100px',
            marginBottom: theme.spacing(1)
        },
    },
    productWrapper: {
        [theme.breakpoints.up('xs')]: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
        },
        [theme.breakpoints.up('sm')]: {
            flexDirection: 'row',
        },
    },
    product: {
        [theme.breakpoints.up('xs')]: {
            padding: theme.spacing(1),
            borderRadius: theme.spacing(0.5),
            display: 'flex',
            boxShadow: theme.shadows[1],
            width: '250px',
            backgroundColor: theme.palette.primary.main,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'pointer',
            '&:hover': {
                transform: 'scale(1.02)'
            },
            margin: theme.spacing(1),
        },
        [theme.breakpoints.up('sm')]: {
            padding: theme.spacing(4),
        }
    },
    bodytext: {
        lineHeight: 1,
        textAlign: 'center'
    },
    exploreButtonWrapper: {
        marginTop: theme.spacing(1),
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
    }
}))

export default function OurProducts() {
    const classes = useStyles();
    const products = [
        { name: "nanoStream Cloud", image: cloud, link: link.PAGE_NANOSTREAMCLOUD },
        { name: "nanoStream Apps & SDKs", image: apps, link: link.PAGE_APPS_AND_SDKS },
    ]

    return (
        <div className={classes.root}>
            <HeaderWrapper align="center">
                <Overline color="secondary">
                    Instant Live Video Streaming with your brand
                </Overline>
                <BoldTitle color="white">
                    Live Encoding, Streaming and Playback
                </BoldTitle>
                <Underline color="white">on any platform</Underline>
            </HeaderWrapper>
            <div className={classes.productWrapper}>
                {
                    products.map((product, index) => (
                        <div key={`${product.name}-${index}`} className={classes.product} onClick={() => { window.open(product.link, "_self") }}>
                            <img className={classes.image} src={product.image} />
                            <Typography className={classes.bodytext} variant="body1">
                                {product.name}
                            </Typography>
                        </div>
                    ))
                }
            </div>
            <div className={classes.exploreButtonWrapper}>
                <Button onClick={() => { window.open(link.PAGE_EXPLORE, '_self') }} variant="contained" color="secondary">
                    Explore our Products
                </Button>
            </div>
        </div>
    );
}
