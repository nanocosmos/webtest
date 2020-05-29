import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import * as link from '../../../utilities/link-config';

import world from '../../../assets/collagen/orange-cdn.png';
import Question from '../../../components/ui/Questions';

import HeaderWrapper from '../../../components/withStyles/Header/Wrapper';
import BoldTitle from '../../../components/withStyles/Header/BoldTitle';
import Overline from '../../../components/withStyles/Header/Overline';

const useStyles = makeStyles((theme) => ({
    root: {
        [theme.breakpoints.up('xs')]: {
            margin: 0,
            flexGrow: 1,
            backgroundColor: theme.palette.common.white,
            color: theme.palette.secondary.main
        }
    },
    container: {
        [theme.breakpoints.up('xs')]: {
            padding: theme.spacing(2),
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        }
    },
    contentWrapper: {
        [theme.breakpoints.up('xs')]: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        },
        [theme.breakpoints.up('md')]: {
            flexDirection: 'row'
        }
    },
    item: {
        [theme.breakpoints.up('xs')]: {
            padding: theme.spacing(1),
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
        }
    },
    image: {
        [theme.breakpoints.up('xs')]: {
            width: '90%',
            display: 'block',
            margin: '0 auto'
        }
    }
}))

export default function Faq() {
    const classes = useStyles();
    let questions = [
        { text: "What is interactive live streaming?", link: link.BLOG_INTERACTIVE_STREAMING },
        { text: "Getting insights in your live streams for improved QoS", link: link.BLOG_ANALYTICS },
        { text: "Setting up your nanoStream Cloud Account", link: link.BLOG_SETTING_UP_NANOCLOUD },
        { text: "Documentation and developer information", link: link.DOCS },
        { text: "Videos and Tutorials", link: link.PAGE_VIDEOS }
    ]

    return (
        <div className={classes.root}>
            <Grid container className={classes.container}>
                <Grid className={classes.item} item xs={12}>
                    <HeaderWrapper align="center">
                        <Overline color="secondary">
                            Don't know where to start?
                            <br />
                            Check the links below to learn more about ultra-low latency live streaming
                        </Overline>
                        <BoldTitle color="secondary">
                            Start live streaming worldwide
                        </BoldTitle>
                    </HeaderWrapper>
                </Grid>
                <div className={classes.contentWrapper}>
                    <Grid item xs={12}>
                        <img className={classes.image} src={world} />
                    </Grid>
                    <Grid item className={classes.item} xs={12}>
                        {
                            questions.map((question, index) => (
                                <Question key={`${question.text}-${index}`} text={question.text} link={question.link} />
                            ))
                        }
                    </Grid>
                </div>
            </Grid>
        </div>
    );
}
