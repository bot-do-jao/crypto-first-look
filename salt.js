//salt understanding file
//salt is a method of hashin that doensn't always give the same output, as it giver a random "salt" to it

//this file is junt an example, it's not part of a web app with a server or a database

const {scryptSync, randomBytes, timingSafeEqual} = require("crypto")

function signup(email, password) {
    const salt = randomBytes(16).toString('hex')
    //generate a random number of hexadecimal bytes before hashing it, making it less predictable
    const hashedPassword = scryptSync(password, salt, 64)
    //actual hashing part, makes it harder to decrypt with brute force
    //can be used for proof of work in cryptos

    const user = {email, password: `${salt}:${hashedPassword}`}
    
    users.push(user)

    return user
    //sending back the user with the hashed password with the random "salt"
}

function login(email, password) {
    const user = users.find(v => v.email === email)
    //basic auth method finding the email in the database
    const [salt, key] = user.password.split(':')
    //splitting the password back in ${salt}:${hashedPassword}
    const hashedBuffer = scryptSync(password, salt, 64)
    //not sure but hashin the input to be able to compare
    const keyBuffer = Buffer.from(key, "hex")
    const match = timingSafeEqual(hashedBuffer, keyBuffer)
    //actual matching part

    if (match) {
        return "Login success!"
    } else {
        return "Login fail!"
    }

}