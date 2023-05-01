import React, {useMemo, useState, useEffect} from "react";

export default {
    title: 'useEffect demo',  //hooks demo/
}

export const SimpleExample = () => {
    const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState(1)

    console.log('SimpleExample')

    useEffect(() => {
        console.log('useEffect every render')
        document.title = counter.toString()
    }) //перезапускается всегда(зарегистрированный эффект(useEffect) после отрисовки JSX)

    useEffect(() => {
        console.log('useEffect only first render (componentDidMount)')
        document.title = counter.toString()
    }, []) // срабатывает один раз

    useEffect(() => {
        console.log('useEffect first render and every counter change')
        document.title = counter.toString()
    }, [counter]) // срабатывает один раз // при изменении counter

    return (                                                // JSX
        <>
            Hello, {counter} {fake}
            <button onClick={() => setFake(fake + 1)}>fake+</button>
            <button onClick={() => setCounter(counter + 1)}>counter+</button>
        </>
    )
}

export const SetTimeoutExample = () => {
    // const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState(1)

    console.log('SetTimeoutExample')

    // useEffect(() => {
    //
    //     setTimeout(() => {
    //         console.log('setTimeout')
    //         document.title = counter.toString();
    //     },1000);
    //
    // },[counter]) //odin paz [],[counter] (при изменении count)

    useEffect(() => {

        setInterval(() => {
            // console.log('tick: ' + counter)
            setCounter(state => state + 1);
        }, 1000);

    }, []) //[] - не регистрирует нет зависимостей( [] )

    return (                                                // JSX
        <>
            Hello, counter: {counter}
            {/*- fake: {fake}*/}
            {/*<button onClick={() => setFake(fake + 1)}>fake+</button>*/}
            {/*<button onClick={() => setCounter(counter + 1)}>counter+</button>*/}
        </>
    )
}
