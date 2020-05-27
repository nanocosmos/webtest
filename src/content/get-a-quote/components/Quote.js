import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

import icon from '../../../assets/icons/white-handdrawn-chatbubble.png';
import NewDealAutomation from '../../../layout/ui/ActiveCampaign/NewDealAutomation';
import Intro from '../components/Intro';

const useStyles = makeStyles((theme) => ({
    root: {
        [theme.breakpoints.up('xs')]: {
            display: 'flex',
            flexDirection: 'column',
            minHeight: '95vh'
        },
        [theme.breakpoints.up('md')]: {
            flexDirection: 'row',
            justifyContent: 'center',
            margin: '0 auto',
        }
    },
    flexItem: {
        [theme.breakpoints.up('xs')]: {
            flexBasis: '50%',
            padding: theme.spacing(4),
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
        },
        '&:first-of-type': {
            [theme.breakpoints.up('xs')]: {
                paddingBottom: 0,
            },
            [theme.breakpoints.up('md')]: {
                padding: theme.spacing(4)
            }
        },
        '&:last-of-type': {
            [theme.breakpoints.up('xs')]: {
                paddingTop: 0,
            },
            [theme.breakpoints.up('md')]: {
                padding: theme.spacing(4)
            }
        }
    },
    form: {
        backgroundColor: theme.palette.primary.light,
        padding: theme.spacing(2),
        borderRadius: theme.spacing(1)
    },
    thankYou: {
        textAlign: 'center'
    },
    icon: {
        height: '100px'
    },
    logo: {
        [theme.breakpoints.up('xs')]: {
            width: '200px',
        },
        [theme.breakpoints.up('md')]: {
            display: 'block',
            width: '300px',
        }
    },
    subtitleText: {
        fontWeight: 300,
        lineHeight: 1.3
    },
}))

export default function Quote() {
    const classes = useStyles();
    const [sent, setSentSuccessfully] = useState(false)

    const form = clsx( classes.form, {
        [classes.thankYou]: sent
    })
    return (
        <div className={classes.root}>
            <div className={classes.flexItem}>
                <Intro/>
            </div>
            <div className={classes.flexItem}>
                <div className={form}>
                    {
                        sent
                        ? <img className={classes.icon} src={icon}/>
                        : null
                    }
                    <Typography className={classes.subtitleText} variant="h4">
                        { sent ? "Thank you!" : "Your details" }
                    </Typography>
                    <Typography className={classes.subtitleText} variant="body1">
                        {sent ? "We will reach out to you as soon as possible!" : "Lorem ipsum dolor sit amet, consetetur sadipscing elitr."}
                    </Typography>
                    {
                        sent
                        ? null
                        : <NewDealAutomation sendMessage={() => setSentSuccessfully(true)}/>

                    }
                </div>
            </div>
        </div >
    );
}
