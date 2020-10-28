import React from 'react'


export const NewContactForm = ({ addContact, newName, handleContactChange, handleNumberChange, newNumber }) => {
    return (<form onSubmit={addContact}>

        <div>
            name: <input value={newName} onChange={handleContactChange} />
        </div>
        <div>
            number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
            <button type="submit">add</button>
        </div>
    </form>);
}