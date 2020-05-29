import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

import infographic from '../../../assets/collagen/orange-cloud-infographic.png';
import HeaderWrapper from '../../../components/withStyles/Header/Wrapper';
import Overline from '../../../components/withStyles/Header/Overline';

const useStyles = makeStyles((theme) => ({
    root: {
        [theme.breakpoints.up('xs')]: {
            backgroundColor: theme.palette.common.white,
            padding: theme.spacing(4),
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
        },
        [theme.breakpoints.up('md')]: {
            // flexDirection: 'row'
        }
    },
    imageWrapper: {
        [theme.breakpoints.up('xs')]: {
            width: '100%',
            display: 'block',
            margin: '0 auto',
            marginTop: theme.spacing(2)
        },
        [theme.breakpoints.up('md')]: {
            maxWidth: '50%',
        }
    },
    image: {
        [theme.breakpoints.up('xs')]: {
            maxWidth: '100%',
            display: 'block',
            marginBottom: theme.spacing(4),
            margin: '0 auto'
        },
        [theme.breakpoints.up('sm')]: {
            maxWidth: '90%',
        },
    },
    // TEXT STYLES
    textWrapper: {
        [theme.breakpoints.up('xs')]: {
            margin: theme.spacing(4),
            maxWidth: '100%',
            display: 'block',
            margin: '0 auto',
            textAlign: 'center'
        },
        [theme.breakpoints.up('md')]: {
            marginTop: 0,
        }
    },
    headerText: {
        fontWeight: 300,
        color: theme.palette.text.secondary,
        lineHeight: 1,
        [theme.breakpoints.up('md')]: {
            fontSize: '1.4rem',
            maxWidth: '700px',
            margin: '0 auto'
        },
    },
    bold: {
        fontWeight: '900',
        color: theme.palette.primary.main,
    }
}))

export default function Intro() {
    const classes = useStyles();


    return (
        <div className={classes.root}>
            <HeaderWrapper align="center">
                <Overline variant="button" color="secondary">
                    Live streaming Products
                </Overline>
                <Typography variant="h6" className={classes.headerText}>
                    <span className={classes.bold}>nanoStream Cloud</span> is our easy-to-use live streaming platform with ultra-low latency for audiences of any size! Use our software and services for end-to-end Live Streaming and Communcation with <span className={classes.bold}>your brand</span>.
                </Typography>
            </HeaderWrapper>
            <div className={classes.imageWrapper}>
                <img className={classes.image} src={infographic}/>
            </div>
        </div>
    );
}
