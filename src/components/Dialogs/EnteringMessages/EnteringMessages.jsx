import React from "react";
import { Formik, Form, Field } from "formik";

export const EnteringMessages = ({ addMessage, newMessageText }) => {
    return (
        <TextareaForm
            addMessage={addMessage}
            newMessageText={newMessageText}
        />
    );
};

const TextareaForm = ({ addMessage, newMessageText }) => {

    return (
        <Formik
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
                        onChange={(e) => {
                            handleChange(e); // Обновляем внутреннее состояние Formik
                        }}
                        placeholder="Enter your message"
                    />
                    <button type="submit">Add message</button>
                </Form>
            )}
        </Formik>
    );
};

