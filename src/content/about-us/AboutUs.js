import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import * as link from '../../utilities/link-config';

import Journey from './components/Journey';
import Team from './components/Team';
import Review from './components/Review';
import IntroLogoLeft from '../../layout/ui/Intro/IntroLogoLeft';
import JoinOurTeam from '../../layout/ui/Banner/JoinOurTeam';

const useStyles = makeStyles((theme) => ({
  root: {
  }
}))

export default function Pricing() {
  const classes = useStyles();
  const [employees, setEmployees] = useState([])
  const [management, setManagement] = useState([])

  const fetchManagement = () => {
    axios.get(`${link.STRAPI_BASE}/managements?_sort=id:ASC`)
    .then((response) => {
        setManagement(response.data)
    })
    .catch((error) => {
        console.log(error)
    })
  }

  const fetchEmployees = () => {
    axios.get(`${link.STRAPI_BASE}/employees?_sort=name:ASC`)
    .then((response) => {
        setEmployees(response.data)
    })
    .catch((error) => {
        console.log(error)
    })
  }

  useEffect(() => {
    fetchEmployees();
    fetchManagement();
  }, [])

  return (
    <div className={classes.root}>
      <IntroLogoLeft title="About nanocosmos" subtitle="Founded 1998"/>
      <Journey />
      <Review/>
      <Team employees={employees} management={management}/>
      <JoinOurTeam/>
    </div>
  );
}
