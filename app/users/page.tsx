import React from 'react'

interface User {
    id: number;
    name: string;
}

const users = async () => {
    const result = await fetch('https://jsonplaceholder.typicode.com/users');
    const users: User[] = await result.json();
    return (
        <>
            <ul>
                {users.map(user => <li key={user.id}>{user.name}</li>)}
            </ul>
        </>
    )
}

export default users