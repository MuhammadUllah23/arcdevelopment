import React from "react";
import Lottie from "react-lottie";
import { Link } from "react-router-dom";

import backArrow from '../assets/backArrow.svg'
import forwardArrow from '../assets/forwardArrow.svg'
import integrationAnimation from '../animations/integrationAnimation/data.json'

import { makeStyles, useTheme } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { useMediaQuery } from "@material-ui/core";
import { Hidden } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";

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

export default function MobileApps(props) {
    const classes = useStyles()
    const theme = useTheme()
    const matchesMD = useMediaQuery(theme.breakpoints.down('md'))
    const matchesXS = useMediaQuery(theme.breakpoints.down('xs'))

    const integrationOptions = {
        loop: true,
        autoplay: true, 
        animationData: integrationAnimation,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };
 
    return (
        <Grid container direction='column' >
            <Grid item container direction='row' justify={matchesMD ? 'center' : undefined} style={{marginTop: matchesXS ? '1em' : '2em'}} className={classes.rowCont} >
                <Hidden mdDown >
                    <Grid item className={classes.arrowCont} style={{marginRight: '1em', marginLeft: '-3.5em'}} >
                        <IconButton component={Link} to='/customsoftware' onClick={() => props.setSelectedIndex(1)} style={{backgroundColor: 'transparent'}}>
                        {/* IconButton does the samething as button component except it specializes in dealing only with images*/}
                            <img src={backArrow} alt="Back to Custom Software Development Page" />
                    </IconButton>
                    </Grid>
                </Hidden> 
                <Grid item container direction='column' className={classes.heading} >
                    <Grid item >
                        <Typography align={matchesMD ? 'center' : undefined} variant='h2'>iOS/Android App Development</Typography>
                    </Grid>
                    <Grid item>
                        <Typography align={matchesMD ? 'center' : undefined} variant='body1' paragraph>
                            Mobile apps allow you to take your tools on the go.
                        </Typography>
                        <Typography align={matchesMD ? 'center' : undefined} variant='body1' paragraph>
                            Whether you want an app for your customers, employees, or
                            yourself, we can build cross-platform native solutions for any
                            part of your business process. This opens you up to a whole new
                            world of possibilities by taking advantage of phone features like
                            the camera, GPS, push notifications, and more.
                        </Typography>
                        <Typography align={matchesMD ? 'center' : undefined} variant='body1' paragraph>
                            Convenience. Connection.
                        </Typography>
                    </Grid>
                    
                </Grid>
                <Hidden mdDown>
                    <Grid item className={classes.arrowCont} >
                        <IconButton component={Link} to='/websites' onClick={() => props.setSelectedIndex(3)} style={{backgroundColor: 'transparent'}}>
                        <img src={forwardArrow} alt="Forward to website Development Page"/> 
                        </IconButton>
                    </Grid>
                </Hidden>              
            </Grid>
            <Grid item container direction='row' className={classes.rowCont} >
                <Grid item container direction='column' md>
                    <Grid item >
                        <Typography variant="h4" gutterBottom>Integration</Typography>
                    </Grid>
                    <Grid item >
                        <Typography variant='body1' paragraph >
                            Our technology enables an innate interconnection between web and
                            mobile applications, putting everything you need right in one
                            convenient place.
                        </Typography>
                        <Typography variant='body1' paragraph >
                            This allows you to extend your reach, reinvent interactions, and
                            develop a stronger relationship with your users than ever before.
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item md >
                    <Lottie options={integrationOptions} />
                </Grid>
                <Grid item container direction='column' md>
                    <Grid item >
                        <Typography variant="h4" align='right' gutterBottom>Simultaneous Platform Support</Typography>
                    </Grid>
                    <Grid item >
                        <Typography variant='body1' align='right' paragraph >
                            Our cutting-edge development process allows us to create apps for
                            iPhone, Android, and tablets — all at the same time.
                        </Typography>
                        <Typography variant='body1' align='right' paragraph >
                            This significantly reduces costs and creates a more unified brand
                            experience across all devices.
                        </Typography>
                    </Grid>
                </Grid>     
            </Grid>
        </Grid>
    )
}
