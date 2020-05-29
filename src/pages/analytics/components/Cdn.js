import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import cdn from '../../../assets/collagen/orange-cdn-infographic.png'
import HeaderWrapper from '../../../components/withStyles/Header/Wrapper';
import Overline from '../../../components/withStyles/Header/Overline';
import BoldTitle from '../../../components/withStyles/Header/BoldTitle';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(4),
        backgroundColor: theme.palette.common.white
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

export default function Discover() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <img className={classes.image} src={cdn}/>
        </div>
    );
}
