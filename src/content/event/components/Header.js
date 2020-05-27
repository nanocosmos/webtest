import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import * as helper from '../../../utilities/helper-methods';

const useStyles = makeStyles((theme) => ({
    root: {
    },
    contentWrapper: {
        [theme.breakpoints.up('xs')]: {
            padding: theme.spacing(4),
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            minHeight: '10vh',
        },
    },
    title: {
        fontWeight: 900,
        lineHeight: 1,
        margin: theme.spacing(2)
    },
    image: {
        height: '50px',
        display: 'block',
        marginRight: theme.spacing(2)
    },
    date: {
        fontSize: '1em',
        lineHeight: 1
    }
}))

export default function Header(props) {
    const classes = useStyles();


    return (
        <div className={classes.root}>
            <div className={classes.contentWrapper}>
                    <img className={classes.image} src={props.image} />
                    <Typography
                        className={classes.title}
                        variant="h4"
                    >
                        {props.title}
                    </Typography>
                    <Typography className={classes.date} variant="button">
                        {helper.generateEventDate(props.date)}
                    </Typography>
            </div>
        </div>
    );
}
