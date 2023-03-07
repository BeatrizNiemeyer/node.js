//creating and writing files
const {readFile, writeFile} = require('fs')

//callback call
readFile('./content/first.txt', 'utf8', (err,result) =>{
    if(err) {
        console.log(err)
        return
    }
    const first = result;
    readFile('./content/second.txt', 'utf8', (err,result) =>{
        if(err) {
            console.log(err)
            return
        }
        const second = result;
        writeFile(
            './content/result-async.txt',
            `This is the second file that i write`,
            (err,result) =>{
                if(err) {
                    console.log(err)
                    return
                }
                console.log(result)
            }
        )
    })
})