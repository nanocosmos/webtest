import React from 'react';
import Head from 'next/head'
import { makeStyles } from '@material-ui/core/styles';
import { getAllPostIds } from '../../utilities/helper-methods';
import * as link from '../../utilities/link-config';

import Article from '../../components/content/blog/Article';

const useStyles = makeStyles((theme) => ({}));

function BlogPost({ post }) {

    console.log(post)

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Head>
                <title>nanocosmos Blogpost</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Article
                image={`${link.STRAPI_URL}${post.icon.url}`}
                title={post.title}
                author={post.author}
                description={post.description}
                time={post.created_at}
                tags={post.categories}
            />
        </div>
    )
}

export async function getStaticPaths() {
    const res = await fetch(`${link.STRAPI_URL}/articles`);
    const posts = await res.json();
    const paths = getAllPostIds(posts);

    return {
        paths, fallback: false
    }
}

export async function getStaticProps({ params }) {
    const res = await fetch(`${link.STRAPI_URL}/articles/${params.id}`);
    const post = await res.json();

    return {
        props: {
            post
        }
    }
}

export default BlogPost;