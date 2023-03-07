
const SECRET = 'SECRET'
const john = 'John'
const peter = 'Peter'

module.exports = {john, peter}

console.log(module)


/*
Or we can do it like this:
module.exports.john = 'John'

or 

module.exports.person = john
*/


/*
if you have a function that you envocked in this file, you dont even need to use 
module.exports, you can just require the file on '2-module' and it will work
*/