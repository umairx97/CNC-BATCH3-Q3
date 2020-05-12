const validator = require('validator')

const firstMiddleware = (req, res, next) => {
  if (!validator.default.isEmail(req.body.email)) {
    return res.send('Incorrect email')
  }
  next()
}

const secondMiddleware = (req, res, next) => {
  req.uniqueId = Math.round(Math.random(1) * 1000)
  next()
}

module.exports = {
  firstMiddleware,
  secondMiddleware
}
