import React, {useState} from 'react';

import './App.css';
import Accordion from './components/Accordion/Accordion';
import Rating, {RatingValueType} from './components/Rating/Rating';
import OnOff from "./components/OnOff/OnOff";
import UncontrolledAccordion from "./components/UncontrolledAccordion/UncontrolledAccordion";
import UncontrolledRating from "./components/UncontrolledRating/UncontrolledRating";
// import OnOff from './components/OnOff/OnOff'

// function sum(a: number, b: number) {

//   alert(a + b)
// }
// sum(23,12);
// sum(100,300);

function App(props: any) {
    console.log("App rendering")

    let [ratingValue,setRatingValue] = useState<RatingValueType>(4);
    let [accordionCollapsed,setAccordionCollapsed] = useState<boolean>(true);

    return (
        <div>
            <Rating value={ratingValue} onClick={setRatingValue}/>

            {/*<OnOff/>*/}
            {/*<UncontrolledAccordion titleValue={"Menu"} />*/}
            <UncontrolledRating />

            <Accordion titleValue={"Users"} collapsed={accordionCollapsed}/>
            {/*<Accordion titleValue={"Menu"} collapsed={true}/>*/}
            {/*<OnOff on={false}/>*/}
            {/*<OnOff on={true}/>*/}

            {/*<PageTitle title={"This is App component"} />*/}
            {/*<PageTitle title={"My friends"} />*/}
            {/*Article 1*/}


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




