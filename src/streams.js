// data end to end
// streams types: read, write, duplex
// big files

'use strict'

// __dirname
const file = 'src/samples/myFile.csv'
const fs = require('fs')

let readableStream = fs.createReadStream(file)
readableStream.setEncoding('UTF8')

//option 1
let data = ''
readableStream.on('data', chunk => {
    data += chunk
})

readableStream.on('end', () => {
    console.log(data)
})