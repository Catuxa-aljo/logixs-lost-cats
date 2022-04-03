const createError = require('http-errors');

module.exports.isAuthenticated = (req, res, next) => {
  if (req.user) {
      next()
  } else {
      next(createError(403, 'You need to be logged'))
  }
}

module.exports.isNotAuthenticated = (req, res, next) => {
    if (!req.user) {
        next()
    } else {
        next(createError(403, 'User is logged'))
    }
}


  