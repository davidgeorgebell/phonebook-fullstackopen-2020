import { useState } from 'react'
import { ContactList } from '../components/ContactList'
import { Filter } from '../components/Filter'
import { NewContactForm } from '../components/NewContactForm'

const Home = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: 11140040, id: 1 },
    { name: 'Mario', number: 1235959, id: 2 },
    { name: 'John Wick', number: 111020202, id: 3 },
    { name: 'Princess Peach', number: 202020, id: 4 },
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filteredName, setFilteredName] = useState('')

  const handleContactChange = e => {
    e.preventDefault()
    setNewName(e.target.value)
  }
  const handleNumberChange = e => {
    e.preventDefault()
    setNewNumber(e.target.value)
  }

  const handleFilter = e => {
    e.preventDefault()
    setFilteredName(e.target.value)
  }

  const clearInput = () => {
    setNewName('')
    setNewNumber('')
  }

  const addContact = e => {
    e.preventDefault()

    const existingContact = persons.find(person => person.name.toLowerCase() === newName.toLocaleLowerCase())

    if (existingContact) {
      window.alert(`${newName} is already in phonebook`)
    }
    else {
      const contactObject = {
        name: newName,
        number: newNumber,
        date: new Date().toISOString(),
        id: persons.length + 1,
      }
      setPersons(persons.concat(contactObject))
      clearInput()
    }
  }


  const contactsToDisplay = persons.filter(person => person.name.toLocaleLowerCase().includes(filteredName))


  return (
    <div className='container mx-auto max-w-xl px-10 pt-20'>
      <h2 className='text-3xl font-bold'>Phonebook</h2>
      <Filter handleFilter={handleFilter} filteredName={filteredName} />
      <h3 className='bolder text-2xl'>Add a new contact</h3>
      <NewContactForm newName={newName} newNumber={newNumber} handleContactChange={handleContactChange} handleNumberChange={handleNumberChange} addContact={addContact} />
      <h3 className='bolder text-2xl'>Numbers</h3>
      <ContactList contactsToDisplay={contactsToDisplay} />
    </div>
  )
}

export default Home