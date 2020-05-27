import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { Typography, Button } from '@material-ui/core';
import * as link from '../../../utilities/link-config';
import RedirectLink from '../../../layout/withStyles/RedirectLink';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(4),
    },
    bold: {
        fontWeight: 700
    },
    bodyText: {
        [theme.breakpoints.up('xs')]: {
            textAlign: 'center',
            margin: '0 auto',
            fontWeight: 300
        },
        [theme.breakpoints.up('sm')]: {
            width: '70%'
        },
    },
    buttonWrapper: {
        marginTop: theme.spacing(3),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    }
}))

export default function Information() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Typography className={classes.bodyText} variant="h6">
                All of this data is meant to help you <span className={classes.bold}>improve your Quality of Service and your viewers Quality of Experience.</span><br />
                <span className={classes.bold}>Overall, by using nanoStream Analytics, your technical team will have full insights on how your service behaves.</span><br />
                In addition to improving your technical capabilities, nanoStream Analytics enables also <span className={classes.bold}>a big advantage to your business intelligence, providing valuable data to your Management and to your Marketing and Sales teams to understand where they should strengthen your service and decide on the next steps to be taken.</span>
            </Typography>
            <div className={classes.buttonWrapper}>
                <Typography className={classes.bodyText} variant="h6">
                    Learn how to use our <span className={classes.bold}>nanoStream Analytics</span> dashboard based on some real-life examples and screenshots
                </Typography>
                <Button
                    color="secondary"
                    variant="contained"
                >
                    <RedirectLink to={link.BLOG_ANALYTICS}>
                        Continue reading
                    </RedirectLink>
                </Button>
            </div>
        </div>
    );
}
