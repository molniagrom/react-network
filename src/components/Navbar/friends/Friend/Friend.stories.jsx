// Friends.stories.js
import React from 'react';
import {Friend} from './Friend';

export default {
    title: 'Friend',
    component: Friend,
};

const Template = (args) => <Friend {...args} />;

export const Default = Template.bind({});
Default.args = {
    avatar: "https://habrastorage.org/getpro/freelansim/allfiles/152/1520/1520307/acca35376b.png",
    nickname: "Alena",
};
