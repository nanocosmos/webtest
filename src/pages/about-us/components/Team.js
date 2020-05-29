import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import * as link from '../../../utilities/link-config';

import nazif from '../../../assets/team/ndindar.jpg'
import betti from '../../../assets/team/blietz.jpg'
import olli from '../../../assets/team/olietz.jpg'
import chris from '../../../assets/team/cstrijbosch.jpeg'
import placeholder from '../../../assets/icons/orange-world.png'
import TeamMember from '../../../components/ui/TeamMember';
import HeaderWrapper from '../../../components/withStyles/Header/Wrapper';
import BoldTitle from '../../../components/withStyles/Header/BoldTitle';


const useStyles = makeStyles((theme) => ({
    root: {
        [theme.breakpoints.up('xs')]: {
            color: theme.palette.common.white,
            margin: theme.spacing(4)
        },
        [theme.breakpoints.up('md')]: {
        }
    },
    teamMember: {
        [theme.breakpoints.up('xs')]: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-start',
            flexWrap: 'wrap',
        },
        [theme.breakpoints.up('sm')]: {
        }
    },
    member: {
        backgroundColor: theme.palette.primary.light,
        color: theme.palette.common.white,
        margin: theme.spacing(0.5),
        padding: theme.spacing(0.5, 1),
        borderRadius: theme.spacing(0.5),
        boxShadow: theme.shadows[6]
    },
    otherMember: {
        [theme.breakpoints.up('xs')]: {
            padding: theme.spacing(0, 4),
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            width: '90%',
            margin: '0 auto',
            marginBottom: theme.spacing(2)
        },
        [theme.breakpoints.up('md')]: {
            width: '50%',
        }
    },
    joinButton: {
        display: 'block',
        margin: '0 auto'
    }
}))

export default function Team(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <HeaderWrapper align="center">
                <BoldTitle color="white">
                    Meet our team
                </BoldTitle>
            </HeaderWrapper>
            <div className={classes.teamMember}>
                {
                    props.management.map((member, index) => (
                        <TeamMember key={`${member.name}-${index}`} image={`${link.STRAPI_URL}${member.image.url}`} name={member.name} description={member.jobTitle} linkedin={member.linkedinLink}/>
                    ))
                }
            </div>
            <div className={classes.teamMember}>
                <Typography gutterBottom variant="body1">
                    And a lot more!
                </Typography>
            </div>
            <div className={classes.otherMember}>
                {
                    props.employees.map((member, index) => (
                        <div key={`${member.name}-${index}`} className={classes.member}>
                            <Typography variant="button">
                                {member.name}
                            </Typography>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}
