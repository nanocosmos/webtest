import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        marginBottom: theme.spacing(2)
    },
    contentWrapper: {
        color: theme.palette.secondary.main,
        backgroundColor: theme.palette.primary.light,
        borderRadius: theme.spacing(0.5)
    },
    section: {
        padding: theme.spacing(2)
    },
    title: {
        lineHeight: 1.1,
        '&:first-of-type': {
            fontWeight: 900,
            fontSize: '1.1em'
        }
    }
}))

export default function Contact() {
    const classes = useStyles();
    let address = [
        "nanocosmos Informationstechnologien GmbH",
        "Am Borsigturm 42-44",
        "13507 Berlin",
        "Germany"
    ]
    let contact = [
        "Contact",
        "Phone: +49 (30) 43 03 24 11",
        "Fax: +49 (30) 43 03 24 13",
        "Web: www.nanocosmos.de",
        "Sales: sales@nanocosmos.de",
        "Support: support@nanocosmos.de"
    ]
    let office = [
        "Registered Office",
        "Berlin, Germany",
        "District court Berlin-Charlottenburg, HRB 68162",
        "VAT-ID. No.: DE197434921"
    ]

    return (
        <div className={classes.root}>
            <div className={classes.contentWrapper}>
                {
                    [
                        address,
                        contact,
                        office
                    ].map((content, index) => (
                        <div key={`${content}-${index}`} className={classes.section}>
                            {
                                content.map(info => (
                                    <Typography variant="body1" className={classes.title}>
                                        {info}
                                    </Typography>
                                ))
                            }
                        </div>
                    ))
                }
            </div>
        </div>
    );
}