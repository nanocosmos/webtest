import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Button } from '@material-ui/core';
import { ArrowRightAlt } from '@material-ui/icons';
import Link from 'next/link';

const useStyles = makeStyles((theme) => ({
    root: {
        [theme.breakpoints.up('xs')]: {
            backgroundColor: theme.palette.primary.light,
            padding: theme.spacing(2),
            borderRadius: theme.spacing(0.5),
            width: '70%',
            margin: '0 auto',
            marginBottom: theme.spacing(1),
            boxShadow: theme.shadows[4]
        },
        [theme.breakpoints.up('sm')]: {
            width: '60%',
        },
        [theme.breakpoints.up('md')]: {
            width: '100%',
            margin: theme.spacing(1)
        }
    },
    title: {
        lineHeight: 1,
        fontWeight: 900
    },
    body: {
        lineHeight: 1.1,
        color: theme.palette.text.secondary
    },
    buttonWrapper: {
        marginTop: theme.spacing(1)
    },
    link: {
        color: 'inherit',
        textDecoration: 'none'
    }
}))

export default function Alternative(props) {
    const classes = useStyles();


    return (
        <div className={classes.root}>
            <Typography gutterBottom variant="h6" className={classes.title}>
                {props.description.title}
            </Typography>
            <Typography variant="body1" className={classes.body}>
                {props.description.description}
            </Typography>
            <div className={classes.buttonWrapper}>
                <Button
                    size="small"
                    color="secondary"
                    endIcon={<ArrowRightAlt />}
                >
                    <Link href={props.description.link}>
                        <a className={classes.link}>
                            {props.description.button}
                        </a>
                    </Link>
                </Button>
            </div>
        </div>
    );
}
