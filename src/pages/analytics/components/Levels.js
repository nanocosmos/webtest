import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Tabs, Tab, Typography, Box } from '@material-ui/core';

import streamanalytics from '../../../assets/icons/white-stream-analytics.png';
import businessintelligence from '../../../assets/icons/white-business-intelligence.png';
import metrics from '../../../assets/icons/white-metrics.png'
import GoodToKnow from './GoodToKnow';

const useStyles = makeStyles((theme) => ({
    root: {
    },
    icon: {
        width: '50px'
    },
    div: {
        [theme.breakpoints.up('xs')]: {
            backgroundColor: theme.palette.common.white,
            borderRadius: theme.spacing(0.5),
            color: theme.palette.secondary.main,
            textAlign: 'center',
            margin: '0 auto'
        },
        [theme.breakpoints.up('sm')]: {
            width: '80%',
        },
        [theme.breakpoints.up('md')]: {
            width: '50%',
        }
    }
}));

function TabPanel(props) {
    const classes = useStyles();
    const { description, value, index } = props;

    return (
        <div className={classes.div}
            hidden={value !== index}
            id={index}
        >
            {value === index && (
                <Box p={3}>
                    <Typography variant="body1">{description}</Typography>
                </Box>
            )}
        </div>
    );
}

export default function Levels() {
    const classes = useStyles();
    const [value, setValue] = useState(0);
    const [description] = useState([
        { description: "About usage, traffic volume, countries, customers, IP’s and world map overview on ingest/playout." },
        { description: "Conclusions about several aggregated metrics. Example: Tagging: you can “tag” your live streams by topics or events and then query them from the Analytics dashboard. Or you want insight on how certain countries perform compared to each other. by using the country filter." },
        { description: "Will get additional insight and details about the player clients: we show H5Live player information like OS/browser, max concurrent viewers, play buffer ratio, startup time, player error codes and other events like buffer play ratio and latency, both shown as graphs and on a world map " }
    
    ])

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <Tabs centered value={value} onChange={handleChange}>
                <Tab label="Live Stream Analytics" icon={<img className={classes.icon} src={streamanalytics} />} />
                <Tab label="Business Intelligence" icon={<img className={classes.icon} src={businessintelligence} />} />
                <Tab label="H5Live Player Metrics" icon={<img className={classes.icon} src={metrics} />} />
            </Tabs>
            {
                description.map((item, index) => (
                    <TabPanel key={`${item.description}-${index}`} value={value} index={index} description={item.description}></TabPanel>
                ))
            }
        </div>
    );
}