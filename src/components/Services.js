import React from "react";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { Button } from "@material-ui/core";

const useStyles = makeStyles(theme => ({

}))

export default function Services() {
    const classes = useStyles()

    return (
        <Grid container direction="column" >
            <Grid item> {/*------CUSTOM SOFTWARE BLOCK------*/}
                <Grid container direction="row" className={classes.serviceCont} justify={matchesSM ? "center" : undefined} >
                    <Grid item style={{marginLeft: matchesSM ? 0 : "5em", textAlign: matchesSM ? "center" : undefined}}>
                        <Typography variant="h4" >
                            Custom Software Development
                        </Typography>
                        <Typography variant="subtitle1" className={classes.subtitle} >
                            Save Energy. Save Time. Save Money.
                        </Typography>
                        <Typography variant="subtitle1">
                            Complete digital solutions, from investigation to{" "} <span className={classes.specialText}>celebration.</span>
                        </Typography>
                        <Button component={Link} to="/customsoftware" onClick={() => {props.setValue(1); props.setSelectedIndex(1)}} variant="outlined" className={classes.buttonLearnMore} >
                            <span style={{marginRight: 10}}> Learn More </span>
                            <ButtonArrow width={10} height={10} fill={theme.palette.common.blue} />
                        </Button>
                    </Grid>
                    <Grid item>
                        <img className={classes.icon} alt="custom software icon" src={customSoftwareIcon} />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item> {/*------iOS/ANDROID BLOCK------*/}
                <Grid container direction="row" className={classes.serviceCont} justify={matchesSM ? "center" : "flex-end"} >
                    <Grid item style={{textAlign: matchesSM ? "center" : undefined}}>
                        <Typography variant="h4" >
                            iOS/Android App Development
                        </Typography>
                        <Typography variant="subtitle1" className={classes.subtitle} >
                            Extend Functionality. Extend Access. Increase Engagement.
                        </Typography>
                        <Typography variant="subtitle1">
                            Integrate your web experience or create a standalone app{matchesSM ? null : <br />}with either mobile platform
                        </Typography>
                        <Button component={Link} to="/mobileapps" onClick={() => {props.setValue(1); props.setSelectedIndex(2)}} variant="outlined" className={classes.buttonLearnMore} >
                            <span style={{marginRight: 10}}> Learn More </span>
                            <ButtonArrow width={10} height={10} fill={theme.palette.common.blue} />
                        </Button>
                    </Grid>
                    <Grid item style={{marginRight: matchesSM ? 0 : "5em"}}>
                        <img className={classes.icon} alt="mobile apps icon" src={mobileAppsIcon} />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item> {/*------WEBSITES BLOCK------*/}
                <Grid container direction="row" className={classes.serviceCont} justify={matchesSM ? "center" : undefined} >
                    <Grid item style={{marginLeft: matchesSM ? 0 : "5em", textAlign: matchesSM ? "center" : undefined}}>
                        <Typography variant="h4" >
                            Websites Development
                        </Typography>
                        <Typography variant="subtitle1" className={classes.subtitle} >
                            Reach More. Discover More. Sell More.
                        </Typography>
                        <Typography variant="subtitle1">
                            Optimiazed for Serch Engines, built for speed.
                        </Typography>
                        <Button component={Link} to="/websites" onClick={() => {props.setValue(1); props.setSelectedIndex(3)}} variant="outlined" className={classes.buttonLearnMore} >
                            <span style={{marginRight: 10}}> Learn More </span>
                            <ButtonArrow width={10} height={10} fill={theme.palette.common.blue} />
                        </Button>
                    </Grid>
                    <Grid item>
                        <img className={classes.icon} alt="website icon" src={websiteIcon} />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}