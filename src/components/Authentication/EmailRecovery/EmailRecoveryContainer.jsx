import React from 'react';
import { connect } from 'react-redux';
import { resetPasswordThunk } from '../../../redux/auth-reducer';
import EmailRecovery from './EmailRecovery';


const EmailRecoveryContainer = (props) => {
    return <EmailRecovery resetPasswordThunk = { props.resetPasswordThunk }/>
}

let mapStateToProps = (state) => ({

})


export default connect(mapStateToProps, { resetPasswordThunk })(EmailRecoveryContainer);