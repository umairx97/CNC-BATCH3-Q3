const PORT = process.env.PORT || 3001
const config = require('./config')

require('./db')({ MONGO_URI: config.MONGO_URI })
require('./server')({
  port: config.PORT,
  cb: () => console.log(`SERVER RUNNING ON PORT ${PORT}`)
})
