//we'll use the paired keys generated here to actually encrypt things and read them

const {publicEncrypt, privateDecrypt} = require('crypto')
//importing the keys generated 
const {publicKey, privateKey} = require('./keypair')

const message = 'criptografia nem é tão difícil vai'

const encryptedData = publicEncrypt(
    publicKey,
    Buffer.from(message)
)

console.log(encryptedData.toString('hex'))

console.log("")

const decryptedData = privateDecrypt(
    privateKey,
    encryptedData
)

console.log(decryptedData.toString('utf-8'))