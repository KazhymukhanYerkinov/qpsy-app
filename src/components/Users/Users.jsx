import React, { useState } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import UserItem from './UserItem/UserItem';
import InfiniteScroll from 'react-infinite-scroll-component';


const useStyles = makeStyles(theme => ({
    main: {
        flexGrow: 1,
        backgroundColor: "#E5E5E5",
        padding: theme.spacing(3) * 3,
        [theme.breakpoints.down("sm")]: {
            padding: theme.spacing(1) * 3,
        }
    },

    toolBar: theme.mixins.toolbar,
}));

const Users = (props) => {
    const cls = useStyles();
    const [hasMore, setHasMore] = useState(true);


    // const fetchUsers = () => {
    //     if (props.users.length >= 200) {
    //         setHasMore(false)
    //         return;
    //     }
    //     setTimeout( () => {
    //         props.setUsersList(users);
    //     }, 1500)
    // };
    
    return (
        <main className = {cls.main}>
            <div className = {cls.toolBar}/>

            <div id="scrollableDiv" style={{ height: "75vh", overflow: "auto" }}>
                <InfiniteScroll
                    dataLength = {props.users.length}
                    // next = { fetchUsers }
                    hasMore = { hasMore }
                    loader = {<h4> У вас нет чатов </h4>}
                    scrollableTarget="scrollableDiv"
                    endMessage = {<p> that's all </p>}>
                    
                    {props.users.map((user, index) => (
                        <UserItem id = { user.id } name = { user.name } unread = { user.unread } last_message = { user.last_message }/>
                    ))}

                </InfiniteScroll>
            </div>
        </main>
    )
}


export default Users;