import React, { useState } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import SettingContent from './SettingContent/SettingContent';





const useStyles = makeStyles(theme => ({
    main: {
        flexGrow: 1,
        backgroundColor: "#E5E5E5",
        paddingLeft: theme.spacing(3) * 3,
        paddingRight: theme.spacing(3) * 3,
        paddingTop: theme.spacing(1.3) * 3,
        paddingBottom: theme.spacing(0.2) * 3,
        [theme.breakpoints.down("sm")]: {
            padding: theme.spacing(1) * 3,
        }
    },
    toolBar: theme.mixins.toolbar,
    head: {
        backgroundColor: "#FFFFFF",
        padding: "1% 2% 1% 2%",
        marginBottom: "5px",
        borderRadius: "5px 5px 0px 0px",
        ["@media (min-width: 320px) and (max-width: 767px)"]: {
            padding: "3% 2% 3% 2%",
        },
    },
    settingTitle: {
        fontFamily: "Poppins",
        fontSize: "15px",
        color: "#334D6E",
       
    },
    content: {
        height: "calc(100% - 10%)",
        overflowX: "hidden",
        overflowY: "auto",
        boxSizing: "border-box",
        flex: 1,
        position: "relative",
        ["@media (min-width: 320px) and (max-width: 767px)"]: {
            padding: "1% 0% 10% 0%",
        },
    }
}));



const Settings = (props) => {
    
    const cls = useStyles();
       

    return (
        <main className = {cls.main}>
            <div className = {cls.toolBar}/>

            <div className={`d-flex justify-content-between align-items-center container ${cls.head}`}>

                <div className={cls.settingTitle}>
                    <span> Настройки </span>
                </div>

                <div className={cls.button}>
                    
                </div>

            </div>

            <div className = {cls.content}>
                <SettingContent updateEmail = {props.updateEmail} user = { props.user }/>
            </div>
        </main>

        
    )
}





export default Settings;