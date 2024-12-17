import React from "react";
import {Profile} from "./Profile";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPosts} from "./MyPosts/MyPosts";

export default {
    title: "Profile",
    component: Profile,
}

const Template = (args) => <Profile {...args} />;

const mockPosts = [
    {id: 1, message: 'Hi, how are you?', quantityLike: 19},
    {id: 2, message: 'It\'s my post!', quantityLike: 5},
    {id: 3, message: 'I\'ll do it myself', quantityLike: 20},
    {id: 3, message: 'I want pizza', quantityLike: 212},
    {id: 3, message: 'So order it', quantityLike: 3},
    {id: 3, message: 'I\'m lazy', quantityLike: 2},
]

export const MainProfile = () => {
    return (
        <>
            <ProfileInfo />
            <MyPosts posts={mockPosts} />
        </>
    )
};
