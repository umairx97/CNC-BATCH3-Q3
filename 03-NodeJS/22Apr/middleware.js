const firstMiddleware = (req, res, next) => {
  console.log('FIRST MIDDLEWARE WAS CALLED')
  next()
}

const secondMiddleware = (req, res, next) => {
  console.log('SECOND MIDDLEWARE WAS CALLED')
  req.uniqueId = Math.round(Math.random(1) * 1000)
  next()
}

module.exports = {
  firstMiddleware,
  secondMiddleware
}
