import React from 'react';
import { connect } from 'react-redux';
import { getChatsThunk } from '../../redux/users-reducer';
import Users from './Users';


class UsersContainer extends React.Component {

    intervalID = 1975;

    fetchChats(){
        this.intervalID = setInterval( () => {
            console.log("fetching chats")
            this.props.getChatsThunk();
        }, 3000)
    }


    componentDidMount() {
        this.props.getChatsThunk();
        this.fetchChats();
    }

    componentWillUnmount() {
        clearInterval(this.intervalID)
    }

    render(){
        return <Users users = { this.props.users } />
    }
}

let mapStateTopProps = (state) => ({
    users: state.usersPage.users,

})



export default connect(mapStateTopProps, { getChatsThunk })(UsersContainer);