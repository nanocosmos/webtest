import React,  { }  from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IntroLogoLeft from '../../components/ui/Intro/IntroLogoLeft';
import ContactOptions from './components/ContactOptions';


const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: 'calc(100vh - 200px)'
  }
}))

export default function Contact() {
  const classes = useStyles();


  return (
    <div className={classes.root}>
      <IntroLogoLeft title="Contact us!" subtitle="Lorem ipsum sit dolor amet"/>
      <ContactOptions/>
    </div>
  );
}
