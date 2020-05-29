import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid } from '@material-ui/core';

import Webcaster from './Webcaster';
import HeaderWrapper from '../../../components/withStyles/Header/Wrapper';
import Overline from '../../../components/withStyles/Header/Overline';
import BoldTitle from '../../../components/withStyles/Header/BoldTitle';
import Underline from '../../../components/withStyles/Header/Underline';

const useStyles = makeStyles((theme) => ({
    root: {
        [theme.breakpoints.up('xs')]: {
            backgroundColor: theme.palette.common.white,
            padding: `${theme.spacing(4)}px 0`
        },
        [theme.breakpoints.up('md')]: {
        }
    },
    headerWrapper: {
        [theme.breakpoints.up('xs')]: {
            padding: theme.spacing(2),
            textAlign: 'center'
        }
    },
    demoWrapper: {
        [theme.breakpoints.up('xs')]: {
            margin: '0 auto'
        }
    },
    trialWrapper: {
        [theme.breakpoints.up('xs')]: {
            width: '100%'
        },
        [theme.breakpoints.up('md')]: {
        }
    },
    bold: {
        fontWeight: '900'
    },
}))

export default function QuickTests() {
    const classes = useStyles();


    return (
        <Grid container className={classes.root}>
            <Grid className={classes.headerWrapper} item xs={12}>
                <HeaderWrapper align="center">
                    <Overline variant="button" color="secondary">
                        Try our quick webcaster demo!
                    </Overline>
                    <BoldTitle color="primary">
                        nanoStream Webcaster
                    </BoldTitle>
                    <Underline color="primary">
                        You can use your own webcam or screen to send to <span className={classes.bold}>nanoStream Cloud</span>, and open a player which shows how it works! <br/>
                        Down below you will see the webcaster - the player will open on the right. You can also open the player in a separate tab or share it with others! <br/>
                        Enter your E-Mail to use our browser-based <span className={classes.bold}>nanoStream Webcaster</span>!
                    </Underline>
                </HeaderWrapper>
            </Grid>
            <div className={classes.trialWrapper}>
                <Webcaster />
            </div>
        </Grid>
    );
}
