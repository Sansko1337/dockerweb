import React, {FunctionComponent} from "react";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import {UIView} from "@uirouter/react";
import {Sidebar} from "../../components/sidebar/Sidebar";
import makeStyles from "@material-ui/core/styles/makeStyles";


const useStyles = makeStyles({
    appBar: {
        display: 'flex',
        flexDirection: 'row'
    }
});
export const BaseView: FunctionComponent = () => {

    const classes = useStyles();

    return (
        <>
            <AppBar className={classes.appBar} position={"static"} >
                <Sidebar/>
                <Toolbar variant={"dense"}>
                    <Typography variant={'h6'}>Docker Web</Typography>
                </Toolbar>
            </AppBar>
            <UIView/>
        </>
    );
};
