import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import IntroCenterImage from '../../components/ui/Intro/IntroCenterImage';

import introImage from '../../assets/logo/white-atw-logo.png'
import ImprintTerms from './compontents/ImprintTerms';
import Contact from './compontents/Contact';
import IntroLogoLeft from '../../components/ui/Intro/IntroLogoLeft';

const useStyles = makeStyles((theme) => ({
    root: {
    },
    content: {
        padding: theme.spacing(4)
    }
}))

export default function Imprint() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <IntroLogoLeft image={introImage} title="Legal Informations" subtitle="" />
            <div className={classes.content}>
                <Contact/>
                <ImprintTerms/>
            </div>
        </div>
    );
}
