import React from "react";

import { Grid } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/styles";
import Button from "@material-ui/core/Button";
import ButtonArrow from './ButtonArrow'

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
}))

export default function CallToAction() {
    const classes = useStyles()
    const theme = useTheme()

    return (
        <Grid container >
            <Grid item>
                <Grid container direction='columns'>
                    <Grid item>
                        <Typography variant='h2' >Simple Software.<br />Revolutionary</Typography>
                        <Typography variant='subtitle2' >The advantage of the 21st Century.</Typography>
                        <Grid container item>
                            <Button variant="outlined" className={classes.buttonLearnMore} >
                                <span style={{marginRight: 5}}> Learn More </span>
                                <ButtonArrow width={10} height={10} fill={theme.palette.common.blue} />
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}