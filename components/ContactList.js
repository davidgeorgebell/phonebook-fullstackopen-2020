import React from 'react'
import { Contact } from './Contact'

export const ContactList = ({ contactsToDisplay }) => {
    return (
        <ul>
            {contactsToDisplay.map(person => <Contact person={person} />)}
        </ul>
    )
}
