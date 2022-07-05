//hmac file understanding, basically it is a json web token for cryptography
//hmac stands for = Hash-based Message Authentication Code

const {createHmac} = require('crypto')

const key = 'top-secret101'
const message = 'BAbestDeck'

const hmac = createHmac('sha256',key).update(message).digest('hex')
//very similar to the hash method yet, with a security method

console.log(hmac)

const key2 = 'not-so-secret-yet-unbreakable'

const hmac2 = createHmac('sha256',key2).update(message).digest('hex')
//now if we change the key, which is 100% arbitrary, we have a total different output
console.log(hmac2)



