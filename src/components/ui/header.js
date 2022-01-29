import React from "react";
import { AppBar } from "@material-ui/core/";
import { Toolbar } from "@material-ui/core/";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import { makeStyles } from "@material-ui/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

import logo from '../../assets/logo.svg'

function ElevationScroll(props) {
     
    const { children } = props;
    // useScrollTrigger is an event listener
    const trigger = useScrollTrigger({
      disableHysteresis: true,   
      threshold: 0
    //   how far a user needs to scroll to trigger event listener. Default is 100.
    });
    
    // returns new version of component that is being wrapped by ElevationScroll. Clones the children and returns a new copy of the elevation when triggered
    return React.cloneElement(children, {
      elevation: trigger ? 4 : 0,
    });
  }

  const useStyles = makeStyles(theme => ({
      toolbarmargin: {
          ...theme.mixins.toolbar,
          marginBottom: "3em"
      },
      logo: {
          height: "7em"
      },
      tabContainer: {
          marginLeft: 'auto'
      },
      tab: {
          fontFamily: "Raleway"
      }
  }))
  
 
export default function Header(props) {
    const classes = useStyles()
    return (
        <React.Fragment>
        <ElevationScroll >
        <AppBar position="fixed" >
            <Toolbar disableGutters>
            
                <img alt="company logo" className={classes.logo} src={logo} />
                <Tabs className={classes.tabContainer}>
                    <Tab className={classes.tab} label="Home" />
                    <Tab className={classes.tab} label="Services" />
                    <Tab className={classes.tab} label="The Revolution" />
                    <Tab className={classes.tab} label="About Us" />
                    <Tab className={classes.tab} label="Contact Us" />
                </Tabs>
            </Toolbar>
            {/* Toolbar helps lay content out in a horizontal manner */}
        </AppBar>
        </ElevationScroll>
        <div className={classes.toolbarmargin} />
        </React.Fragment>
    )
}