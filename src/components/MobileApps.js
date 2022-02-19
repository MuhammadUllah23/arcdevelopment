import React from "react";
import Lottie from "react-lottie";
import { Link } from "react-router-dom";

import { makeStyles, useTheme } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { useMediaQuery } from "@material-ui/core";
import { Hidden } from "@material-ui/core";


const useStyles = makeStyles(theme => ({

}))

export default function MobileApps(props) {
    const classes = useStyles()
    const theme = useTheme()
    const matchesMD = useMediaQuery(theme.breakpoints.down('md'))
    const matchesXS = useMediaQuery(theme.breakpoints.down('xs'))
 
    return (
        <Grid container direction='column' >
            <Grid item container direction='row' justify={matchesMD ? 'center' : undefined} style={{marginTop: matchesXS ? '1em' : '2em'}} className={classes.rowCont} >
                <Hidden mdDown >
                    <Grid item className={classes.arrowCont} style={{marginRight: '1em', marginLeft: '-3.5em'}} >
                        <IconButton component={Link} to='/services' onClick={() => props.setSelectedIndex(0)} style={{backgroundColor: 'transparent'}}>
                        {/* IconButton does the samething as button component except it specializes in dealing only with images*/}
                            <img src={backArrow} alt="Back to Services Page" />
                    </IconButton>
                    </Grid>
                </Hidden> 
                <Grid item container direction='column' className={classes.heading} >
                    <Grid item >
                        <Typography align={matchesMD ? 'center' : undefined} variant='h2'>Custom Software Development</Typography>
                    </Grid>
                    <Grid item>
                        <Typography align={matchesMD ? 'center' : undefined} variant='body1' paragraph>
                            Whether we're replacing old software or inventing new solutions,
                            Arc Development is here to help your business tackle technology.
                        </Typography>
                        <Typography align={matchesMD ? 'center' : undefined} variant='body1' paragraph>
                            Using regular commercial software leaves you with a lot of stuff
                            you don't need, without some of the stuff you do need, and
                            ultimately controls the way you work. Without using any software
                            at all you risk falling behind competitors and missing out on huge
                            savings from increased efficiency.
                        </Typography>
                        <Typography align={matchesMD ? 'center' : undefined} variant='body1' paragraph>
                            Our custom solutions are designed from the ground up with your
                            needs, wants, and goals at the core. This collaborative process
                            produces finely tuned software that is much more effective at
                            improving your workflow and reducing costs than generalized
                            options. 
                        </Typography>
                        <Typography align={matchesMD ? 'center' : undefined} variant='body1' paragraph>
                            We create exactly what you what, exactly how you want it.
                        </Typography>
                    </Grid>
                    
                </Grid>
                <Hidden mdDown>
                    <Grid item className={classes.arrowCont} >
                        <IconButton component={Link} to='/mobileapps' onClick={() => props.setSelectedIndex(2)} style={{backgroundColor: 'transparent'}}>
                        <img src={forwardArrow} alt="Forward to iOS/Android App Development Page"/> 
                        </IconButton>
                    </Grid>
                </Hidden>              
            </Grid>
        </Grid>
    )
}
