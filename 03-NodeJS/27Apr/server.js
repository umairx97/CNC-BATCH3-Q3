const express = require('express')
const app = express();
const jwt = require('jsonwebtoken');

const PORT = process.env.PORT || 3001

app.use((req, res, next) => {
  try {
    console.clear();
    console.log('REQ HEADERS', req.headers)

    // create token
    // const token = jwt.sign({ name: 'umair' }, 'mySecret', {
    //   expiresIn: '24hr'
    // })
    const token = req.headers.authorization

    // // decoding token
    const decodedToken = jwt.verify(token, 'mySecret')
    req.username = decodedToken.name
    next();
  } catch (err) {
    res.send({ error: err.message || 'Server Error, Please try again' })
  }

})

app.get('/', (req, res) => res.send('Welcome to express server'))

app.get('/health', (req, res) => {
  res.send({
    message: "OK",
    uptime: process.uptime(),
    platform: process.platform,
    cpu: process.cpuUsage(),
    status: "200"
  })
})

app.get("/user", (req, res) => {
  res.send(`User route was accessed on ${new Date().toDateString()} by ${req.username}`)

})

app.listen(PORT, () => console.log('SERVER IS RUNNING ON PORT 3001'))