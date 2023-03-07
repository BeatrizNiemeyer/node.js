
const os = require('os')

const user = os.userInfo()
console.log(user)

const currentOs = {
  name: os.type(),
  realease: os.release(),
  freeMem: os.freemem() 
}

console.log(currentOs)