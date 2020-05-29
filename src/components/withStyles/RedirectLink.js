import React from 'react';
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
    root: {
        textDecoration: 'none',
        color: 'inherit'
    },
});

export default function RedirectLink(props) {
    const classes = useStyles();
    return <NavLink className={classes.root} to={props.to}>{props.children}</NavLink>;
}