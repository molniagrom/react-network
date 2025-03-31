import React from "react";
import {connect} from "react-redux";
import * as Yup from "yup";
import {login} from "../../redux/auth-reducer";
import {Navigate} from "react-router-dom";
import s from "./../common/FormsControls/FormsControls.module.css"
import {LoginForm} from "./LoginForm";

export const SignupSchema = Yup.object().shape({
    email: Yup.string()
        .min(10, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    password: Yup.string()
        .min(4, 'Too Short!')
        .max(20, 'Too Long!')
        .required('Required'),
    rememberMe: Yup.boolean(),
});

function Login(props) {

    if (props.isAuth) {
        return <Navigate replace to="/profile"/>;
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginForm {...props} captchaUrl={props.captchaUrl} />
        </div>
    );
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    errorAuth: state.auth.errorAuth,
    captchaUrl: state.auth.captchaUrl
});

export default connect(mapStateToProps, {login})(Login);
