import React from 'react';
import { useForm } from 'react-hook-form';
import s from './MyPosts.module.css';
import { Post } from './Post/Post';

export const MyPosts = (props) => {
    const { register, handleSubmit, reset } = useForm();

    const onAddPost = (data) => {
        props.addPost(data.newPostText);
        reset();
    };

    let postsElements = props.posts.map((p, i) => (
        <Post key={i} quantityLike={p.quantityLike} message={p.message} />
    ));

    return (
        <div className={s.postsBlock}>
            <div>
                <h3>My post</h3>
            </div>
            <form onSubmit={handleSubmit(onAddPost)}>
                <div>
                    <textarea
                        {...register("newPostText")}
                        value={props.newPostText}
                        onChange={(e) => props.upDatePostText(e.target.value)}
                    />
                </div>
                <div>
                    <button type="submit">Add post</button>
                </div>
            </form>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
};