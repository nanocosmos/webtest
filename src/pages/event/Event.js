import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import * as link from '../../utilities/link-config';
import * as helper from '../../utilities/helper-methods';
import Content from './components/Content';
import Header from './components/Header';
import ExploreBanner from '../../components/ui/Banner/ExploreBanner';
import NotFound from '../../components/ui/NotFound/NotFound';
import Loading from '../../components/ui/NanoLoading';

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: 'calc(100vh - 200px)',
    },
    notFound: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    banner: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
    }
}))

export default function Event() {
    const classes = useStyles();
    const [event, setEvent] = useState([])
    const [searchParam] = useState('q');
    const [loading, setLoading] = useState(true);
    const [foundEvent, setFoundEvent] = useState(false)
    const [fetchedEvent, setFetchedEvent] = useState(false)
    const [banner, setBanner] = useState(<ExploreBanner />)

    const root = clsx(classes.root, {
        [classes.notFound]: !foundEvent,
        [classes.banner]: foundEvent
    })

    const fetchEvent = (urlSuffix) => {
        axios.get(`${link.STRAPI_BASE}/events?urlSuffix_eq=${urlSuffix}`)
            .then((response) => {
                if (response.data.length > 0) {
                    setFoundEvent(true);
                    setFetchedEvent(true);
                    setEvent(response.data[0])
                    setBanner(helper.getBanner(response.data[0].bottomBanner))
                    setLoading(false);
                } else {
                    setFoundEvent(false);
                    setLoading(false);
                }
            })
            .catch((error) => {
                console.log(error)
                setFoundEvent(false);
                setLoading(false);
            })
    }

    useEffect(() => {
        let params = new URLSearchParams(window.location.search)
        if (params.has(searchParam)) { 
            setLoading(true);
            fetchEvent(params.get(searchParam)) 
        }
        if (!params.has(searchParam)) { 
            setLoading(false);
            setFoundEvent(false); 
        }
    }, [])

    return (
        <div className={root}>
            {
                loading
                    ? <Loading/>
                    :
                    <React.Fragment>
                        {
                            foundEvent && fetchedEvent
                                ?
                                <React.Fragment>
                                    <Header image={`${link.STRAPI_URL}${event.eventLogo.url}`} title={event.eventName} date={{ start: event.startDate, end: event.endDate }} />
                                    <Content event={event} />
                                </React.Fragment>
                                : <NotFound />
                        }
                    </React.Fragment>
            }
            <div>
                {
                    !loading && fetchedEvent
                    ? banner
                    : null
                }
            </div>
        </div>
    );
}