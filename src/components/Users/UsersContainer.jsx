import React from 'react';
import { connect } from 'react-redux';
import { setUsersList } from '../../redux/users-reducer';
import Users from './Users';


const UsersContainer = (props) => {
    return <Users setUsersList = { props.setUsersList } users = { props.users }/>
}

let mapStateTopProps = (state) => ({
    users: state.usersPage.users,

})



export default connect(mapStateTopProps, { setUsersList })(UsersContainer);