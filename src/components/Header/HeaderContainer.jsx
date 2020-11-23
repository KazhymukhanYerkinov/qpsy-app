import React from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { setToggleSidebar } from '../../redux/app-reducer';
import { updateStatusThunk } from '../../redux/auth-reducer';
import Header from './Header';



const HeaderContainer = (props) => {
    return <Header setToggleSidebar = { props.setToggleSidebar } updateStatusThunk = { props.updateStatusThunk }
                    user = { props.user }/>
}


let mapStateToProps = (state) => ({
    user: state.authPage.user,
})

export default connect(mapStateToProps, { setToggleSidebar, updateStatusThunk })(HeaderContainer);