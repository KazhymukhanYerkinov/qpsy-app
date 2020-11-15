import { Drawer, Hidden } from '@material-ui/core';
import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import SidebarItem from './SidebarItem/SidebarItem';
const styles = theme => ({
    drawerPaper: {
        width: 270,
        height: "100vh",
        [theme.breakpoints.up('md')]: {
          position: 'relative',
        },
    },
})
const Sidebar = (props) => {

    const { classes, theme } = props;
    

    return (
        <>
            <Hidden mdUp>
                <Drawer
                    variant="temporary"
                    anchor={'left'}
                    open = {props.openSidebar}
                    onClose={ props.setToggleSidebar }
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                    ModalProps={{
                        keepMounted: true
                    }}
                >
                    <SidebarItem logoutThunk = { props.logoutThunk } user = { props.user } isAdmin = { props.isAdmin }
                                 isSuperPsy = { props.isSuperPsy }  isPsy = { props.isPsy } />
                    
                </Drawer>
            </Hidden>
            <Hidden smDown implementation="css">
                <Drawer
                    variant="permanent"
                    open
                    classes={{
                        paper: classes.drawerPaper,
                    }}>
                    <SidebarItem logoutThunk = { props.logoutThunk } user = { props.user } isAdmin = { props.isAdmin } 
                                 isSuperPsy = { props.isSuperPsy } isPsy = { props.isPsy }/>
                </Drawer>
            </Hidden>
        </>
    )
}

export default withStyles(styles, { withTheme: true })(Sidebar);