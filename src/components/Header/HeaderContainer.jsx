import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { setToggleSidebar } from '../../redux/app-reducer';
import Header from './Header';



const HeaderContainer = (props) => {
    return <Header setToggleSidebar = { props.setToggleSidebar } />
}


let mapStateToProps = (state) => ({
    
})

export default connect(mapStateToProps, { setToggleSidebar })(HeaderContainer);