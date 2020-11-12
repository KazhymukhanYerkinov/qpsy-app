import { FormControl, FormHelperText, IconButton, Input, InputAdornment, InputLabel, makeStyles, TextField } from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';   
import React, { useState } from 'react';





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




export const FormControlCheckBox = ({ input}) => {
    return (
        <Checkbox
            style = {{color: "#098EDF"}}
            {...input}
      />
    )
}



export const FormControlPassword = ({ label, input, meta: { touched,invalid, error } }) => {
    

    const [values, setValues] = React.useState({ showPassword: false });

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <FormControl fullWidth error = {touched && error}>
            <InputLabel> {label} </InputLabel>
            <Input
                fullWidth
                error = {touched && invalid}
                helperText = {touched && error}
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
