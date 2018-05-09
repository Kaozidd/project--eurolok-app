exports.isUserAuthenticated = function(req, res, next) {
  if (req.user) {
    next()
  } else {
    res.json({
      error: 'Private Route'
    })
  }
}