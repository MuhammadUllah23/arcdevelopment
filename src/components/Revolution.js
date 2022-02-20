import React from 'react'
import {Link} from 'react-router-dom'

import {makeStyles, useTheme} from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { useMediaQuery } from '@material-ui/core';

const useStyles = makeStyles(theme => ({

}))

export default function Revolution(props) {
    const classes = useStyles()
    const theme = useTheme()

    return (
        <Grid container direction="column" >
            <Grid item >
                <Typography variant="h2" >
                    The Revolution
                </Typography>
            </Grid>
        </Grid>
    )
}
