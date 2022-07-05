//File to uderstand basic hash components

const {createHash} = require('crypto')

//create a string hash

function hash(input){
    return createHash("sha256").update(input).digest("hex")
    //sha256 = secure hash algorithm, a 256 bit digest output
    //digest is the output, for example it will be a 256bit hexadecimal message
}

//to compare two hashes

let password = "hi-mom!"
const hash1 = hash(password)
console.log(hash1)

const hash2 = hash(password)
const match = hash1 === hash2

console.log(match? "good password":"password doesn't match")
//asking if the match const has data, as it is a boolean const.
//if it has, it will print "good password"
//if it doesn't it will print that it doesn't match