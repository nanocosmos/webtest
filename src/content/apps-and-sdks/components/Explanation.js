import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Button, Modal } from '@material-ui/core';
import * as link from '../../../utilities/link-config';

import H5LiveAutomation from '../../../layout/ui/ActiveCampaign/H5LiveAutomation';
import ModalLayout from '../../../layout/ui/ModalLayout';
import Response from '../../../layout/ui/Forms/Response';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.common.white,
        padding: theme.spacing(4)
    },
    text: {
        [theme.breakpoints.up('xs')]: {
            color: theme.palette.primary.main,
            lineHeight: 1,
            fontWeight: 300,
            '&:first-of-type': {
                fontWeight: 700,
                width: '80%'
            }
        },
        [theme.breakpoints.up('sm')]: {
            fontSize: '1.2em',
        },
    },
    modal: {
        [theme.breakpoints.up('xs')]: {
            display: 'flex',
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            '&:hover': {
                cursor: 'pointer'
            }
        }
    },
    wrapper: {
        [theme.breakpoints.up('xs')]: {
            width: '95%',
            margin: '0 auto'
        },
        [theme.breakpoints.up('md')]: {
            width: '80%'
        }
    },
    button: {
        marginRight: theme.spacing(1)
    },
    title: {
        fontWeight: 900,
        lineHeight: 1,
        textAlign: 'center',
        color: theme.palette.secondary.main
    },
}))

export default function Explanation() {
    const classes = useStyles();
    const [openModal, setOpenModal] = useState(false);
    const [sent, setSent] = useState(false);

    const handleCloseModal = () => {
        setOpenModal(false)
    }

    const handleOpenModal = () => {
        setOpenModal(true)
    }

    const handleSent = () => {
        setSent(true);
        setTimeout(() => {
            setOpenModal(false);
        }, 5000)
    }

    return (
        <div className={classes.root}>
            <Modal
                className={classes.modal}
                open={openModal}
                onClose={handleCloseModal}
            >
                <ModalLayout closeModal={handleCloseModal}>
                    {
                        sent 
                        ? <Response message="Thank you for your message" />
                        : 
                        <Typography variant="h4" className={classes.title}>
                            Contact us!
                        </Typography>
                    }
                    {
                        sent ? null : <H5LiveAutomation sent={handleSent}/>
                    }
                </ModalLayout>
            </Modal>
            <div className={classes.wrapper}>
                <Typography gutterBottom className={classes.text} variant="body1">
                Live video encoding and player software for complete end-to-end streaming solutions. <br/>
                Instant live streaming with low latency. 
                </Typography>
                <Typography gutterBottom className={classes.text} variant="body1">
                Get your nanoStream SDK or Cross-platform App and start live video streaming for your business today. <br/>
                Or let us make a private-label app for you. Available on any platform.
                </Typography>
                <div className={classes.buttonWrapper}>
                    <Button
                        href={link.BLOG_APPS}
                        color="primary"
                        className={classes.button}
                        variant="outlined"
                    >
                        read more
                    </Button>
                    <Button
                        onClick={handleOpenModal}
                        color="primary"
                        variant="contained"
                    >
                        contact us
                    </Button>
                </div>
            </div>
        </div>
    );
}
