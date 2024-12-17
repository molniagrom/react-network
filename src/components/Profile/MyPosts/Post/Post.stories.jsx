import React from "react";
import {Post} from "./Post";
import s from "./Post.module.css";

export default {
    title: 'Post',
    component: Post,
};

const Template = (args) => <Post {...args} />;


const mockPost = {
    id: 1,
    message: 'Hi, how are you?',
    quantityLike: 19
};

export const Default = Template.bind({});
Default.args = {
    message: mockPost.message,
    quantityLike: mockPost.quantityLike,
};

export const PostWithManyLikes = Template.bind({});
PostWithManyLikes.args = {
    message: 'This post has many likes!',
    quantityLike: 100,
};

export const PostWithoutLikes = Template.bind({});
PostWithoutLikes.args = {
    message: 'This post has no likes yet.',
    quantityLike: 0,
};
