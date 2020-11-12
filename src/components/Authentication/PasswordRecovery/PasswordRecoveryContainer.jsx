import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { resetConfirmThunk } from '../../../redux/auth-reducer';
import PasswordRecovery from './PasswordRecovery';


const PasswordRecoveryContainer = (props) => {
    let uid = props.match.params.uid;
    let token = props.match.params.token;
    console.log(props.confirmSuccess)
    return <PasswordRecovery uid = { uid } token = { token } resetConfirmThunk = { props.resetConfirmThunk }
                             confirmSuccess = { props.confirmSuccess }/>
    
}

let mapStateToProps = (state) => ({
    confirmSuccess: state.authPage.confirmSuccess,
})
export default compose(withRouter, connect(mapStateToProps, { resetConfirmThunk }))(PasswordRecoveryContainer)