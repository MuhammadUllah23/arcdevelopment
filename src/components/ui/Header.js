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
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import MenuIcon from "@material-ui/icons/Menu"

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
          marginBottom: "3em",
          [theme.breakpoints.down('md')]: {
              marginBottom: '2em'
          },
          [theme.breakpoints.down('xs')]: {
              marginBottom: '1.25em'
          }
      },
      logo: {
          height: "8em",
          [theme.breakpoints.down("md")]: {
              height: "7em"
          },
          [theme.breakpoints.down("xs")]: {
              height: "5.5em"
          }
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
      menu: {
          backgroundColor: theme.palette.common.blue,
          color: "white",
          borderRadius: "0px"

      },
      menuItem: {
          ...theme.typography.tab,
          opacity: 0.7,
          "&:hover": {
              opacity: 1
          }
      }
  }))
  
 
export default function Header(props) {
    const classes = useStyles()
    const theme = useTheme()
    const iOS = typeof navigator !== 'undefined' && /iPad|iPhone|iPod/.test(navigator.userAgent);
    const matches = useMediaQuery(theme.breakpoints.down("md"))
    // Meida Query is going to select everything medium and below to true
    const [openDrawer, setopenDrawer] = useState(false);
    const [value, setValue] = useState(0) 
    const [anchorEl, setAnchorEl] = useState(null)
    const [openMenu, setOpenMenu] = useState(false)
    const [selectedIndex, setSelectedIndex] = useState(0);
    

    const handleChange = (e, newValue) => {
        setValue(newValue)
    };

    const handleClick = (e) => {
        setAnchorEl(e.currentTarget)
        setOpenMenu(true)
    };

    const handleMenuItemClick = (e, i) => {
        setAnchorEl(null);
        setOpenMenu(false);
        setSelectedIndex(i)
    }

    const handleClose = (e) => {
        setAnchorEl(null)
        setOpenMenu(false)
    };

    const menuOptions = [
        {name: "Services", link: "/services"}, 
        {name: "Custom Software Development", link: "/customsoftware"}, 
        {name: "Mobile Apps Development", link: "/mobileapps"}, 
        {name: "Website Development", link: "/websites"}
    ]

    useEffect(() => {

        switch (window.location.pathname) {
            case "/":
                if (value !== 0) {
                    setValue(0)
                }
                break;
            case "/services":
                if (value !== 1) {
                    setValue(1)
                    setSelectedIndex(0)
                }
                break;
            case "/customsoftware":
                if (value !== 1) {
                    setValue(1)
                    setSelectedIndex(1)
                }
                break;   
            case "/mobileapps":
                if (value !== 1) {
                    setValue(1)
                    setSelectedIndex(2)
                }
                break;
            case "/websites":
                if (value !== 1) {
                    setValue(1)
                    setSelectedIndex(3)
                }
                break;
            case "/revolution":
                if (value !== 2) {
                    setValue(2)
                }
                break;   
            case "/about":
                if (value !== 3) {
                    setValue(3)
                }
                break;
            case "/contact":
                if (value !== 4) {
                    setValue(4)
                }
                break;
            case "/estimate":
                if (value !== 5) {
                    setValue(5)
                }     
                default:
                    break;
        }
    }, [value] ) 
    // Value constant is being passed as dependancy which tells the usEffect hook that we are depending on the state value 
    // and we dont want to run the code again if the value has not changed.

    const tabs = (
        <React.Fragment>
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
                    <Tab 
                    aria-owns={anchorEl ? "simple-menu" : undefined} 
                    aria-haspopup={anchorEl ? "true" : undefined} 
                    className={classes.tab} 
                    component={Link} to="/services" 
                    label="Services" 
                    onMouseOver={(event) => handleClick(event)}
                    />
                    <Tab className={classes.tab} component={Link} to="/revolution" label="The Revolution" />
                    <Tab className={classes.tab} component={Link} to="/about" label="About Us" />
                    <Tab className={classes.tab} component={Link} to="/contact" label="Contact Us" />
                </Tabs>
                <Button variant="contained" color="secondary" className={classes.button}>
                    Free Estimate
                </Button>
                <Menu id="simple-menu" anchorEl={anchorEl} open={openMenu} onClose={handleClose} MenuListProps={{onMouseLeave: handleClose}} classes={{paper: classes.menu}} elevation={0}>
                {/* MenuListProps prop let us use the props for MenuList compnent inside the Menu component. It is set to a javascript function with and object to close menu when mouse is off the menu. 
                    Classes: set it anbject with property of paper with value of classes.menu. We use this because Menu component is built on top of other material UI components
                    Elevation:  Will change the default material ui elevation and dropshadow to the 0 preset in the theme which is none */}
                    {menuOptions.map((option, i) => (
                        <MenuItem 
                        key={option} 
                        component={Link} 
                        to={option.link} 
                        classes={{root: classes.menuItem}} 
                        onClick={(event) => {handleMenuItemClick(event, i); setValue(1); handleClose()}} 
                        selected={i === selectedIndex && value === 1}> 
                            {option.name} 
                        </MenuItem>
                    ))}
                </Menu>
        </React.Fragment>
    );

    const drawer = (
        <React.Fragment>

        </React.Fragment>
    );

    return (
        <React.Fragment>
        <ElevationScroll >
        <AppBar position="fixed" >
            <Toolbar disableGutters>
                <Button component={Link} to="/" disableRipple className={classes.logoContainer} onClick={() => setValue(0)}>
                    <img alt="company logo" className={classes.logo} src={logo} />
                </Button>
                {matches ? null : tabs}
            </Toolbar>
            {/* Toolbar helps lay content out in a horizontal manner */}
        </AppBar>
        </ElevationScroll>
        <div className={classes.toolbarmargin} />
        </React.Fragment>
    )
}