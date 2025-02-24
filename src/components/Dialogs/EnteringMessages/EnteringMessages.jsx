import React from "react";
import { Formik, Form, Field } from "formik";
import {TextArea} from "../../common/FormsControls/FormsControls";
import * as Yup from "yup";

export const EnteringMessages = ({ addMessage, newMessageText }) => {
    return (
        <TextareaForm
            addMessage={addMessage}
            newMessageText={newMessageText}
        />
    );
};

const SignupSchema  = Yup.object().shape({
    message: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
});

const TextareaForm = ({ addMessage, newMessageText }) => {

    return (
        <Formik
            validationSchema={SignupSchema}
            enableReinitialize={true} // Синхронизация с внешним состоянием Redux
            initialValues={{ message: newMessageText }}
            onSubmit={(values, { resetForm }) => {
                addMessage(values.message); // Отправка сообщения
                resetForm(); // Очистка формы после отправки
            }}
        >
            {({ values, handleChange }) => (
                <Form>
                    <Field
                        name="message"
                        as="textarea"
                        value={values.message}
                        onChange={handleChange}
                        component={TextArea}
                        placeholder="Enter your message"
                    />
                    <button type="submit">Add message</button>
                </Form>
            )}
        </Formik>
    );
};

