import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import { Fab, Grid, Input, InputAdornment, OutlinedInput, TextField, Typography } from '@material-ui/core';
import SendSharpIcon from '@material-ui/icons/SendSharp';
import SentimentSatisfiedSharpIcon from '@material-ui/icons/SentimentSatisfiedSharp';
import AttachFileSharpIcon from '@material-ui/icons/AttachFileSharp';



const useStyles = makeStyles(theme => ({
    main: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3) * 3,
        [theme.breakpoints.down("sm")]: {
            padding: theme.spacing(1) * 3,
        }
    },

    toolBar: theme.mixins.toolbar,
    conversation: {
        boxSizing: "border-box",
        width: "100%",
        marginBottom: theme.spacing(1) * 2,
        [theme.breakpoints.down("sm")]: {
            padding: `0 ${theme.spacing(1) * 1}px`
        },
        [theme.breakpoints.up("sm")]: {
            padding: `0 ${theme.spacing(1) * 3}px`
        },
        display: "flex"
    },
    conversationSent: {
        justifyContent: "flex-end"
    },
    body: {
        position: "relative",
        padding: ".625rem 1rem",
        backgroundColor: "#1F7BB3",
        borderRadius: "3px",
        boxShadow: theme.shadows[1],
    },
    bodyReceived: {
        "&::after": {
            position: "absolute",
            top: 0,
            width: 0,
            height: 0,
            content: '""',
            border: `5px solid #1F7BB3`,
            borderBottomColor: "transparent",
            left: "-7px",
            borderLeftColor: "transparent"
        }
    },
    bodySent: {
        position: "relative",
        backgroundColor: "#109CF1",
        float: "right",
        order: 1,
        "&::after": {
            position: "absolute",
            bottom: 0,
            width: 0,
            height: 0,
            content: '""',
            border: `5px solid #109CF1`,
            borderTopColor: "transparent",
            borderRightColor: "transparent",
            right: "-7px"
        }
    },
    content: {
        backgroundColor: "#FFFFFF",
        border: "1px solid white",
        marginTop: "0.3%",
        padding: "2%",
        height: "calc(100% - 30%)",
        boxSizing: "border-box",
        flex: 1,
        position: "relative",
        overflowX: "hidden",
        overflowY: "auto"
    },
    messageChat: {
        color: "white",
        fontFamily: "Poppins",
        fontSize: "100%"
    },
    headerChat: {
        padding: "2%",
        backgroundColor: "#FFFFFF",
        fontFamily: "Poppins",
        fontSize: "100%",
        color: "#323C47",
        [theme.breakpoints.down("sm")]: {
            padding: "4%"
        }
    },
    date: {
        display: "block",
        fontSize: "10px",
        paddingTop: "2px",
        fontFamily: "Poppins",
        fontWeight: "600",
        color: theme.palette.primary.contrastText
    },
    dateSent: {
        textAlign: "right"
    },
    input: {
        flex: "1 1 0%",     
        padding: "1%",
        backgroundColor: "white",
        [theme.breakpoints.down("sm")]: {
            padding: "2%"
        }
        
    },

}))

const Chat = () => {
    const cls = useStyles();
    return (
        <main className={cls.main}>
                <div className={cls.toolBar} />

                <div className={cls.headerChat}>
                    Yerkinov Kazhymukhan
                </div>
                <div className={cls.content}>
                    {chats.map((chat, index) => (
                        <div
                            key={index}
                            className={classNames(cls.conversation, chat.type === "sent" ? cls.conversationSent : cls.conversationReceived)}>
                            <div className={classNames(cls.body, chat.type === "sent" ? cls.bodySent : cls.bodyReceived)}>
                                <Typography className={cls.messageChat}> {chat.message} </Typography>
                                <Typography variant="caption" className={classNames(cls.date, chat.type === "sent" ? cls.dateSent : cls.dateReceived)}>
                                    12:30
                            </Typography>
                            </div>
                        </div>
                    ))}
                </div>
                <div className = "mt-2">
                    <Grid
                        container
                        spacing={0}
                        justify={"center"}
                        alignItems={"center"}>

                        <Input
                            placeholder = "Write a message"
                            type="text"
                            margin="normal"
                            
                            className={cls.input}
                            startAdornment = {
                                <InputAdornment position = "start">
                                    <SentimentSatisfiedSharpIcon style = {{color: "#90A0B7", cursor: "pointer"}}/>
                                </InputAdornment>
                            }
                            endAdornment = {
                                <InputAdornment position = "end">
                                    <AttachFileSharpIcon style = {{color: "#90A0B7", cursor: "pointer"}}/>
                                </InputAdornment>
                            }
                        />
                        <Fab
                            color = "primary"
                            size = "medium"
                            style = {{marginLeft: "1%"}}
                            aria-label="send">
                            <SendSharpIcon />
                        </Fab>
                    </Grid>
                </div>

        </main>
    )
}

const chats = [
    {
        message: 'Hey.',
        type: 'received',
    },
    {
        message: 'How are the wife and kids Taylor?',
        type: 'received',
    },
    {
        message: 'Pretty good Samuel.',
        type: 'sent',

    },
    {
        message: 'Cras mattis consectetur purus sit amet fermentum.',
        type: 'received',

    },
    {
        message: 'Goodnight.',
        type: 'sent',

    },
    {
        message: 'Hey.',
        type: 'received',
    },
    {
        message: 'How are the wife and kids Taylor?',
        type: 'received',
    },
    {
        message: 'Pretty good Samuel.',
        type: 'sent',

    },
    {
        message: 'Cras mattis consectetur purus sit amet fermentum.',
        type: 'received',

    },
    {
        message: 'Goodnight.',
        type: 'sent',

    },
    {
        message:
            'Aenean lacinia bibendum nulla sed consectetur. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.',
        type: 'received',
    }
];

export default Chat;