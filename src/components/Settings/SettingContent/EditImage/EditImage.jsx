import { Avatar, Badge, Fab, makeStyles } from '@material-ui/core';
import React from 'react';
import EditIcon from '@material-ui/icons/Edit';



const useStyles = makeStyles((theme) => ({
    large: {
        width: theme.spacing(18),
        height: theme.spacing(18),
    },
    fab: {
        color: "#334D6E",
        background: "#FFFFFF"
    },
    

}))

const EditImage = () => {

    const classes = useStyles();

    return (
        <div>
            <Badge
                overlap="circle"
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                badgeContent={<Fab className={classes.fab} aria-label="edit"> <EditIcon /> </Fab>}>
                <Avatar alt="Travis Howard" className={classes.large} />
            </Badge>
        </div>
    )
}

export default EditImage;