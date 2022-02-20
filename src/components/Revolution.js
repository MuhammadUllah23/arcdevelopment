import React from 'react'
import {Link} from 'react-router-dom'

import {makeStyles, useTheme} from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { useMediaQuery } from '@material-ui/core';

import vision from '../assets/vision.svg'

const useStyles = makeStyles(theme => ({
    rowCont: {
        paddingLeft: '5em',
        paddingRight: '5em',
        [theme.breakpoints.down('sm')]: {
            paddingLeft: '1.5em',
            paddingRight: '1.5em',
        }
    },
}))

export default function Revolution(props) {
    const classes = useStyles()
    const theme = useTheme()

    return (
        <Grid container direction="column" >
            <Grid item className={classes.rowCont} style={{marginTop: "2em"}}>
                <Typography variant="h2" style={{fontFamily: 'Pacifico'}}>
                    The Revolution
                </Typography>
            </Grid>
            <Grid item container direction="row" className={classes.rowCont}>
                <Grid item >
                    <img src={vision} alt="mountain through binoculars" />
                </Grid>
            </Grid>
        </Grid>
    )
}
