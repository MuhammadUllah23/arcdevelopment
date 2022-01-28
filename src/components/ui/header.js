import React from "react";
import { AppBar } from "@material-ui/core/";
import { Toolbar } from "@material-ui/core/";

export default function Header(props) {
    return (
        <AppBar position="fixed">
            <Toolbar>Arc Development</Toolbar>
            {/* Toolbar helps lay content out in a horizontal manner */}
        </AppBar>
    )
}