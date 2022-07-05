//file to understand signing in criptography, in this case
//we'll continue to use the keys made with the keypairs

const {createSign, createVerify} = require('crypto')

const {publicKey, privateKey} = require('./keypair')

const message = "trust me I'm worth it"

//sign

const signer = createSign('rsa-sha256')

signer.update(message)

const signature = signer.sign(privateKey, 'hex')

//verify

const verifier = createVerify('rsa-sha256')

verifier.update(message)

const isVerified = verifier.verify(publicKey, signature, 'hex')

console.log(isVerified? 'YES':'NOOOOO')