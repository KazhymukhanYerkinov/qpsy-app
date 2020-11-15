import React from 'react';
import { makeStyles } from "@material-ui/core/styles";




const useStyles = makeStyles(theme => ({
    main: {
        flexGrow: 1,
        backgroundColor: "#E5E5E5",
        padding: theme.spacing(3) * 3,
        [theme.breakpoints.down("sm")]: {
            padding: theme.spacing(1) * 3,
        }
    },

    toolBar: theme.mixins.toolbar,
}));

const Settings = () => {

    const cls = useStyles();

    return (
        <main className = {cls.main}>
            <div className = {cls.toolBar}/> 

            <div> Welcome to Settings page </div>
        </main>
    )
}

export default Settings;