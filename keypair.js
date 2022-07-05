//encrypting consisting of both a private and public key

const {generateKeyPairSync} = require('crypto')

//rsa = Rivest-Shamir-Adleman. it is used for creating theses paired keys
const {privateKey, publicKey} = generateKeyPairSync('rsa', {
    modulusLength: 2048, //the length of your key in bits
    publicKeyEncoding: {
        type: 'spki', //recommended to be 'spki' by the Node.js docs
        format: 'pem' //privacy enhanced mail, to show us the keys
    },
    privateKeyEncoding: {
        type: 'pkcs8', //recommended to be 'pkcs8' by the Node.js docs
        format: 'pem',
        //cipher: 'aes-256-cbc',
        //passphrase: 'top-secret'
    }
})

console.log(publicKey)
console.log(privateKey)

module.exports = {
    privateKey, publicKey
}