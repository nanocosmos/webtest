import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    wrapper: {
        [theme.breakpoints.up('xs')]: {
            width: '80%',
            margin: '0 auto'
        },
        [theme.breakpoints.up('sm')]: {
            width: '100%'
        }
    },
    center: {
        textAlign: 'center'
    },
    right: {
        textAlign: 'right'
    },
    left: {
        textAlign: 'left'
    }
}));

export default function HeaderWrapper(props) {
    const classes = useStyles();

    const wrapper = clsx(classes.wrapper, {
        [classes.center]: props.align === "center",
        [classes.right]: props.align === "right",
        [classes.left]: props.align === "left"
    })

    return (
        <div className={wrapper}>
            {props.children}
        </div>
    );
}
