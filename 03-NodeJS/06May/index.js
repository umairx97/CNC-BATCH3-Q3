const PORT = process.env.PORT || 3001
const config = require('./config')

require('./server')({
  port: config.PORT,
  cb: () => console.log(`SERVER RUNNING ON PORT ${PORT}`)
})
