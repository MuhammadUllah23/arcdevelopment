import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

import { makeStyles, useTheme } from "@material-ui/styles";
import { Grid } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import { useMediaQuery } from "@material-ui/core";
import ButtonArrow from "./ui/ButtonArrow";

import background from '../assets/background.jpg'
import mobileBackground from '../assets/mobileBackground.jpg'
import phoneIcon from '../assets/phone.svg'
import emailIcon from '../assets/email.svg'
import airplane from '../assets/send.svg'

const useStyles = makeStyles(theme => ({
    background: {
        backgroundImage: `url(${background})`,
        backgroundPosition: 'center',
        // to cover the entire container
        backgroundSize: 'cover',
        // the extra space is not filled with duplicating the icon 
        backgroundRepeat: 'no-repeat',
        // to take all the space it can
        height: '60em',
        paddingBottom: "10em",
        [theme.breakpoints.down("md")]: {
            backgroundImage: `url(${mobileBackground})`
        }
    },
    estimateButton: {
        ...theme.typography.estimate,
        backgroundColor: theme.palette.common.orange,
        borderRadius: 50,
        height: 80,
        width: 205,
        fontSize: '1.5rem',
        marginRight: '5em',
        marginLeft: '2em',
        [theme.breakpoints.down('md')]: {
            marginRight: 0,
            marginLeft: 0,
        },
    },
    buttonLearnMore: {
        ...theme.typography.learnMore,
        fontSize: "0.7rem",
        height: 35,
        padding: 5,
        [theme.breakpoints.down("md")]: {
            marginBottom: "2em"
        } 
    },
    message: {
        border: `2px solid ${theme.palette.common.blue}`,
        marginTop: "5em",
        borderRadius: 5,
    },
    sendButton: {
        ...theme.typography.estimate,
        borderRadius: 50,
        height: 45,
        width: 245,
        fontSize: "1rem",
        backgroundColor: theme.palette.common.orange,
        "&:hover": {
            backgroundColor: theme.palette.secondary.light
        }
    }
}))

export default function Contact(props) {
    const classes = useStyles()
    const theme = useTheme()
    const matchesMD = useMediaQuery(theme.breakpoints.down("md"))
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"))
    const matchesXS = useMediaQuery(theme.breakpoints.down("xs"))

    const [name, setName] = useState('')
    const [nameHelper, setNameHelper] = useState("")

    const [email, setEmail] = useState('')
    const [emailHelper, setEmailHelper] = useState("")
    
    const [phone, setPhone] = useState('')
    const [phoneHelper, setPhoneHelper] = useState("")
    
    const [message, setMessage] = useState('')
    const [messageHelper, setMessageHelper] = useState("")
    

    return (
        <Grid container direction="row">
            <Grid item container 
                direction="column" 
                justify="center" 
                alignItems="center" 
                style={{marginBottom: matchesMD ? "5em" : 0, marginTop: matchesSM ? "1em" : matchesMD ? "5em" : 0}} 
                lg={4} xl={3}
            >
                <Grid item>
                    <Grid container direction="column">
                        <Grid item>
                            <Typography align={matchesMD ? "center" : undefined} variant="h2" style={{lineHeight: 1}}>Contact us</Typography>
                            <Typography align={matchesMD ? "center" : undefined} variant="body1" style={{color: theme.palette.common.blue}}>We're Waiting</Typography>
                        </Grid>
                        <Grid item container style={{marginTop: "2em"}} >
                            <Grid item>
                                <img src={phoneIcon} alt="phone" style={{marginRight: "0.5em"}} />
                            </Grid>
                            <Grid item>
                                <Typography variant="body1" style={{color: theme.palette.common.blue, fontSize: "1rem"}}>(555) 555-5555</Typography>
                            </Grid>
                        </Grid>
                        <Grid item container style={{marginBottom: "2em"}} >
                            <Grid item>
                                <img src={emailIcon} alt="envelope" style={{marginRight: "0.5em", verticalAlign: "bottom"}} />
                            </Grid>
                            <Grid item>
                                <Typography variant="body1" style={{color: theme.palette.common.blue, fontSize: "1rem"}}>youremail@gmail.com</Typography>
                            </Grid>
                        </Grid>
                        <Grid item container direction="column" style={{maxWidth: "20em"}}>
                            <Grid item style={{marginBottom: "0.5em"}}>
                                <TextField fullWidth label="Name" id="name" value={name} onChange={(event) => setName(event.target.value)} />
                            </Grid>
                            <Grid item style={{marginBottom: "0.5em"}}>
                                <TextField fullWidth label="Email" id="email" value={email} onChange={(event) => setEmail(event.target.value)} />
                            </Grid>
                            <Grid item style={{marginBottom: "0.5em"}}>
                                <TextField fullWidth label="Phone" id="phone" value={phone} onChange={(event) => setPhone(event.target.value)} />
                            </Grid>
                        </Grid>
                        <Grid item style={{maxWidth: "20em"}}>
                            <TextField fullWidth id ="message" 
                                value={message} 
                                onChange={event => setMessage(event.target.value)} 
                                multiline rows={10} 
                                className={classes.message}
                                InputProps={{disableUnderline: true}} 
                            />
                        </Grid>
                        <Grid item container justify="center" style={{marginTop: "2em"}} >
                            <Button variant="contained" className={classes.sendButton}>
                                Send Message 
                                <img src={airplane} alt="paper airplane" style={{marginLeft: "1em"}} />
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item container direction={matchesMD ? "column" : "row"} 
                className={classes.background} 
                justify={matchesMD ? "center" : undefined} 
                lg={8} xl={9} 
                alignItems="center"
            >
                <Grid item 
                style={{
                    marginLeft: matchesMD ? 0 : '3em', 
                    textAlign: matchesMD ? 'center' : 'inherit'}}
                >
                    <Grid container direction='columns'>
                        <Grid item>
                            <Typography variant='h2' align={matchesMD ? "center" : undefined} >Simple Software.<br />Revolutionary.</Typography>
                            <Typography variant='subtitle2' align={matchesMD ? "center" : undefined} style={{fontSize: '1.5em'}} >The advantage of the 21st Century.</Typography>
                            <Grid container justify={matchesMD ? 'center' : 'undefined'} item>
                                <Button component={Link} to="/revolution" onClick={() => props.setValue(2)} variant="outlined" className={classes.buttonLearnMore} >
                                    <span style={{marginRight: 5}}> Learn More </span>
                                    <ButtonArrow width={10} height={10} fill={theme.palette.common.blue} />
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item >
                    <Button component={Link} to="/estimate"  onClick={() => props.setValue(5)} variant='contained' className={classes.estimateButton}>Free Estimate</Button>
                </Grid>
            </Grid>
        </Grid>
    )
}