require('dotenv').config()

module.exports = {
  NODE_ENV: process.env.NODE_ENV || 'development',
  MY_PASSWORD: process.env.MY_PASSWORD || '123456',
  PORT: process.env.PORT || 3001
}
