import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardHeader, CardContent, CardMedia, Avatar, Typography, IconButton, CardActions, Button } from '@material-ui/core';
import { MoreVert, ArrowRightAlt } from '@material-ui/icons';
import Skeleton from '@material-ui/lab/Skeleton';
import * as link from '../../../utilities/link-config';
import dummy from '../../../assets/icons/orange-world.png'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
    },
    blogWrapper: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        minWidth: '100%',
        [theme.breakpoints.up('500')]: {
            flexDirection: 'row',
            justifyContent: 'flex-start',
            flexWrap: 'wrap'
        },
    },
    card: {
        [theme.breakpoints.up('xs')]: {
            margin: '0 auto',
            marginBottom: theme.spacing(2),
            width: '90%',
            // flex: '1 1 90%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
        },
        [theme.breakpoints.up('550')]: {
            margin: theme.spacing(1),
            width: '46%',
            // flex: '1 1 46%'
        },
        [theme.breakpoints.up('800')]: {
            width: '31%',
            // flex: '1 1 31%'
        },
        [theme.breakpoints.up('lg')]: {
            width: '23%',
            // flex: '1 1 23%'
        },
    },
    media: {
        height: 190,
    },
    tag: {
        padding: theme.spacing(0.5, 1, 0.5, 1),
        color: theme.palette.common.white
    },
    tagWrapper: {
        cursor: 'pointer',
        backgroundColor: theme.palette.primary.main,
        display: 'inline-block',
        marginRight: theme.spacing(0.5),
        marginTop: theme.spacing(0.5),
        borderRadius: theme.spacing(0.5)
    },
    title: {
        marginTop: theme.spacing(1),
        fontWeight: 700,
        color: theme.palette.primary.light,
        lineHeight: 1
    },
    buttonWrapper: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end'

    }
}));

function Article(props) {
    const { loading = false } = props;
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <div>
                <CardHeader
                    avatar={
                        loading
                            ?
                            <Skeleton animation="wave" variant="circle" width={40} height={40} />
                            :
                            <Avatar
                                alt={`${props.author}_avatar`}
                                src={props.article.avatar}
                            />
                    }
                    // action={
                    //     loading
                    //         ? null
                    //         :
                    //         <IconButton>
                    //             <MoreVert />
                    //         </IconButton>
                    // }
                    title={
                        loading
                            ?
                            <Skeleton animation="wave" height={10} width="80%" style={{ marginBottom: 6 }} />
                            : props.article.author
                    }
                    titleTypographyProps={{
                        color: 'primary',
                    }}
                    subheader={
                        loading
                            ? <Skeleton animation="wave" height={10} width="40%" />
                            : props.article.date
                    }
                />
                {
                    loading
                        ?
                        <Skeleton animation="wave" variant="rect" className={classes.media} />
                        :
                        <CardMedia
                            className={classes.media}
                            image={props.article.imageSrc}
                            title={props.article.imageAlt}
                        />
                }
                <CardContent>
                    {
                        loading
                            ?
                            <React.Fragment>
                                <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
                                <Skeleton animation="wave" height={10} width="80%" />
                            </React.Fragment>
                            :
                            <React.Fragment>
                                {
                                    props.article.tags.map((tag, index) => (
                                        <div onClick={() => { props.tagClicked(index) }} value={tag.name} id={index} key={`${tag}-${index}`} className={classes.tagWrapper}>
                                            <Typography variant="button" className={classes.tag}>
                                                {tag.name}
                                            </Typography>
                                        </div>
                                    ))
                                }
                                <Typography className={classes.title} variant="h6">
                                    {props.article.title}
                                </Typography>
                            </React.Fragment>
                    }
                </CardContent>
            </div>
            <CardActions className={classes.buttonWrapper}>
            {
                loading
                    ?  <Skeleton animation="wave" width={93} height={29} style={{ marginBottom: 6 }} />
                    :
                    <Button
                        size="small"
                        color="primary"
                        endIcon={<ArrowRightAlt />}
                        onClick={() => window.open(`${link.PAGE_ARTICLE}?q=${props.article.id}`, '_self')}>
                        Read more
                    </Button>
            }
            </CardActions>
        </Card>
    );
}

export default function ArticleSkeleton(props) {
    const classes = useStyles();

    const generateBlogPostDate = (time) => {
        const date = new Date(time)
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

        let day = date.getDate();
        let month = months[date.getMonth()];
        let year = date.getFullYear();
        let hours = date.getHours();
        let minutes = date.getMinutes();

        return `${day} ${month} ${year} - ${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}`
    }

    const tagClicked = (index) => {
        props.tagClicked(document.getElementById(index).getAttribute("value"))
    }

    return (
        <div className={classes.root}>
            <div className={classes.blogWrapper}>
                {
                    props.articles !== undefined
                        ?
                        props.articles.map((singleArticle, index) => (
                            <Article
                                tagClicked={tagClicked}
                                key={index}
                                article={{
                                    id: singleArticle.id,
                                    author: singleArticle.author,
                                    avatar: dummy,
                                    title: singleArticle.title,
                                    date: generateBlogPostDate(singleArticle.created_at),
                                    imageSrc: `${link.STRAPI_URL}${singleArticle.titleImage.url}`,
                                    imageAlt: singleArticle.titleImage.name,
                                    tags: singleArticle.categories
                                }}
                            />
                        ))
                        : <Article loading />
                }
            </div>
        </div>

    );
}