import React from "react";
import { Header } from "./Header";
import s from "./Header.module.css";

export default {
    title: 'Header',
    component: Header,
};

const Template = (args) => <Header {...args} />;


export const Default = Template.bind({});
Default.args = {};
