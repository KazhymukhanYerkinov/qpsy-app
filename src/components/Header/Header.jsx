import React, { useState } from 'react';

import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Badge, Button, IconButton, Menu, MenuItem, NativeSelect, Select, TextField, Toolbar } from '@material-ui/core';
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
    },
    online: {
        background: "#109CF1",
        color: "#FFFFFF",
        width: "150px",
        fontSize: "14px",
        "&:hover": {
            background: "#109CF1",
        },
        ["@media (min-width: 320px) and (max-width: 767px)"]: {
            width: "60px",
            fontSize: "10px",
            
        }
    },
    offline: {
        background: "#F7685B",
        color: "#FFFFFF",
        width: "150px",
        fontSize: "14px",
        "&:hover": {
            background: "#F7685B",
        },
        ["@media (min-width: 320px) and (max-width: 767px)"]: {
            width: "60px",
            fontSize: "10px",
        }
    },
    menuItem: {
        width: "150px",
        justifyContent: "center",
        margin: "2px",
        borderRadius: "5px",
        fontSize: "14px",
        color: "#FFFFFF",
        ["@media (min-width: 320px) and (max-width: 767px)"]: {
            width: "60px",
            fontSize: "10px",
        }
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


    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    
    const handleClose = (number) => {
        setAnchorEl(null);
        if (number === 1) {
            if (props.user.status !== 'online') {
                props.updateStatusThunk();
                console.log("ONLINE")
            }
             
        }
        else if (number === -1) {
            if (props.user.status !== 'offline') {
                props.updateStatusThunk();
                console.log("OFFLINE")
            }
            
        }
    };
    

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


                {location.pathname.includes('/chat/') && 
                <>
                    <SearchBar
                        placeholder = "Поиск сообщений..."
                        value = { chat }
                        onChange = {(e) => setChat(e)}
                        onRequestSearch = {() => onSubmit(chat)}
                        className = {cls.searchInput}
                    />
                   
                </>
                }

                 {location.pathname === '/' && 
                 <>
                    <SearchBar
                        placeholder = "Поиск пользователей..."
                        value = { value }
                        onChange = {(e) => setValue(e)}
                        onRequestSearch = {() => onSubmit(value) }
                        className = {cls.searchInput}
                    />
                    <div style = {{ marginRight: "4%", color: "black" }}>
                        <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}
                        className = {props.user.status === 'online' ? cls.online: cls.offline}>
                            {props.user.status === 'online' ? <span>ONLINE</span>:<span>OFFLINE</span>}
                        </Button>
                        <Menu
                            id="simple-menu"
                            anchorEl={anchorEl}
                            keepMounted
                            open={Boolean(anchorEl)}
                            onClose={() => handleClose(0)}>
                                
                                <MenuItem onClick={() => handleClose(1)} className = {cls.menuItem} style = {{ backgroundColor: "#109CF1"}}> ONLINE </MenuItem>
                                <MenuItem onClick={() => handleClose(-1)} className = {cls.menuItem} style = {{ backgroundColor: "#F7685B"}}> OFFLINE </MenuItem>
                        </Menu>
                    </div>
                 </>
                }
                
                {!location.pathname.includes('/chat/') && location.pathname !== '/' && <div className = {cls.searchInput}> </div>}


                 
                <Badge color = "secondary" variant = "dot">
                    <NotificationsNoneIcon style = {{color: "#C2CFE0"}} />
                </Badge>
            </Toolbar>
        </AppBar>
    )
}


export default Header;