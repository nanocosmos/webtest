import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { CheckCircle, AddCircle } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    root: {
        [theme.breakpoints.up('xs')]: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
        }
    },
    orangeText: {
        color: theme.palette.secondary.main
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

export default function Including(props) {
    const classes = useStyles();

    const root = clsx(classes.root, {
        [classes.orangeText]: !props.whiteText,
        [classes.whiteText]: props.whiteText
    })

    return (
        <div className={root}>
            {props.check ? <CheckCircle fontSize="small" color={!props.whiteText ? "primary" : "primary"} /> : <AddCircle fontSize="small" color={!props.whiteText ? "primary" : ""} />}
            {
                props.count
                    ?
                    <Typography className={classes.countTyp} variant="button">
                        {props.count}
                    </Typography>
                    : null
            }
            <Typography className={classes.typo} variant="button">
                {props.incl}
            </Typography>
        </div>
    );
}
