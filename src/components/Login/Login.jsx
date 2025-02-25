import React from "react";
import {Field, Form, Formik} from "formik";
import {connect} from "react-redux";
import {FormControl} from "../common/FormsControls/FormsControls";
import * as Yup from "yup";
import {login} from "../../redux/auth-reducer";
import {Navigate} from "react-router-dom";

const SignupSchema = Yup.object().shape({
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
            <LoginForm {...props} />
        </div>
    );
}

const LoginForm = (props) => {
    return (
        <Formik
            validationSchema={SignupSchema}
            initialValues={{email: "", password: "", rememberMe: false}}
            onSubmit={(formData, {resetForm}) => {
                props.login(formData.email, formData.password, formData.rememberMe);
                resetForm();
            }}
        >
            {({handleSubmit}) => (
                <Form onSubmit={handleSubmit}>
                    <div>
                        <Field name="email" placeholder="Email" component={FormControl}
                               componentProps={{type: "text"}}/>
                    </div>
                    <div>
                        <Field name="password" type="password" placeholder="Password" component={FormControl}
                               componentProps={{type: "password"}}/>
                    </div>
                    <div>
                        <Field name="rememberMe" type="checkbox" component={FormControl}
                               componentProps={{type: "checkbox"}}/> Remember me
                    </div>
                    <div>
                        <button type="submit">Login</button>
                    </div>
                </Form>
            )}
        </Formik>
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, {login})(Login);
