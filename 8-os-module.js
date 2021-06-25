<<<<<<< HEAD
const os = require('os')

//info about current user 
const user = os.userInfo()
console.log(user)

//method returns the system uptime in seconds
console.log(`The system uptime is ${os.uptime()} seconds`)

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}
console.log(currentOS);
=======
const os = require('os')

//info about current user 
const user = os.userInfo()
console.log(user)

//method returns the system uptime in seconds
console.log(`The system uptime is ${os.uptime()} seconds`)

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}
console.log(currentOS);
>>>>>>> dc24a9d1083b2435d1b852c258555dc67b4a4a3a
