import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid, Button } from '@material-ui/core';
import * as link from '../../../utilities/link-config';

import icon from '../../../assets/icons/white-package.png';

const useStyles = makeStyles((theme) => ({
    root: {
        [theme.breakpoints.up('xs')]: {
            padding: theme.spacing(4),
            margin: 0,
            flexGrow: 1,
            backgroundColor: theme.palette.primary.light,
            color: theme.palette.common.white,
            textAlign: 'center'
        }
    },
    container: {
        [theme.breakpoints.up('xs')]: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        }
    },
    item: {
        [theme.breakpoints.up('xs')]: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
        }
    },
    icon: {
        [theme.breakpoints.up('xs')]: {
            width: '60px'
        }
    },
    // TEXT STYLES
    headerText: {
        fontWeight: 'bolder',
        lineHeight: 1,
        marginBottom: theme.spacing(1)
    },
}))

export default function PricingBanner() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container className={classes.container}>
                <Grid item xs={12}>
                    <img className={classes.icon} src={icon}/>
                </Grid>
                <Grid className={classes.item} item xs={12}>
                    <div className={classes.textWrapper}>
                        <Typography
                            className={classes.headerText}
                            variant="h4"
                        >
                            Have a look at our pricings and packages
                        </Typography>
                    </div>
                </Grid>
                <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => { window.open(link.PAGE_FREE_TRIAL, "_self") }}
                >
                    See more
                </Button>
            </Grid>
        </div>
    );
}