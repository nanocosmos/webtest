import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { FormControl, Typography, ListItem, Button, List, Popper } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    root: {
        [theme.breakpoints.up('xs')]: {
        }
    },
    button: {
        [theme.breakpoints.up('xs')]: {
            color: theme.palette.common.white,
            margin: theme.spacing(0, 0.5)
        },
        ':&hover': {
            cursor: 'pointer'
        }
    },
    outlined: {
        border: `0.5px solid ${theme.palette.common.white}`
    },
    listMenu: {
        backgroundColor: theme.palette.primary.main,
        padding: 0,
        borderRadius: theme.spacing(0.2),
        boxShadow: theme.shadows[4]
    },
    popper: {
        zIndex: theme.zIndex.modal
    },
    highlight: {
        backgroundColor: theme.palette.common.white,
        color: theme.palette.primary.main,
        '&:hover': {
            backgroundColor: theme.palette.common.white,
            boxShadow: theme.shadows[4]
        }
    }
}))

export default function DesktopMenuItem(props) {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(null);
    const [showSubmenu, setShowSubmenu] = useState(false);


    const handleOpenSubmenu = (event) => {
        setAnchorEl(event.currentTarget);
        setShowSubmenu(true);
    }

    const closeSubmenu = () => {
        setAnchorEl(null);
        setShowSubmenu(false);
    }

    const redirect = (link) => {
        window.open(`${link}`, "_self")
        setShowSubmenu(false);
        setAnchorEl(null);
        // PROPS
    }

    const button = clsx(classes.button, {
        [classes[props.menuItem.className]]: props.menuItem.className
    })

    return (
        <FormControl 
            className={classes.root}
            onMouseLeave={closeSubmenu}
        >
            <Button
                className={button}
                onClick={(event) => { props.menuItem.submenu ? handleOpenSubmenu(event) : redirect(props.menuItem.link) }}
                onMouseOver={handleOpenSubmenu}
            >
                {props.menuItem.name}
            </Button> 
            {
                props.menuItem.submenu
                ?
                <Popper 
                    className={classes.popper}
                    placement="bottom"
                    anchorEl={anchorEl}
                    open={showSubmenu}
                >
                    <List className={classes.listMenu} >
                        {
                            props.menuItem.submenu.map((menuItem, index) => (
                                <ListItem
                                    key={`${menuItem.name}-${index}`}
                                    button
                                    onClick={() => { redirect(menuItem.link) }}
                                    key={menuItem.name}
                                >
                                    <Typography className={classes.title} variant="button">
                                        {menuItem.name}
                                    </Typography>
                                </ListItem>
                            ))
                        }
                    </List>
                </Popper>
                : null
            }
        </FormControl>
    );
};


// import React, { useState } from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import { FormControl, Typography, ListItem, Button, List, Popper } from '@material-ui/core';


// const useStyles = makeStyles((theme) => ({
//     root: {
//         [theme.breakpoints.up('xs')]: {
//         }
//     },
//     button: {
//         [theme.breakpoints.up('xs')]: {
//             color: theme.palette.common.white
//         },
//         ':&hover': {
//             cursor: 'pointer'
//         }
//     },
//     listMenu: {
//         backgroundColor: theme.palette.primary.main,
//         padding: 0,
//         borderRadius: theme.spacing(0.2),
//         boxShadow: theme.shadows[4]
//     },
//     popper: {
//         zIndex: theme.zIndex.modal
//     },
//     highlight: {
//         backgroundColor: theme.palette.common.white,
//         color: theme.palette.primary.main,
//         '&:hover': {
//             backgroundColor: theme.palette.common.white,
//             boxShadow: theme.shadows[4]
//         }
//     }
// }))

// export default function DesktopMenuItem(props) {
//     const classes = useStyles();
//     const [anchorElSubMenu, setAnchorElSubMenu] = useState(null);
//     const [anchorElSubSubMenu, setAnchorElSubSubMenu] = useState(null);
//     const [showSubmenu, setShowSubmenu] = useState(false);
//     const [showSubSubMenu, setShowSubSubMenu] = useState(false);
//     const [menuId] = useState({
//         submenu: 1,
//         subsubMenu: 2
//     })


//     const handleOpenSubmenu = (event, menuId) => {
//         switch (menuId) {
//             case 1:
//                 setAnchorElSubMenu(event.currentTarget);
//                 setShowSubmenu(true);
//                 return;
//             case 2:
//                 setAnchorElSubSubMenu(event.currentTarget);
//                 setShowSubSubMenu(true);
//                 return;
//             default: break;
//         }
//     }

//     const closeSubmenu = () => {
//         setAnchorElSubMenu(null);
//         setAnchorElSubSubMenu(null);
//         setShowSubmenu(false);
//         setShowSubSubMenu(false);
//     }

//     const redirect = (link) => {
//         window.open(`${link}`, "_self")
//         setShowSubmenu(false);
//         setAnchorElSubMenu(null);
//         setShowSubSubMenu(false);
//         setAnchorElSubSubMenu(null);
//     }

//     return (
//         <FormControl
//             className={classes.root}
//             onMouseLeave={closeSubmenu}
//         >
//             <Button
//                 className={props.menuItem.highlight ? classes.highlight : classes.button}
//                 onClick={(event) => { props.menuItem.submenu ? handleOpenSubmenu(event, menuId.submenu) : redirect(props.menuItem.link) }}
//                 onMouseOver={(event) => { handleOpenSubmenu(event, menuId.submenu) }}
//             >
//                 {props.menuItem.name}
//             </Button>
//             {
//                 props.menuItem.submenu
//                     ?
//                     <Popper
//                         className={classes.popper}
//                         placement="bottom"
//                         anchorEl={anchorElSubMenu}
//                         open={showSubmenu}
//                     >
//                         <List className={classes.listMenu} >
//                             {
//                                 props.menuItem.submenu.map((menuItem) => (
//                                     <span>
//                                         <ListItem
//                                             button
//                                             onClick={() => { redirect(menuItem.link) }}
//                                             onClick={(event) => { menuItem.submenu ? handleOpenSubmenu(event, menuId.subsubMenu) : redirect(menuItem.link) }}
//                                             key={menuItem.name}
//                                             onMouseOver={(event) => { handleOpenSubmenu(event, menuId.subsubMenu) }}
//                                         >
//                                             <Typography className={classes.title} variant="button">
//                                                 {menuItem.name}
//                                             </Typography>
//                                         </ListItem>
//                                         {
//                                             showSubSubMenu && menuItem.submenu
//                                                 ?
//                                                 menuItem.submenu.map((menuItem) => (
//                                                     <ListItem
//                                                         button
//                                                         onClick={(event) => { menuItem.submenu ? handleOpenSubmenu(event) : redirect(menuItem.link) }}
//                                                         key={menuItem.name}
//                                                     >
//                                                         <Typography className={classes.title} variant="button">
//                                                             {menuItem.name}
//                                                         </Typography>
//                                                     </ListItem>
//                                                 ))
//                                                 : null
//                                         }
//                                     </span>
//                                 ))
//                             }
//                         </List>
//                     </Popper>
//                     : null
//             }
//         </FormControl>
//     );
// };