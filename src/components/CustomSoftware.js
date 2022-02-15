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
import lightbulb from '../assets/bulb.svg'
import cash from '../assets/cash.svg'
import stopwatch from '../assets/stopwatch.svg'
import documentsAnimation from '../animations/documentsAnimation/data'
import scaleAnimation from '../animations/scaleAnimation/data.json'
import roots from '../assets/root.svg'

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
    },
    itemContainer: {
        maxWidth: '40em'
    }
}))

export default function CustomSoftware(props) {
    const classes = useStyles()
    const theme = useTheme

    const documentsOptions = {
        loop: true,
        autoplay: true, 
        animationData: documentsAnimation,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };

      const scaleOptions = {
        loop: true,
        autoplay: true, 
        animationData: scaleAnimation,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };

    return (
        <Grid container direction='column' className={classes.mainCont}>
            <Grid item container direction='row' >
                <Grid item className={classes.arrowCont} style={{marginRight: '1em', marginLeft: '-3.5em'}} >
                    <IconButton component={Link} to='/services' onClick={() => props.setSelectedIndex(0)} style={{backgroundColor: 'transparent'}}>
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
                    <IconButton component={Link} to='/mobileapps' onClick={() => props.setSelectedIndex(2)} style={{backgroundColor: 'transparent'}}>
                       <img src={forwardArrow} alt="Forward to iOS/Android App Development Page"/> 
                    </IconButton>
                </Grid>
            </Grid>
            <Grid item container direction='row' justify='center' style={{marginTop: '15em', marginBottom: '20em'}} >
                <Grid item container direction='column' md alignItems='center' style={{maxWidth: '40em'}} >
                    {/* the md property tells item containers explicitly that need to share that space available */}
                    <Typography variant='h4'>Save Energy</Typography>
                    <Grid item>
                        <img src={lightbulb} alt='lightbulb'/>
                    </Grid>
                </Grid>
                <Grid item container direction='column' md alignItems='center' style={{maxWidth: '40em'}} >
                    <Typography variant='h4'>Save Time</Typography>
                    <Grid item>
                        <img src={stopwatch} alt='stopwatch'/>
                    </Grid>
                </Grid>
                <Grid item container direction='column' md alignItems='center' style={{maxWidth: '40em'}} >
                    <Typography variant='h4'>Save Money</Typography>
                    <Grid item>
                        <img src={cash} alt='cash'/>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item container direction='row' justify='space-between' >
                <Grid item container className={classes.itemContainer} md>
                    <Grid item container direction='column' md>
                        <Grid item>
                            <Typography variant='h4'>Digital Documents & Data</Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant='body1' paragraph>
                                Reduce Errors. Reduce Waste. Reduce Costs.
                            </Typography>
                            <Typography variant='body1' paragraph>
                                Billions are spent annually on the purchasing, printing, and
                                distribution of paper. On top of the massive environmental
                                impact this has, it causes harm to your bottom line as well.
                            </Typography>
                            <Typography variant='body1' paragraph>
                                By utilizing digital forms and documents you can remove these
                                obsolete expenses, accelerate your communication, and help the
                                Earth.
                            </Typography>
                        </Grid>
                    </Grid>    
                    <Grid item md>
                        <Lottie options={documentsOptions} style={{maxHeight: 275, maxWidth: 275, minHeight: 250}} />
                    </Grid>
                </Grid>
                <Grid item container className={classes.itemContainer} md>
                    <Grid item md>
                        <Lottie options={scaleOptions} style={{maxHeight: 260, maxWidth: 280}} />
                    </Grid>
                    <Grid item container direction='column' md>             
                        <Grid item>
                            <Typography variant='h4' align='right'>Scale</Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant='body1' align='right' paragraph>
                                Whether you're a large brand, just getting started, or taking
                                off right now, our application architecture ensures pain-free
                                growth and reliability.
                            </Typography>
                        </Grid>
                    </Grid>                      
                </Grid>
            </Grid>
            <Grid item container direction="row" >
                <Grid item container direction='column' alignItems='center' >
                    <Grid item >
                        <img src={roots} alt="tree with roots extending out" height="450em" width="450em" />
                    </Grid>
                    <Grid item >
                        <Typography variant='h4' align='center' gutterBottom>Root-Cause Analysis</Typography>
                        <Typography variant='body1' align='center' paragraph>
                            Many problems are merely symptoms of larger, underlying issues.
                        </Typography>
                        <Typography variant='body1' align='center' paragraph>
                            We can help you thoroughly examine all areas of your business to
                            develop a holistic plan for the most effective implementation of
                            technology.
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}