require('dotenv').config()

console.log('process.env.NODE_ENV================', process.env.NODE_ENV)
console.log('process.env.PORT================', process.env.PORT)
console.log('process.env.MONGO_URI================', process.env.MONGO_URI)

module.exports = {
  NODE_ENV: process.env.NODE_ENV || 'development',
  PORT: process.env.PORT || 3001,
  MONGO_URI: process.env.MONGO_URI || 'mongodb://localhost:27017/CNC'
}
