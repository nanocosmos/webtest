import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import image from '../../assets/icons/white-blog.png';
import IntroCenterImage from '../../layout/ui/Intro/IntroCenterImage';
import AllArticles from './components/All';

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: 'calc(100vh - 200px)'
    },
    allArticlesWrapper: {
        height: '100%'
    }
}))

export default function Blog() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <IntroCenterImage image={image} title="nanocosmos Blog" subtitle="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat." />
            <AllArticles />
        </div>
    );
}
