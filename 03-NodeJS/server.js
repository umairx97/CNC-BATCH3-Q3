const http = require('http')
const PORT = 3001

/**
 * @param  {Object} req - request object for client information
 * @param  {Object} res - response object for server information
 */
const requestHandler = (req, res) => {
  if (req.url.toLowerCase() === '/login') {
    res.end('You need to login')
  } else if (req.url.toLowerCase() === '/signup') {
    res.end('welcome to signup')
  } else {
    res.end('404 PAGE NOT FOUND')
  }
}

const server = http.createServer(requestHandler)

server.listen(PORT, () => {
  console.log('server is running on port 3001')
})
