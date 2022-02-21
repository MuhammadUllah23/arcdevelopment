import React from "react";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { Avatar } from "@material-ui/core";
import Hidden from "@material-ui/core/Hidden";
import { LineWeight } from "@material-ui/icons";

import history from '../assets/history.svg'
import profile from "../assets/founder.jpg";
import yearbook from "../assets/yearbook.svg";
import puppy from "../assets/puppy.svg";


const useStyles = makeStyles(theme => ({
    missionStatement: {
        fontStyle: "italic",
        fontWeight: 300,
        fontSize: "1.5rem",
        maxWidth: "50em",
        lineHeight: 1.4
    },
    rowCont: {
        paddingLeft: '5em',
        paddingRight: '5em',
        [theme.breakpoints.down('sm')]: {
            paddingLeft: '1.5em',
            paddingRight: '1.5em',
        }
    },
    avatar: {
        height: "25em",
        width: "25em"
    }
}))

export default function About(props) {
    const classes = useStyles()
    const theme = useTheme()
    const matchesMD = useMediaQuery(theme.breakpoints.down('md'))
    const matchesSM = useMediaQuery(theme.breakpoints.down('sm'))
    const matchesXS = useMediaQuery(theme.breakpoints.down('xs'))

    return (
        <Grid container direction="column" >
            <Grid item className={classes.rowCont} style={{marginTop: "2em"}}>
                <Typography variant="h2">About US</Typography>
            </Grid>
            <Grid item container justify="center" className={classes.rowCont}>
                <Typography variant="h4" align="center" className={classes.missionStatement}>
                    Whether it be person to person, business to consumer, or an individual
                    to their interests, technology is meant to bring us closer to what we
                    care about in the best way possible. Arc Development will use that
                    principle to provide fast, modern, inexpensive, and aesthetic software
                    to the Midwest and beyond.
                </Typography>
            </Grid>
            <Grid item container className={classes.rowCont} justify="space-around">
                <Grid item>
                    <Grid item container direction="column" style={{maxWidth: "35em"}} lg>
                        <Grid item >
                            <Typography variant="h4">
                                History
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="body1" style={{fontWeight: 700, fontStyle: "italic"}} paragraph>
                                We're the new kid on the block
                            </Typography>
                            <Typography variant="body1" paragraph >
                                Founded in 2019, we’re ready to get our hands on the world’s
                                business problems.
                            </Typography>
                            <Typography variant="body1" paragraph >
                                It all started with one question: Why aren’t all businesses
                                using available technology? There are many different answers to
                                that question: economic barriers, social barriers, educational
                                barriers, and sometimes institutional barriers.
                            </Typography>
                            <Typography variant="body1" paragraph >
                                We aim to be a powerful force in overcoming these obstacles.
                                Recent developments in software engineering and computing power,
                                compounded by the proliferation of smart phones, has opened up
                                infinite worlds of possibility. Things that have always been
                                done by hand can now be done digitally and automatically, and
                                completely new methods of interaction are created daily. Taking
                                full advantage of these advancements is the name of the game.
                            </Typography>
                            <Typography variant="body1" paragraph >
                                All this change can be a lot to keep up with, and that’s where
                                we come in.
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <Grid item container justify="center" lg>
                        <img src={history} alt="quill pen sitting on top of book" style={{maxHeight: "22em"}} />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item container direction="column" alignItems="center" className={classes.rowCont}>
                <Grid item >
                    <Typography variant="h4" align="center" gutterBottom>
                      Team  
                    </Typography>                  
                </Grid>
                <Grid item>
                    <Typography variant="body1" align="center" paragraph>
                       Zachary Reece, Founder 
                    </Typography>         
                    <Typography variant="body1" align="center" paragraph>
                       I started coding when I was 9 years old. 
                    </Typography>             
                </Grid>
                <Grid item>
                    <Avatar alt="founder" src={profile} className={classes.avatar}/>
                </Grid>
            </Grid>
        </Grid>
    )
}