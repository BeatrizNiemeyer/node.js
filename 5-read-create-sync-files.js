//creating and writing files
const {readFileSync, writeFileSync} = require('fs')
const { syncBuiltinESMExports } = require('module')

const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

console.log(first)
console.log(second)

//creating a file
writeFileSync(
    './content/result-sync.txt',
    `This is the result: ${first} and ${second}`
)