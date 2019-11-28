import {Paper} from "@material-ui/core";
import React, {FunctionComponent, useState} from "react";
import TextField from "@material-ui/core/TextField";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
    loginContainer: {
        backgroundImage: 'url("/login_background.jpg")',
        backgroundSize: 'cover',
        display: 'flex',
        width: '100%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    loginForm: {
        display: 'flex',
        flexDirection: 'column',
        width: '25%'
    },
    inputField: {
        marginLeft: '1em',
        marginRight: '1em'
    },
    inputButton: {
        margin: '1em',
        flexGrow: 0
    }
});
export const LoginView: FunctionComponent = () => {

    const classes = useStyles();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <section className={classes.loginContainer}>
            <Paper className={classes.loginForm}>
                <AppBar position={"static"} elevation={1}>
                    <Toolbar variant={"dense"}>
                        <Typography variant={"h6"}>Login</Typography>
                    </Toolbar>
                </AppBar>
                <TextField className={classes.inputField}
                           margin={"normal"}
                           label={'username'} variant={'outlined'}
                           onChange={event => setUsername(event.target.value)}/>
                <TextField className={classes.inputField}
                           margin={"normal"}
                           label={'password'} variant={'outlined'}
                           onChange={event => setPassword(event.target.value)} type={'password'}/>
                <Button className={classes.inputButton} variant={"contained"} color={"primary"}>Login</Button>
            </Paper>
        </section>
    );
};
