import React from 'react';
import { Fab, Grid, Input, InputAdornment, makeStyles } from '@material-ui/core';
import SendSharpIcon from '@material-ui/icons/SendSharp';
import { useState } from 'react';

import SentimentSatisfiedSharpIcon from '@material-ui/icons/SentimentSatisfiedSharp';
import AttachFileSharpIcon from '@material-ui/icons/AttachFileSharp';


const useStyles = makeStyles(theme => ({
    input: {
        flex: "1 1 0%",
        padding: "1%",
        backgroundColor: "white",
        [theme.breakpoints.down("sm")]: {
            padding: "2%"
        }
    },
}))

const SendMessageForm = (props) => {

    const [value, setValue] = useState("");
    const cls = useStyles();

    const onSubmit = () => {
        props.sendMessageThunk(props.chatID, value)
        setValue("");
    }

    return (
        <>
            <Input
                placeholder={"Write a message"}
                value={ value }
                onChange={(e) => setValue(e.target.value)}
                type="text"
                margin="normal"
                onKeyPress = {(e) => {
                    if (e.key === 'Enter') {
                        e.preventDefault();
                        onSubmit();
                    }
                }}
                className={cls.input}
                startAdornment={
                    <InputAdornment position="start">
                        <SentimentSatisfiedSharpIcon style={{ color: "#90A0B7", cursor: "pointer" }} />
                    </InputAdornment>
                }
                endAdornment={
                    <InputAdornment position="end">
                        <AttachFileSharpIcon style={{ color: "#90A0B7", cursor: "pointer" }} />
                    </InputAdornment>
                }
            />

            <Fab
                color="primary"
                size="medium"
                onClick = { onSubmit }
                style={{ marginLeft: "1%" }}
                aria-label="send">
                <SendSharpIcon />
            </Fab>
        </>
    )
}

const SendMessage = (props) => {

    return (
        <div className="mt-2">
            <Grid
                container
                spacing={0}
                justify={"center"}
                alignItems={"center"}>

                <SendMessageForm sendMessageThunk = { props.sendMessageThunk } chatID = { props.chatID }/>

            </Grid>


        </div>
    )
}

export default SendMessage;