import React, {FunctionComponent, useCallback, useEffect, useState} from "react";
import Typography from "@material-ui/core/Typography";
import ContainerService from "../../service/container/ContainerService";
import {Box, Card, CardContent, FormControlLabel, IconButton, Paper, Switch} from "@material-ui/core";
import Chip from "@material-ui/core/Chip";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Refresh} from "@material-ui/icons";

const useStyles = makeStyles({
    controlContainer: {
        display: 'flex',
        justifyContent: 'flex-end'
    },
    containerCard: {
        margin: '1em',
        minWidth: '20em',
        maxWidth: '20em'
    },
    noMarginFormLabel: {
        marginRight: 0
    },
    containerGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(20em, 1fr))',
        gridGap: '1em'
    }
});
export const ContainersView: FunctionComponent = () => {

    const classes = useStyles();

    const [containers, setContainers] = useState<any[]>([]);
    const [includeInactive, setIncludeInactive] = useState(false);

    const refreshContainers = useCallback(() => {
        ContainerService.getContainers(includeInactive).then(data => {
            setContainers(data.data)
        });
    }, [includeInactive]);

    useEffect(() => {
        refreshContainers();
    }, [refreshContainers, includeInactive]);

    return (
        <>
            <Paper className={classes.controlContainer}>
                <IconButton onClick={refreshContainers}>
                    <Refresh/>
                </IconButton>
                <FormControlLabel
                    className={classes.noMarginFormLabel}
                    label="Include Inactive"
                    labelPlacement={'start'}
                    control={<Switch onChange={() => setIncludeInactive(!includeInactive)}/>}
                />
            </Paper>
            <div className={classes.containerGrid}>
                {containers.map(container => (
                    <Card raised className={classes.containerCard}>
                        <CardContent>
                            <Box display={'flex'} flexDirection={'row'} justifyContent={'space-between'}>
                                <Typography noWrap variant={"h6"}>{container.Names[0]}</Typography>
                                <Chip label={container.State}/>
                            </Box>
                            <Typography noWrap variant={"body1"}>{container.Image}</Typography>
                            <Typography variant={"body1"}>{container.Status}</Typography>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </>
    );
};
