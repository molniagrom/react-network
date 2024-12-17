import React from "react";
import {Message} from "./Message";
import "./../Dialogs.module.css"

export default {
    title: 'Message',
    component: Message,
};

const Template = (args) => <Message {...args} />;

const mockState = {
        messages: [
            {id: 1, message: 'Hi', isMine: true},
            {id: 2, message: 'How are you?', isMine: false},
            {id: 3, message: 'Cool! How about you?', isMine: true},
            {id: 4, message: 'That\'s fine, too', isMine: false},
        ]
};

const singleMessagesRight = mockState.messages[0];
const singleMessagesLeft = mockState.messages[1];

export const OneMessageRight = Template.bind({});
OneMessageRight.args = {
    message: singleMessagesRight.message,
    isMine: singleMessagesRight.isMine
};

export const OneMessageLeft = Template.bind({});
OneMessageLeft.args = {
    message: singleMessagesLeft.message,
    isMine: singleMessagesLeft.isMine
};
