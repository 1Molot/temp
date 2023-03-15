import React, {useState} from 'react';

type AccordionPropsType = {
    titleValue: string
    // collapsed: boolean
}

function UncontrolledAccordion(props: AccordionPropsType) {
    console.log("Accordion rendering")

    const collapsed = false;
    // let [on,setOn] = useState(false);

    return <div>
        <AccordionTitle title={props.titleValue}/> <button>TOGGLE</button>
        {!collapsed && <AccordionBody/>} //что бы  скукоживалось и раскукоживалось
    </div>
}

type AccordionTitlePropsType = {
    title: string
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("AccordionTitle rendering")
    return (
        <h3>{props.title}</h3>
    )
}

function AccordionBody() {
    console.log("AccordionBody rendering")
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>

}

export default UncontrolledAccordion;