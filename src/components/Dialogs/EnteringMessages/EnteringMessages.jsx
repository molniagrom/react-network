import React from "react";
import { Formik, Form, Field } from "formik";

export const EnteringMessages = ({ addMessage, upDateNewMessageBody, newMessageText }) => {
    return (
        <TextareaForm
            addMessage={addMessage}
            upDateNewMessageBody={upDateNewMessageBody}
            newMessageText={newMessageText}
        />
    );
};

const TextareaForm = ({ addMessage, upDateNewMessageBody, newMessageText }) => {

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
                            upDateNewMessageBody(e.target.value); // Обновляем Redux
                        }}
                        placeholder="Enter your message"
                    />
                    <button type="submit">Add message</button>
                </Form>
            )}
        </Formik>
    );
};

