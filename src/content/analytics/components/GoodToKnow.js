import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

import lightbulb from '../../../assets/icons/orange-lightbulb.png'

const useStyles = makeStyles((theme) => ({
    root: {
        [theme.breakpoints.up('xs')]: {
            padding: theme.spacing(4),
            backgroundColor: theme.palette.common.white,
            color: theme.palette.primary.main,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
        }
    },
    contentWrapper: {
        [theme.breakpoints.up('xs')]: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
        },
        [theme.breakpoints.up('sm')]: {
            flexDirection: 'row',
        },
        [theme.breakpoints.up('md')]: {
            flexDirection: 'row',
        },
    },
    image: {
        [theme.breakpoints.up('xs')]: {
            height: '70px',
            display: 'block',
            margin: '0 auto',
            paddingRight: 0
        },
        [theme.breakpoints.up('sm')]: {
            height: '100px',
            paddingRight: theme.spacing(3)
        }
    },
    bodyText: {
        [theme.breakpoints.up('xs')]: {
            textAlign: 'center',
            margin: '0 auto',
            lineHeight: 1.2,
            fontWeight: 300,
            fontSize: '1em'
        },
        [theme.breakpoints.up('sm')]: {
            textAlign: 'left',
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '1.2em'
        }
    }
}))

export default function GoodToKnow() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.contentWrapper}>
                <img className={classes.image} src={lightbulb} />
                <Typography className={classes.bodyText} variant="h6">
                    nanoStream Cloud and the unique nanoStream H5Live Player have been designed as an easy to use ultra-low-latency and light-weight live streaming platform. <br />
                    nanoStream Analytics follows the same philosophy. <br />
                    Easy to use, lightweight and focused on delivering our partners the information that makes their business more successful.
                </Typography>
            </div>
        </div>
    );
}
