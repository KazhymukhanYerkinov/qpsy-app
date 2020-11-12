import React from 'react';
import { Route } from 'react-router-dom';
import { makeStyles } from "@material-ui/core/styles";
import SidebarContainer from './components/Sidebar/SidebarContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import NotFound from './components/404/NotFound';
import Chat from './components/Chat/Chat';
import { compose } from 'redux';
import { WithAuthRedirect } from './hoc/WithAuthRedirect';
import { connect } from 'react-redux';




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

const App = () => {
  const cls = useStyles();
  return (
    
      <div className = {cls.root}>
          <HeaderContainer />
          <SidebarContainer />
          
          <Route exact path = '/chat'
                render = { () => <Chat /> } />
          
      </div>
  )
}


export default compose( WithAuthRedirect, connect(null, {}))(App);
