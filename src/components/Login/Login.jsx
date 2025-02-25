import React from "react";
import {Formik, Form, Field} from "formik";
import {connect} from "react-redux";
import {authorizeThunk} from "./login-reducer";
import {FormControl, Input} from "../common/FormsControls/FormsControls";
import * as Yup from "yup";

const SignupSchema  = Yup.object().shape({
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
                <Formik
                    validationSchema={SignupSchema}
                    initialValues={{email: "", password: "", rememberMe: false}}
                    onSubmit={(formData, {resetForm}) => {
                        this.props.authorizeThunk(formData);
                        resetForm();
                    }}
                >
                    {({handleSubmit}) => (
                        <Form onSubmit={handleSubmit}>
                            <div>
                                <Field name="email" placeholder="Email" component={FormControl}/>
                            </div>
                            <div>
                                <Field name="password" type="password" placeholder="Password" component={FormControl}/>
                            </div>
                            <div>
                                <Field name="rememberMe" type="checkbox" component={FormControl}/> remember me
                            </div>
                            <div>
                                <button type="submit">Login</button>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, {authorizeThunk})(Login);
