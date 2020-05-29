import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Button } from '@material-ui/core';
import { ArrowRightAlt } from '@material-ui/icons';
import * as helper from '../../../utilities/helper-methods';
import * as link from '../../../utilities/link-config';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        margin: '0 auto',
        width: '500px',
        maxWidth: '90%',
        marginBottom: theme.spacing(1),
        '&:hover': {
            transform: 'scale(1.01)'
        }
    },
    eventWrapper: {
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        borderRadius: theme.spacing(1),
        boxShadow: theme.shadows[4],
        height: '100px'
    },
    column: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: theme.spacing(0, 2),
        minHeight: '100%',
    },
    dayWrapper: {
        backgroundColor: theme.palette.primary.light,
        borderTopLeftRadius: theme.spacing(1),
        borderBottomLeftRadius: theme.spacing(1),
    },
    nameWrapper: {
        color: theme.palette.primary.light,
        backgroundColor: theme.palette.common.white,
        borderTopRightRadius: theme.spacing(1),
        borderBottomRightRadius: theme.spacing(1),
        width: '100%'
    },
    image: {
        width: '50px'
    },
    boldText: {
        fontWeight: 900,
        lineHeight: 1
    },
    lightText: {
        fontWeight: 400,
        lineHeight: 1,
        '&:last-of-type': {
            marginTop: theme.spacing(1)
        }
    }
}))

export default function Upcoming(props) {
    const classes = useStyles();
    const [startDate] = useState(helper.generateShowDate(props.event.startDate))

    return (
        <div className={classes.root} onClick={() => { window.open(`${link.PAGE_EVENT}?q=${props.event.urlSuffix}`, '_self') }}>
            <div className={classes.eventWrapper}>
                <div className={clsx(classes.dayWrapper, classes.column)}>
                    <Typography className={classes.lightText} variant="h5">
                        {startDate.weekday}
                    </Typography>
                    <Typography className={classes.boldText} variant="h5">
                        {startDate.month}/{startDate.day}
                    </Typography>
                    <Typography className={classes.lightText} variant="button">
                        {startDate.year}
                    </Typography>
                </div>
                <div className={clsx(classes.nameWrapper, classes.column)}>
                    <Typography className={classes.boldText} variant="h6">{props.event.eventName}</Typography>
                </div>
            </div>
        </div>
    );
}
