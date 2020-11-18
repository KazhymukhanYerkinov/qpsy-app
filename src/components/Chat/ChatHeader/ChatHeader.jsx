import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { connect } from 'react-redux';


const useStyles = makeStyles(theme => ({

    headerChat: {
        padding: "2%",
        backgroundColor: "#FFFFFF",
        fontFamily: "Poppins",
        fontSize: "100%",
        color: "#323C47",
        [theme.breakpoints.down("sm")]: {
            padding: "4%"
        }
    },

}))
const ChatHeader = (props) => {

    const cls = useStyles();

    return (
        <div className={cls.headerChat}>
            {props.clientName}
        </div>
    )
}

let mapStateToProps = (state) => ({
    clientName: state.usersPage.clientName,
})

export default connect(mapStateToProps)(ChatHeader);