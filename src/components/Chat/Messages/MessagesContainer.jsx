import React from 'react';
import { connect } from 'react-redux';
import { getUserMessagesThunk } from '../../../redux/users-reducer';
import Messages from './Messages';



class MessagesContainer extends React.Component {

    intervalID = 24102000;

    fetchMessages() {
        this.intervalID = setInterval( () => {
            console.log("fetching messages")
            this.props.getUserMessagesThunk(this.props.chatID);
        }, 2000)
    }

    componentDidMount() {
        this.props.getUserMessagesThunk(this.props.chatID);
        this.fetchMessages(); 
    }

    componentWillUnmount() {
        clearInterval(this.intervalID);
    }

    render() {
        return <Messages messages = { this.props.messages }/>
    }
}

let mapStateToProps = (state) => ({
    messages: state.usersPage.messages,
});
export default connect(mapStateToProps, {getUserMessagesThunk})(MessagesContainer)