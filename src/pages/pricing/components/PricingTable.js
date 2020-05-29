import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

import Package from '../../../components/ui/Packages/Package';
import CustomPackage from '../../../components/ui/Packages/CustomPackage';
import HeaderWrapper from '../../../components/withStyles/Header/Wrapper';
import Overline from '../../../components/withStyles/Header/Overline';
import BoldTitle from '../../../components/withStyles/Header/BoldTitle';

const useStyles = makeStyles((theme) => ({
    root: {
        [theme.breakpoints.up('xs')]: {
            marginTop: theme.spacing(4),
            marginBottom: theme.spacing(4)
        },
        [theme.breakpoints.up('md')]: {
        }
    },
    prices: {
        [theme.breakpoints.up('xs')]: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: theme.spacing(2)
        },
        [theme.breakpoints.up('sm')]: {
            flexDirection: 'column'
        },
        [theme.breakpoints.up('md')]: {
            flexDirection: 'row'
        }
    },
    regular: {
        [theme.breakpoints.up('xs')]: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
        },
        [theme.breakpoints.up('sm')]: {
            flexDirection: 'row'
        }
    }
}))

export default function PricingTable() {
    const classes = useStyles();


    return (
        <div className={classes.root}>
            <HeaderWrapper align="center">
                <Overline variant="button" color="white">
                    Pricing
                </Overline>
                <BoldTitle color="white">
                    Software &amp; Streaming Packages
                </BoldTitle>
            </HeaderWrapper>
            <div className={classes.prices}>
                <div className={classes.regular}>
                    <Package
                        package="Starter"
                        price={199}
                        conBrodacasts={5}
                        conViewers={500}
                        bandwith={200}
                        streamingHours={500}
                        c={12}
                        specialConfig={false}
                    />
                    <Package
                        package="Medium"
                        price={499}
                        conBrodacasts={10}
                        conViewers={2500}
                        bandwith={1000}
                        streamingHours={2000}
                        c={8}
                        specialConfig={true}
                    />
                </div>
                <div>
                    <CustomPackage package="Enterprise/Custom" />
                </div>
            </div>

        </div>
    );
}
