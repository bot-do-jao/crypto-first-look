//first file for encrypting understanding
//encrypt is basically a form to criptograph a message but be able to revert it to a readable state again
//this methos will be the simmetric one

const {createCipheriv, randomBytes, createDecipheriv} = require('crypto')
//IV = initial vector

//cipher

const message = 'humm plastiquinho coisa boa'
const key = randomBytes(32)
const iv = randomBytes(16)
//this is to assure it will always produce a random hash

const cipher = createCipheriv('aes256', key, iv)
//aes = Advanced Encryption Standard
//the encryption is different than hashing, so the setup changes too

//encrypt

const encryptedMessage = cipher.update(message, 'utf-8', 'hex') + cipher.final('hex')

console.log(encryptedMessage)
//decrypt

const decipher = createDecipheriv('aes256',key,iv)
const decryptedMessage = decipher.update(encryptedMessage, 'hex', 'utf-8') + decipher.final('utf-8')

console.log(decryptedMessage)