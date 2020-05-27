import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Badge, Typography, Modal, Tooltip, Button } from '@material-ui/core';
import Youtube from 'react-youtube';

let updatedWidth = "";
let updatedHeight = "";

const getWindowDimensions = (viewport) => {
    const { innerWidth: width, innerHeight: height } = window;
    let calcWidth = width - (width*0.1);
    let calcHeight = height - (height*0.5);
    updatedHeight = height - (height*0.5);

    switch (viewport) {
        case 'xs':
        case 'sm':
            calcWidth = width - (width*0.2);
            updatedWidth = width - (width*0.2);
            break;
        case 'md':
            calcWidth = width - (width*0.5);
            updatedWidth = width - (width*0.5);
            break;
        case 'lg':
            calcWidth = width - (width*0.4);
            updatedWidth = width - (width*0.4);
            break;
    }

    return {
        calcWidth,
        calcHeight
    };
}

const useStyles = makeStyles((theme) => ({
    modal: {
        [theme.breakpoints.up('xs')]: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            '&:hover': {
                cursor: 'pointer'
            }
        }
    },
    content: {
        [theme.breakpoints.up('xs')]: {
            height: getWindowDimensions('xs').calcHeight,
            backgroundColor: theme.palette.background.default,
            borderRadius: theme.spacing(1),
            width: getWindowDimensions('xs').calcWidth,
            padding: theme.spacing(2)
        },
        [theme.breakpoints.up('sm')]: {
            width: getWindowDimensions('sm').calcWidth
        },
        [theme.breakpoints.up('md')]: {
            width: getWindowDimensions('md').calcWidth
        }
    }
}))

export default function VideoModal() {
    const classes = useStyles();
    // const [startWebcaster, setStartWebcaster] = useState(false);
    const [openModal, setOpenModal] = useState(true);
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
    const settings = {
        width: updatedWidth,
        height: updatedHeight,
    }
console.log(updatedHeight, updatedWidth)
    const handleCloseModal = () => {
        setOpenModal(false)
    }

    const handleOpenModal = () => {
        setOpenModal(true);
    }

    return (
        <Modal
            className={classes.modal}
            open={openModal}
            onClose={handleCloseModal}
        >
            <div className={classes.content}>
                <Youtube videoId={"xACeRyKnjxs"} opts={settings} className={classes.youtube} />
            </div>
        </Modal>
    );
}
