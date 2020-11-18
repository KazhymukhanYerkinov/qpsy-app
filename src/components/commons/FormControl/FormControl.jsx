import { FormControl, FormHelperText, IconButton, Input, InputAdornment, InputLabel, makeStyles, TextField } from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import React  from 'react';


import SentimentSatisfiedSharpIcon from '@material-ui/icons/SentimentSatisfiedSharp';
import AttachFileSharpIcon from '@material-ui/icons/AttachFileSharp';



const useStyles = makeStyles(theme => ({
    input: {
        flex: "1 1 0%",
        padding: "1%",
        backgroundColor: "white",
        [theme.breakpoints.down("sm")]: {
            padding: "2%"
        }
    },
}))


export const FormControlText = ({ label, input, meta: { touched, invalid, error } }) => {
    return (
        <TextField
            label={label}
            placeholder={label}
            type={'text'}
            error={touched && invalid}
            helperText={touched && error}
            fullWidth
            {...input}
        />
    )
}




export const FormControlCheckBox = ({ input }) => {
    return (
        <Checkbox
            style={{ color: "#098EDF" }}
            {...input}
        />
    )
}



export const FormControlPassword = ({ label, input, meta: { touched, invalid, error } }) => {


    const [values, setValues] = React.useState({ showPassword: false });

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <FormControl fullWidth error={touched && error}>
            <InputLabel> {label} </InputLabel>
            <Input
                fullWidth
                error={touched && invalid}
                helperText={touched && error}
                type={values.showPassword ? 'text' : 'password'}
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                        >
                            {values.showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                    </InputAdornment>
                }
                {...input}
            />
            {touched && error && <FormHelperText id="component-error-text"> {error} </FormHelperText>}

        </FormControl>

    )
}

export const FormControlSendMessage = ({ label, input }) => {

    const cls = useStyles();

    return (
        <Input
            placeholder={label}
            type="text"
            margin="normal"
            className={cls.input}
            startAdornment={
                <InputAdornment position="start">
                    <SentimentSatisfiedSharpIcon style={{ color: "#90A0B7", cursor: "pointer" }} />
                </InputAdornment>
            }
            endAdornment={
                <InputAdornment position="end">
                    <AttachFileSharpIcon style={{ color: "#90A0B7", cursor: "pointer" }} />
                </InputAdornment>
            }
            {...input}
        />

    )

}
