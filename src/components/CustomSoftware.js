import React from 'react'
import Lottie from 'react-lottie'
import {Link} from 'react-router-dom'

import {makeStyles, useTheme} from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import IconButton from "@material-ui/core/IconButton";
import { Typography } from '@material-ui/core';
import { useMediaQuery } from '@material-ui/core';

import backArrow from '../assets/backArrow.svg'
import forwardArrow from '../assets/forwardArrow.svg'

const useStyles = makeStyles(theme => ({
    mainCont: {
        paddingLeft: '5em',
        paddingRight: '5em',
        paddingTop: '2em',
        paddingBottom: '10em'
    },
    heading: {
        maxWidth: '40em'
    },
    arrowCont: {
        marginTop: '0.5em'
    }
}))

export default function CustomSoftware() {
    const classes = useStyles()
    const theme = useTheme

    return (
        <Grid container direction='column' className={classes.mainCont}>
            <Grid item container direction='row' >
                <Grid item className={classes.arrowCont} >
                    <IconButton style={{backgroundColor: 'transparent'}}>
                    {/* IconButton does the samething as button component except it specializes in dealing only with images*/}
                        <img src={backArrow} alt="Back to Services Page" />
                    </IconButton>
                </Grid>
                <Grid item container direction='column' className={classes.heading} >
                    <Grid item >
                        <Typography variant='h2'>Custom Software Development</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant='body1' paragraph>
                            Whether we're replacing old software or inventing new solutions,
                            Arc Development is here to help your business tackle technology.
                        </Typography>
                        <Typography variant='body1' paragraph>
                            Using regular commercial software leaves you with a lot of stuff
                            you don't need, without some of the stuff you do need, and
                            ultimately controls the way you work. Without using any software
                            at all you risk falling behind competitors and missing out on huge
                            savings from increased efficiency.
                        </Typography>
                        <Typography variant='body1' paragraph>
                            Our custom solutions are designed from the ground up with your
                            needs, wants, and goals at the core. This collaborative process
                            produces finely tuned software that is much more effective at
                            improving your workflow and reducing costs than generalized
                            options. 
                        </Typography>
                        <Typography variant='body1' paragraph>
                            We create exactly what you what, exactly how you want it.
                        </Typography>
                    </Grid>
                    
                </Grid>
                <Grid item className={classes.arrowCont} >
                    <IconButton style={{backgroundColor: 'transparent'}}>
                       <img src={forwardArrow} alt="Forward to iOS/Android App Development Page"/> 
                    </IconButton>
                </Grid>
            </Grid>
        </Grid>
    )
}