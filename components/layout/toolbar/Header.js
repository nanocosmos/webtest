import React from 'react';
import Router from 'next/router';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Button } from '@material-ui/core';
import Menu from '../menu/Menu';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.primary.main,
        flexGrow: 1
    },
    toolbar: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    logo: {
        [theme.breakpoints.up('xs')]: {
            "&:hover": {
                cursor: 'pointer'
            },
            height: '35px',
            padding: theme.spacing(1),
            marginRight: theme.spacing(2),
            order: 1
        },
        [theme.breakpoints.up('md')]: {
            order: 0
        }
    },
    menu: {
        [theme.breakpoints.up('xs')]: {
            order: 0
        },
        [theme.breakpoints.up('md')]: {
            order: 1
        }
    }
}))

export default function Header(props) {
    const classes = useStyles();

    return (
        <AppBar className={classes.root} elevation={0} position="sticky">
            <Toolbar className={classes.toolbar}>
                <div>
                    <img className={classes.logo} src='/assets/logo/white-logo.png' onClick={() => { Router.push("/") }} />
                </div>
                <Menu />
            </Toolbar>
        </AppBar>
    );
}
