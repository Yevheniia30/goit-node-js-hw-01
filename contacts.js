const path=require('path')
const fs = require('fs/promises')
const shortid = require('shortid')

const contactsPath = path.join('db','contacts.json')

// список контактов
async function listContacts() {
  try {
    const data = await fs.readFile(contactsPath)
    console.table(JSON.parse(data));
  } catch (error) {
  console.log(error.message);
  }
}

// найти контакт по id
async function getContactById(contactId) {
  try {
    const data = await fs.readFile(contactsPath)
    const contacts = JSON.parse(data)
    const contact = contacts.find(({ id }) => id === contactId)
    console.log(contact);
  } catch (error) {
    console.log(error.message);
    }
}

// удалить контакт по id
async function removeContact(contactId) {
try {
     const data = await fs.readFile(contactsPath)
    const contacts = JSON.parse(data)
    const updatedContacts = JSON.stringify(contacts.filter(({ id }) => id !== contactId), null, 2)
    await fs.writeFile(contactsPath, updatedContacts)
    console.table(JSON.parse(updatedContacts));
  } catch (error) {
    console.log(error.message);
  }
}

// добавить контакт
async function addContact(name, email, phone) {
  try {
    const data = await fs.readFile(contactsPath)
    const contacts = JSON.parse(data)
    if (!name || !email || !phone) {
      console.log('Please enter data')
      return
    }
    const newContact = { id: shortid.generate(), name, email, phone }
    const updatedContacts=JSON.stringify([...contacts, newContact], null, 2)
   await fs.writeFile(contactsPath, updatedContacts)
console.table(JSON.parse(updatedContacts));
  } catch (error) {
    console.log(error.message);
  }
}

module.exports = {
    listContacts,
    getContactById,
    removeContact,
    addContact,
}


