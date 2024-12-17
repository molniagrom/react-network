import React from "react";
import {DialogItem} from "./DialogsItem";
import { MemoryRouter } from "react-router-dom";

export default {
    title: 'DialogItem',
    component: DialogItem,
    decorators: [
        (Story) => (
            <MemoryRouter>
                <Story />
            </MemoryRouter>
        ),
    ],
};

const Template = (args) => <DialogItem {...args} />;

const mockState = {
        dialogs: [
            {id: 1, name: 'Alena'},
            {id: 2, name: 'Emily'},
            {id: 3, name: 'Katya'},
            {id: 4, name: 'Yulia'},
            {id: 5, name: 'Ivan'},
            {id: 6, name: 'Masha'},
        ],
};

const singleElem = mockState.dialogs[0];

export const SingleChat = Template.bind({});
SingleChat.args = {
    name: singleElem.name,
    id: singleElem.id
};
