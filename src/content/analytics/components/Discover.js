import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Levels from './Levels';
import HeaderWrapper from '../../../layout/withStyles/Header/Wrapper';
import Overline from '../../../layout/withStyles/Header/Overline';
import BoldTitle from '../../../layout/withStyles/Header/BoldTitle';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(4, 2)
    },
    levelWrapper: {
        marginTop: theme.spacing(2)
    }
}))

export default function Discover() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <HeaderWrapper align="center">
                <Overline color="secondary">
                    Discover our new nanoStream Analytics
                </Overline>
                <BoldTitle color="white">
                    Our three levels of information
                </BoldTitle>
            </HeaderWrapper>
            <div className={classes.levelWrapper}>
            <Levels />
            </div>
        </div>
    );
}
