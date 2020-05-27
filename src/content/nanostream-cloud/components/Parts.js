import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import * as link from '../../../utilities/link-config';

import webcaster from '../../../assets/icons/white-webcasts.png';
import cdn from '../../../assets/icons/white-cdn.png';
import h5live from '../../../assets/icons/white-h5live.png';
import analytics from '../../../assets/icons/white-analytics.png';
import HeaderWrapper from '../../../layout/withStyles/Header/Wrapper';
import Overline from '../../../layout/withStyles/Header/Overline';
import BoldTitle from '../../../layout/withStyles/Header/BoldTitle';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(4)
    },
    partsWrapper: {
        [theme.breakpoints.up('xs')]: {
            margin: theme.spacing(1),
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            color: theme.palette.common.white
        },
        [theme.breakpoints.up('sm')]: {
            flexDirection: 'row'
        }
    },
    part: {
        '&:hover': {
            cursor: 'pointer',
            transform: 'scale(1.01)'
        },
        [theme.breakpoints.up('xs')]: {
            backgroundColor: theme.palette.primary.light,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '80%',
            margin: '0 auto',
            marginTop: theme.spacing(2),
            padding: theme.spacing(2),
            borderRadius: theme.spacing(0.5)
        },
        [theme.breakpoints.up('sm')]: {
            margin: theme.spacing(0, 1),
            width: '100%',
            justifyContent: 'center',
            flexDirection: 'column',
        },
    },
    image: {
        [theme.breakpoints.up('xs')]: {
            height: '100px',
        },
        [theme.breakpoints.up('sm')]: {
            display: 'block',
            margin: '0 auto',
            paddingBottom: theme.spacing(1)
        }
    },
    description: {
        [theme.breakpoints.up('xs')]: {
            lineHeight: 1,
            width: '50%',
            fontSize: '1.5em',
            fontWeight: 900
        },
        [theme.breakpoints.up('sm')]: {
            textAlign: 'center',
            width: '100%',
            fontSize: '1em',
        },
    }
}))

export default function Parts() {
    const classes = useStyles();
    const [parts] = useState([
        { title: "nanoStream Webcaster", image: webcaster, link: link.PAGE_WEBCASTER },
        { title: "nanoStream H5Live Player", image: h5live, link: link.PAGE_H5LIVE },
        { title: "nanoStream Analytics", image: analytics, link: link.PAGE_ANALYTICS },
        { title: "nanoStream CDN", image: cdn, link: link.PAGE_CDN },
    ])

    return (
        <div className={classes.root}>
            <HeaderWrapper align="center">
                <Overline variant="button" color="secondary">
                    Discover
                </Overline>
                <BoldTitle color="white">
                    nanoStream Cloud
                </BoldTitle>
            </HeaderWrapper>
            <div className={classes.partsWrapper}>
                {
                    parts.map((part, index) => (
                        <div key={`${part.title}-${index}`} className={classes.part} onClick={() => { window.open(part.link, "_self") }}>
                            <img className={classes.image} src={part.image}/>
                            <Typography className={classes.description} variant="h6">
                                {part.title}
                            </Typography>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}
