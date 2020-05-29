import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import Timeline from './Timeline';
import * as link from '../../../utilities/link-config';


const useStyles = makeStyles((theme) => ({
    root: {
        [theme.breakpoints.up('xs')]: {
            padding: theme.spacing(4),
            backgroundColor: theme.palette.common.white,
        },
        [theme.breakpoints.up('md')]: {
        }
    },
    journeyWrapper: {
        [theme.breakpoints.up('xs')]: {
            display: 'flex',
            flexDirection: 'column',
            margin: theme.spacing(0, 4),
        },
        [theme.breakpoints.up('md')]: {
            width: '80%',
            margin: 'auto'
        }
    },
    title: {
        [theme.breakpoints.up('xs')]: {        
            fontWeight: 900,
            lineHeight: 1.2,
            width: '90%',
            color: theme.palette.primary.main
        },
        [theme.breakpoints.up('sm')]: {
            fontSize: '1.6em',
            width: '80%'
        }
    },
    text: {
        [theme.breakpoints.up('xs')]: {        
            lineHeight: 1.2,
            color: theme.palette.primary.light
        },
        [theme.breakpoints.up('sm')]: {
            fontSize: '1em',
        }
    },
    image: {
        height: '100px',
    }
}))

export default function Journey(props) {
    const classes = useStyles();
    const [journey, setJourney] = useState([])

    const fetchJourney = () => {
        axios.get(`${link.STRAPI_BASE}/journeys`)
        .then((response) => {
            setJourney(response.data)
        })
        .catch((error) => {
            console.log(error)
        })
      }

    useEffect(() => {
        fetchJourney();
      }, [])

    return (
        <div className={classes.root}>
            <div className={classes.journeyWrapper}>
                <Typography className={classes.title} gutterBottom variant="body1">
                    nanocosmos started 1998 in Berlin as a software engineering company and technology partner for leading market players in the video and broadcast industry, and is now offering license products to professional customers worldwide. 
                </Typography>
                <Typography className={classes.text} variant="body2">
                    The nanoStream product range was first introduced in 2009 complementing the codec products with a high level encoding and streaming API, for desktop and browser applications. 
                    nanoStream Cloud is the core product and solution since its introduction 2016, a full service end-to-end live streaming platform with a global scale, based on ultra low latency live streaming to enage audiences worldwide. 
                    Long-term partnerships with close customer relation, support and consulting services are a decisive part of our offering.
                </Typography>
                <Timeline  journey={journey}/>
            </div>
        </div>
    );
}
