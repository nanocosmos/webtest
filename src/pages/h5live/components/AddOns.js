import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { Done } from '@material-ui/icons';

// import image from '../../../assets/icons/white-play.png'
import image from '../../../assets/icons/white-world.png'
import infographic from '../../../assets/collagen/white-h5live-infographic.png';


const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(4),
    },
    infoWrapper: {
        [theme.breakpoints.up('xs')]: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
        },
        [theme.breakpoints.up('sm')]: {
            flexDirection: 'row'
        },
    },
    featureWrapper: {
        [theme.breakpoints.up('xs')]: {
            color: theme.palette.common.white,
            padding: theme.spacing(1),
            borderRadius: theme.spacing(0.5),
            margin: theme.spacing(2),
        },
        [theme.breakpoints.up('sm')]: {
        }
    },
    feature: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    text: {
        marginLeft: theme.spacing(0.5),
        fontWeight: 600
    },
    title: {
        fontWeight: 900,
        lineHeight: 1,
        fontSize: '2.5em',
    },
    image: {
        [theme.breakpoints.up('xs')]: {
            height: '100px',
        },
        [theme.breakpoints.up('sm')]: {
            height: '250px',
        }
    },
    infographic: {
        [theme.breakpoints.up('xs')]: {
            width: '90%',
            padding: theme.spacing(2),
            display: 'block',
            margin: '0 auto'
        },
        [theme.breakpoints.up('md')]: {
            width: '50%',
        }
    }
}))

export default function AddOns() {
    const classes = useStyles();
    const features = [
        "Easy to use and integrate",
        "Plugin-free on all browsers",
        "Lowest latency: 1 sec. and less!",
        "Cloud-Based or On-Premise",
        "Light-weight and scalable",
        "Cross-Platform, incl iOS",
        "Flexible HTML/JS API",
        "Replaces Flash Player",
        "Reliable Support",
        "Easy to integrate"
    ]


    return (
        <div className={classes.root}>
            {/* <img className={classes.infographic} src={infographic} /> */}
            <div className={classes.infoWrapper}>
                <img src={image} className={classes.image}/>
                <div className={classes.featureWrapper}>
                    {
                        features.map((feature, index) => (
                            <div key={`${feature}-${index}`} className={classes.feature}>
                                <Done fontSize="small" />
                                <Typography className={classes.text} variant="button">
                                    {feature}
                                </Typography>
                            </div>
                        ))
                    }
                </div>
                {/* <div>
                    <Typography className={classes.title} variant="h4">
                        nanoStream <br/> H5Live Player
                    </Typography>
                </div> */}
            </div>
        </div>
    );
}
