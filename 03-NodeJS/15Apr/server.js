const express = require('express');

const app = express();
app.use(express.json())

app.get('/', (req, res) => {
  res.send({ name: 'umair' })
})

app.get('/signup', (req,res) => {
  res.send('welcome to signup')
})

app.post('/login', (req ,res) => {
  const { username, password } = req.body
  res.send(`your username is ${username} and password is ${password}`)
})


app.listen(3001, () => console.log('server is running on port 3001'))