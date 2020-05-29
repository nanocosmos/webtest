import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Header from './Header';
import Footer from './Footer';
import FooterNew from './FooterNew';
import clouds from '../assets/background/clouds-background.png';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundImage: `url(${clouds})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        minHeight: '100vh'
    }
}))

export default function Layout(props) {
    const classes = useStyles();


    return (
        <div className={classes.root}>
            <Header/>
            <main className={classes.content}>
                {props.children}
            </main>
            <Footer/>
        </div>
    );
}
