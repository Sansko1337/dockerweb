import React, {FunctionComponent, useState} from 'react'
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu"
import Drawer from "@material-ui/core/Drawer";
import StorageIcon from '@material-ui/icons/Storage';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import {UISref} from "@uirouter/react";
import {Home} from "@material-ui/icons";
import {ListItemIcon} from "@material-ui/core";

export const Sidebar: FunctionComponent = () => {

    const [open, setOpen] = useState(false);

    return (
        <IconButton onClick={e => setOpen(!open)}>
            <MenuIcon/>
            <Drawer variant={'temporary'} anchor={'left'} open={open}>
                <List>
                    <UISref to={"Home"}>
                        <ListItem button>
                            <ListItemIcon>
                                <Home/>
                            </ListItemIcon>
                            Home
                        </ListItem>
                    </UISref>
                    <UISref to={"Containers"}>
                        <ListItem button>
                            <ListItemIcon>
                                <StorageIcon/>
                            </ListItemIcon>
                            Containers
                        </ListItem>
                    </UISref>
                </List>
            </Drawer>
        </IconButton>
    )
};
