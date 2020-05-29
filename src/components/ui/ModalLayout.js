import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, IconButton } from '@material-ui/core';
import { Close } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    root: {
        [theme.breakpoints.up('xs')]: {
            width: '80%',
            backgroundColor: theme.palette.background.paper,
            boxShadow: theme.shadows[3],
            borderRadius: theme.spacing(0.5)
        },
        [theme.breakpoints.up('sm')]: {
            width: '70%',
        },
        [theme.breakpoints.up('md')]: {
            width: '50%',
        }
    },
    closeWrapper: {
        [theme.breakpoints.up('xs')]: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-end'
        }
    },
    closeButton: {
        [theme.breakpoints.up('xs')]: {
            margin: theme.spacing(1),
        }
    },
    contentWrapper: {
        [theme.breakpoints.up('xs')]: {
            padding: theme.spacing(2, 4, 3),
        }
    },
}))

export default function ModalLayout(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.closeWrapper}>
                <IconButton
                    onClick={props.closeModal}
                    className={classes.closeButton}
                    size="small"
                >
                    <Close fontSize="inherit" />
                </IconButton>
            </div>
            <div className={classes.contentWrapper}>
                {props.children}
            </div>
        </div>
    );
}
