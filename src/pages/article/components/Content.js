import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ReactMarkdown from 'react-markdown'
import { Typography, Link } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(4),
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
        },
        '& a': {
            color: theme.palette.common.white
        },
        [theme.breakpoints.up('lg')]: {
            maxWidth: '60%',
            margin: '0 auto'
        }
    }
}))

export default function Content(props) {
    const classes = useStyles();



    return (
        <div className={classes.root}>
                <ReactMarkdown
                    id="markdown"
                    source={props.article.description}
                    className={classes.markdown}
                    escapeHtml={false}
                    renderers={{
                        paragraph: ({children}) => (
                            <Typography color="secondary" variant="body1">
                                {children}
                            </Typography>
                        )
                    }}
                />
        </div>
    );
}

