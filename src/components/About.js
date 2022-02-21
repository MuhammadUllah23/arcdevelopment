import React from "react";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Hidden from "@material-ui/core/Hidden";

const useStyles = makeStyles(theme => ({

}))

export default function About(props) {
    const classes = useStyles()
    const theme = useTheme()
    const matchesMD = useMediaQuery(theme.breakpoints.down('md'))
    const matchesSM = useMediaQuery(theme.breakpoints.down('sm'))
    const matchesXS = useMediaQuery(theme.breakpoints.down('xs'))

    return (
        <Grid container direction="column" >

        </Grid>
    )
}