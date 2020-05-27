import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import ApplicationForm from '../../../layout/ui/Forms/ApplicationForm';
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
    textWrapper: {
        [theme.breakpoints.up('xs')]: {
            margin: theme.spacing(2)
        },
        [theme.breakpoints.up('md')]: {
            width: '80%',
            margin: '0 auto'
        },        
        [theme.breakpoints.up('lg')]: {
            width: '60%',
        }
    },
    applicationFormWrapper: {
        [theme.breakpoints.up('xs')]: {
            width: '100%',
            margin: '0 auto'
        },
        [theme.breakpoints.up('md')]: {
            width: '80%',
        },        [theme.breakpoints.up('lg')]: {
            width: '60%',
        }
    }
}))

export default function OpenApplication() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.textWrapper}>
                <Overline color="secondary" variant="button">
                    Work with us
                </Overline>
                <BoldTitle color="white">
                    Send us your open application!
                </BoldTitle>
            </div>
            <div className={classes.applicationFormWrapper}>
                <ApplicationForm />
            </div>
        </div>
    );
}
