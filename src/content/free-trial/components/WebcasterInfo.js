import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

import cloud from '../../../assets/collagen/white-cloud-infographic.png'
import HeaderWrapper from '../../../layout/withStyles/Header/Wrapper';
import BoldTitle from '../../../layout/withStyles/Header/BoldTitle';

const useStyles = makeStyles((theme) => ({
    root: {
        [theme.breakpoints.up('xs')]: {
            padding: theme.spacing(4)
        },
        [theme.breakpoints.up('md')]: {
        }
    },
    image: {
        [theme.breakpoints.up('xs')]: {
            maxWidth: '95%',
            marginTop: theme.spacing(2),
            display: 'block',
            margin: '0 auto'
        },
        [theme.breakpoints.up('md')]: {
            maxWidth: '700px',
        }
    }
}))

export default function WebcasterInfo() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <HeaderWrapper align="center">
                <BoldTitle  variant="h3" color="white">
                    How it works
                </BoldTitle>
            </HeaderWrapper>
            <img className={classes.image} src={cloud} />
        </div>
    );
}
