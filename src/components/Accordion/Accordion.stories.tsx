import React, {useState} from "react";
import {action} from "@storybook/addon-actions";
import {Accordion} from './Accordion'

export default {
    title: 'Accordion',
    component: Accordion,
};

const callback = action("accordion mode change event fired");

export const MenuCollapsedMode = () => <Accordion titleValue={"Menu"} collapsed={true} onChange={callback}/>
export const UsersUncollapsedMode = () => <Accordion titleValue={"Users"} collapsed={false} onChange={callback}/>


export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true);
    return <Accordion titleValue={"Users"} collapsed={value} onChange={() => setValue(!value)}/>
};

// const onClickCallback = action("some item was clicked");
//
// const Template: Story<AccordionPropsType> = (args) => <Accordion {...args}/>;
// const callbacksProps={
//     onChange: callback,
//     onClick: onClickCallback
// }
//
// export const MenuCollapsedMode = Template.bind({});
// MenuCollapsedMode.args = {
//     ...callbacksProps,
//     titleValue: "Menu",
//     collapsed: true,
//     items: [],
// }
//
// export const UsersUncollapsedMode = Template.bind({});
// UsersUncollapsedMode.args = {
//     ...callbacksProps,
//     titleValue: "Users",
//     collapsed: false,
//     items: [{title: "Dimych", value: 1}, {title: "Valera", value: 2},
//         {title: "Artem", value: 3}, {title: "Viktor", value: 4}],
// }
//
//
// export const ModeChanging = () => {
//     const [value, setValue] = useState<boolean>(true);
//
//     return <Accordion titleValue={"Users"} collapsed={value} onChange={() => setValue(!value)}
//                       items={[
//                           {title: "Dimych", value: 1},
//                           {title: "Valera", value: 2},
//                           {title: "Artem", value: 3},
//                           {title: "Viktor", value: 4}
//                       ]}
//                       onClick={(value) => {
//                           alert('user with ID ${value} shold be happy')
//                       }}/>
// };