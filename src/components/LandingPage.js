import React from 'react';
import Lottie from 'react-lottie';
import { Link } from 'react-router-dom';

import { Typography } from '@material-ui/core';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { useMediaQuery } from '@material-ui/core';
import { Card } from '@material-ui/core';
import { CardContent } from '@material-ui/core';

import CallToAction from './ui/CallToAction';

import ButtonArrow from './ui/ButtonArrow';
import animationData from '../animations/landinganimation/data'
import customSoftwareIcon from '../assets/Custom Software Icon.svg'
import mobileAppsIcon from '../assets/mobileIcon.svg'
import websiteIcon from '../assets/websiteIcon.svg'
import revolutionBackground from '../assets/repeatingBackground.svg'
import infoBackground from '../assets/infoBackground.svg'

const useStyles = makeStyles(theme => ({
    animation: {
        maxWidth: "50em",
        minWidth: "21em",
        marginTop: "2em",
        marginLeft: "10%",
        [theme.breakpoints.down("sm")]: {
            maxWidth: "30em"
        }
    },
    estimateButton: {
        ...theme.typography.estimate,
        backgroundColor: theme.palette.common.orange,
        borderRadius: 50,
        height: 45,
        width: 145,
        marginRight: 40,
        "&:hover": {
            backgroundColor: theme.palette.secondary.light
        } 
    },
    buttonCont: {
        marginTop: "1em"
    },
    buttonLearnMoreHero: {
        ...theme.typography.learnMore,
        fontSize: "0.9rem",
        height: 45,
        width: 145
    },
    buttonLearnMore: {
        ...theme.typography.learnMore,
        fontSize: "0.7rem",
        height: 35,
        padding: 5,
        [theme.breakpoints.down("sm")]: {
            marginBottom: "2em"
        } 
    },
    mainCont: {
        marginTop: "5em",
        [theme.breakpoints.down("md")]: {
            marginTop: "3em"
        },
        [theme.breakpoints.down("md")]: {
            marginTop: "2em"
        },
    },
    heroTextCont: {
        minWidth: "21.5em",
        marginLeft: "1em",
        [theme.breakpoints.down("xs")]: {
            marginLeft: 0
        }
    },
    specialText: {
        fontFamily: "Pacifico",
        color: theme.palette.common.orange
    },
    subtitle: {
        marginBottom: "1em"
    },
    icon: {
        marginLeft: "2em",
        [theme.breakpoints.down("xs")]: {
            marginLeft: 0
        }
    },
    serviceCont: {
        marginTop: "12em",
        [theme.breakpoints.down("sm")]: {
            padding: 25
        }
        
    },
    revolutionBackground: {
        backgroundImage: `url(${revolutionBackground})`,
        backgroundPosition: 'center',
        // to cover the entire container
        backgroundSize: 'cover',
        // the extra space is not filled with duplicating the icon 
        backgroundRepeat: 'no-repeate',
        // to take all the space it can
        height: '100%',
        width: '100%'
    },
    revolutionCard: {
        position: "absolute",
        boxShadow: theme.shadows[10],
        borderRadius: 15,
        padding: '10em',
        [theme.breakpoints.down("sm")]: {
            paddingTop: '8em',
            paddingBottom: '8em',
            paddingLeft: 0,
            paddingRight: 0,
            borderRadius: 0,
            width: '100%'
        }
    },
    infoBackground: {
        backgroundImage: `url(${infoBackground})`,
        backgroundPosition: 'center',
        // to cover the entire container
        backgroundSize: 'cover',
        // the extra space is not filled with duplicating the icon 
        backgroundRepeat: 'no-repeate',
        // to take all the space it can
        height: '100%',
        width: '100%'
    }

}))

export default function LandingPage(props) {
    const classes = useStyles()
    const theme = useTheme()
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"))
    const matchesXS = useMediaQuery(theme.breakpoints.down("xs"))

    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };

    return (
        <Grid container direction="column" className={classes.mainCont}>
            <Grid item> {/*------HERO BLOCK------*/}
                <Grid container justify="flex-end" alignItems="center" direction="row">
                    <Grid sm item className={classes.heroTextCont}>
                        <Typography variant='h2' align='center'>Bringing West Coast Technology<br />to the Midwest</Typography>
                        <Grid container justify='center' className={classes.buttonCont} >
                            <Grid item>
                                <Button component={Link} to="/estimate" onClick={() => props.setValue(5)} className={classes.estimateButton} variant="contained">Free Estimate</Button>
                            </Grid>
                            <Grid item>
                                <Button component={Link} to="/revolution" onClick={() => props.setValue(2)} className={classes.buttonLearnMoreHero} variant="outlined"> <span style={{marginRight: 10}}>Learn More</span> 
                                <ButtonArrow width={15} length={15} fill={theme.palette.common.blue} /> 
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid sm item className={classes.animation}>
                        <Lottie options={defaultOptions} height={"100%"} width={"100%"} />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item> {/*------CUSTOM SOFTWARE BLOCK------*/}
                <Grid container direction="row" className={classes.serviceCont} justify={matchesSM ? "center" : undefined} >
                    <Grid item style={{marginLeft: matchesSM ? 0 : "5em", textAlign: matchesSM ? "center" : undefined}}>
                        <Typography variant="h4" >
                            Custom Software Development
                        </Typography>
                        <Typography variant="subtitle1" className={classes.subtitle} >
                            Save Energy. Save Time. Save Money.
                        </Typography>
                        <Typography variant="subtitle1">
                            Complete digital solutions, from investigation to{" "} <span className={classes.specialText}>celebration.</span>
                        </Typography>
                        <Button component={Link} to="/customsoftware" onClick={() => {props.setValue(1); props.setSelectedIndex(1)}} variant="outlined" className={classes.buttonLearnMore} >
                            <span style={{marginRight: 10}}> Learn More </span>
                            <ButtonArrow width={10} height={10} fill={theme.palette.common.blue} />
                        </Button>
                    </Grid>
                    <Grid item>
                        <img className={classes.icon} alt="custom software icon" src={customSoftwareIcon} />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item> {/*------iOS/ANDROID BLOCK------*/}
                <Grid container direction="row" className={classes.serviceCont} justify={matchesSM ? "center" : "flex-end"} >
                    <Grid item style={{textAlign: matchesSM ? "center" : undefined}}>
                        <Typography variant="h4" >
                            iOS/Android App Development
                        </Typography>
                        <Typography variant="subtitle1" className={classes.subtitle} >
                            Extend Functionality. Extend Access. Increase Engagement.
                        </Typography>
                        <Typography variant="subtitle1">
                            Integrate your web experience or create a standalone app{matchesSM ? null : <br />}with either mobile platform
                        </Typography>
                        <Button component={Link} to="/mobileapps" onClick={() => {props.setValue(1); props.setSelectedIndex(2)}} variant="outlined" className={classes.buttonLearnMore} >
                            <span style={{marginRight: 10}}> Learn More </span>
                            <ButtonArrow width={10} height={10} fill={theme.palette.common.blue} />
                        </Button>
                    </Grid>
                    <Grid item style={{marginRight: matchesSM ? 0 : "5em"}}>
                        <img className={classes.icon} alt="mobile apps icon" src={mobileAppsIcon} />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item> {/*------WEBSITES BLOCK------*/}
                <Grid container direction="row" className={classes.serviceCont} justify={matchesSM ? "center" : undefined} >
                    <Grid item style={{marginLeft: matchesSM ? 0 : "5em", textAlign: matchesSM ? "center" : undefined}}>
                        <Typography variant="h4" >
                            Websites Development
                        </Typography>
                        <Typography variant="subtitle1" className={classes.subtitle} >
                            Reach More. Discover More. Sell More.
                        </Typography>
                        <Typography variant="subtitle1">
                            Optimiazed for Search Engines, built for speed.
                        </Typography>
                        <Button component={Link} to="/websites" onClick={() => {props.setValue(1); props.setSelectedIndex(3)}} variant="outlined" className={classes.buttonLearnMore} >
                            <span style={{marginRight: 10}}> Learn More </span>
                            <ButtonArrow width={10} height={10} fill={theme.palette.common.blue} />
                        </Button>
                    </Grid>
                    <Grid item>
                        <img className={classes.icon} alt="website icon" src={websiteIcon} />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item > {/*------REVOLUTION BLOCK------*/}
                <Grid container style={{height: '100em', marginTop: '12em'}} alignItems='center' justify='center' >
                    <Card className={classes.revolutionCard}>
                        <CardContent>
                            <Grid container direction="column" style={{textAlign: "center"}} >
                                <Grid item >
                                    <Typography variant="h3" gutterBottom >
                                    {/* gutterBottom is to create a margin below */}
                                        The Revolution
                                    </Typography>
                                </Grid>
                                <Grid item >
                                    <Typography variant="subtitle1" >
                                        Visionary insights coupled with cutting-edge technology is a recipe for revolution.
                                    </Typography>
                                    <Button component={Link} to="/revolution" onClick={() => props.setValue(2)} className={classes.buttonLearnMoreHero} variant="outlined"> <span style={{marginRight: 10}}>Learn More</span> 
                                        <ButtonArrow width={15} length={15} fill={theme.palette.common.blue} /> 
                                    </Button>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                    <div className={classes.revolutionBackground} />
                </Grid>
            </Grid>    
            <Grid item > {/*------INFORMATION BLOCK------*/}
                <Grid container style={{height: '80em'}} alignItems='center' direction="row" className={classes.infoBackground}>
                <Grid item container style={{textAlign: matchesXS ? 'center' : 'inherit'}} direction={matchesXS ? 'column': 'row'} >
                    <Grid item sm style={{marginLeft: matchesXS ? 0 : matchesSM ? '2em' : '5em'}} >
                        <Grid container style={{marginBottom: matchesXS ? '10em' : 0}} direction="column" >
                            <Typography variant="h2" style={{color: "white"}}>About Us</Typography>
                            <Typography variant='subtitle2'>Let's get personal.</Typography>
                            <Grid item>
                                <Button component={Link} to="/about" onClick={() => props.setValue(3)} variant="outlined" style={{color: 'white', borderColor: 'white'}} className={classes.buttonLearnMore} >
                                    <span style={{marginRight: 10}}> Learn More </span>
                                    <ButtonArrow width={10} height={10} fill='white' />
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item sm style={{ marginRight: matchesXS ? 0 : matchesSM ? '2em' : '5em', textAlign: matchesXS ? 'center' : 'right'}} >
                        <Grid container direction="column" >
                            <Typography variant="h2" style={{color: "white"}}>Contact Us</Typography>
                            <Typography variant='subtitle2'>Say hello! <span role="img" aria-label="waving-hand">????</span></Typography>
                            <Grid item>
                                <Button component={Link} to="/contact" onClick={() => props.setValue(4)} variant="outlined" style={{color: 'white', borderColor: 'white'}} className={classes.buttonLearnMore} >
                                    <span style={{marginRight: 10}}> Learn More </span>
                                    <ButtonArrow width={10} height={10} fill='white' />
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                    
                    {/* <div className={classes.infoBackground} /> */}
                </Grid>
            </Grid>
            <Grid item > {/*------CALL TO ACTION BLOCK------*/}
                <CallToAction setValue={props.setValue} setSelectedIndex={props.setSelectedIndex} />
            </Grid>   
        </Grid>
        
    )
}