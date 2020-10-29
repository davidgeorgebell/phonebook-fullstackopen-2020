export const getAllContacts = async () => {
    try {
        const res = await fetch('http://localhost:3001/phonebook')
        const data = await res.json()
        return data
    } catch (error) {
        return error
    }
}

export const createContact = async (contactObject) => {
    try {
        const res = await fetch('http://localhost:3001/phonebook', {
            method: 'POST',
            body: JSON.stringify(contactObject),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        const data = await res.json()
        return data
    } catch (error) {
        return error
    }
}

export const updateContact = async (id, updatedPerson) => {
    const res = await fetch(`http://localhost:3001/phonebook/${id}`, {
        method: 'PUT',
        body: JSON.stringify(updatedPerson),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    console.log(res)
    const data = await res.json()
    return data
}

export const removeContact = async (id) => {
    const res = await fetch(`http://localhost:3001/phonebook/${id}`, {
        method: 'DELETE'
    })
    const data = res.json()
    return data
}

