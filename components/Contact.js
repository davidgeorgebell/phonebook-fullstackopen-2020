import React from 'react'

export const Contact = ({ person }) => {
    return (
        <li key={person.id}>
            <div>{person.name} {person.number}</div>
        </li>
    )
}
