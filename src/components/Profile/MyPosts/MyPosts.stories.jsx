import React from "react";
import { MyPosts } from "./MyPosts";
import s from "./MyPosts.module.css";

export default {
    title: 'MyPosts',
    component: MyPosts,
};

const Template = (args) => <MyPosts {...args} />;


const mockPosts = [
    {id: 1, message: 'Hi, how are you?', quantityLike: 19},
    {id: 2, message: 'It\'s my post!', quantityLike: 5},
    {id: 3, message: 'I\'ll do it myself', quantityLike: 20},
    {id: 3, message: 'I want pizza', quantityLike: 212},
    {id: 3, message: 'So order it', quantityLike: 3},
    {id: 3, message: 'I\'m lazy', quantityLike: 2},
]

export const Default = Template.bind({});
Default.args = {
    posts: mockPosts,
};
