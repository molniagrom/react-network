import { Dialogs } from "./Dialogs";
import React from "react";
import { MemoryRouter } from "react-router-dom";

export default {
    title: 'Dialogs',
    component: Dialogs,
    decorators: [
        (Story) => (
            <MemoryRouter>
                <Story />
            </MemoryRouter>
        ),
    ],
};

const Template = (args) => <Dialogs {...args} />;

const mockState = {
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Alena'},
            {id: 2, name: 'Emily'},
            {id: 3, name: 'Katya'},
            {id: 4, name: 'Yulia'},
            {id: 5, name: 'Ivan'},
            {id: 6, name: 'Masha'},
        ],
        messages: [
            {id: 1, message: 'Hi', isMine: true},
            {id: 2, message: 'How are you?', isMine: false},
            {id: 3, message: 'Cool! How about you?', isMine: true},
            {id: 4, message: 'That\'s fine, too', isMine: false},
        ]
    },
};

export const GeneralViewOfTheDialog = Template.bind({});
GeneralViewOfTheDialog.args = {
    state: mockState.dialogsPage,
};
