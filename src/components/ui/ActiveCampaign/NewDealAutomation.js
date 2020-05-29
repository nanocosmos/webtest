import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, TextField, Button, FormControl, Select, MenuItem, InputLabel, FormHelperText } from '@material-ui/core';

import * as ac from '../../../utilities/acampaign-config';

const useStyles = makeStyles((theme) => ({
    root: {
        [theme.breakpoints.up('xs')]: {
        },
        [theme.breakpoints.up('md')]: {
        }
    },
    inputWrapper: {
        [theme.breakpoints.up('xs')]: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            margin: theme.spacing(2)
        }
    },
    inputRow: {
        [theme.breakpoints.up('xs')]: {
            display: 'flex',
            flexDirection: 'row',
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center'
        }
    },
    input: {
        width: '100%',
        marginTop: theme.spacing(0.5),
        '&:first-of-type': {
            marginRight: theme.spacing(2)
        }
    },
    buttonWrapper: {
        [theme.breakpoints.up('xs')]: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-end',
            marginRight: theme.spacing(2)
        }
    }
}))

export default function NewDealAutomation(props) {
    const classes = useStyles();

    const [activeCapmaignUrl] = useState("https://cors-anywhere.herokuapp.com/" + ac.APIURL);
    const [apiKey] = useState(ac.APIKEY);
    const [headers] = useState({
        headers: {
            "Api-Token": apiKey
        }
    })

    const [email, setEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    const [emailInvalid, setEmailInvalid] = useState(false);
    const [firstNameInvalid, setFirstNameInvalid] = useState(false);
    const [lastNameInvalid, setLastNameInvalid] = useState(false);
    const [customFields, setCustomFields] = useState({
        44: "",
        46: "",
        48: "",
        49: "",
        50: "",
        51: "",
        57: "",
        81: "",
        96: []
    })

    const checkValidName = (isFirstName, name) => {
        let regex = /^[a-zA-Z]+$/
        let valid = regex.test(name) && name.length > 1;
        if (isFirstName) {
            valid ? setFirstNameInvalid(false) : setFirstNameInvalid(true)
        }
        if (!isFirstName) {
            valid ? setLastNameInvalid(false) : setLastNameInvalid(true)
        }
        return !valid
    }

    const checkValidEmail = (email) => {
        console.log(email)
        let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let valid = regex.test(String(email).toLowerCase());
        console.log(valid)
        valid ? setEmailInvalid(false) : setEmailInvalid(true)
        return !valid;
    }

    const startWorkflow = () => {
        if (!emailInvalid && !firstNameInvalid && !lastNameInvalid) {
            createContact(firstName, lastName, email);
            props.sendMessage();
        }
    }

    const createContact = (firstname, lastname, email) => {
        axios.post(`${activeCapmaignUrl}/contact/sync`, {
            contact: {
                email: email,
                firstName: firstname,
                lastName: lastname,
                phone: ""
            }
        }, headers).then((response) => {
            let contactid = response.data.contact.id;
            addToAutomation(contactid, ac.NEW_DEAL);
            postAllCustomFieldValues(contactid, customFields)
        }).catch((error) => {
            console.log("Error in Creating", error)
        })
    }

    const addToAutomation = (contactid, automation) => {
        axios.post(`${activeCapmaignUrl}/contactAutomations`, {
            contactAutomation: {
                contact: contactid,
                automation: automation
            }
        }, headers)
            .then(() => { })
            .catch((error) => {
                console.log("Error in Adding to Automation", error)
            })
    }

    const postAllCustomFieldValues = (contactId, customFields) => {
        for (const [key, value] of Object.entries(customFields)) {
            axios.post(`${activeCapmaignUrl}/fieldValues`, {
                fieldValue: {
                    contact: contactId,
                    field: key,
                    value: value
                }
            }, headers)
                .then(() => { })
                .catch((error) => { console.log("[Error in sending the message]", error) })
        }
    }

    const updateCustomFieldValue = (fieldId, value) => {
        setCustomFields({
            ...customFields,
            [fieldId]: value
        });
    }

    const appendSelectValue = (event) => {
        let value = event.target.value
        const list = customFields[ac.USECASE.id];

        if (list.includes(value)) list.splice(list.indexOf(value), 1)
        else list.push(value)

        setCustomFields({
            ...customFields,
            [ac.USECASE.id]: value
        });
    }

    const getForm = () => {
        axios.get(`${activeCapmaignUrl}/forms/1`, headers).then((response) => {
            // addToAutomation(contactid, ac.NEW_DEAL);
            console.log(response)
        }).catch((error) => {
            console.log("Error in Creating", error)
        })
    }

    return (
        <div className={classes.root}>
            <div className={classes.inputWrapper}>
                <div className={classes.inputRow}>
                    <TextField
                        className={classes.input}
                        required
                        type="name"
                        color="secondary"
                        error={firstNameInvalid}
                        label="First Name"
                        onChange={(event) => { setFirstName(event.target.value) }}
                        onBlur={() => { checkValidName(true, firstName) }}
                        helperText={firstNameInvalid ? "Please enter a valid name." : ""}
                    />
                    <TextField
                        className={classes.input}
                        required
                        type="name"
                        color="secondary"
                        error={lastNameInvalid}
                        label="Last Name"
                        onChange={(event) => { setLastName(event.target.value) }}
                        onBlur={() => { checkValidName(false, lastName) }}
                        helperText={lastNameInvalid ? "Please enter a valid name." : ""}
                    />
                </div>
                <TextField
                    className={classes.input}
                    required
                    type="email"
                    color="secondary"
                    error={emailInvalid}
                    label="E-Mail"
                    onChange={(event) => { setEmail(event.target.value) }}
                    onBlur={() => { checkValidEmail(email) }}
                    helperText={emailInvalid ? "Please enter a valid email." : ""}
                />
                <FormControl className={classes.input}>
                    <InputLabel>Usecase</InputLabel>
                    <Select
                        id={`${ac.USECASE.id}`}
                        autoWidth
                        multiple
                        value={customFields[ac.USECASE.id]}
                        onChange={(event) => { appendSelectValue(event) }}
                    >
                        {
                            ac.USECASE.values.map((value, index) =>
                                <MenuItem
                                    value={value.value}
                                    key={`${value.id}-${index}`}
                                >
                                    {value.value}
                                </MenuItem>
                            )
                        }
                    </Select>
                </FormControl>
                {
                    [ac.REGION,
                    ac.RTMPSOURCE,
                    ac.INGESTS,
                    ac.VIEWERS,
                    ac.TRAFFIC_GB,
                    ac.OPTIME,
                    ac.SKYPEID,
                    ac.MESSAGE].map((value, index) =>
                        <TextField
                            multiline
                            fullWidth
                            className={classes.input}
                            color="secondary"
                            key={`${value.id}-${index}`}
                            label={value.title}
                            onChange={(event) => { updateCustomFieldValue(value.id, event.target.value) }}
                        />
                    )
                }
            </div>
            <div className={classes.buttonWrapper}>
                <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => { startWorkflow() }}
                >
                    Submit
                </Button>
            </div>
        </div>
    );
}
