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
    const fetchUsers = () => {
        if (props.users.length >= 200) {
            setHasMore(false)
            return;
        }
        setTimeout( () => {
            props.setUsersList(users);
        }, 1500)
    };
    
    return (
        <main className = {cls.main}>
            <div className = {cls.toolBar}/>

            <div id="scrollableDiv" style={{ height: "75vh", overflow: "auto" }}>
                <InfiniteScroll
                    dataLength = {props.users.length}
                    next = { fetchUsers }
                    hasMore = { hasMore }
                    loader = {<h4> Loading... </h4>}
                    scrollableTarget="scrollableDiv"
                    endMessage = {<p> that's all </p>}>
                    
                    {props.users.map((user, index) => (
                        <UserItem id = { user.id }/>
                    ))}

                </InfiniteScroll>
            </div>
        </main>
    )
}

const users = [ {id: 1},{id: 2},{id: 3},{id: 4},{id: 5},{id: 6},{id: 7},{id: 8},{id: 9},{id: 10},{id: 11},{id: 12},{id: 1},{id: 1},]

export default Users;