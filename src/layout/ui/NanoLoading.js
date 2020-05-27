import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import image from '../../assets/icons/white-world.png';

const useStyles = makeStyles((theme) => ({
    root: {
    },
    image: {
        height: '100px',
        animationName: '$rotation',
        animationDuration: '2000ms',
        animationIterationCount: 'infinite',
        animationTimingFunction: 'linear',
    },
    '@keyframes rotation': {
        from: {
            transform: 'rotate(0deg)',
        },
        to: {
            transform: 'rotate(359deg)',
        }
    },

}))

export default function Loading(props) {
    const classes = useStyles();

    return (
        <img className={classes.image} src={image} />
    );
}
