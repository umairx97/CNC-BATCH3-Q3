const uniqueId = (req, res, next) => {
  req.uniqueId = Math.round(Math.random(1) * 1000)
  next()
}

module.exports = {
  uniqueId
}
