import { useState, useEffect } from 'react'
import { ContactList } from '../components/ContactList'
import { Filter } from '../components/Filter'
import { NewContactForm } from '../components/NewContactForm'
import { createContact, getAllContacts, removeContact } from '../services/phonebook'

const Home = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filteredName, setFilteredName] = useState('')

  useEffect(() => {
    getAllContacts().then(response => setPersons(response))
  }, [])

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
  const deleteContact = (id, name) => {
    if (window.confirm(`Delete ${name}?`)) {
      removeContact(id)
      setPersons(persons.filter(person => person.id !== id))
    }
  }

  const clearInput = () => {
    setNewName('')
    setNewNumber('')
  }

  const addContact = e => {
    e.preventDefault()

    const existingContact = persons.find(person => person.name === newName)

    if (existingContact) {
      window.alert(`${newName} is already in phonebook`)
    }
    else {

      const contactObject = {
        name: newName,
        number: newNumber,
        date: new Date().toISOString(),
      }
      createContact(contactObject).then(data => setPersons(persons => persons.concat(data)))

      clearInput()
    }
  }


  // const contactsToDisplay = persons.length && persons.filter(person => person.name.includes(filteredName))


  return (
    <div className='container mx-auto max-w-xl px-10 pt-20'>
      <h2 className='text-3xl font-bold'>Phonebook</h2>
      <Filter handleFilter={handleFilter} filteredName={filteredName} />
      <h3 className='bolder text-2xl'>Add a new contact</h3>
      <NewContactForm newName={newName} newNumber={newNumber} handleContactChange={handleContactChange} handleNumberChange={handleNumberChange} addContact={addContact} />
      <h3 className='bolder text-2xl'>Numbers</h3>
      {persons.length ? <ContactList persons={persons} deleteContact={deleteContact} /> : null}
    </div>
  )
}

export default Home