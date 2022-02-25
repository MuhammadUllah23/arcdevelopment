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
        [theme.breakpoints.down('sm')]: {
            marginRight: 0,
            marginLeft: 0,
        },
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
}))

export default function Contact(props) {
    const classes = useStyles()
    const theme = useTheme()
    const matchesMD = useMediaQuery(theme.breakpoints.down("md"))
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"))
    const matchesXS = useMediaQuery(theme.breakpoints.down("xs"))

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [message, setMessage] = useState('')

    return (
        <Grid container direction="row">
            <Grid item container direction="column" justify="center" lg={3}>
                <Grid item>
                    <Typography variant="h2" style={{lineHeight: 1}}>Contact us</Typography>
                    <Typography variant="body1" style={{color: theme.palette.common.blue}}>We're Waiting</Typography>
                </Grid>
                <Grid item container >
                    <Grid item>
                        <img src={phoneIcon} alt="phone" style={{marginRight: "0.5em"}} />
                    </Grid>
                    <Grid item>
                        <Typography variant="body1" style={{color: theme.palette.common.blue, fontSize: "1rem"}}>(555) 555-5555</Typography>
                    </Grid>
                </Grid>
                <Grid item container >
                    <Grid item>
                        <img src={emailIcon} alt="envelope" style={{marginRight: "0.5em", verticalAlign: "bottom"}} />
                    </Grid>
                    <Grid item>
                        <Typography variant="body1" style={{color: theme.palette.common.blue, fontSize: "1rem"}}>youremail@gmail.com</Typography>
                    </Grid>
                </Grid>
                <Grid item container >
                    <Grid item>
                        <TextField label="Name" id="name" value={name} onChange={(event) => setName(event.target.value)} />
                    </Grid>
                    <Grid item>
                        <TextField label="Email" id="email" value={email} onChange={(event) => setEmail(event.target.value)} />
                    </Grid>
                    <Grid item>
                        <TextField label="Phone" id="phone" value={phone} onChange={(event) => setPhone(event.target.value)} />
                    </Grid>
                </Grid>
                <Grid item>
                    <TextField id ="message" value={message} onChange={event => setMessage(event.target.value)} multiline rows={10} />
                </Grid>
                <Grid item>
                    <Button varaint="contained">Send Message <img src={airplane} alt="paper airplane" /></Button>
                </Grid>
            </Grid>
            <Grid item container className={classes.background} lg={9}>
            <Grid item 
            style={{
                marginLeft: matchesSM ? 0 : '5em', 
                textAlign: matchesSM ? 'center' : 'inherit'}}
            >
                <Grid container direction='columns'>
                    <Grid item>
                        <Typography variant='h2' >Simple Software.<br />Revolutionary.</Typography>
                        <Typography variant='subtitle2' style={{fontSize: '1.5em'}} >The advantage of the 21st Century.</Typography>
                        <Grid container justify={matchesSM ? 'center' : 'undefined'} item>
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