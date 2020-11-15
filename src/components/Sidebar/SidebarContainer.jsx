import React from 'react';
import { connect } from 'react-redux';
import { setToggleSidebar } from '../../redux/app-reducer';
import { logoutThunk } from '../../redux/auth-reducer';
import Sidebar from './Sidebar';

const SidebarContainer = (props) => {
    return <Sidebar openSidebar = { props.openSidebar } setToggleSidebar = { props.setToggleSidebar }
                    logoutThunk = { props.logoutThunk } user = { props.user } isAdmin = { props.isAdmin } 
                    isSuperPsy = { props.isSuperPsy } isPsy = { props.isPsy }/>
}

let mapStateToProps = (state) => ({
    openSidebar: state.appPage.openSidebar,
    user: state.authPage.user,

    isAdmin: state.authPage.isAdmin,
    isSuperPsy: state.authPage.isSuperPsy,
    isPsy: state.authPage.isPsy,
})
export default connect(mapStateToProps, { setToggleSidebar, logoutThunk })(SidebarContainer)