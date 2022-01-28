import React from "react";
import { AppBar } from "@material-ui/core/";
import { Toolbar } from "@material-ui/core/";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";

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
  
 
export default function Header(props) {
    return (
        <ElevationScroll >
        <AppBar position="fixed">
            <Toolbar>Arc Development</Toolbar>
            {/* Toolbar helps lay content out in a horizontal manner */}
        </AppBar>
        </ElevationScroll>
    )
}