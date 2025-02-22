import React from 'react';
import s from './MyPosts.module.css';
import { Post } from './Post/Post';
import {Field, Form, Formik} from "formik";

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

const MyPostForm = (props) => {

    const onAddPost = (values, { resetForm }) => {
        props.addPost(values.newPostText);
        resetForm();
    };

    return (
        <Formik
            initialValues={{newPostText: props.newPostText}}
            onSubmit={onAddPost}>
            {({handleChange}) => (
                <Form>
                    <div>
                        <Field
                            name="newPostText"
                            as="textarea"
                            onChange={(e) => {
                                handleChange(e);
                            }}/>
                    </div>
                    <div>
                        <button type="submit">Add post</button>
                    </div>
                </Form>
            )}
        </Formik>
    )
}