import React from 'react';
import Lottie from 'react-lottie';

import {makeStyles} from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

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
                <Grid container direction="row">
                    <Grid item>
                        <div>Bringing West Coast Technology<br />to the Midwest</div>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
        <Lottie options={defaultOptions} height={"100%"} width={"100%"} />
    )
}