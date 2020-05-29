import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import * as link from '../../utilities/link-config';

import player from '../../assets/icons/white-events.png';
import IntroCenterImageButton from '../../components/ui/Intro/IntroCenterImageButton';
import ExploreBanner from '../../components/ui/Banner/ExploreBanner';
import Shows from '../../components/ui/Shows';
import CoronaInformation from './components/CoronaInformation';
import UpcomingEvents from './components/UpcomingEvents';
import ModalLayout from '../../components/ui/ModalLayout';
import { Modal, Typography } from '@material-ui/core';
import Response from '../../components/ui/Forms/Response';

const useStyles = makeStyles((theme) => ({
  root: {
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
  title: {
    fontWeight: 900,
    lineHeight: 1,
    textAlign: 'center',
    color: theme.palette.primary.main
  },
}))

export default function Events() {
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
              ? <Response message="Thanks for subscribing! " />
              :
              <Typography variant="h4" className={classes.title}>
                Follow us around the world!
              </Typography>
          }
          {
            sent ? null : <Typography color="secondary" variant="h6"> --- Active Campaign Form --- </Typography>
          }
        </ModalLayout>
      </Modal>
      <IntroCenterImageButton
        image={player}
        title="Events"
        subtitle="Join nanocosmos in one of the events listed below and learn how to create interactive live streaming with ultra-low-latency with nanoStream Cloud."
        buttonText="Follow us around the world"
        openModal={handleOpenModal}
      />
      <UpcomingEvents />
      <CoronaInformation />
      <Shows />
      <ExploreBanner />
    </div>
  );
}
