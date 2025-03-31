import {Field, Form, Formik} from "formik";
import {FormControl} from "../common/FormsControls/FormsControls";
import s from "../common/FormsControls/FormsControls.module.css";
import React from "react";
import {SignupSchema} from "./Login";

export const LoginForm = (props) => {
    return (
        <>
            <Formik
                validationSchema={SignupSchema}
                initialValues={{email: "", password: "", rememberMe: false}}
                onSubmit={(formData, {setSubmitting}) => {
                    props.login(formData.email, formData.password, formData.rememberMe, formData.captcha);
                    setSubmitting(false); // Убираем статус загрузки
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

                        {props.captchaUrl && <img src={props.captchaUrl} alt="Remember me" />}
                        {props.captchaUrl && <Field name="captcha" placeholder="Enter what you see" component={FormControl}
                                                      componentProps={{type: "text"}}/>}

                        {props.errorAuth && <div className={s.formSummaryError}>{props.errorAuth}</div>}
                        <div>
                            <button type="submit">Login</button>
                        </div>
                    </Form>
                )}
            </Formik>
        </>
    );
};
