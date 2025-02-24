import React from 'react';
import s from './MyPosts.module.css';
import { Post } from './Post/Post';
import {Field, Form, Formik} from "formik";
import {validateField} from "../../../utils/validators/validators";
import {TextArea} from "../../common/FormsControls/FormsControls";
import * as Yup from 'yup';

export const MyPosts = (props) => {

    let postsElements = props.posts.map((p, i) => (
        <Post key={i} quantityLike={p.quantityLike} message={p.message} />
    ));

    return (
        <div className={s.postsBlock}>
            <div>
                <h3>My post</h3>
            </div>
           <MyPostForm addPost={props.addPost} newPostText={props.newPostText} />
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
};

const SignupSchema  = Yup.object().shape({
    newPostText: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
});

const MyPostForm = (props) => {

    const onAddPost = (values, { resetForm }) => {
        props.addPost(values.newPostText);
        resetForm();
    };

    return (
        <Formik
            initialValues={{ newPostText: "" }}
            validationSchema={SignupSchema}
            onSubmit={onAddPost}
        >
            {({ handleChange, values, errors, touched }) => (
                <Form>
                    <div>
                        <Field
                            name="newPostText"
                            component={TextArea}
                            value={values.newPostText}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <button type="submit">Add post</button>
                    </div>
                </Form>
            )}
        </Formik>
    );
};


//
// <Field
//     name="newPostText"
//     as={TextArea}
//     value={values.newPostText}
//     onChange={(e) => {
//         handleChange(e);
//     }}
// />