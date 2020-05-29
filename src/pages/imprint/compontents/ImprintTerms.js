import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Link } from '@material-ui/core';
import * as link from '../../../utilities/link-config';

const useStyles = makeStyles((theme) => ({
    root: {
    },
    termsWrapper: {
        color: theme.palette.secondary.main,
        backgroundColor: theme.palette.primary.light,
        borderRadius: theme.spacing(0.5)
    },
    term: {
        padding: theme.spacing(2)
    },
    title: {
        fontWeight: 900,
        fontSize: '1.1em'
    },
    subtitle: {
        lineHeight: 1.1
    },
    fullTerms: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginTop: theme.spacing(1)
    }
}))

export default function ImprintTerms() {
    const classes = useStyles();
    let content = [
        { title: "License and Service Terms", subtitle: "By using the software and services provided by nanocosmos, you agree to the terms and conditions which are part of the software. Evaluation and Demo versions may be limited by runtime, test period, recording time, logo insertion or other restrictions. Evaluation is permitted for limited time (usually 7 days), production use and distribution requires a license purchase." },
        { title: "Privacy Policy", subtitle: "nanocosmos collects personal information to improve the manner by which we operate and offer our products and services, communicate with you about those products and services when needed. We will not share your personally identifiable information with third parties without your consent, unless such sharing is necessary for the purposes set forth in this Privacy Policy." },
        { title: "Disclaimer", subtitle: "Despite the meticulous checking of information it is not possible to completely rule out errors within the framework of this Internet presence. nanocosmos GmbH does not accept any legal responsibility or form of liability whatsoever for any remaining errors or the consequences resulting there from. No responsibility is accepted for the content of external links." },
    ]

    return (
        <div className={classes.root}>
            <div className={classes.termsWrapper}>
                {
                    content.map((section, index) => (
                        <div key={`${section.title}-${index}`} className={classes.term}>
                            <Typography className={classes.title} variant="body1">
                                {section.title}
                            </Typography>
                            <Typography className={classes.subtitle} variant="body1">
                                {section.subtitle}
                            </Typography>
                        </div>
                    ))
                }
            </div>
            <Typography className={classes.fullTerms} variant="body1">
                <Link color="secondary" href={link.TERMS}>
                    See our full Terms, Privacy and Data Protection
                </Link>
            </Typography>
        </div>
    );
}
