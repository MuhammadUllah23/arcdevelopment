import React from "react";
import { Link } from "react-router-dom";

import { makeStyles, useTheme } from "@material-ui/styles";
import { Grid } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import { useMediaQuery } from "@material-ui/core";

import background from '../assets/background.jpg'

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
}))

export default function Contact() {
    const classes = useStyles()
    const theme = useTheme()
    const matchesMD = useMediaQuery(theme.breakpoints.down("md"))
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"))
    const matchesXS = useMediaQuery(theme.breakpoints.down("xs"))

    return (
        <Grid container direction="row">
            <Grid item container direction="column" lg={3}>
                <Grid item>
                    <Typography variant="h2" style={{lineHeight: 1}}>Contact us</Typography>
                    <Typography variant="body1" style={{color: theme.palette.common.blue}}>We're Waiting</Typography>
                </Grid>
            </Grid>
            <Grid item container className={classes.background} lg={9}>

            </Grid>
        </Grid>
    )
}