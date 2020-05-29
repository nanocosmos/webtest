import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import * as link from '../../../utilities/link-config';

import MarkdownPanel from '../../../components/ui/MarkdownPanel';
import Overline from '../../../components/withStyles/Header/Overline';


const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(4),
        backgroundColor: theme.palette.common.white,
        color: theme.palette.primary.main, 
    },
    // TEXT STYLES
    wrapper: {
        [theme.breakpoints.up('xs')]: {
            margin: theme.spacing(4),
            width: '95%',
            display: 'block',
            margin: '0 auto',
        },
        [theme.breakpoints.up('md')]: {
            width: '75%'
        },
        [theme.breakpoints.up('md')]: {
            marginTop: 0,
            width: '60%'
        },
        '&:first-of-type': {
            marginBottom: theme.spacing(2)
        }
    },
    headerText: {
        fontWeight: 300,
        color: theme.palette.secondary.marginTop,
        lineHeight: 1,
        [theme.breakpoints.up('md')]: {
            fontSize: '1.4rem',
            maxWidth: '700px',
        },
    },
    overline: {
        fontWeight: 600,
        lineHeight: 1,
        color: theme.palette.secondary.main
    },
    bold: {
        fontWeight: '900',
    },
    expansionPanelContentWrapper: {
    },
    linkWrapper: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginTop: theme.spacing(1)
    }
}))

export default function Blog() {
    const classes = useStyles();
    let [usecases, setUsecases] = useState([]);

    const fetchUsecases = () => {
        axios.get(`${link.STRAPI_BASE}/usecases`)
        .then((response) => {
            setUsecases(response.data)
        })
        .catch((error) => {
            console.log(error)
        })
    }

    useEffect(() => {
        fetchUsecases();
    }, [])

    return (
        <div className={classes.root}>
            <div className={classes.wrapper}>
                <Overline color="secondary" variant="button">
                    a selection of our partners and customers in diffrent industries and busines sectors
                </Overline>
                <Typography variant="h6" className={classes.headerText}>
                    <span className={classes.bold}>nanoStream Cloud</span> end-to-end live streaming solutions for a variety of usecacses
                </Typography>
            </div>
            <div className={classes.wrapper}>
                {
                    usecases.map((usecase, index) => (
                        <MarkdownPanel key={`${usecase.title}-${index}`} title={usecase.title} content={usecase.content} suffix={usecase.urlSuffix}/>
                    ))
                }
            </div>
        </div>
    );
}
