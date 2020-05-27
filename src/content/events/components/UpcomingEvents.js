import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';

import * as link from '../../../utilities/link-config';
import * as helper from '../../../utilities/helper-methods';
import ExploreBanner from '../../../layout/ui/Banner/ExploreBanner';
import Upcoming from './Upcoming';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(4)
    },
    eventWrapper: {
        display: 'flex',
        flexDirection: 'column',
    }
}))

export default function UpcomingEvents() {
    const classes = useStyles();
    const [events, setEvents] = useState([])

    const fetchEvents = () => {
        axios.get(`${link.STRAPI_BASE}/events?_sort=startDate:ASC`)
            .then((response) => {
                console.log(response.data)
                setEvents(response.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    useEffect(() => {
        fetchEvents();
    }, [])


    return (
        <div className={classes.root}>
            <div className={classes.eventWrapper}>
                {
                    events.map((event, index) => (
                        helper.checkShowDateValidity(event.endDate)
                            ? <Upcoming key={`${event}-${index}`} event={event} />
                            : null
                    ))
                }
            </div>
        </div>
    );
}
