import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { makeStyles } from "@material-ui/core/styles";
import { FormControlPassword } from '../../commons/FormControl/FormControl';
import { LengthCreator, passwordRequired, textRequired } from '../../../validators/validator';
import { Button } from '@material-ui/core';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import classNames from "classnames";
import { Redirect } from 'react-router-dom';


export const useStyles = makeStyles(theme => ({
    titlePas: {
        fontFamily: "Poppins",
        color: "#4C5862",
        fontSize: "14px",
    },
    buttonPass: {
        fontSize: "14px",
        color: "#FFFFFF",
        height: "32px",
        fontFamily: "Poppins",
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
        fontSize: "14px",
        color: "red",
        marginBottom: "5%",
    }
}));

const Length_5_50 = LengthCreator(5, 50);



const PasswordRecoveryForm = (props) => {
    const cls = useStyles();


    return (
        <form onSubmit={props.handleSubmit}>

            {props.error && <div className = {cls.errorText}>
                {props.error}
            </div>}

            <div className="d-flex justify-content-start">
                <span className={cls.titlePas}> Восстановление пароля </span>
            </div>

            <div className="my-3">
                <Field name={'new_password'} label={'Создать новый пароль'} component={FormControlPassword} validate={[textRequired, Length_5_50, passwordRequired]} />
            </div>

            <div className="my-4">
                <Field name={'re_new_password'} label={'Повторить пароль'} component={FormControlPassword} validate={[textRequired, Length_5_50, passwordRequired]} />
            </div>

            <div className="d-flex justify-content-end">
                <Button variant="contained" type="submit" style={{ backgroundColor: "#098EDF" }} className={cls.buttonPass}> Восстановить пароль </Button>
            </div>
        </form>
    )
}

const PasswordRecoveryReduxForm = reduxForm({ form: "password_recovery" })(PasswordRecoveryForm)

const PasswordRecovery = (props) => {

    const cls = useStyles();

    
    if (props.confirmSuccess) return <Redirect to = {"/success"}/> 

    console.log(props.confirmSuccess);

    const onSubmit = (formData) => {
        props.resetConfirmThunk(props.uid, props.token, formData.new_password, formData.re_new_password);
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
                            <div>
                                

                                <div>
                                    <PasswordRecoveryReduxForm onSubmit={onSubmit} />
                                </div>
                            </div>

                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}
export default PasswordRecovery;


