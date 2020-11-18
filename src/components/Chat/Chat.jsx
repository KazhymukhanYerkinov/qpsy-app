import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { withRouter } from 'react-router-dom';
import SendMessage from './SendMessage/SendMessage';
import MessagesContainer from './Messages/MessagesContainer';
import ChatHeader from './ChatHeader/ChatHeader';



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
     
}))

const Chat = (props) => {
    const cls = useStyles();
    
    return (
        <main className={cls.main}>
                <div className={cls.toolBar} />

               <ChatHeader />
               <MessagesContainer chatID = { props.match.params.id }/>
               <SendMessage chatID = { props.match.params.id } sendMessageThunk = { props.sendMessageThunk }/>
        </main>
    )
}




export default withRouter(Chat);