import React, {useState} from "react";
import {action} from "@storybook/addon-actions";
import {Accordion, AccordionPropsType} from './Accordion'
import {Story} from "@storybook/react";

const GetCategoryObj = (categoryName: 'Color' | 'Event' | 'Main') => ({
    table: {
        category: 'categoryName'
    }
})

export default {
    title: 'components/Accordion',
    component: Accordion,
    argTypes: {
        color: {
            control: 'color',
            ...GetCategoryObj('Color')
        },
        onChange: {
            ...GetCategoryObj('Event')
        },
        onClick: {
            ...GetCategoryObj('Event')
        },
        items:{...GetCategoryObj('Main')},
        collapsed:{...GetCategoryObj('Main')},
        titleValue:{...GetCategoryObj('Main')}
    }
};

const callback = action("accordion mode change event fired");
const onClickCallback = action("some item was clicked");

const Template: Story<AccordionPropsType> = (args) => <Accordion {...args}/>;
const callbacksProps = {
    onChange: callback,
    onClick: onClickCallback
}

export const MenuCollapsedMode = Template.bind({});
MenuCollapsedMode.args = {
    ...callbacksProps,
    titleValue: "Menu",
    collapsed: true,
    items: [],
}
export const UsersUncollapsedMode = Template.bind({});
UsersUncollapsedMode.args = {
    ...callbacksProps,
    titleValue: "Users",
    collapsed: false,
    items: [{title: "Dimych", value: 1},
        {title: "Valera", value: 2},
        {title: "Artem", value: 3},
        {title: "Viktor", value: 4}],
}

export const ModeChanging: Story<AccordionPropsType> = (args) => {
    const [value, setValue] = useState<boolean>(true);

    return <Accordion {...args} collapsed={value} onChange={() => setValue(!value)}/>
}
ModeChanging.args = {
    titleValue: "Users",

    items: [
        {title: "Dimych", value: 1},
        {title: "Valera", value: 2},
        {title: "Artem", value: 3},
        {title: "Viktor", value: 4}
    ],
    onClick: (value) => {
        alert('user with ID ${value} shold be happy')
    }
}