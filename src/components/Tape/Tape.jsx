import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import TapeItem from './TapeItem/TapeItem';
import loading2 from '../../assets/images/loading2.svg'




const useStyles = makeStyles(theme => ({
    main: {
        flexGrow: 1,
        backgroundColor: "#E5E5E5",
        paddingLeft: theme.spacing(4) * 3,
        paddingRight: theme.spacing(4) * 3,
        paddingTop: theme.spacing(1) * 3,
        paddingBottom: theme.spacing(0.2) * 3,
        [theme.breakpoints.down("sm")]: {
            padding: theme.spacing(1) * 3,
        }
    },

    toolBar: theme.mixins.toolbar,
    tapeItem: {
        height: "calc(100% - 10%)",
        overflowX: "hidden",
        overflowY: "auto",
        boxSizing: "border-box",
        flex: 1,
        position: "relative",
    }
}));

const Tape = (props) => {
    const cls = useStyles();

    let tapeItems = props.tapes.map((u) => <TapeItem/> )
    
    return (
        <main className = {cls.main}>
            <div className = { cls.toolBar }/>
            {props.fetchTapes ? 
            <div className = "d-flex justify-content-center">
                <div>
                    <img src={loading2} />
                </div>
            </div>:
            <div className = {cls.tapeItem}>
                { tapeItems }
            </div>}
        </main>
    )
}

export default Tape;