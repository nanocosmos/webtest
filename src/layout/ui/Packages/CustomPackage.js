import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Card, CardContent, Button, Divider } from '@material-ui/core';
import * as link from '../../../utilities/link-config';

import Including from './Including';

const useStyles = makeStyles((theme) => ({
    root: {
        "&:hover": {
            cursor: 'pointer'
        },
        [theme.breakpoints.up('xs')]: {
            margin: theme.spacing(1),
            backgroundColor: theme.palette.secondary.main,
            color: theme.palette.common.white
        }
    },
    underline: {
        fontWeight: 600
    },
    package: {
        fontWeight: 900,
        lineHeight: 1,
        margin: 0
    },
    pricingWrapper: {
        [theme.breakpoints.up('xs')]: {
            display: 'flex',
            flexDirection: 'column',
            // textAlign: 'center'
        }
    },
    includingsWrapper: {
        [theme.breakpoints.up('xs')]: {
        }
    },
    divider: {
        backgroundColor: theme.palette.common.white
    },
    addOnWrapper: {
        padding: theme.spacing(0.5),
        backgroundColor: theme.palette.primary.main,
        borderRadius: theme.spacing(0.5),
        margin: `${theme.spacing(0.5)}px 0`,
    },
    optionalAddOns: {
        [theme.breakpoints.up('xs')]: {
            padding: theme.spacing(1),
            backgroundColor: theme.palette.secondary.main,
            borderRadius: theme.spacing(0.5),
            margin: `${theme.spacing(0.5)}px 0`,
            color: theme.palette.common.white
        }
    },
    buttonWrapper: {
        [theme.breakpoints.up('xs')]: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-end',
            paddgin: theme.spacing(1),
            marginTop: theme.spacing(2),
            color: theme.palette.common.white
        }
    },
    button: {
        marginLeft: theme.spacing(0.5),
    },
    title: {
        display: 'block',
        fontWeight: 600
    },
    bold: {
        fontWeight: 900
    }
}))

export default function Package(props) {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardContent>
                <div>
                    <Typography className={classes.package} variant="h4">
                        {props.package}
                    </Typography>
                    <Typography color="primary" className={classes.underline} variant="overline">
                        nanoStream Software cross-platform
                    </Typography>
                </div>
                <Divider className={classes.divider} />
                <div className={classes.pricingWrapper}>
                    <Typography variant="h3" color="primary">
                        <span className={classes.bold}>ASK</span>
                    </Typography>
                    <Typography className={classes.title} variant="button" gutterBottom>
                        for pricing
                    </Typography>
                </div>
                <div className={classes.includingsWrapper}>
                    {
                        [
                            'bintu.live usage &quot;unlimited&quot;',
                            'cloud service &amp; REST API',
                            'low-latency live streaming &amp; playback',
                            'H5Live Player or stream to your own server/CDN',
                            'updates & support',
                        ].map((including, index) => (
                            <Including key={`${including}-${index}`} whiteText={true} check={true} incl={including} />
                        ))
                    }
                    {
                        [
                            "broadcasts/players",
                            "GB bandwidth",
                            "streaminghours",
                            "file storage"
                        ].map((including, index) => (
                            <Including key={`${including}-${index}`} whiteText={true} check={true} count={"FLEXIBLE"} incl={including} />
                        ))
                    }
                </div>
                <div className={classes.addOnWrapper}>
                    {
                        [
                            "WebRTC",
                            "transcoding",
                            "worldwide CDN for large distribution",
                            "private label/rebranding"
                        ].map( (including, index) => (
                            <Including key={`${including}-${index}`} whiteText={true} check={false} incl={including} />
                        ))
                    }
                </div>
                <div className={classes.buttonWrapper}>
                    <Button
                        variant="outlined"
                        color="primary"
                        size="small"
                        onClick={() => window.open(link.PAGE_GET_A_QUOTE, "_self")}
                    >
                        Contact us
                    </Button>
                    <Button
                        variant="contained"
                        color="primary"
                        size="small"
                        className={classes.button}
                        onClick={() => window.open(link.BUY, "_self")}
                    >
                        Buy now
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
}
