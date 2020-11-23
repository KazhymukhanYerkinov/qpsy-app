import React from 'react';
import { Route, Switch } from 'react-router-dom';

import AppRoute from './AppRoute';
import SuccessRecovery from './components/Authentication/SuccessRecovery/SuccessRecovery';
import LoginContainer from './components/Authentication/Login/LoginContainer';
import Layout from './hoc/Layout';
import { connect } from 'react-redux';
import { initSuccessThunk } from './redux/app-reducer';
import EmailRecoveryContainer from './components/Authentication/EmailRecovery/EmailRecoveryContainer';
import PasswordRecoveryContainer from './components/Authentication/PasswordRecovery/PasswordRecoveryContainer';
import loader from './assets/images/loading.svg';

import './App.css';



class Root extends React.Component {
    componentDidMount() {
        this.props.initSuccessThunk();
    }

    render() {
        if (!this.props.initialized) {
            return <div style = {{ height: "100vh"}} className = "d-flex justify-content-center align-items-center"> 
                        <div>
                            <img src = { loader }/> 
                        </div>
                    </div>
        }
        return (
            <Layout>
                <Switch>
                    
                    <Route exact path = '/login'
                        render = { () =>  <LoginContainer /> }/>

                    <Route exact path = '/email_recovery'
                        render = { () =>  <EmailRecoveryContainer /> }/>
                        
                    <Route exact path = '/password/reset/confirm/:uid/:token'
                        render = { () => <PasswordRecoveryContainer /> } />

                    <Route exact path = '/success'
                        render = { () => <SuccessRecovery /> } />
                    

                    <AppRoute />


                </Switch>  

            </Layout>
        )
    }
}


let mapStateToProps = (state) => ({ 
    initialized: state.appPage.initialized,
    
})
export default connect(mapStateToProps, { initSuccessThunk })(Root);