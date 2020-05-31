import React from 'react';
import ReactMarkdown from 'react-markdown';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { generateBlogPostDate } from '../../../utilities/helper-methods';

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: 'calc(100vh - 200px)',
    },
    headerWrapper: {
        [theme.breakpoints.up('xs')]: {
            padding: theme.spacing(4),
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
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
    titleWrapper: {
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
    icon: {
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
            color: theme.palette.primary.light
        },
        [theme.breakpoints.up('lg')]: {
            maxWidth: '60%',
            margin: '0 auto'
        }
    },
    contentWrapper: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.common.white,
        padding: theme.spacing(4),
        borderRadius: theme.spacing(0.5)
    }
}));

export default function Article(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.headerWrapper}>
                <div>
                    <img className={classes.icon} src={props.image} />
                </div>
                <div className={classes.titleWrapper}>
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
                        {generateBlogPostDate(props.time)}
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
            <div className={classes.contentWrapper}>
                <ReactMarkdown
                    id="markdown"
                    source={props.description}
                    className={classes.markdown}
                    escapeHtml={false}
                    renderers={{
                        paragraph: ({ children }) => (
                            <Typography color="secondary" variant="body1">
                                {children}
                            </Typography>
                        )
                    }}
                />
            </div>
        </div>
    )
}
