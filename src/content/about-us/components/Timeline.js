import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Stepper, Step, StepLabel, StepContent, Typography } from '@material-ui/core'
import { NewReleases } from '@material-ui/icons'
 
const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        marginTop: theme.spacing(2)
    },
    stepper: {
        backgroundColor: 'inherit',
        color: theme.palette.primary.main,
    },
    step: {
    },
    label: {
        fontWeight: 900,
        color: theme.palette.secondary.main
    },
    timeline: {
        height: '50vh',
        overflow: 'scroll'
    },
    content: {
        lineHeight: 1.2
    }
}));

export default function TimeLine(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.timeline}>
                <Stepper 
                    className={classes.stepper} 
                    orientation="vertical"
                >
                    {props.journey.map((step, index) => (
                        <Step className={classes.step} active key={`${step.content}-${index}`}>
                            <StepLabel StepIconComponent={NewReleases}>
                                <Typography className={classes.label} variant="body1">{step.year}</Typography>
                            </StepLabel>
                            <StepContent>
                                <Typography className={classes.content} variant="body1">{step.description}</Typography>
                            </StepContent>
                        </Step>
                    ))}
                </Stepper>
            </div>
        </div>
    );
}