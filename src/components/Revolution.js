import React from 'react'
import {Link} from 'react-router-dom'
import Lottie from 'react-lottie';

import {makeStyles, useTheme} from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { useMediaQuery } from '@material-ui/core';

import vision from '../assets/vision.svg'
import technologyAnimation from '../animations/technologyAnimation/data.json'
import consultation from "../assets/consultationIcon.svg"
import mockup from "../assets/mockupIcon.svg";
import review from "../assets/reviewIcon.svg";
import design from "../assets/designIcon.svg";
import build from "../assets/buildIcon.svg";
import launch from "../assets/launchIcon.svg";
import maintain from "../assets/maintainIcon.svg";
import iterate from "../assets/iterateIcon.svg";

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

    const technologyOptions = {
        loop: true,
        autoplay: true, 
        animationData: technologyAnimation,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };

    return (
        <Grid container direction="column" >
            <Grid item className={classes.rowCont} style={{marginTop: "2em"}}>
                <Typography variant="h2" style={{fontFamily: 'Pacifico'}}>
                    The Revolution
                </Typography>
            </Grid>
            <Grid item container direction="row" alignItems="center" className={classes.rowCont}>
                <Grid item lg>
                    <img src={vision} alt="mountain through binoculars" style={{maxWidth: "40em", marginRight: "5em"}} />
                </Grid>
                <Grid item container direction="column" style={{maxWidth: "40em"}} lg>
                    <Grid item >
                        <Typography align="right" variant="h4" gutterBottom>Vision</Typography>
                    </Grid>
                    <Grid item>
                        <Typography align="right" variant="body1" paragraph>
                            The rise of computers, and subsequently the Internet, has
                            completely altered every aspect of human life. This has increased
                            our comfort, broadened our connections, and reshaped how we view
                            the world.
                        </Typography>
                        <Typography align="right" variant="body1" paragraph>
                            What once was confined to huge rooms and teams of engineers now
                            resides in every single one of our hands. Harnessing this
                            unlimited potential by using it to solve problems and better lives
                            is at the heart of everything we do.
                        </Typography>
                        <Typography align="right" variant="body1" paragraph>
                            We want to help businesses capitalize on the latest and greatest
                            technology. The best way to predict the future is to be the one
                            building it, and we want to help guide the world into this next
                            chapter of technological expansion, exploration, and innovation.
                        </Typography>
                        <Typography align="right" variant="body1" paragraph>
                            By holding ourselves to rigorous standards and pristine quality,
                            we can ensure you have the absolute best tools necessary to thrive
                            in this new frontier.
                        </Typography>
                        <Typography align="right" variant="body1" paragraph>
                            We see a future where every individual has personalized software
                            custom tailored to their lifestyle, culture, and interests,
                            helping them overcome life's obstacles. Each project is a step
                            towards that goal.
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item container direction="row" alignItems="center" className={classes.rowCont}>
                <Grid item container direction="column" style={{maxWidth: "40em"}} lg>
                    <Grid item >
                        <Typography variant="h4" gutterBottom>Technology</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="body1" paragraph>
                            In 2013, Facebook invented a new way of building websites. This
                            new system, React.js, completely revolutionizes the process and
                            practice of website development.
                        </Typography>
                        <Typography variant="body1" paragraph>
                            Instead of chaining together long individual pages, like
                            traditional websites, React websites are built with little chunks
                            of code called components. These components are faster, easier to
                            maintain, and are easily reused and customized, each serving a
                            singular purpose.
                        </Typography>
                        <Typography variant="body1" paragraph>
                            Two years later they shocked the world by releasing a similar
                            system, React Native, for producing iOS and Android apps. Instead
                            of having to master two completely separate development platforms,
                            you can leverage the knowledge you already possessed from building
                            websites and reapply it directly! This was a huge leap forward.
                        </Typography>
                        <Typography variant="body1" paragraph>
                            This technology is now being used by companies like AirBnB,
                            Microsoft, Netflix, Pinterest, Skype, Tesla, UberEats, and when
                            Facebook purchased Instagram large portions of it were even
                            rebuilt using React.
                        </Typography>
                        <Typography variant="body1" paragraph>
                            Developers have since built on top of these systems by automating
                            project setup and deployment, allowing creators to focus as much
                            as possible on their work itself.
                        </Typography>
                        <Typography variant="body1" paragraph>
                            These technical advancements translate into savings by
                            significantly reducing the workload and streamlining the workflow
                            for developing new pieces of software, while also lowering the
                            barrier to entry for mobile app development.
                        </Typography>
                        <Typography variant="body1" paragraph>
                            This puts personalization in your pocket — faster, better, and
                            more affordable than ever before.
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item container justify="flex-end" lg>
                    <Lottie options={technologyOptions} style={{maxWidth: "40em", margin: 0}} />
                </Grid>
            </Grid>
            <Grid item container direction="row" justify="center" className={classes.rowCont}>
                <Grid item>
                    <Typography variant="h4" gutterBottom >Process</Typography>
                </Grid>
            </Grid>
            <Grid item container direction="row" className={classes.rowCont} style={{backgroundColor: "#B3B3B3", height: "90em"}}>
                <Grid item container direction="column" lg>
                    <Grid item>
                        <Typography variant="h4" gutterBottom style={{color: "#000", marginTop: "5em"}}>Consultation</Typography>
                    </Grid>
                    <Grid item >
                        <Typography variant="body1" paragraph style={{color: "#fff", maxWidth: "20em"}}>
                            Our process begins the moment you realize you need a piece of
                            technology for your business. Whether you already have an idea for
                            where to start and what to do, or if you just know you want to
                            step things up, our initial consultation will help you examine
                            your business holistically to find the best solutions.
                        </Typography>
                        <Typography variant="body1" paragraph style={{color: "#fff", maxWidth: "20em"}}>
                            Detailed notes will be taken on your requirements and constraints,
                            while taking care to identify other potential areas for
                            consideration.
                        </Typography>
                        <Typography variant="body1" paragraph style={{color: "#fff", maxWidth: "20em"}}>
                            Cutting-edge advancements in machine learning like object
                            detection and natural language processing allow computers to do
                            things previously unimaginable, and our expertise and intuition
                            will help usher you into this new future of possibilities.
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item style={{alignSelf: "center"}} lg>
                    <img src={consultation} alt="Handshake"/>
                </Grid>
            </Grid>
            <Grid item container direction="row" className={classes.rowCont} style={{backgroundColor: "#B3B3B3", height: "90em"}}>
                <Grid item container direction="column" lg>
                    <Grid item>
                        <Typography variant="h4" gutterBottom style={{color: "#000", marginTop: "5em"}}>Mockup</Typography>
                    </Grid>
                    <Grid item >
                        <Typography variant="body1" paragraph style={{color: "#fff", maxWidth: "20em"}}>
                            After we settle on the best path forward and decide on a solution
                            to pursue, details like the cost and timeline will be finalized.
                        </Typography>
                        <Typography variant="body1" paragraph style={{color: "#fff", maxWidth: "20em"}}>
                            Then it's time for us to start on your minimum viable product.
                            That's just a fancy term for a mockup, which doesn’t include
                            colors, images, or any other polished design elements, but
                            captures the essential layout structure and functionality.
                        </Typography>
                        <Typography variant="body1" paragraph style={{color: "#fff", maxWidth: "20em"}}>
                            This helps us understand and refine the solution itself before
                            getting distracted by specifics and looks.
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item style={{alignSelf: "center"}} lg>
                    <img src={mockup} alt="Basic website design outline"/>
                </Grid>
            </Grid>
        </Grid>
    )
}
