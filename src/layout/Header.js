import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
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
    const [redirectRoute, setRedirectRoute] = useState(null);

    const redirect = (link) => {
        setRedirectRoute(<Redirect to={link} />)
    }

    return (
        <AppBar className={classes.root} elevation={0} position="sticky">
            {redirectRoute}
            <Toolbar className={classes.toolbar}>
                <img className={classes.logo} src={Logo} onClick={() => { redirect(link.LANDING_PAGE) }} />
                <Menu className={classes.menu} />
            </Toolbar>
        </AppBar>
    );
}
