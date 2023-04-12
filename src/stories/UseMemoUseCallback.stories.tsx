import React, {useCallback, useMemo, useState} from "react";
//
// export default {
//     title: 'hooks demo/useMemo'
// }
//
// export const DifficultCountingExample = () => {
//
//     const [a, setA] = useState<number>(5)
//     const [b, setB] = useState<number>(5)
//
//     let resultA = 1
//     let resultB = 1
//
//     resultA = useMemo(() => {
//         let tempResultA = 1
//         for (let i = 1; i <= a; i++) {
//             let fake = 0
//             while (fake < 100000000) {
//                 fake++
//                 const fakeValue = Math.random()
//             }
//             tempResultA = tempResultA * i
//         }
//         return tempResultA
//     }, [a])
//
//     for (let i = 1; i <= b; i++) {
//         resultB = resultB * i
//     }
//
//
//     const newArray = useMemo(() => {
//         const newArray = users.filter(u => u.toLowerCase().indexOf('a') > 1)
//         return newArray
//     }, [users])
//
//     const addUser = () => {
//         const newUsers = [...users, 'Sveta' + new Data().getTime()]
//         setUsers(newUsers)
//     }
//
//     return (
//         <>
//             <button onClick={() => setCounter(counter + 1)}>+</button>
//             <button onClick={() => addUser()}>add user</button>
//         </>
//     )
// }
//
// export const LikeUseCallback = () => {
//     console.log('LikeUseCallback')
//     const [counter, setCounter] = useState(0)
//     const [books, setBooks] = useState(['React', 'JS', 'CSS', 'HTML'])
//
//     const memoizedAddBook = useMemo(() => {
//         return () => {
//             console.log(books)
//             newUsers = [...books, 'Angular' + new Date().getTime()]
//             setBooks(newUsers)
//         }
//     }, [books])
// }
//
// const memoizedAddBook2 = useCallback(() => {
//     console.log(books)
//     newUsers = [...books, 'Angular' + new Date().getTime()]
//     setBooks(newUsers)
// }, [books])
//
// return (
//     <>
//         <button onClick={() => setCounter(counter + 1)}>+</button>
//         {Counter}
//         <Book addBook={memoizedAddBook2}/>
//     </>
// )
//
// type BookSecretPropsType = {
//     addBook: () => void
// }
// const BooksSecret = (props: BookSecretPropsType) => {
//     console.log('BooksSecret')
//     return (
//         <div>
//             <button onClick={() => props.addBook()}>add book</button>
//         </div>
//     )
// }
//
// const Book = React.memo(BooksSecret)