import React from "react";
import {Formik, Form, Field} from "formik";
import {connect} from "react-redux";
import {authorizeThunk} from "./login-reducer";
import {FormControl} from "../common/FormsControls/FormsControls";
import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
    email: Yup.string()
        .min(10, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    password: Yup.string()
        .min(8, 'Too Short!')
        .max(20, 'Too Long!')
        .required('Required'),
    rememberMe: Yup.boolean(),
});

class Login extends React.Component {

    render() {
        return (
            <div>
                <h1>Login</h1>
                <LoginForm {...this.props} />
            </div>
        );
    }
}

const LoginForm = (props) => {
    return (
        <Formik
            validationSchema={SignupSchema}
            initialValues={{email: "", password: "", rememberMe: false}}
            onSubmit={(formData, {resetForm}) => {
                props.authorizeThunk(formData);
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

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, {authorizeThunk})(Login);
