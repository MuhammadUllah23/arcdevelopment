import React from "react";
import { Link } from "react-router-dom";

import {makeStyles, useTheme} from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import IconButton from "@material-ui/core/IconButton";
import { Typography } from '@material-ui/core';
import { useMediaQuery } from '@material-ui/core';
import { Hidden } from '@material-ui/core';

import backArrow from '../assets/backArrow.svg'
import forwardArrow from '../assets/forwardArrow.svg'
import analytics from '../assets/analytics.svg'
import seo from '../assets/seo.svg'
import outreach from '../assets/outreach.svg'
import ecommerce from '../assets/ecommerce.svg'

const useStyles = makeStyles(theme => ({
    rowCont: {
        paddingLeft: '5em',
        paddingRight: '5em',
        [theme.breakpoints.down('sm')]: {
            paddingLeft: '1.5em',
            paddingRight: '1.5em',
        }
    },
    heading: {
        maxWidth: '40em'
    },
    arrowCont: {
        marginTop: '0.5em'
    },
}))

export default function Websites(props) {
    const classes = useStyles()
    const theme = useTheme()
    const matchesMD = useMediaQuery(theme.breakpoints.down('md'))
    const matchesSM = useMediaQuery(theme.breakpoints.down('sm'))
    const matchesXS = useMediaQuery(theme.breakpoints.down('xs'))

    return (
        <Grid container direction='column' >
            <Grid item container direction='row' justify={matchesMD ? 'center' : undefined} style={{marginTop: matchesXS ? '1em' : '2em'}} className={classes.rowCont} >
                <Hidden mdDown >
                    <Grid item className={classes.arrowCont} style={{marginRight: '1em', marginLeft: '-3.5em'}} >
                        <IconButton component={Link} to='/mobileapps' onClick={() => props.setSelectedIndex(2)} style={{backgroundColor: 'transparent'}}>
                        {/* IconButton does the samething as button component except it specializes in dealing only with images*/}
                            <img src={backArrow} alt="Back to iOS/Android Development Page" />
                    </IconButton>
                    </Grid>
                </Hidden> 
                <Grid item container direction='column' className={classes.heading} >
                    <Grid item >
                        <Typography align={matchesMD ? 'center' : undefined} variant='h2'>Website Development</Typography>
                    </Grid>
                    <Grid item>
                        <Typography align={matchesMD ? 'center' : undefined} variant='body1' paragraph>
                            Having a website is a necessity in today’s business world. They
                            give you one central, public location to let people know who you
                            are, what you do, and why you’re the best at it.
                        </Typography>
                        <Typography align={matchesMD ? 'center' : undefined} variant='body1' paragraph>
                            From simply having your hours posted to having a full fledged
                            online store, making yourself as accessible as possible to users
                            online drives growth and enables you to reach new customers.
                        </Typography>
                    </Grid>
                    
                </Grid>
                <Hidden mdDown>
                    <Grid item className={classes.arrowCont} >
                        <IconButton component={Link} to='/services' onClick={() => props.setSelectedIndex(0)} style={{backgroundColor: 'transparent'}}>
                        <img src={forwardArrow} alt="Forward to Services Page"/> 
                        </IconButton>
                    </Grid>
                </Hidden>              
            </Grid>
            <Grid item container direction='row' alignItems="center" className={classes.rowCont} >
                <Grid item >
                    {/* The reason it is new Grid container tag inside of Grid item tag instead of Grid item container tag is 
                        because we dont want it to take the 100% width of the screeen that is allocated with the container prop */}
                    <Grid container direction='column' >
                        <Grid item >
                            <Typography variant='h4' gutterBottom>Analytics</Typography>
                        </Grid>
                        <Grid item >
                            <img src={analytics} alt="graph with magnifying glass revealing 1's and 0's" />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item >
                    <Typography variant="body1" className={classes.paragraphCont}>
                        Knowledge is power, and data is 21st Century gold. Analyzing this
                        data can reveal hidden patterns and trends in your business,
                        empowering you to make smarter decisions with measurable effects.
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
    )
}