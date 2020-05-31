import React from 'react';
import Head from 'next/head'
import { makeStyles } from '@material-ui/core/styles';
import IntroLogoLeft from '../components/layout/intro/IntroLogoLeft'

const useStyles = makeStyles((theme) => ({
  root: {
      [theme.breakpoints.up('xs')]: {},
      [theme.breakpoints.up('sm')]: {},
      [theme.breakpoints.up('md')]: {},
      [theme.breakpoints.up('lg')]: {},
      [theme.breakpoints.up('xl')]: {}
  }
}));

export default function Home() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Head>
        <title>nanocosmos</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <IntroLogoLeft title="Live stream your interactive use cases with ultra-low latency" subtitle="Lorem ipsum dolor sit amet" />
    </div>
  )
}
