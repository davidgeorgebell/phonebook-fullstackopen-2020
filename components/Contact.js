import React from 'react'

export const Contact = ({ person, deleteContact }) => {
    return (
        <li>
            <div>{person.name} {person.number} <button onClick={() => deleteContact(person.id, person.name)}>Delete</button></div>
        </li>
    )
}
