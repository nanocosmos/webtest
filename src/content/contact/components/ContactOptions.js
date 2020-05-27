import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Button } from '@material-ui/core';
import { ArrowRightAlt } from '@material-ui/icons';
import * as link from '../../../utilities/link-config';

import mobile from '../../../assets/icons/white-mobile.png';
import support from '../../../assets/icons/white-headset.png';
import quote from '../../../assets/icons/white-quote.png';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(4)
    },
    contentWrapper: {
        [theme.breakpoints.up('xs')]: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
        },
        [theme.breakpoints.up('sm')]: {
            flexDirection: 'row',

        },
    },
    contactOptionWrapper: {
        width: '250px',
        backgroundColor: theme.palette.primary.light,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: theme.spacing(2),
        margin: theme.spacing(2),
        borderRadius: theme.spacing(0.5),
        '&:hover': {
            cursor: 'pointer',
            transform: 'scale(1.02)'
        }
    },
    image: {
        [theme.breakpoints.up('xs')]: {
            height: '100px'
        },
        [theme.breakpoints.up('md')]: {
            height: '120px'
        },
        
    },
    text: {
        fontWeight: 900,
        paddingTop: theme.spacing(1)
    }
}))

export default function ContactOptions() {
    const classes = useStyles();
    const contactOptions = [
        { text: "Get in touch", image: mobile, link: link.CONTACT },
        { text: "Support", image: support, link: link.SUPPORT },
        { text: "Get a quote", image: quote, link: link.PAGE_GET_A_QUOTE },
    ]

    return (
        <div className={classes.root}>
            <div className={classes.contentWrapper}>
            {
                contactOptions.map((option, index) => (
                    <div key={`${option.text}-${index}`} className={classes.contactOptionWrapper} onClick={ () => { window.open(option.link, '_self') }}>
                        <img className={classes.image} src={option.image}/>
                        <Typography className={classes.text} variant="button">
                            {option.text}
                        </Typography>
                    </div>
                ))
            }
            </div>
        </div>
    );
}
