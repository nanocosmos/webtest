import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { Typography, Link } from '@material-ui/core';
import { ChevronRight, OpenInNew } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    root: {
        "&:hover": {
            cursor: 'pointer'
        },
        [theme.breakpoints.up('xs')]: {
            margin: theme.spacing(0.5),
            padding: theme.spacing(0.5),
            borderRadius: '5px',
            backgroundColor: theme.palette.primary.light,
            color: theme.palette.common.white,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between'
        }
    },
    icon: {
        [theme.breakpoints.up('xs')]: {
            width: '60px'
        }
    },
    // TEXT
    link: {
        lineHeight: 1,
        color: theme.palette.common.white
    }
}))

export default function Question(props) {
    const classes = useStyles();


    return (
        <div className={classes.root} onClick={() => { window.open(props.link) }}>
            <Typography variant="subtitle1">
                <Link className={classes.link} href={props.link}>
                    {props.text}
                </Link>
            </Typography>
            <OpenInNew fontSize="small" />
        </div>
    );
}
