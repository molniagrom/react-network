import React from "react";
import { Formik, Form, Field } from "formik";

export const Login = () => {
    return (
        <div>
            <h1>Login</h1>
            {/* 1️⃣ Инициализация Formik */}
            <Formik
                initialValues={{ login: "", password: "", rememberMe: false }}
                onSubmit={(formData) => {
                    console.log(formData);
                }}
            >
                {({ handleSubmit }) => (
                    // 2️⃣ Форма с обработчиком handleSubmit
                    <Form onSubmit={handleSubmit}>
                        <div>
                            {/* 3️⃣ Поле ввода login */}
                            <Field name="login" placeholder="Login" />
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
};
