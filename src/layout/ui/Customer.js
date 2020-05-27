import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { MobileStepper, Typography, IconButton } from '@material-ui/core'
import { KeyboardArrowRight, KeyboardArrowLeft } from '@material-ui/icons';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const customer = [
    {
        name: "Tony",
        company: "Live Auctions",
        review: "We have been using your solution for nearly a year and it is going very well. Along with this, our own customer base has grown."
    },
    {
        name: "Mike Richardson",
        company: "Smartfrog Ltd.",
        review: "Nanocosmos provides key components for our mobile streaming solution."
    },
    {
        name: "Ben Morfoot",
        company: "DiscipleMedia",
        review: "nanocosmos technology allows us to create a direct channel between some of the best known content creation talent in the world and their fans."
    },
    {
        name: "Prof. Jürgen Lohr",
        company: "Beuth University",
        review: "High quality Multi-View Webcasting and Screen Sharing in our Research & Education. Great support."
    },
    {
        name: "Jennifer Shulz",
        company: "Zy LLC",
        review: "Live Video Webcasting and Screensharing in the browser, plugin-free, great service."
    },
    {
        name: "Alex",
        company: "Live Gaming",
        review: "With nanoStream Cloud and H5Live Player we finally reach our global audience on any device with low latency"
    }
];

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: 'inherit',
        borderRadius: theme.spacing(0.5),
    },
    stepper: {
        backgroundColor: 'inherit'
    },
    reviewWrapper: {
        padding: theme.spacing(2)
    },
    review: {
        lineHeight: 1,
        fontWeight: 300,
        textAlign: 'center'
    },
    author: {
        fontWeight: 600,
        display: 'block',
        margin: '0 auto',
        textAlign: 'center'
    }
}));

export default function Customer() {
    const classes = useStyles();
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = customer.length;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStepChange = (step) => {
        setActiveStep(step);
    };

    return (
        <div className={classes.root}>
            <div className={classes.reviewWrapper}>
                <Typography className={classes.author} variant="button">{customer[activeStep].name} &#8213; {customer[activeStep].company}</Typography>
                <AutoPlaySwipeableViews
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={activeStep}
                    onChangeIndex={handleStepChange}
                    enableMouseEvents
                >
                    {customer.map((step, index) => (
                        <div key={`${step.name}-${index}`}>
                            {Math.abs(activeStep - index) <= 2 ? (
                                <Typography gutterBottom className={classes.review} variant="h6">
                                    {step.review}
                                </Typography>
                            ) : null}
                        </div>
                    ))}
                </AutoPlaySwipeableViews>
            </div>
            <MobileStepper
                className={classes.stepper}
                steps={maxSteps}
                position="static"
                variant="dots"
                activeStep={activeStep}
                nextButton={
                    <IconButton size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
                        {theme.direction === 'rtl' ? <KeyboardArrowLeft fontSize="small"/> : <KeyboardArrowRight fontSize="small"/>}
                    </IconButton>
                }
                backButton={
                    <IconButton size="small" onClick={handleBack} disabled={activeStep === 0}>
                        {theme.direction === 'rtl' ? <KeyboardArrowRight fontSize="small"/> : <KeyboardArrowLeft fontSize="small"/>}
                    </IconButton>
                }
            />
        </div>
    );
}

