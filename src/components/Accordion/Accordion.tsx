import React from 'react';

type ItemType = {
    title: string
    value: any
}

export type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onChange: () => void
    items: ItemType[]
    onClick: (value: any) => void

}

export function Accordion(props: AccordionPropsType) {
    console.log("Accordion rendering")

    return <div>
        <AccordionTitle title={props.titleValue} onChange={props.onChange}/>
        {!props.collapsed && <AccordionBody items={props.items} onClick={props.onClick}/>}
    </div>
}

type AccordionTitlePropsType = {
    title: string
    onChange: () => void
}

export function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("AccordionTitle rendering")
    return (
        <h3 onClick={(e) => props.onChange()}>-- {props.title} --</h3>
    )
}

export function AccordionBody() {
    console.log("AccordionBody rendering")
    return (
        <ul>
            <li>
                {props.items.map((i,index)=> <li onClick={()=> {props.onClick(i.value)}} key={index}>{i.title}</li> )}
            </li>
            {/*<li>1</li>*/}
            {/*<li>2</li>*/}
            {/*<li>3</li>*/}
        </ul>
    )
}

// export default Accordion;