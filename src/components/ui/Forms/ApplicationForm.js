import React, { useState } from 'react';
import axios from 'axios';
import { FilePond } from 'react-filepond';
import 'filepond/dist/filepond.min.css';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button, Typography } from '@material-ui/core';

import nanologo from '../../../assets/logo/white-logo.png';
import Response from './Response';

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
    },
    fileUploadWrapper: {
        margin: theme.spacing(2)
    },
    title: {
        fontWeight: 900,
        lineHeight: 1,
        textAlign: 'center'
    },
    image: {
        height: '40px',
        marginBottom: theme.spacing(1)
    },
    responseWrapper: {
        margin: theme.spacing(2),
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.palette.primary.light,
        padding: theme.spacing(4),
        borderRadius: theme.spacing(1)
    }
}))

export default function ApplicationForm(props) {
    const classes = useStyles();

    const [email, setEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [files, setFiles] = useState([]);
    const [sent, setSent] = useState(false);

    const [emailInvalid, setEmailInvalid] = useState(false);
    const [firstNameInvalid, setFirstNameInvalid] = useState(false);
    const [lastNameInvalid, setLastNameInvalid] = useState(false);

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
        if (!emailInvalid && !firstNameInvalid && !lastNameInvalid && files.length !== 0) {
            console.log("Sent Application")
            setSent(true)
        }
    }

    return (
        <div className={classes.root}>
            {
                sent
                    ?
                    // <div className={classes.responseWrapper}>
                    //     <img className={classes.image} src={nanologo}/>
                    //     <Typography className={classes.title} variant="h4">
                            
                    //     </Typography>
                    //     <Typography variant="body1">
                    //         We will reach out to you as soon as possible.
                    //     </Typography>
                    // </div>
                    <Response message="Thank you for your application"/>
                    :
                    <div>
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
                            <TextField
                                className={classes.input}
                                multiline
                                fullWidth
                                color="secondary"
                                label="Project References"
                                onChange={() => { console.log("project reg") }}
                            />
                        </div>
                        <div className={classes.fileUploadWrapper}>
                            <Typography gutterBottom color="textSecondary" variant="body1">
                                Upload your CV and Cover Letter (max. 3 files)
                </Typography>
                            <FilePond
                                allowMultiple={true}
                                maxFiles={3}
                                files={files}
                                onupdatefiles={(fileInput) => { setFiles(fileInput.map(fileItem => fileItem.file)) }}
                            />
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
            }
        </div>
    );
}
