import React from 'react';

import './App.css';
import Accordion from './components/Accordion/Accordion';
import Rating from './components/Rating/Rating';
import OnOff from "./components/OnOff/OnOff";
import UncontrolledAccordion from "./components/UncontrolledAccordion/UncontrolledAccordion";
// import OnOff from './components/OnOff/OnOff'

// function sum(a: number, b: number) {

//   alert(a + b)
// }
// sum(23,12);
// sum(100,300);

function App(props: any) {
    console.log("App rendering")
    return (
        <div>
            <OnOff/>
            <OnOff/>
            <OnOff/>
            <OnOff/>
            <UncontrolledAccordion titleValue={"Menu"} />
            <UncontrolledAccordion titleValue={"Users"} />
            <Rating value={1} />

            {/*<OnOff on={false}/>*/}
            {/*<OnOff on={true}/>*/}

            {/*<PageTitle title={"This is App component"} />*/}
            {/*<PageTitle title={"My friends"} />*/}
            {/*Article 1*/}
            {/*<Rating value={3} />*/}
            {/*<Accordion titleValue={"Menu"} collapsed={true}/>*/}
            {/*<Accordion titleValue={"Users"} collapsed={false}/>*/}
            {/*Article 2*/}
            {/*<Rating value={0} />*/}
            {/*<Rating value={1} />*/}
            {/*<Rating value={2} />*/}
            {/*<Rating value={3} />*/}
            {/*<Rating value={4} />*/}
            {/*<Rating value={5} />*/}

        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    console.log("PageTitle rendering")
    return <h1>{props.title}</h1>
}


export default App;




