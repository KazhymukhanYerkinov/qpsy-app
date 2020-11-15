import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { makeStyles } from "@material-ui/core/styles";
import { Button } from '@material-ui/core';
import { emailRequired, LengthCreator, textRequired } from '../../../validators/validator';
import { FormControlCheckBox, FormControlPassword, FormControlText } from '../../commons/FormControl/FormControl';
import { NavLink, Redirect } from 'react-router-dom';
import classNames from "classnames";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";






export const useStyles = makeStyles(theme => ({
    rememberMe: {
        fontFamily: "Poppins",
        fontSize: "13px",
        color: "#4C5862"
    },
    forgotPassword: {
        fontFamily: "Poppins",
        fontSize: "13px",
        color: "#109CF1",
        fontWeight: "bold",
    },
    card: {
        overflow: "visible"
    },

    session: {
        position: "relative",
        zIndex: 4000,
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column"
    },
    background: {
        backgroundColor: '#E5E5E5;',
    },

    content: {
        padding: `40px ${theme.spacing(1)}px`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flex: "1 0 auto",
        flexDirection: "column",
        minHeight: "100%",
        textAlign: "center"
    },

    wrapper: {
        flex: "none",
        maxWidth: "420px",
        width: "100%",
        margin: "0 auto"
    },
    logoT1: {
        color: "#109CF1"
    },
    logoT2: {
        fontFamily: "Poppins",
        fontSize: "26px",
        fontWeight: "bold",
        color: "#2d1674"
    },
    errorText: {
        fontFamily: "Poppins",
        color: "red",
        padding: "1% 0 1% 0",
        fontSize: "14px",
        marginBottom: "4%",
    }

}))

const Length_5_50 = LengthCreator(5, 50);

const LoginForm = (props) => {
    const cls = useStyles();
    return (
        <form onSubmit={props.handleSubmit}>
            {props.error && <div className = {cls.errorText}> 
                {props.error}
            </div>}
            <div>
                <Field name={'email'} label={'Электронный адрес'} component={FormControlText} validate={[emailRequired, Length_5_50]} />
            </div>

            <div className="mt-5 mb-4">
                <Field name={'password'} label={'Пароль'} component={FormControlPassword} validate={[textRequired, Length_5_50]} />
            </div>

            <div className="d-flex align-items-center justify-content-between">
                <div>
                    <Field name={'remember_me'} component={FormControlCheckBox} type="checkbox" /> <span className={cls.rememberMe}> Запомнить пароль </span>
                </div>

                <div>
                    <Button variant="contained" type="submit" style={{ backgroundColor: "#098EDF", color: "#FFFFFF", width: "120px", height: "30px" }}> Войти </Button>
                </div>
            </div>

            <div className="d-flex justify-content-start pl-5">
                <NavLink to='/email_recovery' style={{ textDecoration: "none" }}><span className={cls.forgotPassword}> Забыли пароль? </span></NavLink>
            </div>

        </form>
    )
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

const Login = (props) => {

    const cls = useStyles();
    
    const onSubmit = (formData) => {
        let remeber = formData.remember_me ? true : false;
        props.loginThunk(formData.email, formData.password, remeber);
        
    }
    if (props.isAuth) {
        return <Redirect to = '/' />
    }

    return (
        <div className={classNames(cls.session, cls.background)}>
            <div className={cls.content}>
                <div className={cls.wrapper}>
                    <Card>
                        <div className="mt-2">
                            <span className={cls.logoT2}><span className={cls.logoT1}>Q</span>PSY</span>
                            <hr />
                        </div>
                        <CardContent>
                            <LoginReduxForm onSubmit = { onSubmit }/>
                        </CardContent>
                    </Card>

                </div>
            </div>
        </div>
    )
}
export default Login;