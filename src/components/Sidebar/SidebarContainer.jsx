import React from 'react';
import { connect } from 'react-redux';
import { setToggleSidebar } from '../../redux/app-reducer';
import Sidebar from './Sidebar';


const SidebarContainer = (props) => {
    return <Sidebar openSidebar = { props.openSidebar } setToggleSidebar = { props.setToggleSidebar } />
}

let mapStateToProps = (state) => ({
    openSidebar: state.appPage.openSidebar
})
export default connect(mapStateToProps, { setToggleSidebar })(SidebarContainer)