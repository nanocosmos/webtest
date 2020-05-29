import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Card, CardContent, Button, Divider } from '@material-ui/core';
import * as link from '../../../utilities/link-config';

import Including from './Including';
import AddOn from './AddOn';
import RedirectLink from '../../withStyles/RedirectLink';

const useStyles = makeStyles((theme) => ({
    root: {
        "&:hover": {
            cursor: 'pointer'
        },
        [theme.breakpoints.up('xs')]: {
            margin: theme.spacing(1),
            backgroundColor: theme.palette.common.white,
            color: theme.palette.primary.main
        },
        [theme.breakpoints.up('sm')]: {
            width: '100%'
        },
        [theme.breakpoints.up('md')]: {
            flexDirection: 'row',
            width: 'auto'
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
    addOnWrapper: {
        padding: theme.spacing(1),
        backgroundColor: theme.palette.primary.main,
        borderRadius: theme.spacing(0.5),
        margin: `${theme.spacing(0.5)}px 0`,
    },
    includeTitle: {
        [theme.breakpoints.up('xs')]: {
            lineHeight: 1.2,
            color: theme.palette.common.white,
            marginBottom: theme.spacing(0.5),
            fontWeight: 600
        }
    },
    broadcastOptions: {
        [theme.breakpoints.up('xs')]: {
            padding: theme.spacing(1)
        }
    },
    optionalAddOns: {
        [theme.breakpoints.up('xs')]: {
            padding: theme.spacing(1),
            backgroundColor: theme.palette.primary.light,
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
        marginLeft: theme.spacing(0.5)
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
                        {props.package} Package
                    </Typography>
                    <Typography color="secondary" className={classes.underline} variant="overline">
                        nanoStream Cloud "{props.package}"
                    </Typography>
                </div>
                <Divider/>
                <div className={classes.pricingWrapper}>
                    <Typography variant="h3" color="primary">
                        <span className={classes.bold}>€{props.price}</span>
                    </Typography>
                    <Typography className={classes.title} color="textSecondary" variant="button" gutterBottom>
                        per Month
                    </Typography>
                </div>
                <div className={classes.includingsWrapper}>
                    <Including whiteText={false} check={true} incl="ultra-low latency live streaming &amp; playback"/>
                    <div className={classes.addOnWrapper}>
                        <Typography className={classes.includeTitle} variant="button">
                            including
                        </Typography>
                        {
                            [
                                "H5Live Player",
                                "bintu.live REST API",
                                "global CDN",
                                "monitoring, failover, support",
                                "RTMP and WebRTC ingest"
                            ].map((including, index) => (
                                <Including key={`${including}-${index}`} whiteText={true} check={false} incl={including}/>
                            ))
                        }
                    </div>
                    {
                        [
                            { title: "concurrent broadcasts", count: props.conBrodacasts },
                            { title: "concurrent viewers", count: props.conViewers },
                            { title: "GB bandwidth", count: props.bandwith },
                            { title: `streaminghours (${props.c}c / add.GB)`, count: props.streamingHours }
                        ].map((including, index) => (
                            <Including key={`${including}-${index}`} whiteText={false} check={true} count={including.count} incl={including.title}/>
                        ))
                    }
                </div>
                <div className={classes.broadcastOptions}>
                    <Typography variant="button" className={classes.title}>
                        Broadcast Options
                    </Typography>
                    <Typography variant="button" color="textPrimary">
                        Custom Live Encoders (RTMP/H.264/ACC) <br/>
                        nanoStream Apps (iOS/Android) <br/>
                        nanoStream WebRTC.live (browser-based)
                    </Typography>
                </div>
                <div className={classes.optionalAddOns}>
                    <Typography variant="button" className={classes.title}>
                        Optional Add-ons
                    </Typography>
                    {
                        [
                            "nanoStream SDKs (iOS, Android, Windows, Mac)",
                            "live recording/VOD",
                            "transcoding"
                        ].map( (addOn, index) => (
                            <AddOn key={`${addOn}-${index}`} whiteText={true} addOn={addOn}/>
                        ))
                    }
                </div>
                <div className={classes.buttonWrapper}>
                    <Button 
                        variant="outlined" 
                        color="primary" 
                        size="small"
                    >
                        <RedirectLink to={link.PAGE_GET_A_QUOTE}>
                            Contact us
                        </RedirectLink>
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
