import React, { useState } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import MailIcon from '@material-ui/icons/Mail';
import { Avatar, Badge, Button, Dialog, DialogActions, DialogTitle, List, ListItem, ListItemText } from '@material-ui/core';
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
    },
    dialogTitle: {
        fontFamily: "Poppins",
        fontSize: "24px",
        fontWeight: "bold"
        
    },
    buttonNo: {
        color: "#FFFFFF",
        width: "35%"
    },
    buttonYes: {
        color: "#FFFFFF",
        width: "35%"
    },
    dialogApp: {
        padding: "5%"
    }


    
}))
const UserItem = (props) => {

    const cls = useStyles();

    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    }


    return (
        <>
        <div className = {cls.root}>
            <div className = "d-flex justify-content-between">
                <div className = {cls.root2}>
                    <NavLink to = {'/chat/' + props.id} style = {{textDecoration: "none"}}>
                        <List dense>
                            <ListItem>
                                <Avatar style = {{ marginRight: "3%" }} className={cls.large}> {props.name[0]} </Avatar>

                                <ListItemText classes = {{primary: cls.userName, secondary: cls.userText}} primary = {props.name} secondary = {props.last_message}/>
                            </ListItem>
                        </List>
                    </NavLink>
                </div>

                <div className = "d-flex align-items-center mr-3">
                    <div className = "text-center">
                        <Badge color = "secondary" overlap = "circle" badgeContent = {`+${props.unread}`}>
                            <MailIcon style = {{ color: "#109CF1"}} fontSize = "large"/>
                        </Badge>
                        <div>
                            <Button style = {{backgroundColor: "#F7685B"}} onClick = { handleOpen } className = {cls.buttonPer}> Передать </Button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        <SendUser open = { open } setOpen = { setOpen }/>
        </>
    )
}

const SendUser = (props) => {

    const cls = useStyles();

    const handleClose = () => {
        props.setOpen(false);
    }
    return (
        <Dialog open = {props.open} onClose = { handleClose } fullWidth>
            <DialogTitle id="alert-dialog-title" style = {{ textAlign: "center", margin: "9%" }}> <span className = {cls.dialogTitle} > Передать пользователя Кен <br /> специальному аккаунту ? </span> </DialogTitle>

            <DialogActions style = {{ justifyContent: "center", marginBottom: "5%" }}>

                <Button className = {cls.buttonYes} style = {{ backgroundColor: " #098EDF" }}>
                    ДА
                </Button>

                <Button className = {cls.buttonNo} style = {{ backgroundColor: "#C4C4C4" }}>
                    НЕТ
                </Button>

            </DialogActions>

        </Dialog>
    )
}

export default UserItem;