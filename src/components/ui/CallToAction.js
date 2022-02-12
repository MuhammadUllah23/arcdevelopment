import React from "react";

import { Grid } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/styles";
import Button from "@material-ui/core/Button";

import ButtonArrow from './ButtonArrow'
import background from '../../assets/background.jpg'
import mobileBackground from '../../assets/mobileBackground.jpg'

const useStyles = makeStyles(theme => ({
    buttonLearnMore: {
        ...theme.typography.learnMore,
        fontSize: "0.7rem",
        height: 35,
        padding: 5,
        [theme.breakpoints.down("sm")]: {
            marginBottom: "2em"
        } 
    },
    background: {
        backgroundImage: `url(${background})`,
        backgroundPosition: 'center',
        // to cover the entire container
        backgroundSize: 'cover',
        // the extra space is not filled with duplicating the icon 
        backgroundRepeat: 'no-repeate',
        // to take all the space it can
        height: '60em',
        width: '100%',
        [theme.breakpoints.down("md")]: {
            backgroundImage: `url(${mobileBackground})`,
        }
    },
    estimateButton: {
        ...theme.typography.estimate,
        backgroundColor: theme.palette.common.orange,
        borderRadius: 50,
        height: 80,
        width: 205,
        fontSize: '1.5rem',
        "&:hover": {
            backgroundColor: theme.palette.secondary.light
        } 
    },
}))

export default function CallToAction() {
    const classes = useStyles()
    const theme = useTheme()

    return (
        <Grid container alignItems='center' justify="space-between" className={classes.background} >
            <Grid item style={{marginLeft: '5em'}}>
                <Grid container direction='columns'>
                    <Grid item>
                        <Typography variant='h2' >Simple Software.<br />Revolutionary</Typography>
                        <Typography variant='subtitle2' style={{fontSize: '1.5em'}} >The advantage of the 21st Century.</Typography>
                        <Grid container item>
                            <Button variant="outlined" className={classes.buttonLearnMore} >
                                <span style={{marginRight: 5}}> Learn More </span>
                                <ButtonArrow width={10} height={10} fill={theme.palette.common.blue} />
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item >
                <Button variant='contained' className={classes.estimateButton}>Free Estimate</Button>
            </Grid>
        </Grid>
    )
}