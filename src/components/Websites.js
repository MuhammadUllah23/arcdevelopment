import React from "react";
import { Link } from "react-router-dom";

import {makeStyles, useTheme} from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import IconButton from "@material-ui/core/IconButton";
import { Typography } from '@material-ui/core';
import { useMediaQuery } from '@material-ui/core';
import { Hidden } from '@material-ui/core';

import backArrow from '../assets/backArrow.svg'
import forwardArrow from '../assets/forwardArrow.svg'


const useStyles = makeStyles(theme => ({

}))

export default function Websites(props) {
    const classes = useStyles()
    const theme = useTheme()
    const matchesMD = useMediaQuery(theme.breakpoints.down('md'))
    const matchesSM = useMediaQuery(theme.breakpoints.down('sm'))
    const matchesXS = useMediaQuery(theme.breakpoints.down('xs'))

    return (
        <Grid container direction='column' >

        </Grid>
    )
}