import React from "react";
import {Field, reduxForm} from "redux-form";

export const Login = (props) => {

    const onSubmit = (formData) => {
        console.log(formData)
        // Тут у нас все данные мы их можем dispatch в thunk
    }

    return <div>
        <h1>Login</h1>
        <FormReduxLogin onSubmit={onSubmit}/>
    </div>
}
export const LoginForm = (props) => {
    const { handleSubmit } = props

    return <form onSubmit={handleSubmit}>
        <div>
            <Field placeholder="Login" name={"login"} component={"input"}/>
        </div>
        <div>
            <Field placeholder="Password" name={"password"} component={"input"}/>
        </div>
        <div>
            <Field component={"input"} name={"rememberMe"} type={"checkbox"}/> remember me
        </div>
        <div>
            <button>Login</button>
        </div>
    </form>
}

const FormReduxLogin = reduxForm({form: 'login'})(LoginForm)