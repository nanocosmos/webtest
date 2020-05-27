import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

import Benefit from '../../../layout/ui/Benefit';

import agile from '../../../assets/icons/orange-agile.png';
import berlin from '../../../assets/icons/orange-berlin.png';
import challenge from '../../../assets/icons/orange-challenges.png';
import coffee from '../../../assets/icons/orange-coffee.png';
import impact from '../../../assets/icons/orange-impact.png';
import international from '../../../assets/icons/orange-international.png';
import world from '../../../assets/icons/orange-world.png';
import HeaderWrapper from '../../../layout/withStyles/Header/Wrapper';
import BoldTitle from '../../../layout/withStyles/Header/BoldTitle';

const useStyles = makeStyles((theme) => ({
    root: {
        [theme.breakpoints.up('xs')]: {
            backgroundColor: theme.palette.common.white,
            padding: theme.spacing(4)
        },
        [theme.breakpoints.up('md')]: {
        }
    },
    benefitWrapper: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center'
    }
}))

export default function Offer() {
    const classes = useStyles();
    let benefits = [
        { text:"Work in our office located in Berlin", image: berlin },
        { text:"A diverse and vibrant international environment", image: international },
        { text:"Responsible self-organized work in an agile team", image: agile },
        { text:"The chance to have a significant impact on a growing technology company in Europe with a global outreach", image: impact },
        { text:"Flexible work options, free benefits like coffee, drinks, fruit", image: coffee },
        { text:"You will have a direct impact on how people worldwide use our live streaming service", image: world },
        { text:"Challenges, space for creativity and taking ownership", image: challenge }
    ]

    return (
        <div className={classes.root}>
            <HeaderWrapper align="center">
                <BoldTitle color="primary">
                What we offer
                </BoldTitle>
            </HeaderWrapper>
            <div className={classes.benefitWrapper}>
                {
                    benefits.map((benefit, index) => (
                        <Benefit key={`${benefit.text}-${index}`} text={benefit.text} image={benefit.image}/>
                    ))
                }
            </div>
        </div>
    );
}
