import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

import stayhome from '../../../assets/icons/orange-stay-home.png'

const useStyles = makeStyles((theme) => ({
    root: {
        [theme.breakpoints.up('xs')]: {
            backgroundColor: theme.palette.common.white,
            color: theme.palette.primary.light,
            padding: theme.spacing(4)
        },
        [theme.breakpoints.up('sm')]: {
        }
    },
    infoWrapper: {
        [theme.breakpoints.up('xs')]: {
            lineHeight: 1,
            textAlign: 'center',
            fontWeight: 500
        },
        [theme.breakpoints.up('md')]: {
            width: '70%',
            margin: '0 auto'
        },        
        [theme.breakpoints.up('lg')]: {
            width: '50%',
            margin: '0 auto'
        }
    },
    image: {
        height: '150px',
        margin: '0 auto',
        display: 'block'
    }
}))

export default function CoronaInformation(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <img className={classes.image} src={stayhome} />
            <Typography className={classes.infoWrapper} variant="h4">
                Due to the current situation, we are working on virtual events to better get in touch with you. <br/>
                Keep up!
            </Typography>
        </div>
    );
}
