import React, { useState } from 'react';
import Head from 'next/head'
import { makeStyles } from '@material-ui/core/styles';
import IntroCenterImage from '../components/layout/intro/IntroCenterImage'
import * as link from '../utilities/link-config';
import Preview from '../components/content/blog/Preview';
import { Pagination } from '@material-ui/lab';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        [theme.breakpoints.up('xs')]: {},
        [theme.breakpoints.up('sm')]: {},
        [theme.breakpoints.up('md')]: {},
        [theme.breakpoints.up('lg')]: {},
        [theme.breakpoints.up('xl')]: {}
    },
    previewWrapper: {
        [theme.breakpoints.up('xs')]: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
        },
        [theme.breakpoints.up('sm')]: {
            flexDirection: 'row',
            alignItems: 'stretch'
        },
        [theme.breakpoints.up('md')]: {
            justifyContent: 'flex-start'
        },
        [theme.breakpoints.up('lg')]: {},
        [theme.breakpoints.up('xl')]: {}
    },
    gridItem: {
        [theme.breakpoints.up('xs')]: {
            display: 'block',
            width: '90%',
            marginBottom: theme.spacing(2),
        },
        [theme.breakpoints.up('sm')]: {
            margin: theme.spacing(1.5)
        }
    }
}));

function Blog({ posts, postsCount }) {
    const classes = useStyles();
    const [amountShown] = useState(12);
    const [count, setCount] = useState(Math.ceil(postsCount / amountShown));
    const [limit, setLimit] = useState({
        start: 0,
        limit: amountShown
    })

    const pageChanged = (event, value) => {
        console.log(event, value)
    }

    return (
        <div className={classes.root}>
            <Head>
                <title>nanocosmos Blog</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <IntroCenterImage
                image='/assets/icons/white-blog.png'
                title="nanocosmos Blog"
                subtitle="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat."
            />
            <Grid container className={classes.previewWrapper}>
                {
                    posts.map((post, index) => (
                        <Grid  key={index} className={classes.gridItem} item xs={12} sm={5} md={3}>
                            <Preview post={post} />
                        </Grid>
                    ))
                }
            </Grid>
            <div className={classes.pagination}>
                <Pagination showFirstButton showLastButton onChange={pageChanged} count={count} />
            </div>
        </div>
    )
}

export async function getStaticProps() {
    const resArticles = await fetch(`${link.STRAPI_URL}/articles`);
    const resCountArticles = await fetch(`${link.STRAPI_URL}/articles/count`);
    const posts = await resArticles.json();
    const postsCount = await resCountArticles.json();

    return {
        props: {
            posts,
            postsCount
        }
    }
}

export default Blog;
