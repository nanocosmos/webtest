import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import * as helper from '../../../utilities/helper-methods';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.primary.main
    },
    contentWrapper: {
        [theme.breakpoints.up('xs')]: {
            padding: theme.spacing(4),
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            minHeight: '10vh',
        },
        [theme.breakpoints.up('sm')]: {
            flexDirection: 'row',
            justifyContent: 'flex-start',
        },
        [theme.breakpoints.up('lg')]: {
            maxWidth: '60%',
            margin: '0 auto'
        }
    },
    // TEXT STYLES
    textWrapper: {
        textAlign: 'left',
        marginTop: theme.spacing(0.5)
    },
    title: {
        fontWeight: 900,
        lineHeight: 1,
        [theme.breakpoints.up('md')]: {
        }
    },
    author: {
        fontWeight: 500,
        lineHeight: 1.3,
        maxWidth: '300px',
        display: 'block',
        marginTop: theme.spacing(1),
        [theme.breakpoints.up('md')]: {
            maxWidth: '600px',
        },
    },
    bold: {
        fontWeight: '900'
    },
    image: {
        height: '100px',
        display: 'block',
        marginRight: theme.spacing(2)
    },
    tag: {
        padding: theme.spacing(0.5, 1, 0.5, 1),
        color: theme.palette.primary.main
    },
    tagWrapper: {
        backgroundColor: theme.palette.common.white,
        display: 'inline-block',
        borderRadius: theme.spacing(0.5),
        marginRight: theme.spacing(0.5),
        marginTop: theme.spacing(0.5)
    },
}))

export default function Header(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.contentWrapper}>
                <div>
                    <img className={classes.image} src={props.image} />
                </div>
                <div className={classes.textWrapper}>
                    <Typography
                        className={classes.title}
                        variant="h4"
                    >
                        {props.title}
                    </Typography>
                    <Typography
                        className={classes.author}
                        variant="button"
                    >
                        written by {props.author}
                    </Typography>
                    <Typography
                        color="textSecondary"
                        variant="button"
                    >
                        {helper.generateBlogPostDate(props.time)}
                    </Typography>
                    <div>
                    {
                        props.tags.map((tag, index) => (
                            <div key={`${tag}-${index}`} className={classes.tagWrapper}>
                                <Typography variant="button" className={classes.tag}>
                                    {tag.name}
                                </Typography>
                            </div>
                        ))
                    }
                    </div>
                </div>
            </div>
        </div>
    );
}
