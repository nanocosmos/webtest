import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useRouter } from 'next/router';
import { Card, CardHeader, CardContent, CardMedia, Avatar, Typography, CardActions, Button } from '@material-ui/core';
import { ArrowRightAlt } from '@material-ui/icons';
import { Skeleton } from '@material-ui/lab';
import { generateBlogPostDate } from '../../../utilities/helper-methods';
import * as link from '../../../utilities/link-config';

const useStyles = makeStyles((theme) => ({
    root: {
        [theme.breakpoints.up('xs')]: {
            width: '100%',
            margin: theme.spacing(2),

        },
        [theme.breakpoints.up('sm')]: {
            width: '46%',
            margin: theme.spacing(1),
        },
        [theme.breakpoints.up('md')]: {
            width: '31%'
        },
        [theme.breakpoints.up('lg')]: {
            width: '23%'
        },
        [theme.breakpoints.up('xl')]: {}
    },
    contentWrapper: {

    },
    media: {
        [theme.breakpoints.up('xs')]: {
            height: 170
        },
        [theme.breakpoints.up('380')]: {
            height: 200
        },
        [theme.breakpoints.up('440')]: {
            height: 210
        },
        [theme.breakpoints.up('470')]: {
            height: 240
        },
        [theme.breakpoints.up('530')]: {
            height: 260
        },
        [theme.breakpoints.up('sm')]: {
            height: 190
        },
        [theme.breakpoints.up('md')]: {
            height: 160
        },
        [theme.breakpoints.up('lg')]: {
            height: 180
        },
        [theme.breakpoints.up('xl')]: {}
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

export default function Preview(props) {
    const classes = useStyles();
    const router = useRouter();


    const loading = props.loading
    const article = props.post

    const redirect = (id) => {
        router.push(`/blogpost/${id}`)
    }

    return (
        <Card className={classes.root}>
            <div className={classes.contentWrapper}>
                <CardHeader
                    avatar={
                        loading
                            ?
                            <Skeleton animation="wave" variant="circle" width={40} height={40} />
                            :
                            <Avatar
                                alt={`${article.author}_avatar`}
                                src='/assets/icons/orange-world.png'
                            />
                    }
                    title={
                        loading
                            ?
                            <Skeleton animation="wave" height={10} width="80%" style={{ marginBottom: 6 }} />
                            : article.author
                    }
                    titleTypographyProps={{
                        color: 'primary',
                    }}
                    subheader={
                        loading
                            ? <Skeleton animation="wave" height={10} width="40%" />
                            : generateBlogPostDate(article.created_at)
                    }
                />
                {
                    loading
                        ?
                        <Skeleton animation="wave" variant="rect" className={classes.media} />
                        :
                        <CardMedia
                            className={classes.media}
                            image={`${link.STRAPI_URL}${article.titleImage.url}`}
                            title={article.titleImage.name}
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
                                    article.categories.map((tag, index) => (
                                        <div value={tag.name} id={index} key={`${tag}-${index}`} className={classes.tagWrapper}>
                                            <Typography variant="button" className={classes.tag}>
                                                {tag.name}
                                            </Typography>
                                        </div>
                                    ))
                                }
                                <Typography className={classes.title} variant="h6">
                                    {article.title}
                                </Typography>
                            </React.Fragment>
                    }
                </CardContent>
            </div>
            <CardActions className={classes.buttonWrapper}>
                {
                    loading
                        ? <Skeleton animation="wave" width={93} height={29} style={{ marginBottom: 6 }} />
                        :
                        <Button
                            size="small"
                            color="primary"
                            endIcon={<ArrowRightAlt />}
                            onClick={() => redirect(article.id)}>
                            Read more
                    </Button>
                }
            </CardActions>
        </Card>

    );
}