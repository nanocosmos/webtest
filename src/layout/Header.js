import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Button } from '@material-ui/core';
import * as link from '../utilities/link-config';

import Menu from './Menu/Menu';
import Logo from '../assets/logo/white-logo.png';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.primary.main,
        // backgroundColor: 'transparent',
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
            height: '30px',
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
                <img className={classes.logo} src={Logo} onClick={() => { window.open(link.LANDING_PAGE, "_self") }} />
                <Menu className={classes.menu}/>
            </Toolbar>
        </AppBar>
    );
}
