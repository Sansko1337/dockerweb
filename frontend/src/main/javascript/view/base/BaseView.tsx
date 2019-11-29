import React, {FunctionComponent} from "react";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import {UIView} from "@uirouter/react";

export const BaseView: FunctionComponent = () => {

    return (
        <>
            <AppBar position={"static"} >
                <Toolbar variant={"dense"}>
                    <Typography variant={'h6'}>Docker Web</Typography>
                </Toolbar>
            </AppBar>
            <UIView/>
        </>
    );
};
