import Head from 'next/head'
import { useState } from 'react'


import { TextField } from '../components/TextField'

// Use shortcut rh to create a typescript functional component

const Home: React.FC = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', id: 1 }
  ])
  const [newName, setNewName] = useState('')

  const handleContactChange = e => {
    e.preventDefault()
    setNewName(e.target.value)
  }

  const addContact = e => {
    e.preventDefault()
    const contactObject = {
      name: newName,
      date: new Date().toISOString(),
      id: persons.length + 1,
    }
    setPersons(persons.concat(contactObject))
    setNewName('')
  }

  return (
    <div className='container mx-auto max-w-xl px-10 pt-20'>
      <h2>Phonebook</h2>
      <form onSubmit={addContact}>
        <div>
          name: <input value={newName} onChange={handleContactChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2 className='bolder text-2xl'>Numbers</h2>
      <ul>
        {persons.map(person => <li key={person.id}>{person.name}</li>)}
      </ul>
    </div>
  )
}

export default Home