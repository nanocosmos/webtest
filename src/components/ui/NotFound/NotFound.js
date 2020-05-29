import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Button } from '@material-ui/core';
import * as link from '../../../utilities/link-config';
import image from '../../../assets/icons/white-404.png';
import Alternative from './Alternative';
import RedirectLink from '../../withStyles/RedirectLink';

const useStyles = makeStyles((theme) => ({
    root: {
        [theme.breakpoints.up('xs')]: {
            minHeight: 'calc(100vh - 200px)',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            paddingBottom: theme.spacing(3)
        },
        [theme.breakpoints.up('md')]: {
            width: '80%',
            margin: '0 auto',
            paddingBottom: 0
        },
        [theme.breakpoints.up('lg')]: {
            width: '50%'
        }
    },
    contentWrapper: {
        [theme.breakpoints.up('xs')]: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
        },
        [theme.breakpoints.up('md')]: {
            flexDirection: 'row',
            marginBottom: theme.spacing(2)
        },
    },
    textWrapper: {
        [theme.breakpoints.up('xs')]: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            maxWidth: '100%',
            order: 1
        },
        [theme.breakpoints.up('sm')]: {

        },
        [theme.breakpoints.up('md')]: {
            alignItems: 'flex-start',
            width: '50%',
            margin: '0 auto',
            order: 0,
            padding: theme.spacing(4)

        }
    },
    header: {
        [theme.breakpoints.up('xs')]: {
            fontWeight: 900,
            lineHeight: 1,
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '2em'
        }
    },
    body: {
        [theme.breakpoints.up('xs')]: {
            fontWeight: 300,
            lineHeight: 1,
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '1.5em'
        }
    },
    imageWrapper: {
        [theme.breakpoints.up('xs')]: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            flex: 0
        },
        [theme.breakpoints.up('sm')]: {
            flex: 1
        },
    },
    image: {
        [theme.breakpoints.up('xs')]: {
            height: '150px'
        },
        [theme.breakpoints.up('md')]: {
            height: '250px'
        }
    },
    alternativeWrapper: {
        [theme.breakpoints.up('xs')]: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            marginTop: theme.spacing(2)
        },
        [theme.breakpoints.up('md')]: {
            flexDirection: 'row',
        }
    }
}))

export default function NotFound(props) {
    const classes = useStyles();
    const alternative = [
        { title: "Explore", description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.", button: "Explore nanocosmos", link: link.PAGE_EXPLORE },
        { title: "Get in touch", description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.", button: "Contact us!", link: link.PAGE_CONTACT },
        { title: "Media & Press", description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.", button: "Lorem ipsum", link: link.PAGE_PRESS },
    ]

    return (
        <div className={classes.root}>
            <div className={classes.contentWrapper}>
                <div className={classes.textWrapper}>
                    <Typography variant="h6" className={classes.header}>
                        The page you were looking for does not exist.
                    </Typography>
                    <Typography gutterBottom variant="body1" className={classes.body}>
                        You may have misstyped the address or the page may have moved.
                    </Typography>
                    <div>
                        <Button variant="contained" color="secondary">
                            <RedirectLink to={link.LANDING_PAGE}>
                                Go to homepage
                            </RedirectLink>
                        </Button>
                    </div>
                </div>
                <div className={classes.imageWrapper}>
                    <img className={classes.image} src={image} />
                </div>
            </div>
            <div className={classes.alternativeWrapper}>
                {
                    alternative.map((item, index) => (
                        <Alternative description={item} key={index} />
                    ))
                }
            </div>
        </div>
    );
}
