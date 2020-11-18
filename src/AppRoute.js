import React from 'react';
import { Route } from 'react-router-dom';
import { makeStyles } from "@material-ui/core/styles";
import SidebarContainer from './components/Sidebar/SidebarContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import { compose } from 'redux';
import { WithAuthRedirect } from './hoc/WithAuthRedirect';
import { connect } from 'react-redux';
import UsersContainer from './components/Users/UsersContainer';
import Settings from './components/Settings/Settings';
import Tape from './components/Tape/Tape';
import ChatContainer from './components/Chat/ChatContainer';




const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    height: "100vh",
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    backgroundColor: "#E5E5E5",
  }, 
  
}))

const App = (props) => {
  const cls = useStyles();

  if (!props.user) {
    return <div></div>
  } 
  return (
    
      <div className = {cls.root}>
          <HeaderContainer />
          <SidebarContainer />
          <Route exact path = '/' render = { () => <UsersContainer /> } />
          <Route exact path = '/chat/:id/' render = { () => <ChatContainer /> } />
          <Route exact path = '/settings' render = { () => <Settings /> } />
          <Route exact path = '/tape' render = { () => <Tape /> } />
          
          
          
      </div>
  )
}

let mapStateToProps = (state) => ({
  user: state.authPage.user
})



export default compose( WithAuthRedirect, connect(mapStateToProps, {}))(App);
