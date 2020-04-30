require('dotenv').config()
console.log("MY NODE ENV IS", process.env.NODE_ENV)
console.log('MY PASSWORD IS ', process.env.MY_PASSWORD)

module.exports = {
  NODE_ENV: process.env.NODE_ENV || 'development',
  MY_PASSWORD: process.env.MY_PASSWORD || '123456',
  PORT: process.env.PORT || 3001
}