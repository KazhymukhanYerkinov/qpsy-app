import { IconButton, TextField, Button, Snackbar, makeStyles } from '@material-ui/core';
import React, { useState } from 'react';
import MuiAlert from '@material-ui/lab/Alert';
import EditIcon from '@material-ui/icons/Edit';


function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
    root: {
        width: '300px',
        '& > * + *': {
            marginTop: theme.spacing(2),
            
        },
        
    },
}));


const AlertShow = (props) => {
    const classes = useStyles();

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
        props.setOpen(false);
    };

    return (
        <div className={classes.root}>
            <Snackbar open={props.open} autoHideDuration={6000} onClose={handleClose} anchorOrigin = {{vertical: 'bottom', horizontal: 'right'}}>
                <Alert onClose={handleClose} severity="success">
                    Поздравляем, ваш email успешно изменён !
                </Alert>
            </Snackbar>
        </div>
    )

}

const EmailEdit = (props) => {

    const [edit, setEdit] = useState(true);
    const [value, setValue] = useState(props.email);
    const [open, setOpen] = React.useState(false);

    const handleEdit = () => {
        setEdit(false);
    }
    const handleEditTrue = () => {
        setEdit(true);
        props.updateEmail(value)
        setOpen(true);

    }
    return (
        <>
            <TextField
                fullWidth
                label="Изменить почту "
                disabled={edit}
                defaultValue={value}
                onChange={(e) => setValue(e.target.value)}
                onBlur={handleEditTrue}
                InputProps={{ endAdornment: <IconButton onClick={handleEdit}> <EditIcon style={{ color: "#109CF1" }} /> </IconButton> }} />
            {open && <AlertShow open = { open } setOpen = { setOpen }/>}
        </>
    )
}


export default EmailEdit;