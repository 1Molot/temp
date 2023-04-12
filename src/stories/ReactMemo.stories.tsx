import React, {useState} from "react";

export default {
    title: 'React.memo demo',
};

const NewMessageCounter = (props: { count: number }) => {
    return <div>{props.count}</div>
}

const UsersSecret = (props: { users: Array<string> }) => {
    console.log('USERS')
    return (
        <div>
            {props.users.map((u, i) => <div key={i}>{u}</div>)}
        </div>
    )
}
const Users = React.memo(UsersSecret)

export const Example1 = () => {
    console.log("Example1");
    const [counter,setCounter] = useState(0)
    const [user,setUsers] = useState(['Dimych','Valera','Artem','Katya'])

    // const
}