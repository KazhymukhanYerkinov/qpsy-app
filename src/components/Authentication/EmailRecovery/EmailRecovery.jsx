import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { makeStyles } from "@material-ui/core/styles";
import { emailRequired, LengthCreator } from '../../../validators/validator';
import { FormControlText } from '../../commons/FormControl/FormControl';
import { Button } from '@material-ui/core';
import classNames from "classnames";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";


export const useStyles = makeStyles(theme => ({
    root: {
        fontFamily: "Poppins",
    },
    titleEmail: {
        color: "#4C5862",
        fontSize: "14px",

    },
    buttonEmail: {
        fontSize: "14px",
        color: "#FFFFFF",
        height: "30px",
        fontFamily: "Poppins",
    }
    , card: {
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

}))
const Length_5_50 = LengthCreator(5, 50);

const EmailRecoveryForm = (props) => {
    const cls = useStyles();

    return (
        <form onSubmit={props.handleSubmit}>
            <div className="my-4">
                <Field name={'email'} label={'Электронный адрес'} component={FormControlText} validate={[emailRequired, Length_5_50]} />
            </div>
            <div className="d-flex justify-content-end">
                <Button variant="contained" type="submit" className={cls.buttonEmail} style={{ backgroundColor: "#098EDF" }}> Отправить </Button>
            </div>
        </form>
    )
}
const EmailRecoveryReduxForm = reduxForm({ form: "email_recovery" })(EmailRecoveryForm)

const EmailRecovery = (props) => {
    
    const cls = useStyles();

    const onSubmit = (formData) => {
        props.resetPasswordThunk( formData.email )
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
                            <div className={cls.root}>
                                <div className="d-flex justify-content-start">
                                    <span className={cls.titleEmail}> Подтвердите свою почту. </span>
                                </div>

                                <div>
                                    <EmailRecoveryReduxForm onSubmit={onSubmit} />
                                </div>

                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default EmailRecovery;


