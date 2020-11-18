import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({

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
    messageChat: {
        color: "white",
        fontFamily: "Poppins",
        fontSize: "100%"
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
}))

const Messages = (props) => {
    const cls = useStyles();

    const dateFormat = (event) => {
        let date = new Date(Date.parse(event));
        return date.getHours() + ":" + date.getMinutes();
    }
    
    return (
        <div className = {cls.content}>
            {props.messages.map((chat, index) => (
                <div key = { index } className = {classNames(cls.conversation, chat.status === "RECEIVED" ? cls.conversationSent : cls.conversationReceived)}>
                    <div className = {classNames(cls.body, chat.status === "RECEIVED" ? cls.bodySent : cls.bodyReceived)}>
                        <Typography className={cls.messageChat}> {chat.text} </Typography>
                        <Typography variant="caption" className={classNames(cls.date, chat.status === "RECEIVED" ? cls.dateSent : cls.dateReceived)}>
                            {dateFormat(chat.timestamp)}
                        </Typography>
                    </div>
                </div>
            ))}
        </div>
    )
}


export default Messages;