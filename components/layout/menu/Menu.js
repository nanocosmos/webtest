import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Router from 'next/router';
import { IconButton, Drawer, Divider, ListItemText, ListItemIcon, ListItem, Collapse, Hidden } from '@material-ui/core';
import { Menu, Mail, Widgets, MoreVert, MenuBook, Duo, Payment, Group, ExpandMore, ExpandLess, Home } from '@material-ui/icons'
import * as link from '../../../utilities/link-config';

import DesktopMenuItem from './DesktopMenuItem';


const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.primary.main,
        minWidth: '250px'
    },
    menuList: {
        width: 'auto',
        color: theme.palette.common.white,
    },
    submenu: {
        paddingLeft: theme.spacing(4)
    },
    logo: {
        width: '100px',
        displa: 'block',
        margin: '0 auto',
        padding: theme.spacing(2, 0, 2, 0)
    },
    listItemText: {
        fontWeight: 'bolder'
    },
    highlight: {
        backgroundColor: theme.palette.common.white,
        color: theme.palette.primary.main,
        '&:hover': {
            backgroundColor: theme.palette.common.white,
            boxShadow: theme.shadows[4]
        }
    },
    mobileMenu: {
        [theme.breakpoints.up('xs')]: {
            display: 'block'
        },
        [theme.breakpoints.up('md')]: {
            display: 'none'
        },
    },
    desktopMenu: {
        [theme.breakpoints.up('xs')]: {
            display: 'none'
        },
        [theme.breakpoints.up('md')]: {
            display: 'block'
        },
    }
}));

const productsSubSubmenu = [
    { name: "nanoStream H5Live Player", link: link.PAGE_H5LIVE },
    { name: "nanoStream Webcaster", link: link.PAGE_WEBCASTER },
    { name: "nanoStream CDN", link: link.PAGE_CDN },
    { name: "nanoStream Analytics", link: link.PAGE_ANALYTICS },
]

const productsSubmenu = [
    { name: "nanoStream Cloud", link: link.PAGE_NANOSTREAMCLOUD, submenu: productsSubSubmenu },
    { name: "nanoStream Apps & SDK", link: link.PAGE_APPS_AND_SDKS },
    { name: "Explore", link: link.PAGE_EXPLORE }
]

const resourcesSubmenu = [
    { name: "Blog", link: link.PAGE_BLOG },
    { name: "Videos", link: link.PAGE_VIDEOS },
    // { name: "Dokumentation", link: link.DOCS }
]

const aboutusSubmenu = [
    { name: "Company", link: link.PAGE_ABOUT_US },
    { name: "Careers", link: link.PAGE_CAREERS },
    { name: "Press", link: link.PAGE_PRESS },
    { name: "Events", link: link.PAGE_EVENTS },
]

const listItems = [
    { name: "Home", icon: <Home style={{ color: '#fff' }} />, link: link.LANDING_PAGE },
    { name: "Products", icon: <Widgets style={{ color: '#fff' }} />, link: "", submenu: productsSubmenu },
    { name: "Usecases", icon: <MoreVert style={{ color: '#fff' }} />, link: link.PAGE_USECASES },
    { name: "Resources", icon: <MenuBook style={{ color: '#fff' }} />, link: "", submenu: resourcesSubmenu },
    { name: "Pricing", icon: <Payment style={{ color: '#fff' }} />, link: link.PAGE_PRICING },
    { name: "About us", icon: <Group style={{ color: '#fff' }} />, link: "", submenu: aboutusSubmenu },
    { name: "Free Trial", icon: <Duo style={{ color: '#ed7d0e' }} />, link: link.PAGE_FREE_TRIAL, className: "highlight" },
    { name: "Contact", icon: <Mail style={{ color: '#fff' }} />, link: link.PAGE_CONTACT, className: "outlined" }
]

const updateCollapseState = (menuList) => {
    let collapseState = {};
    menuList.map((menuItem) => {
        if (menuItem.submenu) {
            collapseState = {
                ...collapseState,
                [[menuItem.name]]: false
            }
        }
    })
    return collapseState
}

export default function Navigation() {
    const classes = useStyles();
    const [openMobileMenu, setOpenMobileMenu] = useState(false);
    const [openCollapse, setOpenCollapse] = useState(updateCollapseState(listItems));

    const toggleDrawer = (open) => {
        setOpenMobileMenu(open)
    };

    const getExpandIcon = (itemName) => {
        return openCollapse[itemName] === true ? <ExpandLess /> : <ExpandMore />
    }

    const collapseSubmenu = (menuItem) => {
        let updatedList = openCollapse
        let updatedValue = openCollapse[menuItem]
        Object.keys(updatedList).forEach(item => updatedList[item] = false)
        setOpenCollapse({
            ...updatedList,
            [menuItem]: !updatedValue
        })
    }


    return (
        <div>
            <div className={classes.mobileMenu}>
                <IconButton
                    color="inherit"
                    edge="start"
                    onClick={() => { toggleDrawer(true) }}
                    className={classes.menuButton}
                >
                    <Menu style={{ color: '#fff' }} />
                </IconButton>
            </div>
            <nav>
                <div className={classes.mobileMenu}>
                    <Drawer
                        classes={{ paper: classes.root }}
                        open={openMobileMenu}
                        onClose={() => { setOpenMobileMenu(false) }}
                    >
                        <img className={classes.logo} src='/assets/logo/white-logo.png' />
                        <Divider />
                        <div className={classes.menuList}
                            role="presentation"
                        >
                            {
                                listItems.map((menuItem, index) => (
                                    <span key={`${menuItem.name}-${index}`}>
                                        <ListItem
                                            button
                                            className={menuItem.className ? classes[menuItem.className] : ""}
                                            onClick={() => { menuItem.submenu ? collapseSubmenu(menuItem.name) : Router.push(menuItem.link) }}
                                        >
                                            <ListItemIcon>{menuItem.icon}</ListItemIcon>
                                            <ListItemText classes={{ primary: classes.listItemText }} primary={menuItem.name} />
                                            {
                                                menuItem.submenu
                                                    ? getExpandIcon(menuItem.name)
                                                    : null
                                            }
                                        </ListItem>
                                        {
                                            menuItem.submenu
                                                ?
                                                <Collapse in={openCollapse[menuItem.name]}>
                                                    {
                                                        menuItem.submenu.map((menuItem, index) => (
                                                            <ListItem
                                                                button
                                                                className={classes.submenu}
                                                                key={`${menuItem.name}-${index}`}
                                                                onClick={() => { Router.push(menuItem.link) }}
                                                            >
                                                                <ListItemText primary={menuItem.name} />
                                                            </ListItem>
                                                        ))
                                                    }
                                                </Collapse>
                                                : null
                                        }
                                    </span>
                                ))
                            }
                        </div>
                    </Drawer>
                </div>
                <div className={classes.desktopMenu}>
                    <div classes={classes.menuList}>
                        {
                            listItems.map((menuItem, index) => (
                                <DesktopMenuItem key={`${menuItem.name}-${index}`} menuItem={menuItem} />
                            ))
                        }
                    </div>
                </div>
            </nav>
        </div>
    );
}
