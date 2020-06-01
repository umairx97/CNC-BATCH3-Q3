// const bcrypt = require('bcrypt')
// const fs = require('fs')
// const path = require('path')
// const testJson = require('./test.json')

// const filePath = path.join(__dirname, 'test.json')

// const stream = fs.createReadStream(filePath)
// stream.on('data', (data) => console.log(data.toString()))
// stream.on('end', () => console.log('DATA TRANSFERRED'))
// stream.on('ready', () => console.log('Stream is ready to process'))

// fs.readFile(filePath, (err, data) => {
//   console.log(data.toString())
// })

// // $2b$04$IC14qP4LinssEcVJNTFJZeweAYpScsM4DOoI5vwD5X0INJuAPDcEO
// const myPassword = 'umair123'
// const hash = bcrypt.hashSync(myPassword, 1)

// const isMatch = bcrypt.compareSync('umair123', hash)
// console.log('MY HASH IS', hash)
// console.log('IS PASSWORD SAME', isMatch)

// const addNum = (a, b) => {
//   return a + b
// }

// // console.log(addNum(2, '3'))

// console.log(addNum(2, 3) === 5)
// console.log(addNum(4, 3) === 7)
// console.log(addNum(10, 3) === 13)
// console.log(addNum(10, '3') === '103')

