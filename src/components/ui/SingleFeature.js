import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        [theme.breakpoints.up('xs')]: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: theme.palette.primary.light,
            padding: theme.spacing(2),
            width: 'auto',
            margin: theme.spacing(0.5),
            borderRadius: theme.spacing(0.5),
            boxShadow: theme.shadows[5]
        }
    },
    orangeText: {
        color: theme.palette.primary.main,
    },
    whiteText: {
        color: theme.palette.common.white,
    },
    countTyp: {
        marginLeft: theme.spacing(0.5),
        color: theme.palette.primary.main,
        fontWeight: 900
    },
    typo: {
        marginLeft: theme.spacing(0.5),
        lineHeight: 1
    }
}))

export default function SingleFeature(props) {
    const classes = useStyles();

    const root = clsx(classes.root, {
        [classes.orangeText]: !props.whiteText,
        [classes.whiteText]: props.whiteText
    })

    return (
        <div className={root}>
            <Typography className={classes.typo} variant="button">
                {props.feat}
            </Typography>
        </div>
    );
}
