import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Button } from '@material-ui/core';
import { ArrowRightAlt } from '@material-ui/icons';
import * as link from '../../../utilities/link-config';

import nanoMobile from '../../../assets/icons/white-mobile.png';
import HeaderWrapper from '../../../layout/withStyles/Header/Wrapper';
import Overline from '../../../layout/withStyles/Header/Overline';
import BoldTitle from '../../../layout/withStyles/Header/BoldTitle';

const useStyles = makeStyles((theme) => ({
    root: {
        [theme.breakpoints.up('xs')]: {
            padding: theme.spacing(4)
        },
        [theme.breakpoints.up('md')]: {
        }
    },
    blogWrapper: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        [theme.breakpoints.up('xs')]: {
            height: '150px',
            margin: theme.spacing(3)
        },
        [theme.breakpoints.up('md')]: {
        }
    },
    text: {
        [theme.breakpoints.up('xs')]: {
            fontSize: 'inherit',
            lineHeight: 1.3,
            fontWeight: 600
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '1.2em',
        }
    },
    textWrapper: {
        width: '40%'
    }
}))

export default function Positions() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <HeaderWrapper align="center">
                <Overline variant="button" color="secondary">
                    We are building live streaming software and services for worldwide customers.
                </Overline>
                <BoldTitle color="white">
                    We’re working hard, having fun, and create great products!
                </BoldTitle>
            </HeaderWrapper>
            <div className={classes.blogWrapper}>
                <img className={classes.image} src={nanoMobile} />
                <div className={classes.textWrapper}>
                    <Typography className={classes.text} gutterBottom variant="body1">
                        You occasionally find job postings in our blog, but you may also send questions for free positions yourself.
                    </Typography>
                    <Button
                        variant="contained"
                        color="secondary"
                        href={link.BLOG_JOBS}
                        endIcon={<ArrowRightAlt />}
                    >
                        Blog
                    </Button>
                </div>
            </div>
        </div>
    );
}
