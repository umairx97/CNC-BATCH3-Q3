const PORT = process.env.PORT || 3001

require('./server')({
  port: PORT,
  cb: () => console.log(`SERVER RUNNING ON PORT ${PORT}`)
})
