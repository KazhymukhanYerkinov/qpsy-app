import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import MailIcon from '@material-ui/icons/Mail';
import { Avatar, Badge, Button, List, ListItem, ListItemText } from '@material-ui/core';
import { NavLink } from 'react-router-dom';


const useStyles = makeStyles(theme => ({
    root: {
        background: "#FFFFFF",
        borderRadius: "1%",
        padding: "1%",
        marginBottom: "1%",
        
    },
    root2: {
        background: "#FFFFFF",
        width: "60%",
        padding: "1%",       
    },
    buttonPer: {
        color: "white",
        fontFamily: "Poppins",
        fontSize: "80%",
        marginTop: "7%",
    },
    large: {
        width: theme.spacing(7),
        height: theme.spacing(7),
        backgroundColor: "black",
        color: "white"
    },
    userName: {
        fontFamily: "Poppins",
        fontSize: "18px",
    },
    userText: {
        fontFamily: "Poppins",
        fontSize: "15px",
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
    }

    
}))
const UserItem = (props) => {

    const cls = useStyles();


    return (
        <div className = {cls.root}>
            <div className = "d-flex justify-content-between">
                <div className = {cls.root2}>
                    <NavLink to = {'/chat/' + props.id} style = {{textDecoration: "none"}}>
                        <List dense>
                            <ListItem>
                                <Avatar style = {{ marginRight: "3%" }} className={cls.large}> Y </Avatar>

                                <ListItemText classes = {{primary: cls.userName, secondary: cls.userText}} primary = {"Yersultan"} secondary = "blin u mneya trabli"/>
                            </ListItem>
                        </List>
                    </NavLink>
                </div>

                <div className = "d-flex align-items-center mr-3">
                    <div className = "text-center">
                        <Badge color = "secondary" overlap = "circle" badgeContent = {"+1"}>
                            <MailIcon style = {{ color: "#109CF1"}} fontSize = "large"/>
                        </Badge>
                        <div>
                            <Button style = {{backgroundColor: "#F7685B"}} className = {cls.buttonPer}> Передать </Button>
                        </div>
                    </div>
                    
                </div>

            </div>
        </div>
    )
}

export default UserItem;