import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, TextField, Button } from '@material-ui/core';

import * as ac from '../../../utilities/acampaign-config';

const useStyles = makeStyles((theme) => ({
    root: {
        [theme.breakpoints.up('xs')]: {
        },
        [theme.breakpoints.up('md')]: {
        }
    },
    textFieldWrapper: {
        [theme.breakpoints.up('xs')]: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            margin: theme.spacing(2)
        }
    },
    textField: {
        width: '50%',
        marginTop: theme.spacing(0.5),
        '&:first-of-type': {
            marginRight: theme.spacing(1)
        }
    },
    buttonWrapper: {
        [theme.breakpoints.up('xs')]: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
        }
    }
}))

export default function WebRTCAutomation(props) {
    const classes = useStyles();

    const [accountUrl] = useState("https://cors-anywhere.herokuapp.com/" + ac.APIURL);
    const [webcasterAutomation] = useState(ac.WEBCASTER_DEMO);
    const [apiKey] = useState(ac.APIKEY);
    const [headers] = useState({
        headers: {
            "Api-Token": apiKey
        }
    })

    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [emailInvalid, setEmailInvalid] = useState(false);
    const [nameInvalid, setNameInvalid] = useState(false);

    const checkValidName = (name) => {
        let regex = /^[a-zA-Z]+$/
        let valid = regex.test(name) && name.length > 1;
        valid ? setNameInvalid(false) : setNameInvalid(true)
        return valid
    }

    const checkValidEmail = (email) => {
        let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let valid = regex.test(String(email).toLowerCase());
        valid ? setEmailInvalid(false) : setEmailInvalid(true)
        return valid;
    }

    const createContact = (name, email) => {
        axios.post(`${accountUrl}/contact/sync`, {
            contact: {
                email: email,
                firstName: name,
                lastName: "",
                phone: ""
            }
        }, headers).then((response) => {
            console.log("added to contact list")
            addToAutomation(response.data.contact.id, ac.WEBCASTER_DEMO);
        }).catch((error) => {
            console.log("Error in Creating", error)
        })
    }

    const addToAutomation = (contact, automation) => {
        axios.post(`${accountUrl}/contactAutomations`, {
            contactAutomation: {
                contact: contact,
                automation: automation
            }
        }, headers).then((response) => {
            console.log("added to automation");
        }).catch((error) => {
            console.log("Error in Adding to Automation", error)
        })
    }

    const showWebcaster = () => {
        let validEmail = checkValidEmail(email);
        let validName = checkValidName(name);
        if(validEmail && validName) {
            createContact(name,email);
            props.showQuickDemo(true);
        }
    }

    return (
        <div className={classes.root}>
            <Typography variant="button">
            </Typography>
            <div className={classes.textFieldWrapper}>
                <TextField
                    className={classes.textField}
                    required
                    color="secondary"
                    error={nameInvalid}
                    label="Name"
                    onChange={(event) => { setName(event.target.value) }}
                    onBlur={() => { checkValidName(name) }}
                    helperText={nameInvalid ? "Please enter a valid name." : ""}
                />
                <TextField
                    className={classes.textField}
                    required
                    color="secondary"
                    error={emailInvalid}
                    label="E-Mail"
                    onChange={(event) => { setEmail(event.target.value) }}
                    onBlur={() => { checkValidEmail(email) }}
                    helperText={emailInvalid ? "Please enter a valid email." : ""}
                />
            </div>
            <div className={classes.buttonWrapper}>
                <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => {  showWebcaster(); }}
                >
                    Show quick demo
                </Button>
            </div>
        </div>
    );
}
