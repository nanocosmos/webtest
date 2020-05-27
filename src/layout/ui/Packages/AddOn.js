import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { RadioButtonUnchecked } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    root: {
        [theme.breakpoints.up('xs')]: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            margin: theme.spacing(0.5, 0)
        }
    },
    grayText: {
        color: theme.palette.text.secondary
    },
    whiteText: {
        color: theme.palette.common.white,
    },
    typo: {
        marginLeft: theme.spacing(0.5),
        lineHeight: 1
    }
}))

export default function Including(props) {
    const classes = useStyles();

    const root = clsx(classes.root, {
        [classes.grayText]: !props.whiteText,
        [classes.whiteText]: props.whiteText
    })

    return (
        <div className={root}>
            <RadioButtonUnchecked fontSize="small" color={!props.whiteText ? "primary" : ""} /> 
            <Typography className={classes.typo} variant="button">
                {props.addOn}
            </Typography>
        </div>
    );
}
