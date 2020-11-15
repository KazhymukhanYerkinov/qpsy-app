import { Avatar, List, ListItem, ListItemText, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ViewAgendaIcon from '@material-ui/icons/ViewAgenda';
import ViewCompactIcon from '@material-ui/icons/ViewCompact';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import { NavLink } from 'react-router-dom';


const useStyles = makeStyles(theme => ({
    logoText: {
        fontFamily: "Poppins",
        fontSize: "30px",
        fontWeight: "bold",
        color: "#2d1674"
    },
    listText: {
        fontFamily: "Poppins",
        fontSize: "15px",
    },
    listEmail: {
        fontFamily: "Poppins",
        fontSize: "12px",
    },
    listItem: {
        fontFamily: "Poppins",
        fontSize: "15px",
        color: "#334D6E"
    },
    dialogTitle: {
        fontFamily: "Poppins",
        fontSize: "16px",
    }
}))



const SidebarItem = (props) => {
    const cls = useStyles();

    const [select, setSelect] = useState(1);
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    }
    return (
        <>
            <div className="d-flex justify-content-center pt-2">
                <div><span className={cls.logoText}><span style={{ color: "#109CF1" }}>Q</span>PSY</span></div>
            </div>

            <List dense style={{ marginTop: "-5%" }}>
                <hr />
                <ListItem>
                    <Avatar
                        alt=""
                        style={{ marginRight: "5%" }}
                    />
                    <ListItemText classes={{ primary: cls.listText, secondary: cls.listEmail }} primary={`${props.user.first_name} ${props.user.last_name}`} secondary={props.user.email} />
                </ListItem>
            </List>

            <div className="mt-4">

                <div onClick={() => setSelect(1)}>
                    <NavLink to={'/'} style={{ textDecoration: "none" }}>
                        <ListItem button selected={select === 1} >

                            <ListItemIcon>
                                <ChatBubbleOutlineIcon style={{ color: "#334D6E" }} />
                            </ListItemIcon>
                            <ListItemText primary="Чаты" classes={{ primary: cls.listItem }} />

                        </ListItem>
                    </NavLink>
                </div>

                <div onClick={() => setSelect(2)}>
                    <NavLink to={'/tape'} style={{ textDecoration: "none" }}>
                        <ListItem button selected={select === 2}>
                            <ListItemIcon>
                                <ViewAgendaIcon style={{ color: "#334D6E" }} />
                            </ListItemIcon>
                            <ListItemText primary="Лента" classes={{ primary: cls.listItem }} />
                        </ListItem>
                    </NavLink>
                </div>

                <div onClick={() => setSelect(3)}>
                    <NavLink to={'/stat'} style={{ textDecoration: "none" }}>
                        <ListItem button selected={select === 3}>
                            <ListItemIcon>
                                <ViewCompactIcon style={{ color: "#334D6E" }} />
                            </ListItemIcon>
                            <ListItemText primary="Статистика" classes={{ primary: cls.listItem }} />
                        </ListItem>
                    </NavLink>
                </div>

                {/* {props.user.level === props.isAdmin && <div onClick = {() => setSelect(1)}>
                    <ListItem button selected = {select === 1}>
                        <ListItemIcon>
                            <SupervisorAccountIcon style = {{color: "#334D6E"}}/>
                        </ListItemIcon>
                        <ListItemText primary = "Аккаунты" classes = {{primary: cls.listItem}}/>
                    </ListItem>
                </div>}

                {props.user.level === props.isAdmin && <div onClick = {() => setSelect(2)}>
                    <ListItem button selected = {select === 2}>
                        <ListItemIcon>
                            <ViewAgendaIcon style = {{color: "#334D6E"}}/>
                        </ListItemIcon>
                        <ListItemText primary = "Лента" classes = {{primary: cls.listItem}}/>
                    </ListItem>
                </div>} */}


            </div>

            <div className="mt-4">
                <hr />
                <NavLink to={'/settings'} style={{ textDecoration: "none" }}>
                    <div onClick={() => setSelect(6)}>
                        <ListItem button selected={select === 6}>
                            <ListItemIcon>
                                <MoreHorizIcon style={{ color: "#334D6E" }} />
                            </ListItemIcon>
                            <ListItemText primary="Настройки" classes={{ primary: cls.listItem }} />
                        </ListItem>
                    </div>
                </NavLink>
            </div>

            <div>
                <hr />
                <div onClick={handleOpen}>
                    <ListItem button>
                        <ListItemIcon>
                            <ExitToAppIcon style={{ color: "#334D6E" }} />
                        </ListItemIcon>
                        <ListItemText primary="Выйти" classes={{ primary: cls.listItem }} />
                    </ListItem>
                </div>
            </div>
            <LogoutAlert open={open} setOpen={setOpen} logoutThunk={props.logoutThunk} />
        </>
    )
}
const LogoutAlert = (props) => {
    const cls = useStyles();

    const handleClose = () => {
        props.setOpen(false);
    }
    const handleCloseYes = () => {
        props.logoutThunk();
    }

    return (
        <div>
            <Dialog
                open={props.open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title">

                <DialogTitle id="alert-dialog-title"> <span className={cls.dialogTitle}> Вы уверены, что хотите выйти ? </span> </DialogTitle>

                <DialogActions>

                    <Button color="secondary" onClick={handleClose}>
                        Отмена
                    </Button>

                    <Button color="primary" onClick={handleCloseYes}>
                        ОК
                    </Button>

                </DialogActions>

            </Dialog>
        </div>
    )
}

export default SidebarItem;