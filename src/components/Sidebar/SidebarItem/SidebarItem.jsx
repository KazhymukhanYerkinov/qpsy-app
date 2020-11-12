import { Avatar, List, ListItem, ListItemText, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ViewAgendaIcon from '@material-ui/icons/ViewAgenda';
import ViewCompactIcon from '@material-ui/icons/ViewCompact';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';


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
        color:  "#334D6E" 
    },
}))



const SidebarItem = () => {
    const cls = useStyles();

    const [select, setSelect] = useState(1);
    return (
        <>
            <div className = "d-flex justify-content-center pt-2">
                <div><span className = {cls.logoText}><span style = {{ color: "#109CF1" }}>Q</span>PSY</span></div>
            </div>
            
            <List dense style = {{ marginTop: "-5%" }}>
                <hr />
                <ListItem>
                    <Avatar
                        alt = ""
                        style = {{ marginRight: "5%" }}
                    />
                    <ListItemText classes = {{primary: cls.listText, secondary: cls.listEmail}} primary="Kazhymukhan Yerkinov" secondary="kazhymukhan@gmail.com" />
                </ListItem>
            </List>

            <div className = "mt-4">

                <div onClick = {() => setSelect(1)}>
                    <ListItem button selected = {select === 1} >
                        <ListItemIcon>
                            <ChatBubbleOutlineIcon style = {{color: "#334D6E"}} />
                        </ListItemIcon>
                        <ListItemText primary = "Чаты" classes = {{primary: cls.listItem}}/>
                    </ListItem>
                </div>
                <div onClick = {() => setSelect(2)}>
                    <ListItem button selected = {select === 2}>
                        <ListItemIcon>
                            <ViewAgendaIcon style = {{color: "#334D6E"}}/>
                        </ListItemIcon>
                        <ListItemText primary = "Лента" classes = {{primary: cls.listItem}}/>
                    </ListItem>
                </div>

                <div onClick = {() => setSelect(3)}>
                    <ListItem button selected = {select === 3}>
                        <ListItemIcon>
                            <ViewCompactIcon style = {{color: "#334D6E"}}/>
                        </ListItemIcon>
                        <ListItemText primary = "Статистика" classes = {{primary: cls.listItem}}/>
                    </ListItem>
                </div>
            </div>

            <div className = "mt-4">
                <hr />
                <div onClick = {() => setSelect(4)}>
                    <ListItem button selected = {select === 4}>
                        <ListItemIcon>
                            <MoreHorizIcon style = {{color: "#334D6E"}}/>
                        </ListItemIcon>
                        <ListItemText primary = "Настройки" classes = {{primary: cls.listItem}}/>
                    </ListItem>
                </div>
            </div>
        </>
    )
}

export default SidebarItem;