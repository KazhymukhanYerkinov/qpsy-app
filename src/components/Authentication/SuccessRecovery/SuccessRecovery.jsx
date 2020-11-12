import React from 'react';
import successLogo from '../../../assets/images/successLogo.svg';
import { makeStyles } from "@material-ui/core/styles";
import { Button } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import classNames from "classnames";

export const useStyles = makeStyles(theme => ({
    titleSuc: {
        fontFamily: "Poppins",
        color: "#4C5862",
        fontSize: "20px",
    },
    buttonSuc: {
        fontSize: "14px",
        color: "#FFFFFF",
        height: "32px",
        width: "120px",
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
}));

const SuccessRecovery = () => {
    const cls = useStyles();

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

                                <div className="mb-2">
                                    <img src={successLogo} />
                                </div>

                                <div className="mb-3">
                                    <span className={cls.titleSuc}> Поздравляем, Ваш пароль был успешно изменен! </span>
                                </div>

                                <NavLink to={'/login'} style={{ textDecoration: "none" }}>
                                    <Button variant="contained" style={{ backgroundColor: "#098EDF" }} className={cls.buttonSuc}> Войти </Button>
                                </NavLink>

                            </div>
                            
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default SuccessRecovery;

