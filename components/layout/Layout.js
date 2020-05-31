import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Toolbar from './toolbar/Header';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundImage: `url(/assets/background/clouds-background.png)`,
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
            <Toolbar/>
            <main className={classes.content}>
                {props.children}
            </main>
        </div>
    );
}
