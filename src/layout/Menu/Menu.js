import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { IconButton, Drawer, Divider, ListItemText, ListItemIcon, ListItem, Collapse, Hidden } from '@material-ui/core';
import { Menu, Mail, Widgets, MoreVert, MenuBook, Duo, Payment, Group, ExpandMore, ExpandLess, Home } from '@material-ui/icons'
import * as link from '../../utilities/link-config';

import logo from '../../assets/logo/white-logo.png';
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
    }
}));

const productsSubSubmenu = [
    { name: "nanoStream H5Live Player", link: link.PAGE_H5LIVE },
    { name: "nanoStream Webcaster", link: link.PAGE_WEBCASTER },
    { name: "nanoStream CDN", link: link.PAGE_CDN },
    { name: "nanoStream Analytics", link: link.PAGE_ANALYTICS },
]

const productsSubmenu = [
    { name: "nanoStream Cloud", link: link.PAGE_NANOSTREAMCLOUD, submenu: productsSubSubmenu},
    { name: "nanoStream Apps & SDK", link: link.PAGE_APPS_AND_SDKS },
    { name: "Explore", link: link.PAGE_EXPLORE }
]

const resourcesSubmenu = [
    { name: "Blog", link: link.BLOG },
    { name: "Videos", link: link.PAGE_VIDEOS },
    { name: "Dokumentation", link: link.DOCS }
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
    { name: "Contact", icon: <Mail style={{ color: '#fff' }} />, link: link.PAGE_CONTACT, className: "outlined"}
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
    const [redirectRoute, setRedirectRoute] = useState(null);

    const toggleDrawer = (open) => {
        setOpenMobileMenu(open)
    };

    const getExpandIcon = (itemName) => {
        return openCollapse[itemName] === true ? <ExpandLess /> : <ExpandMore />
    }

    const redirect = (link) => {
        setRedirectRoute(<Redirect to={link}/>)
        setOpenMobileMenu(false);
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


    let desktopMenu = (
        <div classes={classes.menuList}>
            {
                listItems.map((menuItem, index) => (
                    <DesktopMenuItem key={`${menuItem.name}-${index}`} menuItem={menuItem}/>
                ))
            }
        </div>
    );

    let mobileMenu = (
        <div className={classes.menuList}
            role="presentation"
        >
            {
                listItems.map((menuItem, index) => (
                    <span key={`${menuItem.name}-${index}`}>
                        <ListItem 
                            button 
                            className={menuItem.className ? classes[menuItem.className] : ""}
                            onClick={() => { menuItem.submenu ? collapseSubmenu(menuItem.name) : redirect(menuItem.link) }}
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
                                                onClick={() => { redirect(menuItem.link) }}
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
    )

    return (
        <div>
            {redirectRoute}
            <Hidden mdUp>
                <IconButton
                    color="inherit"
                    edge="start"
                    onClick={() => { toggleDrawer(true) }}
                    className={classes.menuButton}
                >
                    <Menu style={{ color: '#fff' }}/>
                </IconButton>
            </Hidden>
            <nav>
                <Hidden mdUp>
                    <Drawer
                        classes={{ paper: classes.root }}
                        open={openMobileMenu}
                        onClose={() => {setOpenMobileMenu(false)}}
                    >
                        <img className={classes.logo} src={logo} />
                        <Divider />
                        {mobileMenu}
                    </Drawer>
                </Hidden>
                <Hidden smDown>
                    {desktopMenu}
                </Hidden>
            </nav>
        </div>
    );
}
