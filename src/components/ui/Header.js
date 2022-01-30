import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { AppBar } from "@material-ui/core/";
import { Toolbar } from "@material-ui/core/";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import { makeStyles } from "@material-ui/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

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
          height: "8em"
      },
      logoContainer: {
        padding: 0,
        "&:hover": {
            backgroundColor: "transparent"
        }
      },
      tabContainer: {
          marginLeft: 'auto'
      },
      tab: {
          ...theme.typography.tab,
          minWidth: 10,
          marginLeft: "25px"      
      },
      button: {
          ...theme.typography.estimate,
          borderRadius: "50px",
          marginLeft: "50px",
          marginRight: "25px",
          height: "45px",
      },
  }))
  
 
export default function Header(props) {
    const classes = useStyles()
    const [value, setValue] = useState(0) 
    const [anchorEl, setAnchorEl] = useState(null)
    const [open, setOpen] = useState(false)

    const handleChange = (e, value) => {
        setValue(value)
    };

    useEffect(() => {
        if (window.location.pathname === "/" && value !== 0) {
            setValue(0)
        } else if (window.location.pathname === "/services" && value !== 1) {
            setValue(1)
        } else if (window.location.pathname === "/revolution" && value !== 2) {
            setValue(2)
        } else if (window.location.pathname === "/about" && value !== 3) {
            setValue(3)
        } else if (window.location.pathname === "/contact" && value !== 4) {
            setValue(4)
        } 
    }, [value] ) 
    // Value constant is being passed as dependancy which tells the usEffect hook that we are depending on the state value 
    // and we dont want to run the code again if the value has not changed.
    return (
        <React.Fragment>
        <ElevationScroll >
        <AppBar position="fixed" >
            <Toolbar disableGutters>
                <Button component={Link} to="/" disableRipple className={classes.logoContainer} onClick={() => setValue(0)}>
                    <img alt="company logo" className={classes.logo} src={logo} />
                </Button>
                <Tabs 
                    value={value} 
                    onChange={handleChange} 
                    className={classes.tabContainer}
                    indicatorColor="primary"
                >
                    <Tab className={classes.tab} component={Link} to="/" label="Home" />
                    {/* The to="" prop is a prop of the link component. 
                        All properties that are not used by the Tab component are passed down to the Link component
                        thanks to the component={Link} composition provided by Material UI*/}
                    <Tab className={classes.tab} component={Link} to="/services" label="Services" />
                    <Tab className={classes.tab} component={Link} to="/revolution" label="The Revolution" />
                    <Tab className={classes.tab} component={Link} to="/about" label="About Us" />
                    <Tab className={classes.tab} component={Link} to="/contact" label="Contact Us" />
                </Tabs>
                <Button variant="contained" color="secondary" className={classes.button}>
                    Free Estimate
                </Button>
            </Toolbar>
            {/* Toolbar helps lay content out in a horizontal manner */}
        </AppBar>
        </ElevationScroll>
        <div className={classes.toolbarmargin} />
        </React.Fragment>
    )
}