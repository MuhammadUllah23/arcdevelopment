import React from 'react';
import Lottie from 'react-lottie';

import { Typography } from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import { Button } from '@material-ui/core';

import ButtonArrow from './ui/ButtonArrow';
import animationData from '../animations/landinganimation/data'

const useStyles = makeStyles(theme => ({
    animation: {
        maxWidth: "50em",
        minWidth: "21 em",
        marginTop: "2em",
        marginLeft: "10%"
    },
    estimateButton: {
        ...theme.typography.estimate,
        backgroundColor: theme.palette.common.orange,
        borderRadius: 50,
        height: 45,
        width: 145,
        marginRight: 40,
        "&:hover": {
            backgroundColor: theme.palette.secondary.light
        }
    },
    buttonCont: {
        marginTop: "1em"
    },
    buttonLearnMore: {
        borderColor: theme.palette.common.blue,
        color: theme.palette.common.blue,
        borderWidth: 2,
        textTransform: "none",
        borderRadius: 50,
        fontFamily: "Roboto",
        fontWeight: "bold",
        fontSize: "0.9rem",
        height: 45,
        width: 145
    }

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
                        <Grid container justify='center' className={classes.buttonCont} >
                            <Grid item>
                                <Button className={classes.estimateButton} variant="contained">Free Estimate</Button>
                            </Grid>
                            <Grid item>
                                <Button className={classes.buttonLearnMore} variant="outlined">Learn More <ButtonArrow width={15} length={15} fill="red" /> </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid sm item className={classes.animation}>
                        <Lottie options={defaultOptions} height={"100%"} width={"100%"} />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
        
    )
}