import React from 'react';
import Lottie from 'react-lottie';

import { Typography } from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import { Button } from '@material-ui/core';

import ButtonArrow from './ui/ButtonArrow';
import animationData from '../animations/landinganimation/data'

const useStyles = makeStyles(theme => ({

}))

export default function LandingPage() {
    const classes = useStyles()

    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };

    return (
        <Grid container direction="column">
            <Grid item>
                <Grid container justify="flex-end" alignItems="center" direction="row">
                    <Grid sm item>
                        <Typography variant='h2' align='center'>Bringing West Coast Technology<br />to the Midwest</Typography>
                        <Grid container>
                            <Grid item>
                                <Button variant="contained">Free Estimate</Button>
                            </Grid>
                            <Grid item>
                                <Button variant="outlined">Learn More <ButtonArrow width={15} length={15} fill="red" /> </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid sm item >
                        <Lottie options={defaultOptions} height={"100%"} width={"100%"} />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
        
    )
}