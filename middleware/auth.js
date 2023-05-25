const helpers = require('../helpers/auth-helpers')

const authenticated = (req, res, next) => {
  if (helpers.ensureAuthenticated(req)) {
    return next()
  }
  res.redirect('/signin')
}
const authenticatedAdmin = (req, res, next) => {
  if (helpers.ensureAuthenticated(req)) {
    if (helpers.getUser(req).isAdmin) return next()
    res.redirect('/')
  } else {
    res.redirect('/signin')
  }
}
const isUser = (req, res, next) => {
  const id = req.params.id
  const userId = req.user?.id || id
  const signInUserId = Number(id) === userId
  if (!signInUserId) {
    res.redirect('/')
  }
  return next()
}
module.exports = {
  authenticated,
  authenticatedAdmin,
  isUser
}
