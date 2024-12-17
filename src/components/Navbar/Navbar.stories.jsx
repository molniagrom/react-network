import React from "react";
import {Navbar} from "./Navbar";
import {MemoryRouter} from "react-router-dom";

export default {
    title: 'Navbar',
    component: Navbar,
    decorators: [
        (Story) => (
            <MemoryRouter>
                <Story />
            </MemoryRouter>
        ),
    ],
};

const Template = (args) => <Navbar {...args} />;

const mockPost =
    [
        {
            id: 1,
            avatar: 'https://habrastorage.org/getpro/freelansim/allfiles/152/1520/1520307/acca35376b.png',
            nickname: 'Alena'
        },
        {
            id: 2,
            avatar: 'https://avatars.mds.yandex.net/get-shedevrum/11425623/img_02d4a166191b11efb76d9a79ffaf5bd2/orig',
            nickname: 'Emily'
        },
        {
            id: 3,
            avatar: 'https://img.freepik.com/premium-vector/young-man-anime-style-character-vector-illustration-design-manga-anime-boy_147933-4668.jpg',
            nickname: "Nastya"
        },
    ]


export const Default = Template.bind({});
Default.args = {
    state: mockPost
};
