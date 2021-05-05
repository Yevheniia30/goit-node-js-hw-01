// не работает import

// Сделай импорт модулей fs и path для работы с файловой системой
// import path from 'path'
// import fs from 'fs'
const path=require('path')
const fs = require('fs')

console.log('hi contacts');

// Создай переменную contactsPath и запиши в нее путь к файле contacts.json. Для составления пути ипользуй методы модуля path.
const contactsPath = ''

// TODO: задокументировать каждую функцию
function listContacts() {
  // ...твой код
}

function getContactById(contactId) {
  // ...твой код
}

function removeContact(contactId) {
  // ...твой код
}

function addContact(name, email, phone) {
  // ...твой код
}


// examples

// fs.mkdir(path.join(__dirname, 'test-02'), (err) => {
//     if (err) {
//         throw err
//     }

//     console.log('folder created');
// })



// console.log(path.extname('index.html'));


