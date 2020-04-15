const axios = require('axios')

axios.get('http://localhost:3001/signup')
  .then(res => console.log(res.data))
  .catch(err => console.log(err.message))
