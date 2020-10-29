import React from 'react'
import { Contact } from './Contact'

export const ContactList = ({ persons, deleteContact }) => {
    return (
        persons.length ?
            <ul>
                {persons.map(person => <Contact key={person.id} deleteContact={deleteContact} person={person} />)}
            </ul> : <h1>Loading contacts</h1>
    )
}
