import React, { useState } from 'react';
import Head from 'next/head'
import { makeStyles } from '@material-ui/core/styles';
import IntroCenterImage from '../components/layout/intro/IntroCenterImage'
import * as link from '../utilities/link-config';
import Preview from '../components/content/blog/Preview';
import { Pagination } from '@material-ui/lab';

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
            margin: theme.spacing(2)
        },
        [theme.breakpoints.up('sm')]: {
            flexDirection: 'row',
            flexWrap: 'wrap',
            alignItems: 'stretch'
        },
        [theme.breakpoints.up('md')]: {
            justifyContent: 'flex-start'
        },
        [theme.breakpoints.up('lg')]: {},
        [theme.breakpoints.up('xl')]: {}
    }
}));

function Blog({ posts }) {
    const classes = useStyles();
    const [amountShown] = useState(12);
    const [count, setCount] = useState(Math.ceil(posts.length/amountShown));

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
            <div className={classes.previewWrapper}>
                {
                    posts.map((post, index) => (
                        <Preview post={post} key={index} />
                    ))
                }
            </div>
            <div className={classes.pagination}>
                <Pagination showFirstButton showLastButton onChange={pageChanged} count={count} />
            </div>
        </div>
    )
}

export async function getStaticProps() {
    const res = await fetch(`${link.STRAPI_URL}/articles`);
    const posts = await res.json();

    return {
        props: {
            posts
        }
    }
}

export default Blog;
