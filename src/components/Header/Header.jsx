import React, { useState } from 'react';

import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Badge, IconButton, Toolbar } from '@material-ui/core';
import SearchBar from "material-ui-search-bar";
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import { useLocation } from 'react-router-dom';



const useStyles = makeStyles(theme => ({
    appBar: {
        position: 'absolute',
        marginLeft: 270,
        
        [theme.breakpoints.up('md')]: {
            width: `calc(100% - ${270}px)`,
        },
    },
    navIconHide: {
        [theme.breakpoints.up('md')]: {
          display: 'none',
        },
    },
    searchInput: {
        boxShadow: "none",
        marginRight: "5%",
        width: "90%"
    }
}))


const Header = (props) => {
    
    const cls = useStyles();

    const location = useLocation();

    const onSubmit = (data) => {
        console.log(data);
    }

    const [value, setValue] = useState("");
    const [chat, setChat] = useState("");
    

    return (
        <AppBar className = {cls.appBar}>
            <Toolbar style = {{ backgroundColor: "#FFFFFF"}}>
                <IconButton
                    color="primary"
                    aria-label="Open drawer"
                    onClick={ props.setToggleSidebar }
                    className = {cls.navIconHide}>
                    <MenuIcon />
                </IconButton>


                {location.pathname.includes('/chat/') && <SearchBar
                    placeholder = "Поиск сообщений..."
                    value = { chat }
                    onChange = {(e) => setChat(e)}
                    onRequestSearch = {() => onSubmit(chat)}
                    className = {cls.searchInput}
                />}

                 {location.pathname === '/' && <SearchBar
                    placeholder = "Поиск пользователей..."
                    value = { value }
                    onChange = {(e) => setValue(e)}
                    onRequestSearch = {() => onSubmit(value) }
                    className = {cls.searchInput}
                />}
                
                {!location.pathname.includes('/chat/') && location.pathname !== '/' && <div className = {cls.searchInput}> </div>}


                 
                <Badge color = "secondary" variant = "dot">
                    <NotificationsNoneIcon style = {{color: "#C2CFE0"}} />
                </Badge>
            </Toolbar>
        </AppBar>
    )
}


export default Header;