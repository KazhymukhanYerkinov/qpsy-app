import React from 'react';
import { connect } from 'react-redux';
import { loginThunk } from '../../../redux/auth-reducer';
import Login from './Login';


const LoginContainer = (props) => {
    return <Login loginThunk = { props.loginThunk } isAuth = { props.isAuth }/>
}

let mapStaeToProps = (state) => ({
    isAuth: state.authPage.isAuth,
})
export default connect(mapStaeToProps, { loginThunk })(LoginContainer);