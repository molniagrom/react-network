import React from "react";
import { Formik, Form, Field } from "formik";
import { connect } from "react-redux";
import { authorizeThunk } from "./login-reducer";

class Login extends React.Component {
    render() {
        return (
            <div>
                <h1>Login</h1>
                <Formik
                    initialValues={{ email: "", password: "", rememberMe: false }}
                    onSubmit={(formData, { resetForm }) => {
                        this.props.authorizeThunk(formData);
                        resetForm();
                    }}
                >
                    {({ handleSubmit }) => (
                        <Form onSubmit={handleSubmit}>
                            <div>
                                <Field name="email" placeholder="Email" />
                            </div>
                            <div>
                                <Field name="password" type="password" placeholder="Password" />
                            </div>
                            <div>
                                <Field name="rememberMe" type="checkbox" /> remember me
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

export default connect(mapStateToProps, { authorizeThunk })(Login);
