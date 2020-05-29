import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ReactMarkdown from 'react-markdown'
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        margin: theme.spacing(4)
    },
    image: {
        height: '100px',
    },
    markdown: {
        '& img': {
            width: '500px',
            maxWidth: '100%',
            display: 'block',
            margin: 'auto',
            marginTop: theme.spacing(2),
            marginBottom: theme.spacing(2),
            backgroundColor: theme.palette.common.white
        },
        '& a': {
            color: theme.palette.common.white
        },
        [theme.breakpoints.up('lg')]: {
            maxWidth: '60%',
            margin: '0 auto'
        }
    },
    paragraph: {
        color: theme.palette.common.white
    },
    heading: {
        fontWeight: 900,
        lineHeight: 1.1,
        color: theme.palette.common.white
    }
}))

export default function Content(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
                <ReactMarkdown
                    id="markdown"
                    source={props.event.content}
                    className={classes.markdown}
                    escapeHtml={false}
                    renderers={{
                        paragraph: ({children}) => (
                            <Typography color="secondary" className={classes.paragraph} variant="body1">
                                {children}
                            </Typography>
                        ),
                        heading: ({children}) => (
                            <Typography color="secondary" className={classes.heading} variant="h4">
                                {children}
                            </Typography> 
                        )
                    }}
                />
        </div>
    );
}

