import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { Typography, IconButton } from '@material-ui/core';
import { LinkedIn } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    root: {
        [theme.breakpoints.up('xs')]: {
            margin: theme.spacing(2)
        }
    },
    socialMediaWrapper: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    icon: {
        color: theme.palette.common.white
    },
    image: {
        [theme.breakpoints.up('xs')]: {
            width: '150px',
            height: '150px',
            maxWidth: '100%',
            borderRadius: theme.spacing(0.5),
            backgroundColor: theme.palette.primary.light,
            boxShadow: theme.shadows[6]
        },
    },
    name: {
        fontSize: '1.5em',
        fontWeight: 700,
        lineHeight: 1
    },
    description: {
        fontWeight: 300,
        lineHeight: 1
    }
}))

export default function TeamMember(props) {
    const classes = useStyles();


    return (
        <div className={classes.root}>
            <img className={classes.image} src={props.image}/>
            <Typography className={classes.name} variant="body1">
                {props.name}
            </Typography>
            <Typography className={classes.description} variant="subtitle1">
                {props.description}
            </Typography>
            {
                props.linkedin
                ?
                <div className={classes.socialMediaWrapper}>
                    <IconButton className={classes.icon} size="small" href={props.linkedin}>
                        <LinkedIn fontSize="small"/>
                    </IconButton>
                </div>
                : null
            }
        </div>
    );
}
