import React from 'react';
import { connect } from 'react-redux';
import { sendMessageThunk } from '../../redux/users-reducer';
import Chat from './Chat';



const ChatContainer = (props) => {
    return <Chat sendMessageThunk = { props.sendMessageThunk }/>
}


let mapStateToProps = (state) => ({

})

export default connect(mapStateToProps, { sendMessageThunk })(ChatContainer)