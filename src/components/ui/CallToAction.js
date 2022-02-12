import React from "react";
import { Grid } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({

}))

export default function CallToAction() {
    const classes = useStyles()

    return (
        <Grid container >
            <Grid item>
                <Grid container direction='columns'>
                    <Grid item>
                        <Typography variant='h2' >Simple Software.<br />Revolutionary</Typography>
                        <Typography variant='subtitle2' >The advantage of the 21st Century.</Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}